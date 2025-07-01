<template>
  <form
    :class="formClasses"
    :style="style"
    @submit.prevent="handleSubmit"
  >
    <slot />
  </form>
</template>

<script setup lang="ts">
import { provide, ref, reactive, computed, onMounted } from 'vue'
import { combineClasses } from '@ui-lib/shared'

// 类型定义
export interface FormRule {
  required?: boolean
  message?: string
  min?: number
  max?: number
  pattern?: RegExp
  validator?: (value: any, values: Record<string, any>) => string | null
}

export interface FormProps {
  layout?: 'horizontal' | 'vertical' | 'inline'
  labelCol?: { span?: number; offset?: number }
  wrapperCol?: { span?: number; offset?: number }
  size?: 'small' | 'middle' | 'large'
  disabled?: boolean
  initialValues?: Record<string, any>
  validateTrigger?: 'onChange' | 'onBlur' | 'onSubmit'
  preserve?: boolean
  className?: string
  style?: Record<string, any>
}

const props = withDefaults(defineProps<FormProps>(), {
  layout: 'vertical',
  size: 'middle',
  disabled: false,
  initialValues: () => ({}),
  validateTrigger: 'onChange',
  preserve: true
})

// Emits定义
const emit = defineEmits<{
  finish: [values: Record<string, any>]
  finishFailed: [errorInfo: any]
  valuesChange: [changedValues: Record<string, any>, allValues: Record<string, any>]
}>()

// 状态管理
const values = reactive<Record<string, any>>({ ...props.initialValues })
const errors = reactive<Record<string, string>>({})
const touched = reactive<Record<string, boolean>>({})

// 验证函数
function validateValue(value: any, rules: FormRule[], allValues: Record<string, any>): string | null {
  for (const rule of rules) {
    // 必填验证
    if (rule.required && (value === undefined || value === null || value === '')) {
      return rule.message || '此字段为必填项'
    }

    // 如果值为空且不是必填，跳过其他验证
    if (value === undefined || value === null || value === '') {
      continue
    }

    // 最小长度验证
    if (rule.min !== undefined) {
      if (typeof value === 'string' && value.length < rule.min) {
        return rule.message || `最少输入 ${rule.min} 个字符`
      }
      if (typeof value === 'number' && value < rule.min) {
        return rule.message || `数值不能小于 ${rule.min}`
      }
    }

    // 最大长度验证
    if (rule.max !== undefined) {
      if (typeof value === 'string' && value.length > rule.max) {
        return rule.message || `最多输入 ${rule.max} 个字符`
      }
      if (typeof value === 'number' && value > rule.max) {
        return rule.message || `数值不能大于 ${rule.max}`
      }
    }

    // 正则验证
    if (rule.pattern && typeof value === 'string' && !rule.pattern.test(value)) {
      return rule.message || '格式不正确'
    }

    // 自定义验证器
    if (rule.validator) {
      const error = rule.validator(value, allValues)
      if (error) {
        return error
      }
    }
  }

  return null
}

// 设置字段值
const setFieldValue = (name: string, value: any) => {
  const oldValue = values[name]
  values[name] = value

  // 触发变化回调
  emit('valuesChange', { [name]: value }, { ...values })
}

// 设置字段错误
const setFieldError = (name: string, error: string) => {
  errors[name] = error
}

// 设置字段触摸状态
const setFieldTouched = (name: string, isTouched: boolean) => {
  touched[name] = isTouched
}

// 验证单个字段
const validateField = (name: string, rules: FormRule[]) => {
  const value = values[name]
  const error = validateValue(value, rules, values)
  
  if (error) {
    setFieldError(name, error)
  } else {
    delete errors[name]
  }
}

// 提交表单
const submit = () => {
  // 标记所有字段为已触摸
  const fieldNames = Object.keys(values)
  fieldNames.forEach(name => {
    touched[name] = true
  })

  // 检查是否有错误
  const hasErrors = Object.keys(errors).length > 0

  if (hasErrors) {
    emit('finishFailed', { values, errors })
  } else {
    emit('finish', { ...values })
  }
}

const handleSubmit = () => {
  submit()
}

// 样式类
const formClasses = computed(() => {
  return combineClasses(
    'w-full',
    props.layout === 'inline' && 'flex flex-wrap items-center gap-4',
    props.className
  )
})

// 表单上下文
const formContext = {
  layout: props.layout,
  size: props.size,
  disabled: props.disabled,
  labelCol: props.labelCol,
  wrapperCol: props.wrapperCol,
  values,
  errors,
  touched,
  validateTrigger: props.validateTrigger,
  setFieldValue,
  setFieldError,
  setFieldTouched,
  validateField,
  submit
}

// 提供上下文
provide('formContext', formContext)

// 初始化
onMounted(() => {
  Object.assign(values, props.initialValues)
})
</script>

<style scoped>
/* 如果需要组件特定的样式，可以在这里添加 */
</style> 