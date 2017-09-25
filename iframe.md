# 以下总结都来源于https://segmentfault.com/a/1190000004502619

## 判断自己的页面是否被iframe包含引入
```js
if (window.top != window) {
    // 处于iframe中
}
```
## 获取iframe里的内容
```js
 var iframe = document.getElementById("iframe1"); // 使用name属性：window.frames['ifr1']
 var iwindow = iframe.contentWindow; // 获取iframe的window对象
 var idoc = iwindow.document; // 获取iframe的document对象
```

## 在iframe中获取父级内容 [同域]
```js
window.parent 获取上一级的window对象，如果还是iframe则是该iframe的window对象
window.top 获取最顶级容器的window对象，即，就是你打开页面的文档
window.self 返回自身window的引用。可以理解 window===window.self(脑残)
```
## 自适应iframe
  - 去掉滚动条 scrolling="no"
  - 设置iframe的高为body的高
  ```js
  var iwindow = iframe.contentWindow;
  var idoc = iwindow.document;
  iframe.height = idoc.body.offsetHeight;
  ```
  - 示例
  ```html
  <iframe id="google_ads_frame2"
          name="google_ads_frame2"
          width="160"
          height="600"
          frameborder="0"
          src="target.html"
          marginwidth="0"
          marginheight="0"
          vspace="0"
          hspace="0"
          allowtransparency="true"
          scrolling="no"
          allowfullscreen="true">
  </iframe>
  ```


## 防嵌套网页
  ### 限定你的网页不能嵌套在任意网页内
  ```js
  if(window != window.top){
      window.top.location.href = correctURL;
  }
  // if(top.location!==self.location){top.location.href=self.location.href; }
  ```
  ### 同域可以嵌套
  ```js
  try{
　　top.location.hostname;  //检测是否出错
　　//如果没有出错，则降级处理
　　if (top.location.hostname != window.location.hostname) { 
　　　　top.location.href =window.location.href;
　　}
  } catch(e) {
    top.location.href = window.location.href;
  }
  ```

## iframe解决跨域问题：

## H5的CDM跨域
window.postMessage

## FriendLinks:
  - http://justcoding.iteye.com/blog/2049127
