# 自定义网页和脚本

## 观测大地图

### 网址
```:no-line-numbers
https://webstatic.mihoyo.com/app/ys-map-cn/index.html#/map/2
```
### 脚本
```:no-line-numbers js
var hide = function() {
    try {
        document.evaluate('//*[@Class="bbs-qr"]',document).iterateNext().style.display = 'none';
        clearInterval(hideTimer);
    }
    catch {
    }
};
var hideTimer = setInterval(hide, 10);
```
用于去除右下角的二维码角标

## BWIKI

### 网址
```:no-line-numbers
https://wiki.biligame.com/ys/%E5%8E%9F%E7%A5%9E%E5%9C%B0%E5%9B%BE%E5%B7%A5%E5%85%B7_%E5%85%A8%E5%9C%B0%E6%A0%87%E4%BD%8D%E7%BD%AE%E7%82%B9
```

### 脚本
```:no-line-numbers js
var result = document.evaluate("html/body/div[2]/div[2]/div[4]/div[5]/div/div[5]/div/div/div[4]/div[1]/div[3]/div[3]/div[3]",document);
var nodes = result.iterateNext();
nodes.click();
```
用于自动点击全屏显示

## 光环助手地图

### 网址
```:no-line-numbers 
https://static-web.ghzs.com/cspage_pro/yuanshenMap.html#/
```

### 脚本
```:no-line-numbers js
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

## 米游社日历

### 网址
```:no-line-numbers
https://bbs.mihoyo.com/ys/obc/channel/map/193
```

### 脚本
```:no-line-numbers js
let hide = function () {
    let nodes = document.querySelectorAll('.header,.footer,.channel__breadcrumb,.channel-detail .map-catalog');
    if (nodes.length > 0) {
        nodes.forEach(function (item) { item.remove(); });
        document.querySelector('.channel-detail__list').style.margin = 'auto';
        clearInterval(hideTimer);
    }
};
let hideTimer = setInterval(hide, 10);
```
用于隐藏导航等无用信息
