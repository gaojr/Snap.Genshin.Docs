# 程序更新错误

## 选择正确的更新通道

在 Snap Genshin 主程序的设置中，你可以修改更新通道至`正式通道`和`预览通道`。 目前，通过这两个通道下载的更新包没有区别。

`预览通道`通过读取 GitHub 发布页面获取 Snap Genshin 的最新版信息并获得来自 GitHub 的下载链接，这适合于对网络环境熟悉的高级用户和网络条件总体良好的海外用户。

`正式通道`是更新通道的默认选项，也是由 Snap Genshin 维护的更新服务器，目的是帮助位于中国的用户获得稳定且快速的更新包下载服务。正式通道适用于所有的 Snap Genshin 用户，如果你是不熟悉软件开发和测试的一般用户，请始终将`正式通道`作为更新通道的设置选项。

## 更新失败排错流程

### 预览通道

- 检查本机到 [GitHub](https://github.com/DGP-Studio/Snap.Genshin/releases) 的连接可用性

### 正式通道

由于更新服务器的缓存机制和资源站更新包分发机制，在 Snap Genshin 新版本在 GitHub 发布后，正式通道需要一定时间才能获取到新版本信息并开始分发，这个时间通常不超过5分钟。

- 访问 [https://patch.snapgenshin.com/getPatch/](https://patch.snapgenshin.com/getPatch/) 
  - 如果无法访问，请在你的本地网络设置中更换你的 DNS 服务器
    - 中国大陆地区推荐使用以下 DNS
      - [DNSPod](https://www.dnspod.cn/Products/Public.DNS)
      - [114DNS](https://www.114dns.com/)
    - 非中国大陆地区推荐使用以下 DNS
      - [Google Public DNS](https://developers.google.com/speed/public-dns/docs/using)
      - [Cloudflare DNS](https://1.1.1.1/dns/)
      - [AdGuard DNS](https://adguard-dns.io/zh_cn/welcome.html)
  - 检查`channel`字段是否为你所在区域的值
    - `channel`值为`cn`时为检测到中国大陆地区用户，分发的下载地址为 Snap Genshin 资源站链接
    - `channel`值为`global`时为检测到非中国大陆地区用户，分发的下载地址为 GitHub 的下载链接
  - 检查`tag_name`和`cache_timestamp`字段
    - `tag_name`为当前更新服务器中保存的最新版本号，如果它不是 GitHub 上的最新版本号，请等待缓存刷新
    - `cache_timestamp`是更新服务器中更新包信息生成时刻的时间戳，如果它代表的时间晚于 GitHub 的最新版本发布时间，请等待缓存刷新，
    - 如果缓存长时间没有更新，在浏览器中使用`ctrl + F5`的组合按键强制刷新页面
      - 如果依旧无效，请联系主群的管理员
- 检查本机到 [https://resource.snapgenshin.com/](https://resource.snapgenshin.com/) 的连接可用性



