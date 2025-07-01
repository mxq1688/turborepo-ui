<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Modal 对话框</h1>
      <p class="text-lg text-gray-600">在当前页面正中间弹出的对话框。</p>
    </div>

    <div class="space-y-8">
      <div>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">何时使用</h2>
        <ul class="text-gray-600 space-y-2">
          <li>• 需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中间打开一个浮层，承载相应的操作。</li>
          <li>• 需要用户注意而不希望页面切换时。</li>
          <li>• 需要展示详细信息，如查看详情、编辑表单等。</li>
        </ul>
      </div>

      <ExampleBlock
        title="基础用法"
        description="基本的对话框用法。"
        :code="basicModalCode"
      >
        <div class="space-x-2">
          <Button @click="showBasicModal = true">打开基础对话框</Button>
          <Modal 
            :is-open="showBasicModal" 
            title="基础对话框"
            @close="showBasicModal = false"
          >
            <p class="text-gray-600">这是一个基础的对话框内容。</p>
            <template #footer>
              <Button variant="outline" @click="showBasicModal = false">取消</Button>
              <Button @click="showBasicModal = false">确定</Button>
            </template>
          </Modal>
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="不同尺寸"
        description="不同尺寸的对话框。"
        :code="sizeModalCode"
      >
        <div class="space-x-2">
          <Button @click="showSmallModal = true" size="sm">小对话框</Button>
          <Button @click="showMediumModal = true">中对话框</Button>
          <Button @click="showLargeModal = true">大对话框</Button>
          
          <Modal 
            :is-open="showSmallModal" 
            title="小对话框"
            size="sm"
            @close="showSmallModal = false"
          >
            <p class="text-gray-600">这是一个小尺寸的对话框。</p>
          </Modal>

          <Modal 
            :is-open="showMediumModal" 
            title="中对话框"
            size="md"
            @close="showMediumModal = false"
          >
            <p class="text-gray-600">这是一个中等尺寸的对话框，适合大多数场景。</p>
          </Modal>

          <Modal 
            :is-open="showLargeModal" 
            title="大对话框"
            size="lg"
            @close="showLargeModal = false"
          >
            <div class="text-gray-600">
              <p class="mb-4">这是一个大尺寸的对话框，适合展示更多内容。</p>
              <p>可以包含表单、列表或其他复杂内容。</p>
            </div>
          </Modal>
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="确认对话框"
        description="用于重要操作的确认对话框。"
        :code="confirmModalCode"
      >
        <div class="space-x-2">
          <Button variant="outline" @click="showConfirmModal = true">删除操作</Button>
          
          <Modal 
            :is-open="showConfirmModal" 
            title="确认删除"
            @close="showConfirmModal = false"
          >
            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0">
                <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-medium text-gray-900 mb-2">确认删除此项目？</h3>
                <p class="text-sm text-gray-500">删除后无法恢复，请谨慎操作。</p>
              </div>
            </div>
            <template #footer>
              <Button variant="outline" @click="showConfirmModal = false">取消</Button>
              <Button @click="handleDelete">确认删除</Button>
            </template>
          </Modal>
        </div>
      </ExampleBlock>

      <ApiTable title="Modal API" :data="modalApiData" />

      <div class="mt-8">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">设计指引</h3>
        <div class="bg-gray-50 rounded-lg p-6 space-y-4">
          <div>
            <h4 class="font-medium text-gray-900 mb-2">使用场景</h4>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• <strong>表单编辑</strong>：在对话框中进行数据编辑</li>
              <li>• <strong>信息展示</strong>：显示详细信息或帮助内容</li>
              <li>• <strong>确认操作</strong>：重要操作的二次确认</li>
              <li>• <strong>选择操作</strong>：从多个选项中进行选择</li>
            </ul>
          </div>
          <div>
            <h4 class="font-medium text-gray-900 mb-2">注意事项</h4>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• 避免在对话框中再打开对话框</li>
              <li>• 重要操作应该提供明确的确认按钮</li>
              <li>• 对话框内容应该简洁明了</li>
              <li>• 支持 ESC 键关闭对话框</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Modal, Button } from '@ui-lib/ui-vue'
import ExampleBlock from '../ExampleBlock.vue'
import ApiTable from '../ApiTable.vue'

const showBasicModal = ref(false)
const showSmallModal = ref(false)
const showMediumModal = ref(false)
const showLargeModal = ref(false)
const showConfirmModal = ref(false)

const handleDelete = () => {
  alert('删除成功！')
  showConfirmModal.value = false
}

const modalApiData = reactive([
  { property: 'isOpen', description: '是否显示对话框', type: 'boolean', default: 'false' },
  { property: 'title', description: '对话框标题', type: 'string', default: '-' },
  { property: 'size', description: '对话框大小', type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'" },
  { property: '@close', description: '关闭对话框的回调', type: '() => void', default: '-' },
])

const basicModalCode = `<template>
  <div>
    <Button @click="showModal = true">打开对话框</Button>
    <Modal 
      :is-open="showModal" 
      title="基础对话框"
      @close="showModal = false"
    >
      <p>这是对话框内容</p>
      <template #footer>
        <Button variant="outline" @click="showModal = false">取消</Button>
        <Button @click="showModal = false">确定</Button>
      </template>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Modal, Button } from '@ui-lib/ui-vue'

const showModal = ref(false)
<\/script>`

const sizeModalCode = `<template>
  <div>
    <Button @click="showModal = true">打开对话框</Button>
    <Modal 
      :is-open="showModal" 
      title="对话框"
      size="lg"
      @close="showModal = false"
    >
      <p>大尺寸对话框内容</p>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Modal, Button } from '@ui-lib/ui-vue'

const showModal = ref(false)
<\/script>`

const confirmModalCode = `<template>
  <div>
    <Button variant="outline" @click="showModal = true">删除操作</Button>
    <Modal 
      :is-open="showModal" 
      title="确认删除"
      @close="showModal = false"
    >
      <div class="flex items-start space-x-3">
        <div class="flex-shrink-0">
          <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <div>
          <h3 class="text-lg font-medium text-gray-900 mb-2">确认删除此项目？</h3>
          <p class="text-sm text-gray-500">删除后无法恢复，请谨慎操作。</p>
        </div>
      </div>
      <template #footer>
        <Button variant="outline" @click="showModal = false">取消</Button>
        <Button @click="handleDelete">确认删除</Button>
      </template>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Modal, Button } from '@ui-lib/ui-vue'

const showModal = ref(false)

const handleDelete = () => {
  alert('删除成功！')
  showModal.value = false
}
<\/script>`
</script>

<style scoped>
/* 组件特定样式 */
</style> 