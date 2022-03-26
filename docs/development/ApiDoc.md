# Snap Genshin 项目结构

随着项目的开发可能与实际分布有所出入

## DGP.Genshin

项目名称空间结构

|**名称空间**|包含代码的用途|
|-|-|
|**DGP.Genshin**|应用程序定义|
|**DGP.Genshin.Control**|各类UI控件与相关的帮助类|
|**DGP.Genshin.Control.Behavior**|UI控件行为定义|
|**DGP.Genshin.Control.Converter**|UI控件绑定使用的值转换器|
|**DGP.Genshin.Control.Cookie**|有关Cookie 获取的UI控件|
|**DGP.Genshin.Control.GenshinElement**|与原神元素相关的UI控件|
|**DGP.Genshin.Control.GenshinElement.GachaStatistic**|与祈愿记录相关的UI控件|
|**DGP.Genshin.Control.GenshinElement.HutaoStatistic**|与胡桃数据库相关的UI控件|
|**DGP.Genshin.Control.GenshinElement.Record**|与玩家查询相关的UI控件|
|**DGP.Genshin.Control.Helper**|与UI控件相关的附加属性帮助类|
|**DGP.Genshin.Control.Infrastructure**|基础UI控件|
|**DGP.Genshin.Control.Infrastructure.CachedImage**|图片缓存UI控件与帮助类|
|**DGP.Genshin.Control.Infrastructure.Concurrent**|支持并发的UI控件|
|**DGP.Genshin.Control.Infrastructure.Markdown**|解析并渲染Markdown|
|**DGP.Genshin.Control.Infrastructure.Observable**|支持绑定自身的控件|
|**DGP.Genshin.Control.Infrastructure.SmoothScrollViewer**|平滑滚动视图|
|**DGP.Genshin.Control.Launching**|启动游戏相关的UI控件|
|**DGP.Genshin.Control.ModernStyle**|ModernWpf.UI的重写样式|
|**DGP.Genshin.Control.WebViewLobby**|自定义网页页面相关的UI控件|
|**DGP.Genshin.Control.WPFUIStyle**|WPFUI的重写样式|
|**DGP.Genshin.Core**|核心服务实现|
|**DGP.Genshin.Core.Background**|背景图片加载管理|
|**DGP.Genshin.Core.Background.Abstraction**|背景图片服务抽象|
|**DGP.Genshin.Core.DpiAware**|高分辨率自适应|
|**DGP.Genshin.Core.ImplementationSwitching**|`实现切换`服务管理|
|**DGP.Genshin.Core.LifeCycle**|生命周期感知接口|
|**DGP.Genshin.Core.Notification**|应用程序通知处理|
|**DGP.Genshin.Core.Plugin**|插件接口定义与管理|
|**DGP.Genshin.DataModel**|数据模型定义|
|**DGP.Genshin.DataModel.Character**|角色模型定义|
|**DGP.Genshin.DataModel.Cookie**|Cookie模型定义|
|**DGP.Genshin.DataModel.DailyNote**|实时便笺与用户模型定义|
|**DGP.Genshin.DataModel.GachaStatistic**|祈愿统计模型定义|
|**DGP.Genshin.DataModel.GachaStatistic.Banner**|祈愿统计卡池模型定义|
|**DGP.Genshin.DataModel.GachaStatistic.Item**|祈愿统计物品模型定义|
|**DGP.Genshin.DataModel.Helper**|数据模型帮助类|
|**DGP.Genshin.DataModel.HutaoAPI**|胡桃数据库模型定义|
|**DGP.Genshin.DataModel.Launching**|启动游戏模型定义|
|**DGP.Genshin.DataModel.Material**|材料模型定义|
|**DGP.Genshin.DataModel.Promotion**|养成计算模型定义|
|**DGP.Genshin.DataModel.Recording**|玩家查询模型定义|
|**DGP.Genshin.DataModel.Updating**|更新模型定义|
|**DGP.Genshin.DataModel.WebViewLobby**|自定义网页模型定义|
|**DGP.Genshin.Factory**|工厂|
|**DGP.Genshin.Factory.Abstraction**|工厂抽象|
|**DGP.Genshin.Helper**|通用帮助类|
|**DGP.Genshin.Helper.Extension**|通用拓展方法|
|**DGP.Genshin.Message**|消息定义|
|**DGP.Genshin.Message.Internal**|内部消息定义|
|**DGP.Genshin.Page**|导航页面|
|**DGP.Genshin.Service**|核心服务实现|
|**DGP.Genshin.Service.Abstraction**|服务抽象|
|**DGP.Genshin.Service.Abstraction.GachaStatistic**|祈愿记录服务抽象|
|**DGP.Genshin.Service.Abstraction.IntegrityCheck**|完整性检查服务抽象|
|**DGP.Genshin.Service.Abstraction.Launching**|启动游戏服务抽象|
|**DGP.Genshin.Service.Abstraction.Setting**|设置服务抽象|
|**DGP.Genshin.Service.Abstraction.Updating**|更新服务抽象|
|**DGP.Genshin.Service.GachaStatistic**|祈愿统计服务|
|**DGP.Genshin.ViewModel**|视图模型|