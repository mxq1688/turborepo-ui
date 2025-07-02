# 常见问题

这里收集了用户最常遇到的问题和解决方案。

## 安装和配置

### Q: 安装后组件无法正常显示？

**A:** 请检查以下几点：

1. 确保已正确引入CSS文件：
```typescript
import '@ui-lib/ui-vue/dist/style.css'
```

2. 检查Vue/React版本是否符合要求：
- Vue: >= 3.2.0
- React: >= 18.0.0

3. 确保正确注册了组件：
```typescript
// Vue全局注册
import UILib from '@ui-lib/ui-vue'
app.use(UILib)

// 或按需引入
import { Button } from '@ui-lib/ui-vue'
```

### Q: TypeScript类型提示不生效？

**A:** 请确保：

1. 安装了类型定义包：
```bash
npm install @types/node --save-dev
```

2. 在`tsconfig.json`中包含了组件库类型：
```json
{
  "compilerOptions": {
    "types": ["@ui-lib/ui-vue"]
  }
}
```

3. 对于Vue项目，在`env.d.ts`中添加：
```typescript
/// <reference types="@ui-lib/ui-vue" />
```

## 样式和主题

### Q: 如何自定义主题颜色？

**A:** 通过CSS变量覆盖默认主题：

```css
:root {
  --ui-primary-500: #your-brand-color;
  --ui-success-color: #your-success-color;
  --ui-error-color: #your-error-color;
}
```

### Q: 深色模式如何配置？

**A:** 有两种方式：

1. **自动检测系统主题：**
```vue
<template>
  <div :data-theme="theme">
    <!-- 你的应用 -->
  </div>
</template>

<script setup>
const theme = ref('auto')

// 监听系统主题变化
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
mediaQuery.addEventListener('change', (e) => {
  theme.value = e.matches ? 'dark' : 'light'
})
</script>
```

2. **手动切换：**
```vue
<Button @click="toggleTheme">
  切换到{{ isDark ? '浅色' : '深色' }}模式
</Button>
```

### Q: 组件样式被其他CSS覆盖了？

**A:** 可以通过以下方式解决：

1. **提高CSS优先级：**
```css
.my-component .ui-button {
  /* 你的样式 */
}
```

2. **使用CSS变量：**
```css
.my-component {
  --ui-button-bg: #custom-color;
}
```

3. **使用!important（不推荐）：**
```css
.ui-button {
  background-color: #custom-color !important;
}
```

## 组件使用

### Q: Form组件验证不生效？

**A:** 请检查：

1. 确保FormItem设置了`name`属性：
```vue
<FormItem label="用户名" name="username">
  <Input v-model="formData.username" />
</FormItem>
```

2. 验证规则格式正确：
```typescript
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ]
}
```

3. 手动触发验证：
```typescript
const formRef = ref()

const validate = async () => {
  try {
    await formRef.value.validate()
    console.log('验证通过')
  } catch (error) {
    console.log('验证失败', error)
  }
}
```

### Q: Table组件数据不更新？

**A:** 常见原因：

1. **数据引用未改变：**
```typescript
// 错误 - 直接修改数组
data.push(newItem)

// 正确 - 创建新数组
data.value = [...data.value, newItem]
```

2. **缺少rowKey：**
```vue
<Table :data="tableData" row-key="id" />
```

3. **异步数据问题：**
```vue
<Table :data="tableData" :loading="loading" />
```

### Q: Modal组件关闭后数据没有重置？

**A:** 需要在关闭时手动重置：

```vue
<Modal v-model="visible" @close="handleClose">
  <!-- 内容 -->
</Modal>

<script setup>
const handleClose = () => {
  // 重置表单数据
  formData.value = { ... }
  // 清除验证错误
  formRef.value?.clearValidate()
}
</script>
```

## 性能问题

### Q: 组件渲染很慢？

**A:** 优化建议：

1. **使用v-show代替v-if（频繁切换）：**
```vue
<!-- 频繁切换时使用v-show -->
<Modal v-show="visible" />

<!-- 条件渲染使用v-if -->
<ExpensiveComponent v-if="shouldRender" />
```

2. **大列表使用虚拟滚动：**
```vue
<VirtualList :data="largeData" :item-height="50" />
```

3. **懒加载组件：**
```typescript
const LazyTable = defineAsyncComponent(() => import('./Table.vue'))
```

### Q: 打包后体积很大？

**A:** 减少包体积：

1. **按需引入：**
```typescript
import { Button, Input } from '@ui-lib/ui-vue'
// 而不是
import UILib from '@ui-lib/ui-vue'
```

2. **Tree-shaking配置：**
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['vue', 'react'] // 排除外部依赖
    }
  }
})
```

3. **CDN加载：**
```html
<script src="https://unpkg.com/@ui-lib/ui-vue"></script>
```

## 兼容性问题

### Q: 在IE浏览器中不工作？

**A:** IE浏览器不受支持。最低支持：
- Chrome >= 90
- Firefox >= 88  
- Safari >= 14
- Edge >= 90

如需支持旧浏览器，建议：
1. 使用Babel转译
2. 添加polyfill
3. 考虑使用其他组件库

### Q: 与其他UI库冲突？

**A:** 解决冲突：

1. **CSS命名空间：**
```css
.my-app .ui-button {
  /* 限制样式作用域 */
}
```

2. **局部注册组件：**
```vue
<script setup>
import { Button as UIButton } from '@ui-lib/ui-vue'
import { Button as AntButton } from 'ant-design-vue'
</script>

<template>
  <UIButton>UI库按钮</UIButton>
  <AntButton>Ant Design按钮</AntButton>
</template>
```

3. **配置别名：**
```typescript
// vite.config.ts
export default defineConfig({
  resolve: {
    alias: {
      '@ui': '@ui-lib/ui-vue'
    }
  }
})
```

## 开发问题

### Q: 热更新不生效？

**A:** 检查配置：

1. **Vite配置：**
```typescript
export default defineConfig({
  server: {
    hmr: true
  }
})
```

2. **webpack配置：**
```javascript
module.exports = {
  devServer: {
    hot: true
  }
}
```

### Q: 控制台出现警告？

**A:** 常见警告解决：

1. **Vue warn: Failed to resolve component:**
```typescript
// 确保组件已正确导入和注册
import { Button } from '@ui-lib/ui-vue'
```

2. **React Warning: Each child should have a unique "key" prop:**
```jsx
{items.map(item => (
  <Item key={item.id} data={item} />
))}
```

## 获得更多帮助

如果以上答案无法解决您的问题：

### 1. 搜索现有Issues
访问 [GitHub Issues](https://github.com/your-username/turborepo-ui/issues) 搜索相关问题。

### 2. 提交新Issue
如果没有找到相关问题，请提交新的Issue，包含：
- 详细的问题描述
- 重现步骤
- 环境信息（系统、浏览器、版本等）
- 相关代码片段

### 3. 参与讨论
加入 [GitHub Discussions](https://github.com/your-username/turborepo-ui/discussions) 与社区讨论。

### 4. 实时聊天
加入我们的 [Discord社区](https://discord.gg/your-invite) 获得实时帮助。

### 5. 邮件支持
发送邮件至 support@ui-library.com （企业用户优先回复）。

---

**提示：** 在提问之前，请先查看相关组件的文档和API说明，大部分问题都能在文档中找到答案。 