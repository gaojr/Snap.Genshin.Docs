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
        children: [
          {
            text: '概览',
            link: '/features/'
          },
          {
            text: '启动游戏',
            link: '/features/game-launcher.md'
          },
          {
            text: '解锁帧率',
            link: '/features/unlock-framerate.md'
          },
          {
            text: '原神多帐号切换',
            link: '/features/account-switch.md'
          },
          {
            text: '米游社多帐号切换',
            link: '/features/mhy-account-switch.md'
          },
          {
            text: '祈愿记录导出',
            link: '/features/wish-export.md'
          },
        ]
      },
      {
        text: '常见问题',
        children: [
          {
            text: '.NET 环境缺失错误',
            link: '/FAQ/dotNET-env.md'
          },
          {
            text: 'WebView2环境缺失错误',
            link: '/FAQ/WebView2-env.md'
          },
          {
            text: '游戏启动路径错误',
            link: '/FAQ/launcher-path-error.md'
          },
          {
            text: '戴尔设备图片异常放大或模糊',
            link: '/FAQ/Dell-AWCC-error.md'
          },
          {
            text: '从其它程序转移祈愿记录',
            link: '/FAQ/transfer-from-other-wish-export.md'
          },
          {
            text: '为什么重启没有解决问题',
            link: '/FAQ/how-to-quit-program.md'
          },
        ]
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
        text: '隐私协议',
        link: '/privacy/'
      },
    ]
  },
})