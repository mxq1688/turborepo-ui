<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Button 按钮</h1>
      <p class="text-lg text-gray-600">按钮用于开始一个即时操作。</p>
    </div>

    <div class="space-y-8">
      <div>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">何时使用</h2>
        <ul class="text-gray-600 space-y-2">
          <li>• 标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</li>
          <li>• 在 Vue 组件库中提供了四种按钮类型。</li>
          <li>• 主按钮：用于主行动点，一个操作区域只能有一个主按钮。</li>
          <li>• 默认按钮：用于没有主次之分的一组行动点。</li>
          <li>• 描边按钮：用于次要的行动点。</li>
          <li>• 幽灵按钮：用于最次级的行动点。</li>
        </ul>
      </div>

      <ExampleBlock
        title="按钮类型"
        description="按钮有四种类型：主按钮、次按钮、描边按钮和幽灵按钮。主按钮在同一个操作区域最多出现一次。"
        :code="buttonTypesCode"
      >
        <div class="space-x-2 flex flex-wrap gap-2">
          <Button variant="primary" @click="() => showMessage('主按钮')">主按钮</Button>
          <Button variant="secondary" @click="() => showMessage('次按钮')">次按钮</Button>
          <Button variant="outline" @click="() => showMessage('描边按钮')">描边按钮</Button>
          <Button variant="ghost" @click="() => showMessage('幽灵按钮')">幽灵按钮</Button>
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="按钮尺寸"
        description="按钮有大、中、小三种尺寸。通过设置 size 为 lg md sm 分别把按钮设为大、中、小尺寸。若不设置 size，则尺寸为中。"
        :code="buttonSizesCode"
      >
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <Button size="lg">大按钮</Button>
            <Button size="md">中按钮</Button>
            <Button size="sm">小按钮</Button>
          </div>
          <div class="flex items-center space-x-2">
            <Button variant="outline" size="lg">大按钮</Button>
            <Button variant="outline" size="md">中按钮</Button>
            <Button variant="outline" size="sm">小按钮</Button>
          </div>
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="按钮状态"
        description="按钮的禁用状态。"
        :code="buttonDisabledCode"
      >
        <div class="space-y-4">
          <div class="space-x-2">
            <Button>正常按钮</Button>
            <Button :disabled="true">禁用按钮</Button>
          </div>
          <div class="space-x-2">
            <Button variant="outline">正常按钮</Button>
            <Button variant="outline" :disabled="true">禁用按钮</Button>
          </div>
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="加载中状态"
        description="点击按钮后进入加载状态，可以避免用户重复点击。"
        :code="buttonLoadingCode"
      >
        <div class="space-x-2">
          <Button 
            @click="handleLoadingClick" 
            :disabled="loading"
          >
            {{ loading ? '加载中...' : '点击加载' }}
          </Button>
          <Button 
            variant="outline"
            @click="handleLoadingClick2" 
            :disabled="loading2"
          >
            {{ loading2 ? '提交中...' : '提交表单' }}
          </Button>
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="图标按钮"
        description="当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。"
        :code="buttonIconCode"
      >
        <div class="space-x-2 flex flex-wrap gap-2">
          <Button>
            <span class="mr-2">📁</span>
            文件夹
          </Button>
          <Button variant="outline">
            <span class="mr-2">📝</span>
            编辑
          </Button>
          <Button variant="ghost">
            <span class="mr-2">🗑️</span>
            删除
          </Button>
          <Button size="sm">
            <span class="mr-1">+</span>
            新建
          </Button>
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="按钮组合"
        description="可以将多个 Button 放入 div 容器中。"
        :code="buttonGroupCode"
      >
        <div class="space-y-4">
          <div class="flex space-x-2">
            <Button>左侧按钮</Button>
            <Button variant="outline">中间按钮</Button>
            <Button variant="outline">右侧按钮</Button>
          </div>
          <div class="flex space-x-2">
            <Button size="sm">保存</Button>
            <Button variant="outline" size="sm">取消</Button>
          </div>
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="危险按钮"
        description="删除/移动/修改权限等危险操作，一般需要二次确认。"
        :code="buttonDangerCode"
      >
        <div class="space-x-2">
          <Button @click="showConfirm">删除</Button>
          <Button variant="outline" @click="showConfirm">移动</Button>
          <Button variant="ghost" @click="showConfirm">修改权限</Button>
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="全宽按钮"
        description="按钮宽度调整为父元素宽度的选项。"
        :code="buttonBlockCode"
      >
        <div class="space-y-2 max-w-md">
          <Button class="w-full">全宽主按钮</Button>
          <Button variant="outline" class="w-full">全宽次按钮</Button>
        </div>
      </ExampleBlock>

      <ApiTable title="Button API" :data="buttonApiData" />

      <div class="mt-8">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">设计指引</h3>
        <div class="bg-gray-50 rounded-lg p-6 space-y-4">
          <div>
            <h4 class="font-medium text-gray-900 mb-2">按钮类型</h4>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• <strong>主按钮</strong>：用于主要操作，一个操作区域只能有一个</li>
              <li>• <strong>次按钮</strong>：用于没有主次之分的一组行动点</li>
              <li>• <strong>描边按钮</strong>：用于次要操作</li>
              <li>• <strong>幽灵按钮</strong>：用于最次级的行动点</li>
            </ul>
          </div>
          <div>
            <h4 class="font-medium text-gray-900 mb-2">按钮状态</h4>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• <strong>正常状态</strong>：可以进行交互的按钮状态</li>
              <li>• <strong>禁用状态</strong>：不可交互状态，用于表单校验不通过等场景</li>
              <li>• <strong>加载状态</strong>：用于异步操作等待过程中</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Button } from '@ui-lib/ui-vue'
