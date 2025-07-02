export interface IntroductionText {
  title: string;
  description: string;
  features: {
    title: string;
    theme: string;
    i18n: string;
    performance: string;
    responsive: string;
    accessibility: string;
  };
  gettingStarted: {
    title: string;
    installation: {
      title: string;
      description: string;
    };
    basicUsage: {
      title: string;
      description: string;
    };
  };
  categories: {
    title: string;
    basic: {
      title: string;
      button: string;
      input: string;
      card: string;
    };
    dataDisplay: {
      title: string;
      table: string;
      tabs: string;
      badge: string;
    };
    form: {
      title: string;
      form: string;
      checkbox: string;
      radio: string;
      select: string;
    };
  };
  i18n: {
    title: string;
    description: string;
  };
  theming: {
    title: string;
    description: string;
  };
  responsive: {
    title: string;
    description: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  development: {
    title: string;
    controls: string;
    docs: string;
    examples: string;
    accessibility: string;
  };
  ending: string;
}

export const introductionTexts: Record<'en' | 'zh', IntroductionText> = {
  en: {
    title: 'UI Component Library',
    description: 'Welcome to our comprehensive component library documentation. This library provides modern, accessible, and performant React components for building web applications.',
    features: {
      title: 'Features',
      theme: 'Theme Customization - Flexible theming system with dark mode support',
      i18n: 'Internationalization - Built-in i18n support for global applications',
      performance: 'High Performance - Optimized components with TypeScript support',
      responsive: 'Responsive Design - Mobile-first responsive components',
      accessibility: 'Accessibility - WAI-ARIA compliant components'
    },
    gettingStarted: {
      title: 'Getting Started',
      installation: {
        title: 'Installation',
        description: 'Install the library in your project:'
      },
      basicUsage: {
        title: 'Basic Usage',
        description: 'Import and use components:'
      }
    },
    categories: {
      title: 'Component Categories',
      basic: {
        title: 'Basic Components',
        button: 'Button - Interactive buttons with multiple variants',
        input: 'Input - Text input fields with validation support',
        card: 'Card - Flexible container component'
      },
      dataDisplay: {
        title: 'Data Display',
        table: 'Table - Powerful data table with sorting and pagination',
        tabs: 'Tabs - Tab navigation component',
        badge: 'Badge - Small count and labeling component'
      },
      form: {
        title: 'Form Components',
        form: 'Form - Complete form solution with validation',
        checkbox: 'Checkbox - Multi-selection component',
        radio: 'Radio - Single selection component',
        select: 'Select - Dropdown selection component'
      }
    },
    i18n: {
      title: 'Internationalization',
      description: 'The library supports multiple languages. Use the language selector in the toolbar to switch between English and Chinese.'
    },
    theming: {
      title: 'Theming',
      description: 'Components support both light and dark themes. Use the theme selector in the toolbar to preview different themes.'
    },
    responsive: {
      title: 'Responsive Testing',
      description: 'Use the viewport controls to test components across different screen sizes:',
      mobile: 'Mobile (375px)',
      tablet: 'Tablet (768px)',
      desktop: 'Desktop (1024px+)'
    },
    development: {
      title: 'Development',
      controls: 'Interactive controls - Adjust props in real-time',
      docs: 'Documentation - Comprehensive API reference',
      examples: 'Code examples - Copy-paste ready examples',
      accessibility: 'Accessibility info - ARIA compliance details'
    },
    ending: 'Happy coding! 🎉'
  },
  zh: {
    title: 'UI 组件库',
    description: '欢迎使用我们的组件库文档。本库提供现代、可访问且高性能的 React 组件，用于构建 Web 应用程序。',
    features: {
      title: '特性',
      theme: '主题定制 - 灵活的主题系统，支持暗黑模式',
      i18n: '国际化 - 内置的多语言支持，适用于全球化应用',
      performance: '高性能 - 经过优化的组件，支持 TypeScript',
      responsive: '响应式设计 - 移动优先的响应式组件',
      accessibility: '可访问性 - 符合 WAI-ARIA 规范'
    },
    gettingStarted: {
      title: '快速开始',
      installation: {
        title: '安装',
        description: '在你的项目中安装组件库：'
      },
      basicUsage: {
        title: '基本使用',
        description: '导入并使用组件：'
      }
    },
    categories: {
      title: '组件分类',
      basic: {
        title: '基础组件',
        button: '按钮 - 具有多种变体的交互按钮',
        input: '输入框 - 带有验证支持的文本输入字段',
        card: '卡片 - 灵活的容器组件'
      },
      dataDisplay: {
        title: '数据展示',
        table: '表格 - 功能强大的数据表格，支持排序和分页',
        tabs: '标签页 - 标签导航组件',
        badge: '徽章 - 小型计数和标签组件'
      },
      form: {
        title: '表单组件',
        form: '表单 - 完整的表单解决方案，支持验证',
        checkbox: '复选框 - 多选组件',
        radio: '单选框 - 单选组件',
        select: '选择器 - 下拉选择组件'
      }
    },
    i18n: {
      title: '国际化',
      description: '本库支持多种语言。使用工具栏中的语言选择器在中文和英文之间切换。'
    },
    theming: {
      title: '主题',
      description: '组件支持亮色和暗色主题。使用工具栏中的主题选择器预览不同主题。'
    },
    responsive: {
      title: '响应式测试',
      description: '使用视口控件测试不同屏幕尺寸下的组件：',
      mobile: '移动端 (375px)',
      tablet: '平板 (768px)',
      desktop: '桌面 (1024px+)'
    },
    development: {
      title: '开发',
      controls: '交互控件 - 实时调整属性',
      docs: '文档 - 全面的 API 参考',
      examples: '代码示例 - 可直接复制使用的示例',
      accessibility: '可访问性信息 - ARIA 合规详情'
    },
    ending: '开始编码吧！🎉'
  }
};