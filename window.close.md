## 关闭气泡：
window.location.href = 'about:blank';  即新打开一个空白页

## return false
在页面A中用window.open()打开页面B，页面B上有一个Button按钮，Button按钮的OnClientClick="javascript:window.close();"，重复通过点击页面A中的window.open()链接打开页面B，并点击页面B上的关闭按钮关闭页面B，两三次以后，页面B就无法打开了，而且页面A也无法通过刷新来加载，可是如果把页面B上的Button按钮的OnClientClick改为"javascript:window.close();return false;"  
**return false后，就不会再触发页面的reload了，也就避免了由于页面reload可能引发的问题**

## 无法关闭当前标签
一般情况下Firefox和chrome只要是在链接上打开的窗口都能够支持直接JavaScript关闭  
但是用户直接在URL里输入网址回车打开的网页，Firefox和chrome是不允许JavaScript调用window.close()动态关闭的。  
此时可以将JS代码更改为：
```
window.open('', '_self', '');
window.close();
```
即在原有的基础上打开新的空的标签页，然后立即关闭

## window.close关闭子窗口刷新父窗口的方法
注：我用的是window.open()开的子窗口  
<a href="javascript:window.close();" onclick="javascript:window.opener.location=window.opener.location">关闭窗口</a>  
```js
如果用window.showModalDialog()打开子窗口，可以用一下方法：
function closeWin(){
  // 可能存在frame页面,所以要引用top窗口.
  var win = top.window;
  try{
    // 聚焦.
    if(win.opener) win.opener.focus();
    // 避免IE的关闭确认对话框.
    win.opener = null;
  } catch(ex) {
  // 防止opener被关闭时代码异常。
  } finally {
  win.close();
  }
}

// 刷新打开本窗口的opener窗口.
function refreshOpener(){
  // 可能存在frame页面,所以要引用top窗口.
  var win = top.window;
  try{
    // 刷新.
    if(win.opener) win.opener.location.reload();
    } catch(ex) {
    // 防止opener被关闭时代码异常。
  }
}

// 刷新opener窗口后关闭自己。
function refreshOpenerAndCloseMe(){
  refreshOpener();
  closeWin();
}
```
```js
<script language="JavaScript" type="text/JavaScript">
  window.opener.location.reload(); //刷新父窗口
  window.close(); //关闭子窗口.
</script>
父：var result = window.showModalDialog();
if(result == 1){window.location.reload()}
子：window.returnValue = 1;
window.close();
```

## window.close失灵与子页面提交
我的需求是，在页面上点击修改，弹出子页面，在子页面选择内容后提交，同时关闭子页面。  
然而表单提交和window.close()冲突造成的，不过用ajax提交可以解决。  
但是子页面关闭后 父页面数据并没有刷新。于是父页面加了回调函数  
```
function callback() {
  var url = 'showselfAnchor/familyAndAnchorAction!queryList?type=query';
  window.location.href = url;
}
```
在子页面window.close()；前面加上window.opener.callback();调用父页面回调函数来刷新父页面数据。

## 无法关闭父页面
执行window.close()方法的页面是在iframe里。它只能关闭自己的页面，却无法关闭父页面。  
于是在父页面写了个关闭父页面的方法，在子页面中进行调用就行了。  
parent.closeWindow();

## 如何用uexWindow.close()关闭当前页面
例如我在A.html open 到B.html，在B.html用uexWindow.close()就返回到A.html页面了，A.html怎么在B.html页面uexWindow.close()后自动刷新一次页面。 
1.可以在本窗口close之前，用uexWindow.evaluateScript()对主窗口进行操作刷新，然后再close,应该就Ok 
2.uexWindow.evaluateScript("root","0","zy_con('content', 'index_content.html', 0, $$('header').offsetHeight)");
你把你要跳转的页面替换代码中的页面 
3.最近做到这功能，我直接在B页面中关闭当前页面的函数中，加上了uexWindow.evulateScript("A","0","location.reload(A.html)");然后uexWindow.close();实现了刷新功能 
4.谢谢，我用uexWindow.evaluatePopoverScript(wn,pn,scr);解决了问题
