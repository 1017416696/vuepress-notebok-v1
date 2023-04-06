module.exports = {
//    站点的标题、页签副标题
    title: 'Penrose个人笔记',
//    站点首页的描述信息
    description: '记录自己在Obsidian中的笔记',
/*
      head 中可以添加 html 中 head 标签中的内容，css、js以及一些 meta 信息
      html中的head标签中内容，最终会被编译为
      <link rel="icon" href="/icon.svg">
*/
    head: [
        ['link', { rel: 'icon', href: '/icon.svg' }]
    ],
//    本地服务器的主机名，默认为 localhost
    host: '10.1.11.162',
    //    为代码块添加行号
    markdown: {
        lineNumbers: true
    },
/*
      插件配置
      通过插件可为vuepress添加全局功能
      插件分为官方插件和社区插件，社区插件需要自行下载
      官方插件地址  https://vuepress.vuejs.org/zh/plugin/#%E6%A0%B7%E4%BE%8B
 */
    plugins: {
//        根据文档目录结构自动生成侧边栏插件
//        插件具体的配置查看下面的链接
//        https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/zh/#%E4%BB%8B%E7%BB%8D
        "vuepress-plugin-auto-sidebar": {
//            按文件夹默认样式展示侧边栏标题
            title: {
                mode: "default"
            },
//            开启侧边栏折叠
            collapse: {
                open: true
            }
        },
//        代码复制插件
        "vuepress-plugin-code-copy": {
            color: '#11de70',
            successText: '复制成功'
        },
//        back-to-top 插件
        "@vuepress/back-to-top": {}
    },
//    引用 reco 主题
    theme:'reco',
//    reco 主题配置
    themeConfig: {
//        关闭 reco 主题中的404页面
        noFoundPageByTencent: false,
//        导航栏左侧logo
        logo: '/logo.png',
        repo: 'https://github.com/1017416696/vuepress-notebok-v1',
        author: 'Penrose',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
//        站点导航栏
        nav: [
            { text: 'HTML', link: '/HTML/' },
            { text: 'CSS', link: '/CSS/' },
            { text: 'Vue', link: '/Vue/' },
            { text: 'Vue-Router', link: '/Vue-Router/' },
        ],
        //        利用 reco 插件开启子侧边栏
        subSidebar: 'auto'
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
    }
}



