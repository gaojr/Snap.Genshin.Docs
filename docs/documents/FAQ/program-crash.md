# 主程序闪退

当你看到如下这样的异常抛出窗口时，则意味着 Snap Genshin 主程序出现了意料外的错误。这种情况下，造成闪退的问题是不固定的。以下文档包含了常见的解决方案。

![](https://image.snapgenshin.com/imgs/2022/05/31/c7d171b4c20671e1.png)

## 祈愿记录闪退

在使用祈愿记录导出功能时，如果程序闪退且有`StatisticBuilder`/ `GachaStatisticService` 这些明显和祈愿相关的关键词时：

1. 确认当前的主程序为**最新版本**
2. 在主程序的设置中**更新元数据**
3. 如果你的版本号为**2022.2.x**
   1. 手动下载当前的[**最新版本程序包**](https://resource.snapgenshin.com/Publish.zip)
   2. 解压，并覆盖你之前的版本
   3. 如果出现主程序无法启动的问题，请参考 [**主程序无法启动**](https://www.snapgenshin.com/documents/FAQ/failed-load.html) 文档

## 成就统计闪退

在使用成就统计功能时，如果程序闪退且错误输出中包含类似下方这样的句式时，说明本地成就元数据不是最新版本。需要**在设置中更新元数据**。

```c#
System.Collections.Generic.KeyNotFoundException: The given key '84135' was not present in the dictionary.
```

## 0x80131515

在使用自定义网页功能时，如果程序闪退且有`System.NotSupportedException: The URI prefix is not recognized.` 这样的提示时：

- 确保`图标Url`一栏中的网络地址有 `https://` 或 `http://` 的 HTTP 协议前缀



