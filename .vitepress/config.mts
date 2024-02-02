import { defineConfig } from 'vitepress'
import { en } from './en.mts'
import { zh_Hans } from './zh_Hans.mts'
import { search as zhHansSearch } from './zh_Hans.mts'

export default defineConfig({

  srcDir: "./docs",
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  locales: {
    root: { label: 'English', ...en },
    zh_Hans: { label: '简体中文', ...zh_Hans }
  },

  themeConfig: {
    logo: '/logo.svg',
    externalLinkIcon: true,

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/5hgtU72w33' },
      { icon: 'github', link: 'https://github.com/Leaves' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: { ...zhHansSearch }
      }
    }
  }
})
