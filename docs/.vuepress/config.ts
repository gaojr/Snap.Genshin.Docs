import {defineUserConfig} from 'vuepress'
import type {DefaultThemeOptions} from 'vuepress'
import { sidebar } from './configs'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  head: [
    ["link", {rel: "icon", href: "/logo/favicon.ico" }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/cfga@1.0.3", async: true }],
    ["script", {}, `
      window.ga_tid = "UA-222060450-1";
      window.ga_api = "https://da.snapgenshin.cn";
    `]
  ],
  lang: 'zh-CN',
  title: 'Snap Genshin',
  description: '你一定会喜欢的原神工具全家桶',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/logo/SGLogo.png',
    navbar: [
      {
        text: '主页',
        link: '/home/'
      },
      {
        text: "帮助文档",
        link: '/documents'
      },
      {
        text: '开发',
        children: [
          {
            text: '标准化',
            children: [
              {
                text: '统一可交换祈愿记录标准',
                link: '/development/UIGF.md'
              },
              {
                text: '统一可交换成就标准',
                link: '/development/UIAF.md'
              }
            ]
          },
          {
            text: '指南',
            children: [
              {
                text: '开发人员指南',
                link: '/development/DeveloperGuide.md'
              },
              {
                text: '插件开发',
                link: '/development/PluginTutorial.md'
              },
              {
                text: '项目结构',
                link: '/development/ApiDoc.md'
              },
              {
                text: '第三方应用接入',
                link: '/development/ThirdPartyAccess'
              }
            ]
          },
        ]
      },
      {
        text: '交流',
        children: [
          {
            text: '游戏交流群',
            children: [
              {
                text: 'QQ频道',
                link: 'https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=1yQq4Q&appChannel=share&businessType=9&from=246610&biz=ka'
              },
              /*
              {
                text: '547288075',
                link: 'https://jq.qq.com/?_wv=1027&k=cgh9S2XW'
              },
              */
              {
                text: '240095771',
                link: 'https://jq.qq.com/?_wv=1027&k=DUkB0Nyx'
              },
            ]
          },
          {
            text: '问题反馈群',
            children: [
              {
                text: '910780153',
                link: 'https://jq.qq.com/?_wv=1027&k=MHLNhhYJ'
              }
            ]
          },
          {
            text: '程序开发群',
            children: [
              {
                text: '982424236',
                link: 'https://jq.qq.com/?_wv=1027&k=pCOEg7fJ'
              },
            ]
          },
        ]
      },
      {
        text: '下载',
        children: [
          {
            text: '国内用户',
            children: [
              {
                text: '资源中心',
                link: 'https://resource.snapgenshin.com/Publish.zip'
              }
            ]
          },
          {
            text: '海外用户',
            children: [
              {
                text: 'Github',
                link: 'https://github.com/DGP-Studio/Snap.Genshin/releases/latest/download/Publish.zip'
              }
            ]
          },
        ],
      },
      {
        text: '赞助项目',
        link: '/documents/statement/sponsor.md'
      },
      {
        text: "可用性监控",
        link: "https://status.snapgenshin.com/#/"
      },
    ],
    sidebar: sidebar.main,
    repo: 'DGP-Studio/Snap.Genshin',
    editLink: true,
    editLinkText: '编辑此页',
    docsRepo: 'DGP-Studio/Snap.Genshin.Docs',
    docsBranch: 'main',
    docsDir: 'docs',
    contributors: false,
    lastUpdated: false,
    contributorsText: '贡献者',
    lastUpdatedText: '上次更新',
    tip: '提示',
    warning: '警告',
    danger: '危险',
    notFound: ["找不到该页面"],
    backToHome: '返回首页',
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '搜索文档',
            hotKeys: ['/']
          }
        }
      }
    ],
    [
      "vuepress-plugin-clipboard",
      {
        align: "top"
      }
    ]
  ]
})
