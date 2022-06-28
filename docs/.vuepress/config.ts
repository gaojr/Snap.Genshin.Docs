import {defineUserConfig} from '@vuepress/cli'
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
        text: '加入交流群',
        link: "/groups/"
      },
      {
        text: '下载',
        link: '/quick-start/README.md#下载-snap-genshin'
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
