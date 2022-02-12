# 游戏启动路径错误

![launcher-path-error](https://img.snapgenshin.com/imgs/2022/02/1a2e2b5cedbfb133.png)

当你在设置启动游戏时选择了错误路径，你会看到如此的报错，如果你知道正确的路径或想再次尝试设置，你可以执行以下步骤重置游戏启动器的路径设置

- 在系统托盘中，完全退出 Snap Genshin

- 在Snap Genshin目录中，找到名为`settings.json`的配置文件，以记事本或其它编辑器方式打开它

- 找到`LauncherPath`字段，删除它的值（或整行删去）

    - 它看起来会是这样的

    ```json
    {
        "LauncherPath": ""
    }
    ```

- 保存并关闭`settings.json`，重新启动 Snap Genshin

- 此时，再次点击`启动游戏`，你将可以重新设置路径