<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Card 卡片</h1>
      <p class="text-lg text-gray-600 mb-8">通用卡片容器。最基础的容器，用于内容分组和信息展示。</p>
    </div>

    <div class="space-y-8">
      <div>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">何时使用</h2>
        <ul class="text-gray-600 space-y-2">
          <li>• 最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。</li>
          <li>• 适用于展示简洁的信息内容，支持用户操作。</li>
          <li>• 可以组合使用，构建复杂的页面布局。</li>
          <li>• 支持内容分区，让信息层次更清晰。</li>
        </ul>
      </div>

      <ExampleBlock
        title="基础用法"
        description="包含标题、内容、操作区域。"
        :code="basicCardCode"
      >
        <Card class="w-96">
          <CardHeader>
            <CardTitle>默认大小的卡片</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-gray-600">这是卡片的内容区域，可以包含任意内容。</p>
          </CardContent>
        </Card>
      </ExampleBlock>

      <ExampleBlock
        title="简洁卡片"
        description="只有内容区域的简洁卡片。"
        :code="simpleCardCode"
      >
        <Card class="w-96">
          <CardContent>
            <p class="text-gray-600">没有标题的简洁卡片，直接展示内容信息。</p>
          </CardContent>
        </Card>
      </ExampleBlock>

      <ExampleBlock
        title="包含操作按钮"
        description="卡片可以包含操作按钮，用于用户交互。"
        :code="cardWithActionsCode"
      >
        <Card class="w-96">
          <CardHeader>
            <CardTitle>用户信息</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-3">
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span class="text-blue-600 font-medium">张三</span>
                </div>
                <div>
                  <div class="font-medium">张三</div>
                  <div class="text-sm text-gray-500">前端开发工程师</div>
                </div>
              </div>
              <div class="flex space-x-2 pt-3">
                <Button size="sm" @click="() => alert('编辑用户')">编辑</Button>
                <Button variant="outline" size="sm" @click="() => alert('查看详情')">详情</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </ExampleBlock>

      <ExampleBlock
        title="信息统计卡片"
        description="常用于仪表盘的信息统计展示。"
        :code="statsCardCode"
      >
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent>
              <div class="flex items-center justify-between">
                <div>
                  <div class="text-2xl font-bold text-blue-600">2,543</div>
                  <div class="text-sm text-gray-500">总用户数</div>
                </div>
                <div class="text-blue-500">
                  <span class="text-3xl">👥</span>
                </div>
              </div>
              <div class="text-xs text-green-600 mt-2">↗ +12% 较上月</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div class="flex items-center justify-between">
                <div>
                  <div class="text-2xl font-bold text-green-600">89.3%</div>
                  <div class="text-sm text-gray-500">活跃率</div>
                </div>
                <div class="text-green-500">
                  <span class="text-3xl">📈</span>
                </div>
              </div>
              <div class="text-xs text-green-600 mt-2">↗ +5.2% 较上月</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div class="flex items-center justify-between">
                <div>
                  <div class="text-2xl font-bold text-orange-600">1,256</div>
                  <div class="text-sm text-gray-500">订单数</div>
                </div>
                <div class="text-orange-500">
                  <span class="text-3xl">📦</span>
                </div>
              </div>
              <div class="text-xs text-red-600 mt-2">↘ -3.1% 较上月</div>
            </CardContent>
          </Card>
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="列表型卡片"
        description="卡片可以承载列表信息。"
        :code="listCardCode"
      >
        <Card class="w-96">
          <CardHeader>
            <CardTitle>最近活动</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-3">
              <div v-for="item in activityList" :key="item.id" class="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded">
                <div class="w-2 h-2 rounded-full" :class="item.color"></div>
                <div class="flex-1">
                  <div class="text-sm">{{ item.title }}</div>
                  <div class="text-xs text-gray-500">{{ item.time }}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </ExampleBlock>

      <ExampleBlock
        title="网格布局"
        description="使用多个卡片构建网格布局。"
        :code="gridCardCode"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>项目进度</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="space-y-4">
                <div>
                  <div class="flex justify-between text-sm mb-1">
                    <span>前端开发</span>
                    <span>75%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-blue-600 h-2 rounded-full" style="width: 75%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-sm mb-1">
                    <span>后端开发</span>
                    <span>60%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-green-600 h-2 rounded-full" style="width: 60%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-sm mb-1">
                    <span>测试</span>
                    <span>30%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-orange-600 h-2 rounded-full" style="width: 30%"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>团队成员</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span class="text-xs font-medium text-blue-600">张</span>
                  </div>
                  <div class="flex-1">
                    <div class="text-sm font-medium">张三</div>
                    <div class="text-xs text-gray-500">项目经理</div>
                  </div>
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span class="text-xs font-medium text-green-600">李</span>
                  </div>
                  <div class="flex-1">
                    <div class="text-sm font-medium">李四</div>
                    <div class="text-xs text-gray-500">前端开发</div>
                  </div>
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span class="text-xs font-medium text-purple-600">王</span>
                  </div>
                  <div class="flex-1">
                    <div class="text-sm font-medium">王五</div>
                    <div class="text-xs text-gray-500">后端开发</div>
                  </div>
                  <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </ExampleBlock>

      <ApiTable title="Card API" :data="cardApiData" />
      <ApiTable title="CardHeader API" :data="cardHeaderApiData" />
      <ApiTable title="CardTitle API" :data="cardTitleApiData" />
      <ApiTable title="CardContent API" :data="cardContentApiData" />

      <div class="mt-8">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">设计指引</h3>
        <div class="bg-gray-50 rounded-lg p-6 space-y-4">
          <div>
            <h4 class="font-medium text-gray-900 mb-2">卡片组成</h4>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• <strong>CardHeader</strong>：卡片头部，通常包含标题和操作按钮</li>
              <li>• <strong>CardTitle</strong>：卡片标题，用于描述卡片主要内容</li>
              <li>• <strong>CardContent</strong>：卡片内容区域，可包含任意内容</li>
            </ul>
          </div>
          <div>
            <h4 class="font-medium text-gray-900 mb-2">使用建议</h4>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• 保持卡片内容的相关性，避免在单个卡片中混合不相关的信息</li>
              <li>• 合理使用卡片间距，保持页面布局的整齐</li>
              <li>• 考虑响应式设计，在不同屏幕尺寸下保持良好的展示效果</li>
              <li>• 统一卡片风格，保持视觉一致性</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Card, CardHeader, CardTitle, CardContent, Button } from '@ui-lib/ui-vue'
