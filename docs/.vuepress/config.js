module.exports = {
    title: 'DouFox',
    description: 'DouFox 网站内容管理系统',
    head: [
        ['meta', { name: 'renderer', content: 'webkit' }],
        ['meta', { name: 'force-rendering', content: 'webkit' }],
        ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge, chrome=1' }],
        ['meta', { name: 'author', content: 'CROGRAM' }],
        ['meta', { name: 'copyright', content: 'CROGRAM 程江开源' }],
        ['meta', { name: 'Description', content: 'DouFox 网站内容管理系统' }],
        ['meta', { name: 'Keywords', content: 'DouFox, 网站内容管理系统, PHP' }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Install', link: '/install' }
        ],
        repo: 'doufox/doufox.org',
        docsBranch: 'main',
        docsDir: 'docs/', // 文档源文件存放在仓库中的目录名
        editLinks: true
    }
}
