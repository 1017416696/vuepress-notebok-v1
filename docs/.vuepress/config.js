module.exports = {
    title: 'Penrose个人笔记',
    description: '记录自己在Obsidian中的笔记',
    head: [
//        head 中可以添加 html 中 header 标签中的内容，css、js以及一些 meta 信息
        ['link', { rel: 'icon', href: '/icon.svg' }]
    ],
//    为代码块添加行号
    markdown: {
        lineNumbers: true
    },
    host: '10.1.11.162',
    plugins: {
        "vuepress-plugin-auto-sidebar": {
            title: {
                mode: "default"
            },
            collapse: {
                open: true
            }
        },
        'vuepress-plugin-nprogress': {
            color: '#29d',
            showSpinner: false
        },
        "vuepress-plugin-code-copy": {},
    },
    theme:'reco',
    themeConfig: {
        noFoundPageByTencent: false,
        noFooter: true,
        logo: '/logo.png',
        repo: 'https://github.com/username/repo',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
//        导航栏
        nav: [
            { text: 'HTML', link: '/HTML/' },
            { text: 'CSS', link: '/CSS/' },
            { text: 'Vue', link: '/Vue/' },
            { text: 'Vue-Router', link: '/Vue-Router/' },
        ],
//        侧边栏
//        sidebar: {
//            '/html': [
//                {
//                    title: 'html',
//                    collapsable: true,
//                },
//            ],
//            '/css': [
//                {
//                    title: 'CSS',
//                    collapsable: true,
//                }
//            ],
//            '/vue': [
//                {
//                    title: 'Vue',
//                    collapsable: true,
//
//                }
//            ],
//            '/vue-router': [
//                {
//                    title: 'Vue-Router',
//                    collapsable: true,
//
//                }
//            ]
//        }

//        利用 reco 插件开启子侧边栏
        subSidebar: 'auto'
    }
}



