### window.open注定被拦截
* 直接在js中调用window.open()函数去打开一个新窗口，浏览器会认为你将弹出广告等用户不想得到的窗体，所以拦截你
* 你可以将这个函数改为用户点击时触发
* 然而当需要处理完onckick事件后才去弹出，这时就又会被浏览器拦截 *点击后1s内未执行window.open()*
* 自点击或派发事件均无法通过“拦截弹出窗口”。btn.click();

### 用户设置
* 当在浏览器中设置了“过滤页面广告”时，还OK
* 当在浏览器中设置了“拦截弹出窗口”时，除了用户点击行为触发外，其他的真的是无济于事啊

### 代码示例
```js
var btn = document.getElementById('btn');

btn.onclick = function() {
  console.log('我被点击了');
  window.open('https://www.baidu.com');
  // 下边的做法其实并无特异功能：
  // var newTab = window.open('about:blank');
  // newTab.location.href="https://www.baidu.com";
  setTimeout(function() { // 延时超过1s,设置了“拦截弹出窗口”时均会被拦截
    // var newTab = window.open('about:blank');
    // newTab.location.href="https://www.baidu.com";
  }, 1001);
}
```
### 自点击
btn.click();
### 派发事件：
[参考1](http://blog.csdn.net/magic__man/article/details/51831227)&nbsp;&nbsp;&nbsp;&nbsp;
[参考2](https://msdn.microsoft.com/en-us/library/ff975247(v=vs.85).aspx)
```
var e = document.createEvent('MouseEvents');
e.initEvent( 'click', true, true );
btn.dispatchEvent(e);
```
### 结论
要想安全的通过window.open()打开新窗口，必须在用户点击时触发，并且click事件中不能有异步操作，因为1s外执行window.open()一定会失败。
