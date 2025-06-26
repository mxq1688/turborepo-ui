# 🚀 设置和安装指南

这个文档将指导你如何设置和运行这个多框架 UI 组件库项目。

## 📋 前置要求

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git

## 🔧 完整设置步骤

### 1. 安装依赖

```bash
# 安装所有依赖
npm install
```

### 2. 构建共享包

由于其他包依赖于共享包，需要先构建它：

```bash
# 构建共享包
cd packages/ui-shared
npm run build
cd ../..
```

### 3. 构建组件库

```bash
# 构建React组件库
cd packages/ui-react
npm run build
cd ../..

# 构建Vue组件库  
cd packages/ui-vue
npm run build
cd ../..
```

### 4. 启动开发环境

```bash
# 启动所有开发服务器
npm run dev
```

这将启动：
- React 文档应用: http://localhost:3000
- Vue 文档应用: http://localhost:3001 (需要配置)

## 🐛 故障排除

### 常见问题

1. **模块找不到错误**
   ```
   找不到模块"@ui-lib/shared"或其相应的类型声明
   ```
   
   **解决方案**: 确保先构建共享包
   ```bash
   cd packages/ui-shared && npm run build
   ```

2. **Vue 应用无法启动**
   
   **原因**: Vue 应用还需要创建额外的配置文件
   
   **解决方案**: 需要创建 vite.config.ts, main.ts 等文件

3. **类型检查错误**
   
   **原因**: 包之间的依赖关系还未完全建立
   
   **解决方案**: 按顺序构建包，或运行 `npm run build` 构建所有包

## 📁 需要创建的额外文件

为了完整运行项目，你还需要创建以下文件：

### Vue 应用配置文件

1. `apps/docs-vue/vite.config.ts`
2. `apps/docs-vue/src/main.ts`
3. `apps/docs-vue/index.html`
4. `apps/docs-vue/tailwind.config.js`

### 构建配置

1. `packages/ui-vue/tsup.config.ts`
2. `packages/ui-react/tsup.config.ts` (如果需要自定义)

## ⚡ 快速验证

安装并构建完成后，你可以通过以下方式验证设置：

1. **检查共享包导出**:
   ```bash
   cd packages/ui-shared && npm run build
   ls dist/  # 应该看到 index.js, index.mjs, index.d.ts
   ```

2. **检查React组件**:
   ```bash
   cd packages/ui-react && npm run build
   ls dist/  # 应该看到组件的构建文件
   ```

3. **启动React文档**:
   ```bash
   cd apps/docs && npm run dev
   # 访问 http://localhost:3000
   ```

## 🎯 下一步

一旦基础设置完成，你可以：

1. 🔄 **开发新组件**: 在共享包中定义样式，然后在两个框架中实现
2. 📖 **完善文档**: 为每个组件添加更多示例
3. 🧪 **添加测试**: 设置单元测试和集成测试
4. 🚀 **部署**: 配置 CI/CD 流程

## 💡 开发提示

- 始终先修改 `packages/ui-shared` 中的设计令牌
- 使用 `npm run dev` 获得最佳开发体验
- 每次修改共享包后，相关组件会自动重新构建
- 使用浏览器的开发工具查看组件的实际样式类

## 🆘 获取帮助

如果遇到问题：

1. 检查所有依赖是否已安装: `npm ls`
2. 确保Node.js版本正确: `node --version`
3. 清理并重新安装: `rm -rf node_modules package-lock.json && npm install`
4. 按顺序重新构建所有包

这个设置完成后，你就拥有了一个强大的多框架UI组件库开发环境！🎉 