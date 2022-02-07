# 常见问题

## 戴尔设备图片异常放大或模糊

如果你在使用Snap Genshin时发现有类似于下图的，图片被异常放大或模糊问题，且为戴尔设备时，请**卸载AWCC**

![Dell-AWCC-error1](/img/Dell-AWCC-error1.jpg)

![Dell-AWCC-error2](/img/Dell-AWCC-error2.jpg)

## .NET 环境缺失

### 常规方法

![dotnet_env_warning](/img/dotnet_env_warning.png)

在第一次使用Snap Genshin时，若系统有如上的环境报错，请选择`是`。系统将自动唤起浏览器并跳转到对应的微软.NET运行环境包下载页面，在该页面，选择中间`Run desktop apps`下方的`Download x64`即可下载.NET环境包，安装完成后即可运行Snap Genshin

![dotnet_env_download](/img/dotnet_env_download.png)

### 备选方案

如果你仍然无法理解上述的常规解决方案，你可以加入我们的QQ群（910780153）。在群文件中的`Snap.Genshin运行环境` 文件夹中可以找到环境安装包。下载后启动即可一键安装缺失的环境。

## 为什么重启没有解决问题

> 副标题：如何重启 Snap Genshin 主程序

- Snap Genshin 会常驻后台以更新下信息
    - 所以需要从托盘彻底关闭 Snap Genshin

![](/img/quit-program.png)

## 游戏启动路径错误

![launcher-path-error](/img/launcher-path-error.png)

当你在设置Snap Genshin游戏启动器时设置了错误路径，你会看到如此的报错，如果你知道正确的路径或想再次尝试设置，你可以执行以下步骤重置游戏启动器的路径设置

- 在系统托盘中，完全退出Snap Genshin

- 在Snap Genshin目录中，找到名为`settings.json`的配置文件，以记事本或其它编辑器方式打开它

- 找到`LauncherPath`字段，删除它的值

    - 它看起来会是这样的

  ```json
  {
      "LauncherPath": ""
  }
  ```

- 保存并关闭`settings.json`，重新启动Snap Genshin

- 此时，再次点击`启动游戏`，你将可以重新设置路径

## 从其它祈愿记录导出工具转移数据

:::tip
保持同时使用多个祈愿记录导出工具可以有效地防止因某一工具临时失效而造成数据丢失
:::

### [Genshin Wish Export](https://github.com/biuuu/genshin-wish-export)

<img src="/img/gwe-screenshot.png" alt="gwe" style="zoom:75%;" />

#### 方法一 （推荐）

Genshin Wish Export 提供了原生的，导出为UIGF Json 文件的功能

- 在主界面点击右上角的`选项`
    - 在`导出到其它工具`一行中选择`导出JSON`，导出 Json 文件
- 进入 Snap Genshin 的祈愿记录页面
    - 选择`导入 UIGF 2.2 Json 文件`
    - 选择刚刚从Genshin Wish Export 导出的文件
    - 完成数据转移

#### 方法二（已停用）

[genshin-wish-export-uigf-converter](https://github.com/Masterain98/genshin-wish-export-uigf-converter) 是一个来自第三方的，用于将 Genshin Wish Export 导出的 Excel 文件进行 UIGF 格式标准化处理的工具

- 在 Genshin Wish Export 主界面点击`导出Excel`将文件保存于合适的目录中
- 在 [GitHub Release 页面](https://github.com/Masterain98/genshin-wish-export-uigf-converter/releases) 或QQ群文件中下载最新版的 genshin-wish-export-uigf-converter 工具
- 解压 genshin-wish-export-uigf-converter
- 点击启动exe主程序
    - 拖入`genshin-wish-expoert`导出的Excel文件，或者手动输入该文件的路径（同目录下只需输入该文件的文件名）
    - 输入你的游戏 UID
    - 选择是否放弃近6个月的祈愿记录**（建议放弃）**
        1. 如果不放弃，则在使用新的祈愿导出工具时会出现祈愿记录重复的情况
        2. 如果放弃，6个月内的数据可以由 Snap Genshin 或其它支持 UIGF 格式的祈愿导出工具重新从原神服务器获取
    - 等待程序运行完成，导出文件名为`uigf_游戏UID.xlsx`
- 进入 Snap Genshin 的祈愿记录页面
    - 选择 `导入 UIGF 2.2 Excel文件`
    - 选择刚刚由 genshin-wish-export-uigf-converter 导出的Excel文件
    - 完成数据转移

![gwe-converter-how-to-use](/img/gwe-converter-how-to-use.gif)

## WebView2环境缺失错误

解决方案有三，可分别尝试：

1. 升级到最新版 Windows 10 或 Windows 11
2. 下载安装最新版Edge浏览器
3. 从微软官方下载并安装 WebView2 环境
    1. 访问 https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/
    2. 拉到底部，找到`Evergreen Standalone Installer` (`常青版独立安装程序`)
    3. 选择`x64` 下载
    4. 按提示安装

