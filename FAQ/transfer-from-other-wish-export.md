# 从其它祈愿记录导出工具转移数据到Snap Genshin

> [!TIP]
> 保持同时使用多个祈愿记录导出工具可以有效地防止因某一工具临时失效而造成数据丢失

## [Genshin Wish Export](https://github.com/biuuu/genshin-wish-export)

<img src="img/gwe-screenshot.png" alt="gwe" style="zoom:75%;" />

### 方法一 （推荐）

Genshin Wish Export 提供了原生的，导出为UIGF Json 文件的功能

- 在主界面点击右上角的`选项`
  - 在`导出到其它工具`一行中选择`导出JSON`，导出 Json 文件
- 进入 Snap Genshin 的祈愿记录页面
  - 选择`导入 UIGF 2.2 Json 文件`
  - 选择刚刚从Genshin Wish Export 导出的文件
  - 完成数据转移

### 方法二（已停用）

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

![gwe-converter-how-to-use](img/gwe-converter-how-to-use.gif)



