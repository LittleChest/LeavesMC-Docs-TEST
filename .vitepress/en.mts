import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
  lang: 'en',
  title: "LeavesMC Documentation",
  description: "Documentation for all projects made by The LeavesMC team.",

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/Leaves/': { base: '/Leaves/', items: sidebarLeaves() }
    },

    editLink: {
      pattern: 'https://github.com/LeavesMC/Document/edit/main/docs/:path'
    },

    footer: {
      message: 'All documents are licensed under CC BY-SA 4.0',
      copyright: '© 2024 The LeavesMC Team'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Home',
      link: '/',
      activeMatch: '/'
    },
    {
      text: 'Leaves',
      link: '/Leaves/getting-started',
      activeMatch: '/Leaves/'
    },
    {
      text: 'Main Site',
      link: 'https://leavesmc.top/?ref=docs'
    }
  ]
}

function sidebarLeaves(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Getting Started', link: 'getting-started' }
      ]
    }
  ]
}
