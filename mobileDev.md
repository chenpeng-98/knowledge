# MobileWeb开发一览及iPad版页面开发经验总结

# MobileWeb开发一览

## 概念
MobileWeb，现在业内流行叫H5，是对将Web与各种移动设备结合的Web应用的统称。  
随着移动设备硬件性能的快速发展，近几年Web在移动端大展拳脚。  
电商网站，资讯网站，产品介绍网站，社交应用等都有大量的MobileWeb案例。  

通常MobileWeb分三大类：HybridApp，WebApp，MobileWebSite：

* HybridApp: 它本身是一个客户端应用，Native外壳程序嵌入WebView，载入HTML/CSS/JS等Web资源。  
WebView和Web通信有其特有的方式。有兴趣的可以读一下《跨终端Web》，里面有很多关于HybridApp相关的介绍。  
[codava](https://cordova.apache.org/) 一个HybridApp解决方案。
* WebApp: 富前端Web应用，Mobile浏览器可以直接访问，如果套个Native外壳就是一个客户端应用。
* MobileWebSite: 例如产品信息展现类的移动网站。

## 设计
既然需要适应各种屏幕尺寸，就需要考虑一些问题：  
* 设计时就需要考虑是否可以自适应？
* 是否需要传统Native应用的那种交互效果？
* 各个平台的交互是否需要一致，还是按照各平台自己的设计规范？

### 响应式设计框架
自适应，就需要一个响应式的设计，[css3 media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)来实现响应式布局。  
代表性的响应式框架[Bootstrap](http://getbootstrap.com/)。

### 设计规范
* [Android](https://developer.android.com/design/index.html)
* [iOS](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/index.html#//apple_ref/doc/uid/TP40006556-CH66-SW1)
* [Windows](https://msdn.microsoft.com/library/windows/apps/hh465424.aspx)


## 开发
[![Chrome DeveloperTools](https://developer.chrome.com/devtools/docs/device-mode-files/device-mode-initial-view.png)](https://developer.chrome.com/devtools/docs/device-mode)

一般先在PC端开发调试，Chrome是一个很好的选择，DevTools可以模拟各种移动设备，  
支持横竖屏切换，支持各种移动网络环境。  

## 远程调试
不出意外，在PC端开发好的Web在移动设备的WebView/browser上还会有一些问题，这时就需要远程调试。  
iOS6 Safari和Android4.4 Chrome及以上都支持远程调试。对于不支持直接浏览器远程debug的项目，可以  
用[weinre](http://people.apache.org/~pmuellr/weinre-docs/latest/)来调试。

一个很好的远程调试Web指引：[Remote Debugging Guide](http://developer.telerik.com/featured/a-concise-guide-to-remote-debugging-on-ios-android-and-windows-phone/)



## 业界针对移动设备的JS库
* [Zepto](http://zeptojs.com/) 接口与使用与jquery基本一致，面向移动端
* [FastClick](https://github.com/ftlabs/fastclick) 众所周知，移动端的click响应有300ms延迟，这个库可以便捷又无侵入的解决问题
* [DeviceJS](https://github.com/matthewhudson/device.js?) 方便的监测设备相关信息
* [HammerJS](https://github.com/hammerjs/hammer.js/) 各种手势



# iPad版页面开发指南

## 碰到的问题及解决方案

ipad版UC浏览器通过UIWebView内嵌了导航页面，  
UIWebView的宽度横屏是912、竖屏是656，单位是物理像素。整个屏幕的物理尺寸是1024*768。  
如果直接将未优化的网页载入UIWebView，会出现以下问题：

* 字非常小
* 点击响应有延迟
* 点击链接有灰色阴影
* a元素hover失效
* 图片模糊（Retina屏）
* 不支持键盘鼠标事件
* 滑动固定（搜索框、信息流Tab头和右侧广告位）
* 滑动固定元素中有input输入框（搜索框）
* ...

### 字非常小
普通pc网页宽度都在1000px左右，而UIWebView宽度小了很多，网页不做优化的话，UIWebView  
会自动让网页去适应这个UIWebView，这里就是缩小网页，所以导致了字会变小。  
**解决方案：**  
在html的head中引入meta标签：`<meta name="viewport" content="initial-scale=1">`  
注意：与一般网页设置viewport的区别是这里的content不要设置width=device-width，  
因为这里UIWebView的width比device的width要小，如果设置了，则网页会左右滚动。  
而大多数应用，UIWebView都是全屏的，也就是和device宽度是一样的。
### 点击响应有延迟
研究表明，当操作延迟超过100ms，则用户会感觉界面卡顿。最初是由于苹果做iPhone时  
引入的这个问题，具体原因可以google。  
**解决方案：**  
引入[FastClick](https://github.com/ftlabs/fastclick)库，其原理是用触屏原生支持  
的touch事件来模拟Click事件的触发，而touch事件是没有延迟的。  
在DomReady后加这么一句：`FastClick.attach(document.body);`，其他的click事件绑定  
代码和pc上是一样的。
### 点击链接有灰色阴影
A标签在移动设备网页上点击会有原生的点击效果，iOS上是灰色阴影，Android上是蓝色阴影。  
**解决方案：**  
在css中加上，`-webkit-tap-highlight-color: rgba(0, 0, 0, 0);`
### a元素hover失效
**解决方案**  
通过设置样式`a:active`来代码，交互由hover触发变为点击后触发。
### 图片模糊（Retina屏）
iPad Retina屏，浏览未优化的网页，图片都是模糊的，文字是清晰的，因为浏览器对文字做了优化。  
**解决方案：**  
100*100大小的容器，放一张200*200的图片，包括img标签和css设置background-image。  
img标签方式：`<img src="200*200.png" width=200 height=200/>`  
这种方式的问题如果要想普通屏幕加载原始图片，则不方便。我们更多的时候采用通过css3的media queries  
来设置background，如：
```css
@media only screen and (-webkit-min-device-pixel-ratio: 2), 
       only screen and (min-device-pixel-ratio: 2), 
       only screen and (min-resolution: 192dpi), 
       only screen and (min-resolution: 2dppx) {
       
  .img {
    background-image: url(../img/200*200.png);
  }
  
}
.img {
    background-image: url(../img/100*100.png);
}
```


### 不支持鼠标键盘事件
iPad浏览器上所有操作都是手指操作，手指可以轻击，滑动，双击，多指手势等等。  
UC123导航只处理单指事件，多指手势保留浏览器默认行为。单指事件都通过W3C  
标准TouchEvent事件来处理。

上面叙述的是移动端Web最常见的需要解决的问题，还有更多的交互和样式问题与pc  
有区别的地方不一一详述，有兴趣的可以google。


### 滑动固定
一般都是通过监听scroll事件，然后检查元素滚动高度，达到预定值时，  给一个`position:fixed`的样式，  
但在iPad浏览器中，scroll事件和PC不一样的地方时，它不会在滑动时不断的触发。所以这种方案体验上有问题。  
我们通过`position: sticky`来设置需滑动固定的元素样式，体验完美。但引出了下面的问题。

### 滑动固定元素中有input输入框（搜索框）
滑动固定后，搜索框中的input聚焦时，固定的框会被自动固定在可视区的中间位置，导致类似问题：  
![](http://img3.douban.com/view/note/large/public/p11492421.jpg)    
**解决方案**
监听input框聚焦时，去掉滑动固定的样式，并通过HTML5 API将搜索框滚动到合适的位置：  
`$el.scrollIntoView()`，
搜索框失焦时，把滑动固定样式再加回去。

> 还有其他很多在移动设备上特殊的交互，参考：

[https://github.com/doyoe/trip](https://github.com/doyoe/trip)  
[https://github.com/alanerzhao/doc/blob/master/document/mobile_base.md](https://github.com/alanerzhao/doc/blob/master/document/mobile_base.md)


## 基础库
* 基础DOM,Ajax库 [Nut](https://github.com/nutteam/nut.core)
* 点击封装库 [FastClick](https://github.com/ftlabs/fastclick)


## 组件开发
组件样式都基于[CSS3 FlexBox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)模型开发。
