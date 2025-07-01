import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'UI Component Library',
  description: 'A Vue & React component library documentation',
  base: '/',
  
  themeConfig: {
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
    }
  }
}) 