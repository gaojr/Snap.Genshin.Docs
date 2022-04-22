# 统一可交换成就标准 v0.5

> Uniformed Interchangeable Achievement Format standard (UIAF)

该标准目前处于制定阶段，可能会发生中断性更改

## 前言

由于原神的第三方成就识别、导出、记录软件越来越多，在有了 UIGF 的经验后，
我们

* [babalae/genshin achievement toy](https://github.com/babalae/genshin-achievement-toy)
* [DizzyTom/GenshinAchievementsExport](https://github.com/DizzyTom/GenshinAchievementsExport)
* [DGP Studio/Snap.Genshin](https://github.com/DGP-Studio/Snap.Genshin)
* [HolographicHat/genshin achievement export](https://github.com/HolographicHat/genshin-achievement-export)
* [YuehaiTeam/cocogoat](https://github.com/YuehaiTeam/cocogoat)

（上述名称以字典顺序排序，不代表其他任何意义）  
在此一起，制定了此项标准，旨在加强各个原神相关的App间的数据可交换性。

## 注意事项

### 时间

若无另行说明，本标准的所有时间格式均以 UTC+8 时区为基准

## Json 格式

```json
{
    "info" : {
        "export_app": "my app"
    },
    "list" : [
        {
            "id": 80001,
            "timestamp": 1650437770,
            "current": 40
        },
        ...
    ]
}
```

### `info` 

可以包含我们认可的以下字段

|字段名|值|说明|
|-|-|-|
|`export_timestamp`|导出UNIX时间戳||
|`export_app_version`|导出此份记录的App版本号||
|`uiaf_version`|所应用的 `UIAF` 的版本,包含此字段以防 `UIAF` 出现中断性变更时，App无法处理||

#### `uiaf_version`

合法值

|值|说明|兼容|
|-|-|-|
|`v1.0`|首个正式版本|v1.0|

#### `export_app`

未实现导出支持的以 `-` 代替

|导出 App|`export_app` 的值|
|-|-|
|Empty|Empty|
### `achievement`

#### `id`

原神的成就在游戏内部带有Id，对于扫描类导出软件，在取得成就的外在表现形式（如：呈现文本）后，便可对应到内部的Id

> 导入/导出软件应自行负责Id与呈现文本间的转换  
> 成就的信息可以从 [Dimbreath/GenshinData](https://github.com/Dimbreath/GenshinData) 库中获取

#### `timestamp`

* 对于识别成功的值，直接将时间转换为对应的UNIX 时间戳（秒）

* 对于识别失败的值，直接将时间设置为 `9999-12-31 23:59:59`（253402271999（秒））

#### `current`

* 对于识别成功的值，如 30/40 `current` 的值应设置为30

    > 因为始终可以从原神的数据中找到目标达成值

* 对于识别失败的值，请将该字段移除，或将其设为 `null`
