import { defineConfigWithTheme } from 'vitepress'
export interface ThemeConfig {
  //navBar
  menuList: { name: string; url: string }[]

  //banner
  name: string
  welcomeText: string
  motto: string
  social: { icon: string; url: string }[]

  //footer
  footerName: string
  poweredList: { name: string; url: string }[]

  //gitalk
  clientID: string
  clientSecret: string
  repo: string
  owner: string
  admin: string[]
}

export default defineConfigWithTheme<ThemeConfig>({
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    // gitalk
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/gitalk/dist/gitalk.css' }],
    ['script', { src: 'https://unpkg.com/gitalk/dist/gitalk.min.js' }],
    // bluearchive font
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/font/Blueaka/Blueaka.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/font/Blueaka_Bold/Blueaka_Bold.css',
      },
    ],
  ],
  ignoreDeadLinks: true,
  sitemap: {
    hostname: 'https://vitepress-theme-bluearchive.vercel.app',
  },
  title: "peg195's blog",
  description: "peg195's blog",
  themeConfig: {
    // navBar
    menuList: [
      { name: '首页', url: '' },
      { name: '标签', url: 'tags/' },
    ],

    //banner区配置
    name: "peg195's blog",
    welcomeText: '生命不息,折腾不止',
    motto: '所在皆是奇迹的起点。',
    social: [
      { icon: 'github', url: 'https://jihulab.com/peg' },
      { icon: 'bilibili', url: 'https://space.bilibili.com/2068641947' },
      { icon: 'qq', url: '#' },
      { icon: 'wechat', url: '#' },
    ],

    //footer配置
    footerName: 'peg195',
    poweredList: [
      { name: 'VitePress', url: 'https://github.com/vuejs/vitepress' },
      { name: 'Gitlab CI', url: 'https://gitlab.com' },
      { name: 'MCICP备0000000014号', url: 'https://icp.mcsite.cc/mc/0000000014.html' },
      { name: '萌ICP备20230195号', url: 'https://icp.gov.moe/?keyword=20230195' },
    ],

    //gitalk配置
    clientID: '#',
    clientSecret: '#',
    repo: '#',
    owner: 'peg195',
    admin: ['peg195'],
  },
  markdown: {
    theme: 'github-light',
    lineNumbers: true,
    math: true,
  },
})
