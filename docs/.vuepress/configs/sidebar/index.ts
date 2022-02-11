import type { SidebarConfig } from '@vuepress/theme-default'

export const main: SidebarConfig = {
  '/guide/': [
    {
      text: '快速开始',
      children: [
        '/guide/README.md',
      ],
    },
  ],

  '/features/': [
    {
      text: '操作指南',
      children: [
        '/features/game-launcher.md',
        '/features/account-switch.md',
        '/features/mhy-account-switch.md',
        '/features/unlock-framerate.md',
        '/features/wish-export.md',
      ],
    },
  ],

  '/FAQ/': [
    {
      text: '常见问题',
      children: [
        '/FAQ/Dell-AWCC-error.md',
        '/FAQ/dotNET-env.md',
        '/FAQ/how-to-quit-program.md',
        '/FAQ/launcher-path-error.md',
        '/FAQ/transfer-from-other-wish-export.md',
        '/FAQ/WebView2-env.md',
      ],
    },
  ],
}