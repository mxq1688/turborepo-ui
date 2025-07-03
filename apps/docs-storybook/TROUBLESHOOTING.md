# Storybook 多语言切换故障排除指南

## 问题描述
多语言切换功能不工作，工具栏中没有显示地球图标（语言切换器）。

## 可能的原因和解决方案

### 1. 配置文件问题

#### 检查 `.storybook/preview.tsx` 文件
确保文件存在且配置正确：

```typescript
// .storybook/preview.tsx
import type { Preview } from "@storybook/react";
import { I18nProvider } from '@ui-lib/ui-react';
import React from 'react';

const preview: Preview = {
  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      defaultValue: 'zh-CN',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'zh-CN', right: '🇨🇳', title: '中文' },
          { value: 'en-US', right: '🇺🇸', title: 'English' },
        ],
        showName: true,
      },
    },
  },
  // ... 其他配置
};
```

#### 检查 `.storybook/main.ts` 文件
确保支持 TypeScript 和 JSX：

```typescript
// .storybook/main.ts
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    // ... 其他插件
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
```

### 2. 版本兼容性问题

#### 检查 Storybook 版本
```bash
npx storybook --version
```

当前版本：7.6.20
- 确保使用的是 Storybook 7.x 的语法
- 如果是旧版本，可能需要升级

### 3. 缓存问题

#### 清除缓存并重新启动
```bash
# 停止 Storybook
pkill -f "storybook"

# 清除缓存
rm -rf node_modules/.cache
rm -rf .storybook-cache

# 重新安装依赖
npm install

# 重新启动
npm run dev
```

### 4. 浏览器缓存

#### 清除浏览器缓存
1. 打开 Chrome DevTools (F12)
2. 右键点击刷新按钮
3. 选择"清空缓存并硬性重新加载"

### 5. 配置文件冲突

#### 检查是否有多个配置文件
```bash
ls -la .storybook/
```

确保只有一个 `preview` 文件（`.tsx` 或 `.ts`），删除重复的文件。

### 6. 依赖问题

#### 检查必要的依赖
```bash
npm list @storybook/react @storybook/addon-essentials
```

确保所有 Storybook 相关依赖都已正确安装。

### 7. 手动验证步骤

#### 步骤 1: 检查 Storybook 是否运行
```bash
curl -s http://localhost:6006 | head -5
```

#### 步骤 2: 检查配置是否加载
在浏览器中打开 DevTools，查看是否有 JavaScript 错误。

#### 步骤 3: 检查全局类型是否注册
在 Storybook 界面中，按 F12 打开 DevTools，在 Console 中输入：
```javascript
window.__STORYBOOK_ADDONS_MANAGER__.getChannel().emit('SET_GLOBALS', {locale: 'en-US'});
```

### 8. 临时解决方案

如果以上方法都不工作，可以尝试：

#### 方案 A: 使用 `.ts` 文件替代 `.tsx`
将 `.storybook/preview.tsx` 重命名为 `.storybook/preview.ts`，并使用 `React.createElement` 语法。

#### 方案 B: 简化配置
移除复杂的配置，只保留最基本的 globalTypes 设置。

#### 方案 C: 使用 Storybook 插件
安装专门的国际化插件：
```bash
npm install --save-dev @storybook/addon-locale
```

### 9. 调试技巧

#### 启用详细日志
```bash
DEBUG=storybook:* npm run dev
```

#### 检查 Storybook 配置
在 Storybook 界面中访问：
`http://localhost:6006/?path=/settings/about`

查看加载的配置和插件信息。

### 10. 已知问题

#### Storybook 7.x 的 globalTypes 变化
- 确保使用正确的 `toolbar` 配置语法
- `showName` 属性在某些版本中可能不生效
- 图标名称必须是 Storybook 支持的图标

## 联系支持

如果以上方法都不能解决问题，请：
1. 检查 Storybook 官方文档
2. 查看 GitHub Issues
3. 考虑升级到最新版本的 Storybook

## 成功标志

当配置正确时，您应该看到：
- 🌍 工具栏中有地球图标
- 点击图标显示语言选项
- 选择语言后，组件文本会相应变化
- URL 中会包含 `&globals=locale:zh-CN` 参数 