import ExampleBlock from '../ExampleBlock.vue'
import ApiTable from '../ApiTable.vue'

const activityList = reactive([
  { id: 1, title: '用户张三注册了账号', time: '2分钟前', color: 'bg-green-500' },
  { id: 2, title: '订单 #1234 已完成', time: '5分钟前', color: 'bg-blue-500' },
  { id: 3, title: '系统维护通知', time: '1小时前', color: 'bg-orange-500' },
  { id: 4, title: '数据备份完成', time: '2小时前', color: 'bg-green-500' },
])

const cardApiData = reactive([
  { property: 'class', description: '自定义 CSS 类名', type: 'string', default: '-' },
])

const cardHeaderApiData = reactive([
  { property: 'class', description: '自定义 CSS 类名', type: 'string', default: '-' },
])

const cardTitleApiData = reactive([
  { property: 'class', description: '自定义 CSS 类名', type: 'string', default: '-' },
])

const cardContentApiData = reactive([
  { property: 'class', description: '自定义 CSS 类名', type: 'string', default: '-' },
])

const basicCardCode = `<template>
  <Card class="w-96">
    <CardHeader>
      <CardTitle>默认大小的卡片</CardTitle>
    </CardHeader>
    <CardContent>
      <p class="text-gray-600">这是卡片的内容区域，可以包含任意内容。</p>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from '@ui-lib/ui-vue'
<\/script>`

const simpleCardCode = `<template>
  <Card class="w-96">
    <CardContent>
      <p class="text-gray-600">没有标题的简洁卡片，直接展示内容信息。</p>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardContent } from '@ui-lib/ui-vue'
<\/script>`

const cardWithActionsCode = `<template>
  <Card class="w-96">
    <CardHeader>
      <CardTitle>用户信息</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="space-y-3">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <span class="text-blue-600 font-medium">张三</span>
          </div>
          <div>
            <div class="font-medium">张三</div>
            <div class="text-sm text-gray-500">前端开发工程师</div>
          </div>
        </div>
        <div class="flex space-x-2 pt-3">
          <Button size="sm">编辑</Button>
          <Button variant="outline" size="sm">详情</Button>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent, Button } from '@ui-lib/ui-vue'
<\/script>`

const statsCardCode = `<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <Card>
      <CardContent>
        <div class="flex items-center justify-between">
          <div>
            <div class="text-2xl font-bold text-blue-600">2,543</div>
            <div class="text-sm text-gray-500">总用户数</div>
          </div>
          <div class="text-blue-500">
            <span class="text-3xl">👥</span>
          </div>
        </div>
        <div class="text-xs text-green-600 mt-2">↗ +12% 较上月</div>
      </CardContent>
    </Card>
    <!-- 更多统计卡片... -->
  </div>
</template>

<script setup lang="ts">
import { Card, CardContent } from '@ui-lib/ui-vue'
<\/script>`

const listCardCode = `<template>
  <Card class="w-96">
    <CardHeader>
      <CardTitle>最近活动</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="space-y-3">
        <div class="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded">
          <div class="w-2 h-2 bg-green-500 rounded-full"></div>
          <div class="flex-1">
            <div class="text-sm">用户张三注册了账号</div>
            <div class="text-xs text-gray-500">2分钟前</div>
          </div>
        </div>
        <!-- 更多活动项... -->
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from '@ui-lib/ui-vue'
<\/script>`

const gridCardCode = `<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Card>
      <CardHeader>
        <CardTitle>项目进度</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="space-y-4">
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span>前端开发</span>
              <span>75%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-blue-600 h-2 rounded-full" style="width: 75%"></div>
            </div>
          </div>
          <!-- 更多进度条... -->
        </div>
      </CardContent>
    </Card>
    <!-- 更多卡片... -->
  </div>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from '@ui-lib/ui-vue'
<\/script>`
</script>

<style scoped>
/* 组件特定样式 */
</style> 