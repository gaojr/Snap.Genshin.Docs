import type { SidebarConfig } from '@vuepress/theme-default'

export const main: SidebarConfig = {
  '/':[
    {
      text: '开始使用',
      collapsible: false,
      children: [
        '/quick-start/',
        '/quick-start/features-overview',
      ]
    },
    {
      text: "文档目录",
      link: "/documents"
    },
    {
      text: '功能指南',
      collapsible: false,
      children: [
        '/documents/features/game-launcher.md',
        '/documents/features/Hutao-API.md',
        '/documents/features/account-switch.md',
        '/documents/features/mhy-account-switch.md',
        '/documents/features/unlock-framerate.md',
        '/documents/features/promotion-calculator.md',
        '/documents/features/wish-export.md',
        '/documents/features/achievements.md',
        '/documents/features/customize-webpage.md',
      ],
    },

    {
      text: '常见问题',
      collapsible: false,
      children: [
        '/documents/FAQ/failed-load.md',
        '/documents/FAQ/program-crash.md',
        '/documents/FAQ/about-sign-in.md',
        //'/documents/FAQ/dotNET-env.md',
        //'/documents/FAQ/how-to-quit-program.md',
        '/documents/FAQ/DailyNote-no-data.md',
        "/documents/FAQ/update-errors.md",
        '/documents/FAQ/transfer-from-other-wish-export.md',
        '/documents/FAQ/WebView2-env.md',      
        "/documents/FAQ/No-permission.md",
        "/documents/FAQ/metadata-update.md",
        "/documents/FAQ/backup-data.md",
        "/documents/FAQ/HoYoLAB-support.md",
      ],
    },
	
	{
      text: '拓展插件',
      collapsible: false,
      children: [
        '/documents/extensions/README.md',
        '/documents/extensions/GamebarWidget.md',
        '/documents/extensions/Genshin-Launcher-Plus-SE-Plugin.md'
      ],
    },

    {
      text: '声明文档',
      collapsible: false,
      children: [
        '/documents/statement/bug-report.md',
        '/documents/statement/user-privacy-notice.md',
        '/documents/statement/sponsor.md',
      ],
    }
  ],
  
  '/development': [
    {
      text: "开发指南",
      collapsible: false,
      children: [
        '/development/UIGF',
        '/development/UIAF',
        '/development/DeveloperGuide',
        '/development/PluginTutorial',
        '/development/ApiDoc',
        '/development/ThirdPartyAccess'
      ]
    }
  ],
}
