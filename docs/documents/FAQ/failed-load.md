# 主程序无法启动

## 更新.NET 6.0.3 桌面运行环境

- 自`2022.02.18`版本后，Snap Genshin需要`.NET 桌面运行时 6.0.3` (`.NET 6.0.3 Desktop Runtime`) 或更高版本的运行环境

  - 你可以在命令提示符或 Windows PowerShell 中运行`dotnet --list-runtimes` 命令来判断系统中是否包含所需组件

    - 返回结果中应如下图一样，包含`Microsoft.WindowsDesktop.App 6.0.3`

      ![](https://img.snapgenshin.com/imgs/2022/03/161f052144c1e32d.png)

  - 你可以从以下位置下载到安装包
    - [Snap Genshin资源中心](https://resource.snapgenshin.com/Environment/)
    - [主群 (910780153) ](https://jq.qq.com/?_wv=1027&k=MHLNhhYJ)群文件的`Snap.Genshin 运行环境`文件夹
    - [微软官方下载中心](https://dotnet.microsoft.com/zh-cn/download/dotnet/thank-you/runtime-desktop-6.0.2-windows-x64-installer)

## 尝试覆盖安装最新版本

- 部分Snap Genshin版本存在已知的更新问题
  - 你可以尝试重新下载程序并覆盖所有当前文件，你的祈愿记录不会丢失

## 尝试删除所有插件
- 可能加载了不合法或者旧版的插件
  - 删除或重命名目录下的Plugins文件夹
    - 删除或重命名文件夹内的文件也是可以的
  - 删除或重命名主目录下`implementations.json`文件
    - `implementations.json` --> `implementations.json.bak`

## 还是不行？

- 你可以在主群 ([910780153](https://jq.qq.com/?_wv=1027&k=MHLNhhYJ)) 反馈问题

