# 迁移指南

从其他UI库迁移到我们组件库的完整指南。

## 从Ant Design迁移

### 组件映射

| Ant Design | UI Library | 差异说明 |
|------------|------------|----------|
| `Button` | `Button` | API基本一致 |
| `Input` | `Input` | 支持更多自定义选项 |
| `Table` | `Table` | 简化了API，性能更好 |
| `Form` | `Form` | 验证规则语法略有不同 |
| `DatePicker` | `DatePicker` | 新增了更多快捷选项 |
| `Upload` | `Upload` | 支持更好的拖拽体验 |

### 代码示例

**Ant Design:**
```vue
<template>
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item label="用户名">
      <a-input 
        v-decorator="['username', { rules: [{ required: true }] }]" 
        placeholder="请输入用户名"
      />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit">提交</a-button>
    </a-form-item>
  </a-form>
</template>
```

**UI Library:**
```vue
<template>
  <Form :model="formData" :rules="rules" @submit="handleSubmit">
    <FormItem label="用户名" name="username">
      <Input v-model="formData.username" placeholder="请输入用户名" />
    </FormItem>
    <FormItem>
      <Button type="primary" html-type="submit">提交</Button>
    </FormItem>
  </Form>
</template>
```

### 迁移步骤

1. **更新依赖**
```bash
npm uninstall ant-design-vue
npm install @ui-lib/ui-vue
```

2. **更新引入方式**
```typescript
// 旧的
import { Button, Input } from 'ant-design-vue'

// 新的
import { Button, Input } from '@ui-lib/ui-vue'
```

3. **更新CSS**
```css
/* 移除 */
@import 'ant-design-vue/dist/antd.css';

/* 添加 */
@import '@ui-lib/ui-vue/dist/style.css';
```

## 从Element Plus迁移

### 组件对比

| Element Plus | UI Library | 迁移说明 |
|--------------|------------|----------|
| `el-button` | `Button` | 类型名称不同 |
| `el-input` | `Input` | 事件名称有变化 |
| `el-table` | `Table` | 列配置方式不同 |
| `el-form` | `Form` | 验证方式简化 |

### 事件名称变更

```vue
<!-- Element Plus -->
<el-input @input="handleInput" @change="handleChange" />

<!-- UI Library -->
<Input @input="handleInput" @change="handleChange" />
```

### 表格列配置

**Element Plus:**
```vue
<template>
  <el-table :data="tableData">
    <el-table-column prop="name" label="姓名" />
    <el-table-column prop="age" label="年龄" />
  </el-table>
</template>
```

**UI Library:**
```vue
<template>
  <Table :columns="columns" :data="tableData" />
</template>

<script setup>
const columns = [
  { key: 'name', title: '姓名', dataIndex: 'name' },
  { key: 'age', title: '年龄', dataIndex: 'age' }
]
</script>
```

## 从Vuetify迁移

### 样式系统差异

**Vuetify:**
```vue
<v-btn color="primary" class="ma-2">按钮</v-btn>
```

**UI Library:**
```vue
<Button type="primary" class="m-2">按钮</Button>
```

### 栅格系统

**Vuetify:**
```vue
<v-container>
  <v-row>
    <v-col cols="12" md="6">内容</v-col>
  </v-row>
</v-container>
```

**UI Library:**
```vue
<div class="container">
  <div class="grid grid-cols-1 md:grid-cols-2">
    <div>内容</div>
  </div>
</div>
```

## 批量迁移工具

### 自动化脚本

```bash
# migrate.js
const fs = require('fs')
const path = require('path')

const migrations = {
  // 组件名替换
  'a-button': 'Button',
  'a-input': 'Input',
  'a-table': 'Table',
  
  // 属性替换
  'v-decorator': 'v-model',
  ':form': ':model'
}

function migrateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')
  
  Object.entries(migrations).forEach(([old, newName]) => {
    content = content.replace(new RegExp(old, 'g'), newName)
  })
  
  fs.writeFileSync(filePath, content)
}

// 执行迁移
function migrateDirectory(dir) {
  const files = fs.readdirSync(dir)
  
  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    
    if (stat.isDirectory()) {
      migrateDirectory(filePath)
    } else if (file.endsWith('.vue')) {
      migrateFile(filePath)
    }
  })
}

migrateDirectory('./src')
```

## 版本升级

### v0.x 到 v1.x

**破坏性变更:**

1. **Button组件**
   - `size` 属性值变更：`small` → `sm`, `large` → `lg`
   - 移除了 `ghost` 属性，使用 `variant="outline"` 替代

2. **Table组件**
   - `dataSource` 重命名为 `data`
   - 列配置中 `dataIndex` 改为必填

3. **Form组件**
   - 验证规则格式变更
   - 移除了 `v-decorator`，使用 `v-model` 绑定

**迁移示例:**

```vue
<!-- v0.x -->
<Button size="small" ghost>按钮</Button>
<Table :dataSource="data" />

<!-- v1.x -->
<Button size="sm" variant="outline">按钮</Button>
<Table :data="data" />
```

### 升级检查清单

- [ ] 更新依赖版本
- [ ] 检查组件API变更
- [ ] 更新CSS类名
- [ ] 测试关键功能
- [ ] 更新文档和注释

## 常见问题

### Q: 如何保持原有的样式？

A: 可以通过CSS变量覆盖默认样式：

```css
:root {
  --primary-color: #1890ff; /* Ant Design蓝色 */
  --border-radius: 6px;
}
```

### Q: 某些组件功能缺失怎么办？

A: 可以基于现有组件扩展：

```vue
<template>
  <Button v-bind="$attrs" :class="customClass">
    <slot />
  </Button>
</template>

<script setup>
// 添加缺失的功能
</script>
```

### Q: 如何处理第三方插件兼容性？

A: 大多数情况下可以正常工作，如有问题可以：

1. 检查插件文档
2. 使用适配器模式
3. 联系我们获得支持

## 迁移最佳实践

1. **渐进式迁移** - 一个模块一个模块地迁移
2. **保留测试** - 确保功能不受影响
3. **样式隔离** - 避免样式冲突
4. **团队培训** - 让团队了解新的API
5. **文档更新** - 及时更新项目文档

## 获得帮助

如果在迁移过程中遇到问题：

- 查看[常见问题](/guide/faq)
- 在GitHub提交[Issue](https://github.com/your-username/turborepo-ui/issues)
- 加入我们的[Discord社区](https://discord.gg/your-invite)

我们致力于让迁移过程尽可能顺畅！ 