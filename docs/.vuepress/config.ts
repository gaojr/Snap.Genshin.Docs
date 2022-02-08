import {defineUserConfig} from 'vuepress'
import type {DefaultThemeOptions} from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  head: [["link", {rel: "icon", href: "/logo/favicon.ico"}]],
  lang: 'zh-CN',
  title: 'Snap Genshin',
  description: '原神启动器',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/logo/SGLogo.png',
    navbar: [
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: '功能',
        link: '/features/'
      },
      {
        text: '常见问题',
        link: '/FAQ/'
      },
      {
        text: '隐私协议',
        link: '/privacy/'
      },
      {
        text: '开发',
        children: [
          {
            text: '统一可交换祈愿记录标准 v2.1',
            link: '/development/StandardFormat.md'
          },
          {
            text: '开发人员指南',
            link: '/development/DeveloperGuide.md'
          },
          {
            text: '插件开发',
            link: '/development/PluginTutorial.md'
          },
        ]
      },
      {
        text: '交流',
        children: [
          {
            text: 'QQ群',
            children: [
              {
                text: '982424236',
                link: 'https://jq.qq.com/?_wv=1027&k=pCOEg7fJ'
              },
              {
                text: '547288075',
                link: 'https://jq.qq.com/?_wv=1027&k=cgh9S2XW'
              },
              {
                text: '910780153',
                link: 'https://jq.qq.com/?_wv=1027&k=MHLNhhYJ'
              }
            ]
          }
        ]
      },
      {
        text: '下载',
        link: 'https://github.com/DGP-Studio/Snap.Genshin/releases'
      },
      {
        text: '爱发电',
        link: 'https://afdian.net/@DismissedLight'
      },
    ],
    repo: 'DGP-Studio/Snap.Genshin',
    editLink: true,
    editLinkText: '编辑此页',
    docsRepo: 'DGP-Studio/Snap.Genshin.Docs',
    docsBranch: 'main',
    docsDir: 'docs',
    contributors: false,
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
    ]
  ]
})
