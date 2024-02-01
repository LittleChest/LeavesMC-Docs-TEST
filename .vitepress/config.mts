import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LeavesMC Documentation",
  description: "Documentation for all projects made by The LeavesMC team.",
  srcDir: "./docs",
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    externalLinkIcon: true,

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Leaves', link: '/Leaves/' }
    ],

    footer: {
      copyright: '© 2024 The LeavesMC Team'
    },

    sidebar: [
      {
        text: 'Leaves',
        items: [
          { text: 'Getting Started', link: '/Leaves/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/5hgtU72w33' },
      { icon: 'github', link: 'https://github.com/Leaves' }
    ],

    search: {
      provider: 'local'
    }
  }
})
