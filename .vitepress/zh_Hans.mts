import {defineConfig, type DefaultTheme} from 'vitepress'

export const zh_Hans = defineConfig({
    lang: 'zh-Hans',
    title: "LeavesMC 文档",
    description: "LeavesMC 团队的所有项目文档。",

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/zh_Hans/Leaves/': {base: '/zh_Hans/Leaves/', items: sidebarLeaves()}
        },

        editLink: {
            pattern: 'https://github.com/LeavesMC/Document/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },

        footer: {
            message: '所有文档采用 CC BY-SA 4.0 许可协议发布',
            copyright: '© 2024 LeavesMC 团队'
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            label: '总览'
        },

        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },

        langMenuLabel: '切换语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: '主页',
            link: '/zh_Hans/'
        },
        {
            text: 'Leaves',
            link: '/zh_Hans/Leaves/getting-started',
            activeMatch: '/Leaves/'
        },
        {
            text: '更多',
            items: [
                {
                    text: '主站',
                    link: 'https://leavesmc.top/?ref=docs'
                },
                {
                    text: 'Javadocs',
                    link: 'https://repo.leavesmc.top'
                }
            ]
        }
    ]
}

function sidebarLeaves(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '介绍',
            collapsed: false,
            items: [
                {text: '快速开始', link: 'getting-started'}
            ]
        }
    ]
}

export const search: DefaultTheme.LocalSearchOptions['locales'] = {
    zh_Hans: {
        translations: {
            button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
            },
            modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                    selectText: '选择',
                    navigateText: '切换'
                }
            }
        }
    }
}