import ExampleBlock from '../ExampleBlock.vue'
import ApiTable from '../ApiTable.vue'

const loading = ref(false)
const loading2 = ref(false)

const showMessage = (type: string) => {
  alert(`Vue ${type}被点击!`)
}

const handleLoadingClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    alert('加载完成!')
  }, 2000)
}

const handleLoadingClick2 = () => {
  loading2.value = true
  setTimeout(() => {
    loading2.value = false
    alert('提交成功!')
  }, 3000)
}

const showConfirm = () => {
  if (confirm('确认要执行此危险操作吗？')) {
    alert('操作已执行')
  }
}

const buttonApiData = reactive([
  { property: 'variant', description: '设置按钮类型', type: "'primary' | 'secondary' | 'outline' | 'ghost'", default: "'primary'" },
  { property: 'size', description: '设置按钮大小', type: "'sm' | 'md' | 'lg'", default: "'md'" },
  { property: 'disabled', description: '按钮失效状态', type: 'boolean', default: 'false' },
  { property: 'class', description: '自定义 CSS 类名', type: 'string', default: '-' },
  { property: '@click', description: '点击按钮时的回调', type: '(event: MouseEvent) => void', default: '-' },
])

const buttonTypesCode = `<template>
  <div class="space-x-2">
    <Button variant="primary" @click="handleClick">主按钮</Button>
    <Button variant="secondary" @click="handleClick">次按钮</Button>
    <Button variant="outline" @click="handleClick">描边按钮</Button>
    <Button variant="ghost" @click="handleClick">幽灵按钮</Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@ui-lib/ui-vue'

const handleClick = () => {
  console.log('Button clicked!')
}
<\/script>`

const buttonSizesCode = `<template>
  <div class="space-x-2 flex items-center">
    <Button size="lg">大按钮</Button>
    <Button size="md">中按钮</Button>
    <Button size="sm">小按钮</Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@ui-lib/ui-vue'
<\/script>`

const buttonDisabledCode = `<template>
  <div class="space-x-2">
    <Button>正常按钮</Button>
    <Button :disabled="true">禁用按钮</Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@ui-lib/ui-vue'
<\/script>`

const buttonLoadingCode = `<template>
  <div class="space-x-2">
    <Button @click="handleClick" :disabled="loading">
      {{ loading ? '加载中...' : '点击加载' }}
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@ui-lib/ui-vue'

const loading = ref(false)

const handleClick = () => {
  loading.value = true
  setTimeout(() => loading.value = false, 2000)
}
<\/script>`

const buttonIconCode = `<template>
  <div class="space-x-2">
    <Button>
      <span class="mr-2">📁</span>
      文件夹
    </Button>
    <Button variant="outline">
      <span class="mr-2">📝</span>
      编辑
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@ui-lib/ui-vue'
<\/script>`

const buttonGroupCode = `<template>
  <div class="flex space-x-2">
    <Button>左侧按钮</Button>
    <Button variant="outline">中间按钮</Button>
    <Button variant="outline">右侧按钮</Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@ui-lib/ui-vue'
<\/script>`

const buttonDangerCode = `<template>
  <div class="space-x-2">
    <Button @click="showConfirm">删除</Button>
    <Button variant="outline" @click="showConfirm">移动</Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@ui-lib/ui-vue'

const showConfirm = () => {
  if (confirm('确认要执行此危险操作吗？')) {
    alert('操作已执行')
  }
}
<\/script>`

const buttonBlockCode = `<template>
  <div class="space-y-2 max-w-md">
    <Button class="w-full">全宽主按钮</Button>
    <Button variant="outline" class="w-full">全宽次按钮</Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@ui-lib/ui-vue'
<\/script>`
</script>

<style scoped>
/* 组件特定样式 */
</style> 