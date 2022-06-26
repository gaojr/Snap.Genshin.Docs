---
pageClass: communication-group
externalLinkIcon: true
---
# 快速开始

## 最低系统要求
|要求|规格|
|-|-|
|**最低可运行系统版本**|Windows 7 SP1 - 6.1.0|
|**最低兼容系统版本**|Windows 10 1903 - 10.0.18362.0|
|**推荐系统版本**|Windows 11 21H2 - 10.0.22000.0|
|运行时**最低兼容版本**|.NET Desktop Runtime 6.0.2|
|运行时**推荐版本**|.NET Desktop Runtime 6.0.5|
|可选组件|WebView2 Runtime|

## 下载 Snap Genshin

- Snap Genshin 的软件和其它资源都开源、发布于 [GitHub](https://github.com/DGP-Studio/Snap.Genshin/releases) 并自动同步至 [Snap Genshin 资源中心](https://resource.snapgenshin.com/)
  - 我们推荐有网络连接问题的中国大陆地区用户使用 Snap Genshin 资源中心下载所需要的内容，以获得最好的下载速度
### 软件本体
Snap Genshin 软件本体为一个名为 `Publish.zip` 的压缩包，本页文档剩余部分包含了其完整的使用指导

1. [**Snap Genshin 软件本体**从 GitHub 下载 ](https://github.com/DGP-Studio/Snap.Genshin/releases/latest/download/Publish.zip)
2. [**Snap Genshin 软件本体**从 Snap Genshin 资源中心下载 ](https://resource.snapgenshin.com/Publish.zip)
### 安装器
Snap Genshin 安装器将自动安装用户缺少的系统环境，下载 Snap Genshin 软件本体并置于用户桌面

1. [**Snap Genshin 安装器**从 GitHub 下载 ](https://github.com/Masterain98/Snap.Genshin.PyInstaller/releases/latest/download/Snap.Genshin.Installer.exe)
2. [**Snap Genshin 安装器**从 Snap Genshin 资源中心下载 ](https://resource.snapgenshin.com/Snap%20Genshin%20%E5%AE%89%E8%A3%85%E5%99%A8.exe)

## 启动 Snap Genshin

- 将下载的压缩包内容**完整解压**到你认为合适的目录进行解压缩
  - **请勿**将 Snap Genshin 置于以下种类的目录下，包括但不限于：
  
    - 需要管理员权限才可以使用的目录，如：
  
       - 系统分区的 `/Windows` 目录
  
       - `Program Files` 或 `Program Files (x86)` 目录
  
    - 路径中包含中文的目录
    - 没有写入权限的目录
  
  - 推荐将 Snap Genshin 目录置于桌面、文档库或非系统分区内，并与其它绿色软件做统一管理
  
- 启动名为 `DGP.Genshin.exe` 的主程序
  - 如果弹窗出现缺少 `.NET` 环境错误，可参阅 [.NET 环境缺失](./FAQ/dotNET-env.md)文档
  
- 此时，你应当已经可以看到 Snap Genshin 程序界面

## 初始化设置

在第一次成功打开程序后，你首先需要设置你的米游社Cookie，否则我们无法获取到你的帐号信息从而提供相应的功能。

- 点击 `设置Cookie` 按钮
- 点击自动获取下方的 `在新窗口中登录` 按钮
- 等待新窗口中的米游社加载完成后，在米游社中登录你的帐号
- 登录完成后，点击新窗口右上角的 `继续`
- 此时，你就完成了Snap Genshin的初始化设置了

<style lang="scss" scoped>

.communication-group{
  ol {
    display: inherit;
    li {
      cursor: pointer;
      display: inline-block;
      margin: 10px 0;
      width: 98%;
      font-size: 16px;
      border: 1px solid var(--c-border-dark);
      border-radius: 5px;
      transition: all .3s;
      text-align: right;
      a {
        display: inline-block;
        position: relative;
        width: 100%;
        height: 100%;
        opacity: .8;
        padding: 10px 20px;
        box-sizing: border-box;
        transition: all .3s;
        strong {
          position: absolute;
          left: 25px;
        }
        &:hover{
          opacity: 1;
          text-decoration:none!important;
        }
      }
      &:hover{
        transform: translate3d(0, -2px, 0);
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
      }
    }
  }
}
</style>