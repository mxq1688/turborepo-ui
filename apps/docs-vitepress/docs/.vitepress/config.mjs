import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'UI Component Library',
  description: 'A Vue & React component library documentation',
  base: '/',
  
  // 国际化配置
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'UI Component Library',
      description: 'A Vue & React component library documentation',
      
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Components', link: '/components/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'Resources', link: '/resources/' }
        ],

        sidebar: {
          '/components/': [
            {
              text: 'Basic Components',
              items: [
                { text: 'Button', link: '/components/button' },
                { text: 'Input', link: '/components/input' },
                { text: 'Card', link: '/components/card' }
              ]
            },
            {
              text: 'Form Components',
              items: [
                { text: 'Checkbox', link: '/components/checkbox' },
                { text: 'Radio', link: '/components/radio' },
                { text: 'Select', link: '/components/select' },
                { text: 'Switch', link: '/components/switch' },
                { text: 'Upload', link: '/components/upload' },
                { text: 'DatePicker', link: '/components/datepicker' },
                { text: 'Form', link: '/components/form' }
              ]
            },
            {
              text: 'Data Display',
              items: [
                { text: 'Table', link: '/components/table' },
                { text: 'Tabs', link: '/components/tabs' },
                { text: 'Avatar', link: '/components/avatar' },
                { text: 'Badge', link: '/components/badge' },
                { text: 'Alert', link: '/components/alert' }
              ]
            },
            {
              text: 'Feedback',
              items: [
                { text: 'Loading', link: '/components/loading' },
                { text: 'Modal', link: '/components/modal' }
              ]
            },
            {
              text: 'System',
              items: [
                { text: 'Theme', link: '/components/theme' },
                { text: 'Internationalization', link: '/components/i18n' }
              ]
            }
          ],
          '/guide/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Installation', link: '/guide/installation' },
                { text: 'Quick Start', link: '/guide/quick-start' },
                { text: 'Theming', link: '/guide/theming' },
                { text: 'TypeScript', link: '/guide/typescript' }
              ]
            },
            {
              text: 'Advanced',
              items: [
                { text: 'Customization', link: '/guide/customization' },
                { text: 'Migration', link: '/guide/migration' },
                { text: 'FAQ', link: '/guide/faq' }
              ]
            }
          ]
        },

        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2024-present UI Component Library Team'
        }
      }
    },
    
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'UI 组件库',
      description: 'Vue 和 React 组件库文档',
      
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '组件', link: '/zh/components/' },
          { text: '指南', link: '/zh/guide/' },
          { text: '资源', link: '/zh/resources/' }
        ],

        sidebar: {
          '/zh/components/': [
            {
              text: '基础组件',
              items: [
                { text: 'Button 按钮', link: '/zh/components/button' },
                { text: 'Input 输入框', link: '/zh/components/input' },
                { text: 'Card 卡片', link: '/zh/components/card' }
              ]
            },
            {
              text: '表单组件',
              items: [
                { text: 'Checkbox 多选框', link: '/zh/components/checkbox' },
                { text: 'Radio 单选框', link: '/zh/components/radio' },
                { text: 'Select 选择器', link: '/zh/components/select' },
                { text: 'Switch 开关', link: '/zh/components/switch' },
                { text: 'Upload 上传', link: '/zh/components/upload' },
                { text: 'DatePicker 日期选择', link: '/zh/components/datepicker' },
                { text: 'Form 表单', link: '/zh/components/form' }
              ]
            },
            {
              text: '数据展示',
              items: [
                { text: 'Table 表格', link: '/zh/components/table' },
                { text: 'Tabs 标签页', link: '/zh/components/tabs' },
                { text: 'Avatar 头像', link: '/zh/components/avatar' },
                { text: 'Badge 徽标', link: '/zh/components/badge' },
                { text: 'Alert 警告提示', link: '/zh/components/alert' }
              ]
            },
            {
              text: '反馈组件',
              items: [
                { text: 'Loading 加载', link: '/zh/components/loading' },
                { text: 'Modal 对话框', link: '/zh/components/modal' }
              ]
            },
            {
              text: '系统功能',
              items: [
                { text: 'Theme 主题定制', link: '/zh/components/theme' },
                { text: 'I18n 国际化', link: '/zh/components/i18n' }
              ]
            }
          ],
          '/zh/guide/': [
            {
              text: '快速开始',
              items: [
                { text: '安装', link: '/zh/guide/installation' },
                { text: '快速上手', link: '/zh/guide/quick-start' },
                { text: '主题定制', link: '/zh/guide/theming' },
                { text: 'TypeScript', link: '/zh/guide/typescript' }
              ]
            },
            {
              text: '进阶',
              items: [
                { text: '深度定制', link: '/zh/guide/customization' },
                { text: '迁移指南', link: '/zh/guide/migration' },
                { text: '常见问题', link: '/zh/guide/faq' }
              ]
            }
          ]
        },

        footer: {
          message: '基于 MIT 许可发布',
          copyright: '版权所有 © 2024-present UI 组件库团队'
        }
      }
    }
  },

  themeConfig: {
    // 全局导航
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' },
      { text: 'Guide', link: '/guide/' }
    ],

    sidebar: {
      '/components/': [
        {
          text: 'Basic Components',
          items: [
            { text: 'Button', link: '/components/button' },
            { text: 'Input', link: '/components/input' },
            { text: 'Card', link: '/components/card' }
          ]
        },
        {
          text: 'Form Components',
          items: [
            { text: 'Checkbox', link: '/components/checkbox' },
            { text: 'Radio', link: '/components/radio' },
            { text: 'Select', link: '/components/select' },
            { text: 'Switch', link: '/components/switch' },
            { text: 'Upload', link: '/components/upload' },
            { text: 'DatePicker', link: '/components/datepicker' },
            { text: 'Form', link: '/components/form' }
          ]
        },
        {
          text: 'Data Display',
          items: [
            { text: 'Table', link: '/components/table' },
            { text: 'Tabs', link: '/components/tabs' },
            { text: 'Avatar', link: '/components/avatar' },
            { text: 'Badge', link: '/components/badge' },
            { text: 'Alert', link: '/components/alert' }
          ]
        },
        {
          text: 'Feedback',
          items: [
            { text: 'Loading', link: '/components/loading' },
            { text: 'Modal', link: '/components/modal' }
          ]
        }
      ],
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Quick Start', link: '/guide/quick-start' },
            { text: 'Theming', link: '/guide/theming' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/turborepo-ui' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Your Name'
    },

    // 搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                }
              }
            }
          }
        }
      }
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/your-username/turborepo-ui/edit/main/apps/docs-vitepress/docs/:path',
      text: 'Edit this page on GitHub'
    }
  },

  // Markdown配置
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },

  // 构建配置
  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    }
  }
}) 