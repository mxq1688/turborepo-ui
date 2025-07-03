# Storybook 中文支持说明 / Chinese Support Documentation

## 概述 / Overview

docs-storybook 现在完全支持中文！我们已经为 Storybook 添加了完整的国际化支持，包括：

The docs-storybook now fully supports Chinese! We have added complete internationalization support to Storybook, including:

## 功能特性 / Features

### 1. 语言切换器 / Language Switcher
- 在 Storybook 工具栏中添加了语言选择器（地球图标）
- 支持中文（🇨🇳 zh-CN）和英文（🇺🇸 en-US）切换
- 默认语言为中文

Added language selector in Storybook toolbar (globe icon)
- Supports Chinese (🇨🇳 zh-CN) and English (🇺🇸 en-US) switching
- Default language is Chinese

### 2. 双语组件文档 / Bilingual Component Documentation
- 所有组件标题和描述都使用中英双语
- 组件 Props 说明包含中文翻译
- Story 名称采用 "中文名称 / English Name" 格式

All component titles and descriptions use Chinese-English bilingual format
- Component Props descriptions include Chinese translations
- Story names use "Chinese Name / English Name" format

### 3. 国际化组件示例 / I18n Component Examples
- 添加了国际化示例 Story，展示组件如何根据语言动态显示文本
- 使用 useI18n hook 实现文本的自动翻译
- 支持上下文感知的翻译功能

Added I18n example stories showing how components dynamically display text based on language
- Uses useI18n hook for automatic text translation
- Supports context-aware translation functionality

### 4. 自定义视口名称 / Custom Viewport Names
- 视口选择器使用中文名称：手机、平板、桌面
- 保持英文功能名称的同时添加中文描述

Viewport selector uses Chinese names: Mobile, Tablet, Desktop
- Maintains English function names while adding Chinese descriptions

## 已更新的文件 / Updated Files

### 配置文件 / Configuration Files
- `.storybook/main.ts` - 添加了更多插件支持
- `.storybook/preview.tsx` - 完整的国际化配置
- `package.json` - 添加了必要的依赖

### Stories 文件 / Stories Files
- `stories/Button.stories.tsx` - 完整的双语按钮组件文档
- `stories/Alert.stories.tsx` - 新增的双语警告提示组件文档

### 文档文件 / Documentation Files
- `README.md` - 更新为双语说明
- `CHINESE_SUPPORT.md` - 本文档

## 使用方法 / Usage

### 启动 Storybook / Start Storybook
```bash
cd apps/docs-storybook
npm run dev
```

### 切换语言 / Switch Language
1. 打开 Storybook (http://localhost:6006)
2. 点击工具栏中的地球图标
3. 选择 "中文" 或 "English"

### 查看国际化示例 / View I18n Examples
- 查看 "组件/按钮" 下的 "国际化示例"
- 查看 "组件/警告提示" 下的 "国际化示例"
- 切换语言观察文本变化

## 技术实现 / Technical Implementation

### 国际化提供者 / I18n Provider
使用 `@ui-lib/ui-react` 中的 `I18nProvider` 组件包装所有 Stories，提供统一的语言环境。

Uses `I18nProvider` component from `@ui-lib/ui-react` to wrap all Stories, providing unified language environment.

### 语言包 / Language Packages
在 `preview.tsx` 中定义了 Storybook 专用的语言包，包含：
- 组件标题翻译
- 功能描述翻译
- 视口名称翻译

Defined Storybook-specific language packages in `preview.tsx`, including:
- Component title translations
- Feature description translations
- Viewport name translations

### 双语 Story 模式 / Bilingual Story Pattern
每个 Story 都包含：
- 双语名称：`name: '中文名称 / English Name'`
- 双语描述：中文和英文用换行符分隔
- 国际化示例：使用 `useI18n` hook 的动态文本

Each Story includes:
- Bilingual names: `name: 'Chinese Name / English Name'`
- Bilingual descriptions: Chinese and English separated by newlines
- I18n examples: dynamic text using `useI18n` hook

## 下一步计划 / Next Steps

1. 为更多组件添加双语 Stories
2. 完善组件的中文文档
3. 添加更多国际化示例
4. 考虑添加其他语言支持

1. Add bilingual Stories for more components
2. Improve Chinese documentation for components
3. Add more internationalization examples
4. Consider adding support for other languages

## 注意事项 / Notes

- 确保所有新的 Stories 都遵循双语命名约定
- 使用 `useI18n` hook 创建国际化示例
- 保持中英文描述的一致性和准确性

- Ensure all new Stories follow bilingual naming conventions
- Use `useI18n` hook to create internationalization examples
- Maintain consistency and accuracy between Chinese and English descriptions 