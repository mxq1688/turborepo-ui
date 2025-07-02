import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'UI Component Library',
  description: 'A Vue & React component library documentation',
  base: '/',
  
  // 国际化配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'UI 组件库',
      description: 'Vue 和 React 组件库文档',
      
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '组件', link: '/components/' },
          { text: '指南', link: '/guide/' },
          { text: '资源', link: '/resources/' }
        ],

        sidebar: {
          '/components/': [
            {
              text: '基础组件',
              items: [
                { text: 'Button 按钮', link: '/components/button' },
                { text: 'Input 输入框', link: '/components/input' },
                { text: 'Card 卡片', link: '/components/card' }
              ]
            },
            {
              text: '表单组件',
              items: [
                { text: 'Checkbox 多选框', link: '/components/checkbox' },
                { text: 'Radio 单选框', link: '/components/radio' },
                { text: 'Select 选择器', link: '/components/select' },
                { text: 'Switch 开关', link: '/components/switch' },
                { text: 'Upload 上传', link: '/components/upload' },
                { text: 'DatePicker 日期选择', link: '/components/datepicker' },
                { text: 'Form 表单', link: '/components/form' }
              ]
            },
            {
              text: '数据展示',
              items: [
                { text: 'Table 表格', link: '/components/table' },
                { text: 'Tabs 标签页', link: '/components/tabs' },
                { text: 'Avatar 头像', link: '/components/avatar' },
                { text: 'Badge 徽标', link: '/components/badge' },
                { text: 'Alert 警告提示', link: '/components/alert' }
              ]
            },
            {
              text: '反馈组件',
              items: [
                { text: 'Loading 加载', link: '/components/loading' },
                { text: 'Modal 对话框', link: '/components/modal' }
              ]
            },
            {
              text: '系统功能',
              items: [
                { text: 'Theme 主题定制', link: '/components/theme' },
                { text: 'I18n 国际化', link: '/components/i18n' }
              ]
            }
          ],
          '/guide/': [
            {
              text: '快速开始',
              items: [
                { text: '安装', link: '/guide/installation' },
                { text: '快速上手', link: '/guide/quick-start' },
                { text: '主题定制', link: '/guide/theming' },
                { text: 'TypeScript', link: '/guide/typescript' }
              ]
            },
            {
              text: '进阶',
              items: [
                { text: '深度定制', link: '/guide/customization' },
                { text: '迁移指南', link: '/guide/migration' },
                { text: '常见问题', link: '/guide/faq' }
              ]
            }
          ]
        },

        footer: {
          message: '基于 MIT 许可发布',
          copyright: '版权所有 © 2024-present UI 组件库团队'
        }
      }
    },
    
    en: {
      label: 'English',
      lang: 'en',
      title: 'UI Component Library',
      description: 'A Vue & React component library documentation',
      
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Components', link: '/en/components/' },
          { text: 'Guide', link: '/en/guide/' },
          { text: 'Resources', link: '/en/resources/' }
        ],

        sidebar: {
          '/en/components/': [
            {
              text: 'Basic Components',
              items: [
                { text: 'Button', link: '/en/components/button' },
                { text: 'Input', link: '/en/components/input' },
                { text: 'Card', link: '/en/components/card' }
              ]
            },
            {
              text: 'Form Components',
              items: [
                { text: 'Checkbox', link: '/en/components/checkbox' },
                { text: 'Radio', link: '/en/components/radio' },
                { text: 'Select', link: '/en/components/select' },
                { text: 'Switch', link: '/en/components/switch' },
                { text: 'Upload', link: '/en/components/upload' },
                { text: 'DatePicker', link: '/en/components/datepicker' },
                { text: 'Form', link: '/en/components/form' }
              ]
            },
            {
              text: 'Data Display',
              items: [
                { text: 'Table', link: '/en/components/table' },
                { text: 'Tabs', link: '/en/components/tabs' },
                { text: 'Avatar', link: '/en/components/avatar' },
                { text: 'Badge', link: '/en/components/badge' },
                { text: 'Alert', link: '/en/components/alert' }
              ]
            },
            {
              text: 'Feedback',
              items: [
                { text: 'Loading', link: '/en/components/loading' },
                { text: 'Modal', link: '/en/components/modal' }
              ]
            },
            {
              text: 'System',
              items: [
                { text: 'Theme', link: '/en/components/theme' },
                { text: 'Internationalization', link: '/en/components/i18n' }
              ]
            }
          ],
          '/en/guide/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Installation', link: '/en/guide/installation' },
                { text: 'Quick Start', link: '/en/guide/quick-start' },
                { text: 'Theming', link: '/en/guide/theming' },
                { text: 'TypeScript', link: '/en/guide/typescript' }
              ]
            },
            {
              text: 'Advanced',
              items: [
                { text: 'Customization', link: '/en/guide/customization' },
                { text: 'Migration', link: '/en/guide/migration' },
                { text: 'FAQ', link: '/en/guide/faq' }
              ]
            }
          ]
        },

        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2024-present UI Component Library Team'
        }
      }
    }
  },

  themeConfig: {
    // 全局导航
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
          en: {
            translations: {
              button: {
                buttonText: 'Search docs',
                buttonAriaLabel: 'Search docs'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: 'Clear query',
                  resetButtonAriaLabel: 'Clear query',
                  cancelButtonText: 'Cancel',
                  cancelButtonAriaLabel: 'Cancel'
                },
                startScreen: {
                  recentSearchesTitle: 'Recent searches',
                  noRecentSearchesText: 'No recent searches',
                  saveRecentSearchButtonTitle: 'Save to recent searches',
                  removeRecentSearchButtonTitle: 'Remove from recent searches',
                  favoriteSearchesTitle: 'Favorites',
                  removeFavoriteSearchButtonTitle: 'Remove from favorites'
                },
                errorScreen: {
                  titleText: 'Unable to fetch results',
                  helpText: 'You might want to check your network connection'
                },
                footer: {
                  selectText: 'Select',
                  navigateText: 'Navigate',
                  closeText: 'Close'
                },
                noResultsScreen: {
                  noResultsText: 'No results found',
                  suggestedQueryText: 'Try searching for',
                  reportMissingResultsText: 'Believe this query should return results?',
                  reportMissingResultsLinkText: 'Let us know'
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