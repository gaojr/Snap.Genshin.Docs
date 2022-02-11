# 常用功能指南

[[toc]]

## 启动游戏

Snap Genshin 可以用作游戏启动器，直接启动游戏本体，而不加载原神用于更新版本的启动器

- 点击菜单栏顶部的`启动游戏`
- 在弹出的窗口中，进入原神的安装目录，找到原神官方名为`launcher.exe`的启动器程序
    - 当然，你也可以选择启动器的快捷方式
- 设置完成后，此时再次点击`启动游戏`按钮，你将看到完整的启动器菜单
    - 菜单中包含如下功能：
        - 点击`游戏本体`将直接按下方选定的配置启动游戏
        - 点击`官方启动器`将运行用于更新版本的官方启动器程序
        - 常规设置允许用户切换账号，或切换至B站服务器
        - 外观设置允许用户从Snap Genshin启动器以全屏或无边框形式启动游戏
        - 高级设置(非常危险)中包含解锁帧率设置

## 原神多账号切换

::: tip
本文档所描述的账号切换指的是原神游戏本体内的游戏帐号，不是用于获取游戏数据的米游社账号
米游社账号切换详见： [米游社多账号切换](#米游社多账号切换)
:::

- [设置Snap Genshin](#启动游戏)

- 启动原神游戏本体，手动登录到另一个账号

- 打开Snap Genshin

- 在弹窗中，为该新登录的账号设置一个易于记忆的名称，随后确认

  ![account-switch1](/img/account-switch1.png)

- 之后，你便可以在`启动游戏`中切换账号并直接启动游戏了

  ![account-switch2](/img/account-switch2.png)

## 米游社多账号切换

::: tip
本文档所描述的账号切换指的是用于获取游戏数据的米游社账号，不是原神游戏内的账号
快速切换原神游戏本体账号功能请见： [原神多账号切换](#原神多账号切换)
:::

### 添加一个新的米游社账号

- 在 主窗体右上角点击你当前的登录账号名称
- 在弹出的账号管理面板中，点击`添加一个新用户`
- 按照界面提示输入 Cookie 添加登录新的账号（自动登录暂时不支持多账号）
- 完成后，你就可以在账号管理面板切换已登录的米游社账号了

![米游社多帐号切换](/img/mhy-account-switch1.png)

### 常见问题：米游社帐号登录状态经常失效，添加的账号凭空消失

我们通过储存账号的米游社 Cookie 来维持登录状态  
但是当用户在浏览器或其它设备上注销登录状态后  
（通常是由于用户自行在浏览器中手动切换帐号造成的）  
所有用户维持登录状态的 Cookie 将失效  
进而导致 Snap Genshin 上的米游社帐号被我们自动移除

## 解锁帧数上限

- [设置Snap Genshin启动器](#启动游戏)
- 在系统托盘内彻底退出Snap Genshin程序
    - 以**管理员权限**启动Snap Genshin
        - 你亦可以选中Snap Genshin主程序，右键菜单中选择`属性`
        - 进入`Compatibility`（`兼容性`）标签页
        - 勾选`Run this program as an administrator` （`以管理员身份运行此程序`）
        - 点击确认
- 点击Snap Genshin顶部菜单栏中的`启动游戏`
- 下拉至底部，勾选`解锁帧率上限`
- 设置你需要的指定帧数上限（下图以设置144帧为上限为例）

![](/img/unlock-framerate.png)

## 祈愿记录

- 打开原神游戏本体，进入祈愿界面，点击`历史记录`
- 启动或切换到 Snap Genshin
- 从导航栏进入`祈愿记录`
- 点击右上角的`从 日志文件 刷新` 按钮（首次使用点击中央的从日志获取按钮）
- 根据提示，等待祈愿记录获取完成

![wish-export-sample](/img/wish-export-sample.png)


## 部分需要执行脚本的网页

### 观测大地图

#### 网址
``` http
https://webstatic.mihoyo.com/app/ys-map-cn/index.html#/map/2
```
#### 脚本
``` js
setTimeout(function () { 
    var divs = document.getElementsByClassName("bbs-qr"); 
    for (i = 0; i < divs.length; i++) {
        if (divs[i] != null)
            divs[i].parentNode.removeChild(divs[i])
    }
}, 5000);
```
用于去除右下角的二维码角标

### BWIKI

#### 网址
``` http
https://wiki.biligame.com/ys/%E5%8E%9F%E7%A5%9E%E5%9C%B0%E5%9B%BE%E5%B7%A5%E5%85%B7_%E5%85%A8%E5%9C%B0%E6%A0%87%E4%BD%8D%E7%BD%AE%E7%82%B9
```

#### 脚本
``` js
var result = document.evaluate("/html/body/div[3]/div[2]/div[4]/div[5]/div/div[5]/div/div/div[4]/div[1]/div[3]/div[3]/div[3]",document);
var nodes = result.iterateNext();
nodes.click();
```
用于自动点击全屏显示

### 光环助手地图

#### 网址
``` http
https://static-web.ghzs.com/cspage_pro/yuanshenMap.html#/
```

#### 脚本
``` js
setTimeout(function () { 
    const glzq = document.evaluate('//*[@id="map-app"]//*[@class="zone-btn"]',document).iterateNext();
    glzq.parentElement.removeChild(glzq);

    const btnPackUp = document.evaluate('//*[@id="map-app"]//*[@class="filter-btn visi-div"]',document).iterateNext();
    const btnGrop = document.evaluate('//*[@id="map-app"]//*[@class="fixmodel-wrap"]',document).iterateNext();
    const swapMapBtn = document.evaluate('//*[@id="map-app"]//*[@class="fixmodel top"]',document).iterateNext();
    while(btnGrop.childElementCount != 0){
        btnGrop.removeChild(btnGrop.firstChild);
    }
    while(swapMapBtn.childElementCount != 1){
        swapMapBtn.removeChild(swapMapBtn.lastChild);
    }
    btnGrop.appendChild(swapMapBtn);

}, 1000);
```