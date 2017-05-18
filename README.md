# cdn
### 这是什么？
创建一个属于自己的框架/插件库的网站

###### 存储插件库的目录是**frame**
---


> 技术栈

* html+css+javascript
* jquery
* require
* axios
* clipboard
* php


### 数据用ajax请求 data.php 返回如下json
``` json
{
    "jquery": [
        "jquery-1.11.0.min.js",
        "jquery-2.1.4.min.js",
        "jquery-3.2.1.min.js"
    ],
    "mock": [
        "mock.js"
    ],
    "qrcode": [
        "jquery.qrcode.min.js",
        "js.qrcode.min.js"
    ],
    "require": [
        "require.js"
    ],
    "sea": [
        "sea.js"
    ],
    "vconsole": [
        "vconsole.min.js"
    ]
}
```

> 头部背景动画用到了个插件有es6版本和es5版本

```
//cdn.chenzejiang.com/frame/zhihu_canvas/zhihu.canvas.es5.js
//cdn.chenzejiang.com/frame/zhihu_canvas/zhihu.canvas.es6.js
```

## 演示地址
[CDN](http://cdn.chenzejiang.com)
