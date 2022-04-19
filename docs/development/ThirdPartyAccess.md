# 接入

## Url 协议

从 2022.4.12 （内部）版本之后，Snap Genshin 支持通过特定的 Url 协议启动  
Url协议调用要求至少一次成功启动 Snap Genshin，且成功的设置了米游社账号

目前可用的Url如下

### 从指定文件地址导入成就

```
snapgenshin://achievement/import/file?path="D://My Folder/my file.json"
```

文件的格式必须为如下Json格式

```json
[
    {
        "id":80001,
        "timestamp":1650349121  
    }
]
```

### 从剪贴板文本导入成就

```
snapgenshin://achievement/import/clipboard
```

剪贴板内的文本格式必须为如下Json格式
```json
[
    {
        "id":80001,
        "timestamp":1650349121  
    }
]
```

### 打开原神本体

```
snapgenshin://launch/game
```

### 打开原神启动器

```
snapgenshin://launch/launcher
```