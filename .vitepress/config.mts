import { defineConfigWithTheme } from 'vitepress'
import mdItCustomAttrs from 'markdown-it-custom-attrs'
export interface ThemeConfig {
  //navBar
  menuList: { name: string; url: string }[]

  //banner
  videoBanner: boolean
  name: string
  welcomeText: string
  motto: string[]
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
    // 图片灯箱
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.bootcdn.net/ajax/libs/fancyapps-ui/4.0.31/fancybox.css',
      },
    ],
    [
      'script',
      {
        src: 'https://cdn.bootcdn.net/ajax/libs/fancyapps-ui/4.0.31/fancybox.umd.js',
      },
    ],
  ],
  ignoreDeadLinks: true,
  // 生成站点地图
  // sitemap: {
  //   hostname: 'https://ushio-noa.ip-dynamic.org',
  // },
  title: "CyanTea's blog",
  description: "CyanTea's blog",
  themeConfig: {
    // navBar
    menuList: [
      { name: '首页', url: '' },
      { name: '标签', url: 'tags/' },
    ],

    //banner区配置
    videoBanner: false,
    name: "CyanTea's blog",
    welcomeText: '生命不息，折腾不止',
    motto: ['所在皆是奇迹的起点。', '何気ない日常で、ほんの少しの奇跡を見つける物語。'],
    social: [
      { icon: 'github', url: 'https://github.com/peg195-dfgg' },
      { icon: 'bilibili', url: 'https://space.bilibili.com/2068641947' },
      { icon: 'qq', url: 'https://qm.qq.com/q/Dlt4aYuXlI' },
      { icon: 'wechat', url: '#' },
    ],

    //footer配置
    footerName: 'CyanTea',
    poweredList: [
      { name: 'FreeDNS', url: 'https://freedns.afraid.org/' },
      { name: 'Vercel', url: 'https://vercel.com' },
      { name: 'CC BY-SA 4.0', url: 'https://creativecommons.org/licenses/by-sa/4.0/' },
      { name: 'MCICP备0000000014号', url: 'https://icp.mcsite.cc/mc/0000000014.html' },
      { name: '萌ICP备20230195号', url: 'https://icp.gov.moe/?keyword=20230195' },

    ],

    //gitalk配置
    clientID: 'Ov23li8PDfjmbibzbIfK',
    clientSecret: '1fb1febf049d17991864ad77b09bcfbc8c61e5be',
    repo: 'peg195-blog',
    owner: 'peg195-dfgg',
    admin: ['peg195-dfgg'],
  },
  markdown: {
    theme: 'github-light',
    lineNumbers: true,
    math: true,
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': 'gallery',
      })
    },
  },
})
