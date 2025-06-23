// 🐛 组件调试工具
export const debug = {
  // 日志组件渲染信息
  logRender: (componentName: string, props: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.group(`🎨 ${componentName} 渲染`);
      console.log('Props:', props);
      console.log('时间:', new Date().toLocaleTimeString());
      console.groupEnd();
    }
  },

  // 日志组件事件
  logEvent: (componentName: string, eventName: string, data?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`🎯 ${componentName} 事件: ${eventName}`, data);
    }
  },

  // 测试组件状态
  inspectElement: (element: HTMLElement | null) => {
    if (process.env.NODE_ENV === 'development' && element) {
      console.group('🔍 元素检查');
      console.log('元素:', element);
      console.log('样式:', window.getComputedStyle(element));
      console.log('属性:', element.attributes);
      console.groupEnd();
    }
  }
}; 