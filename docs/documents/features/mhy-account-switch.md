# 米游社多帐号切换

::: tip
本文档所描述的账号切换指的是用于获取游戏数据的米游社账号，不是原神游戏内的账号
快速切换原神游戏本体账号功能请见： [原神多账号切换](./account-switch.md)
:::

## 添加一个新的米游社账号

- 在程序主界面的左侧菜单栏中选择 `帐号管理` ，你将可以看到当前在Snap Genshin中已登录的米游社帐号
- 在该页面的上部点击 `添加一个新用户` 旋钮
- 按照界面提示输入 Cookie 添加登录新的账号
    - **在登录非常用帐号时，你应该使用浏览器的隐身模式登录米游社，而不是退出你当前的米游社帐号**
- 完成后，你就可以在账号管理面板切换已登录的米游社账号了

![米游社多帐号切换](https://img.snapgenshin.com/imgs/2022/02/1e0f5fd109743638.png)

## 如何获取 Cookie

### 浏览器书签

- 将 <a href="javascript:(()=>{_=(n)=>{for(i in(r=document.cookie.split(';'))){var a=r[i].split('=');if(a[0].trim()==n)return a[1]}};c=_('account_id')||alert('无效的 Cookie , 请重新登录!');c&&navigator.clipboard.writeText(document.cookie)&&alert(' Cookie 已经成功获取, 点击确定将 Cookie 复制到剪贴板。')})();" class="badge tip" style="padding: .25rem .5rem;border-radius: .25rem;font-size: .85rem;">米游社·获取Cookie</a> 添加为浏览器书签

![添加书签](/AddBookmark.png)

- 在无痕窗口中打开 [米游社](https://bbs.mihoyo.com/ys) ，登录账号
- 点击添加的书签

![获取 Cookie ](/GetCookie.png)

- 点击确定， Cookie 就被复制到剪贴板了

![复制 Cookie](/CopyCookie.png)

### 控制台执行脚本

```javascript
(() => {
    _ = (n) => {
        for (i in (r = document.cookie.split(';'))) {
            var a = r[i].split('=');
            if (a[0].trim() == n)
                return a[1]
        }
    };
    c = _('account_id') || alert('无效的 Cookie , 请重新登录!');
    if(c)
        console.log(document.cookie) 
    c && navigator.clipboard.writeText(document.cookie) && alert(' Cookie 已经成功获取, 点击确定将 Cookie 复制到剪贴板。如果未复制入剪贴板请手动复制下方的文字。')
})()
```

- 启动浏览器，打开米游社并登录
- 按F12打开浏览器控制台
- 执行上方的代码

## 常见问题：米游社帐号登录状态经常失效，添加的账号消失

* 我们通过储存账号的米游社 Cookie 来维持登录状态。
* 但是当用户在浏览器或其它设备上**注销帐号**后， 维持登录状态的 Cookie 将**失效**。
* 这会导致 Snap Genshin 上的米游社帐号在启动后被自动移除。
* 此情况也可能因为网络连接问题导致无法检查Cookie有效性，故出现此情况后请优先重启 Snap Genshin。
