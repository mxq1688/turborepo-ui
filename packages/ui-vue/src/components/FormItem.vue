<template>
  <div :class="itemClasses">
    <!-- 标签 -->
    <label v-if="label" :class="labelClasses" :style="labelCol">
      {{ label }}
    </label>
    
    <!-- 控件包装 -->
    <div :class="wrapperClasses" :style="wrapperCol">
      <div :class="controlClasses">
        <slot 
          :value="value"
          :onChange="handleChange"
          :onBlur="handleBlur"
          :disabled="form?.disabled || disabled"
          :size="size || form?.size"
          :status="finalValidateStatus"
        />
        
        <!-- 反馈图标 -->
        <div v-if="hasFeedback && finalValidateStatus" class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg v-if="finalValidateStatus === 'error'" class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
          <svg v-else-if="finalValidateStatus === 'success'" class="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <svg v-else-if="finalValidateStatus === 'warning'" class="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
          <svg v-else-if="finalValidateStatus === 'validating'" class="h-5 w-5 text-blue-500 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      </div>
      
      <!-- 帮助文本和错误信息 -->
      <div v-if="help || hasError" class="mt-1 text-sm">
        <span v-if="hasError" class="text-red-600">{{ error }}</span>
        <span v-else-if="help" class="text-gray-500">{{ help }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import { combineClasses } from '@ui-lib/shared'
import type { FormRule } from './Form.vue'

interface FormItemProps {
  name?: string
  label?: string
  rules?: FormRule[]
  required?: boolean
  help?: string
  validateStatus?: 'success' | 'warning' | 'error' | 'validating'
  hasFeedback?: boolean
  labelCol?: { span?: number; offset?: number }
  wrapperCol?: { span?: number; offset?: number }
  disabled?: boolean
  size?: 'small' | 'middle' | 'large'
  className?: string
}

const props = withDefaults(defineProps<FormItemProps>(), {
  rules: () => [],
  required: false,
  hasFeedback: false
})

// 注入表单上下文
const form = inject('formContext') as any

// 获取当前状态
const value = computed(() => props.name ? form?.values[props.name] : undefined)
const error = computed(() => props.name ? form?.errors[props.name] : undefined)
const touched = computed(() => props.name ? form?.touched[props.name] : false)
const hasError = computed(() => error.value && touched.value)

// 确定最终验证状态
const finalValidateStatus = computed(() => {
  return props.validateStatus || (hasError.value ? 'error' : undefined)
})

// 事件处理
const handleChange = (newValue: any) => {
  if (props.name && form) {
    form.setFieldValue(props.name, newValue)
    
    // 根据触发条件验证
    if (form.validateTrigger === 'onChange') {
      form.validateField(props.name, props.rules)
    }
  }
}

const handleBlur = () => {
  if (props.name && form) {
    form.setFieldTouched(props.name, true)
    
    // 根据触发条件验证
    if (form.validateTrigger === 'onBlur') {
      form.validateField(props.name, props.rules)
    }
  }
}

// 样式类
const itemClasses = computed(() => {
  return combineClasses(
    'form-item',
    form?.layout === 'vertical' && 'flex flex-col space-y-1',
    form?.layout === 'horizontal' && 'flex items-start space-x-4',
    form?.layout === 'inline' && 'flex items-center space-x-2',
    props.className
  )
})

const labelClasses = computed(() => {
  return combineClasses(
    'form-item-label',
    'text-sm font-medium',
    hasError.value ? 'text-red-600' : 'text-gray-700',
    props.required && "after:content-['*'] after:text-red-500 after:ml-1",
    form?.layout === 'horizontal' && 'min-w-0 flex-shrink-0',
    form?.layout === 'vertical' && 'mb-1'
  )
})

const wrapperClasses = computed(() => {
  return combineClasses(
    'form-item-wrapper',
    'flex-1 min-w-0',
    form?.layout === 'vertical' && 'w-full'
  )
})

const controlClasses = computed(() => {
  return combineClasses(
    'form-item-control',
    'relative',
    props.hasFeedback && hasError.value && 'pr-8'
  )
})
</script>

<style scoped>
/* 如果需要组件特定的样式，可以在这里添加 */
</style> 