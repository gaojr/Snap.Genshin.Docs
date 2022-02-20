# 快速开始

## 最低系统要求
|要求|规格|
|-|-|
|**最低可运行系统版本**|Windows 7 SP1 - 6.1.0|
|**最低兼容系统版本**|**Windows 10 1903 - 10.0.18362.0**|  
|推荐系统版本|Windows 11 21H1 - 10.0.22000.0|
|运行时|.NET 6|
|可选组件|WebView2 Runtime|

## 下载 Snap Genshin

你可以在导航栏上找到下载按钮

建议国内用户通过 [腾讯云对象存储](https://download.snapgenshin.com/latest/Publish.zip) 下载，海外用户通过 [Github](https://snap-genshin-docs.pages.dev/api/getDownloadURL?source=github) 下载

~~你可以在 Snap Genshin 的 GitHub 仓库 [release页面](https://github.com/DGP-Studio/Snap.Genshin/releases) 下载名为`Publish.zip`的压缩包文件~~

::: details 腾讯云对象存储下载帮助

为了改善境内的下载速度，我们做了许多努力，最终发现只有在国内搭建下载镜像才能实现我们想要的效果

我们的镜像站采用了以下目录结构：

- /
  - latest/
  - 2022.2.19.20/
  - 2022.2.18.18/
  - 2022.2.15.20/

所以当你想下载旧版本的时候，可以将下载链接中的 `latest` 替换为版本号，例如：`https://download.snapgenshin.com/2022.2.19.20/Publish.zip`

---

`https://download.snapgenshin.com/latest/Publish.zip` 将始终指向最新的发行版

:::

## 启动 Snap Genshin

- 将下载的压缩包内容解压到你认为合适的目录进行解压缩
- 请勿将 Snap Genshin 置于 系统使用的目录下（如`C:\Windows`等）
- 启动为名`DGP.Genshin.exe`的主程序
  - 如果弹窗出现缺少`.NET`环境错误，可参阅 [.NET 环境缺失](./FAQ/dotNET-env.md)
- 此时，你应当已经可以看到 Snap Genshin 程序界面

## 初始化设置

在第一次成功打开程序后，你首先需要设置你的米游社Cookie，否则我们无法获取到你的帐号信息从而提供相应的功能。

- 点击`设置Cookie`按钮
- 点击自动获取下方的`在新窗口中登录`按钮
- 等待新窗口中的米游社加载完成后，在米游社中登录你的帐号
- 登录完成后，点击新窗口右上角的`继续`
- 此时，你就完成了Snap Genshin的初始化设置了
  - 你可以在主窗体标题栏靠右部分找到你的米游社昵称
  - 标题栏中的`实时便笺`、`每日签到`和`旅行札记`也将和你的帐号数据同步
