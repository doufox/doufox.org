module.exports = {
    title: 'Doufox',
    description: 'Doufox 网站内容管理系统',
    head: [
        ['meta', { name: 'renderer', content: 'webkit' }],
        ['meta', { name: 'force-rendering', content: 'webkit' }],
        ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge, chrome=1' }],
        ['meta', { name: 'author', content: 'CROGRAM' }],
        ['meta', { name: 'copyright', content: 'CROGRAM 程江开源' }],
        ['meta', { name: 'Description', content: 'Doufox 网站内容管理系统' }],
        ['meta', { name: 'Keywords', content: 'Doufox,网站内容管理系统,PHP,CMS' }],
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: '使用手册',
                ariaLabel: '使用手册',
                items: [
                    { text: '项目结构', link: '/path_tree' },
                    { text: '系统安装', link: '/install' },
                    { text: '路由', link: '/router' },
                    { text: '插件', link: '/plugin' },
                    { text: '模板配置文件', link: '/template/config' },
                    { text: '模板标签', link: '/template/tags' },
                    { text: '自定义字段', link: '/fields' },
                    { text: '伪静态规则', link: '/rewrite' }
                ]
            },
            {
                text: '了解更多',
                ariaLabel: '了解更多',
                items: [
                    { text: '使用条款', link: '/legal' },
                    { text: '官方网站', link: 'http://doufox.com' }
                ]
            }
        ],
        repo: 'Doufox/doufox',
        repoLabel: '查看源码',
        docsRepo: 'Doufox/doufox.org',
        docsBranch: 'main',
        docsDir: 'docs/', // 文档源文件存放在仓库中的目录名
        lastUpdated: '上次更新',
        editLinks: true,
        editLinkText: '帮助我们改善此页面!'
    }
}
