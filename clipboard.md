## 剪贴板的安全机制
1. 几年前,浏览器不具备直接访问剪贴板的能力，开发者只能借助于Flash插件来提供这一基本功能
2. 现在，我们已经可以整合基本的剪贴板功能，但还是有一些限制
- 大部分浏览器支持剪贴板功能，Mac和iOS上的Safari除外。
- 不同浏览器的支持程度不尽相同，一些功能并不完整或存在缺陷。
- 用户必须通过点击鼠标或按键的方式来主动触发，脚本并不能随时操纵剪贴板。

## 实现方法：
1. document.execCommand(param)  param = cut | copy | paste
  检测浏览器是否支持：
  - document.queryCommandSupported('copy')
  - 在 try-catch 块内测试document.execCommand('copy')

  选中文字：
  - 所有的浏览器都允许使用 select() 方法选择文本输入和文本区域的内容
  - Firefox 和 Chrome／Opera 浏览器中，还能使用 document.createRange 方法来从任何元素中选择文本
  ```js
    var
    myelement = document.getElementById('#myelement'),
    range = document.createRange();
  
    range.selectNode(myelement);
    window.getSelection().addRange(range)  // https://www.chromestatus.com/features/6680566019653632
  ```
2. clipboard.js 跨浏览器兼容有问题
  - https://github.com/zenorocha/clipboard.js
  ```js
    <input id="copyme" value="text in this field will be copied" />
    <button data-clipboard-target="#copyme">copy</button>
  ```
  自己实现clipboard.js: 
  - 只有对应的表单区域能够被复制
  - 在一些浏览器中无效（没错，就是Safari），但可以在选中文本后提示用户使用快捷键 Ctrl/Cmd + C
  - 参考：https://codepen.io/SitePoint/pen/vNvEwE
  ```js
    (function() {
      document.body.addEventListener('click', copy, true);
      function copy(e) {
        var
          t = e.target,
          c = t.dataset.copytarget,
          inp = (c ? document.querySelector(c) : null);
        if (inp && inp.select) {
          inp.select();
          try {
            // copy text
            document.execCommand('copy');
            inp.blur();
          }
          catch (err) {
            alert('please press Ctrl/Cmd+C to copy');
          }
        }
      }
    })();
  ```

3. IE浏览器可以通过如下方式来进行复制
window.clipboardData.setData("Text", "这里是需要复制的文本内容")

4. ZeroClipboard插件: http://www.365mini.com/page/zeroclipboard-2_x-quick-start.htm
  - https://github.com/zeroclipboard/zeroclipboard
  - 它是基于 Flash 来实现跨浏览器的复制功能的。当我们使用 ZeroClipboard 的时候，它会悄悄隐藏一个小小的 Flash 影片(swf)，不会对我们的用户界面造成影响。
  - 浏览器和Flash的安全限制，要求用户必须在Flash区域上进行真实操作才能操作剪贴板。所以将 Flash 做成透明的，以便于我们放在诸如链接、按钮等需要放置的任何地方
  - ZeroClipboard 2.x 原则上不兼容IE 6 ~ IE 8等低版本IE浏览器，如果需要兼容IE 6 ~ IE 8，请使用 1.x 或者 2.0.2 版本
  ```js
    <!-- 这里是HTML代码部分 -->
    <textarea id="content" rows="10" cols="60">这里是需要复制的内容</textarea>
    <input id="copy" type="button" data-clipboard-target="content" value="复制">
    <!-- 这里是JS代码部分 -->
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/zeroclipboard/2.1.6/ZeroClipboard.min.js" ></script>
    <script type="text/javascript">
    // 将【复制】按钮充当复制数据的元素载体
    var clip = new ZeroClipboard( document.getElementById("copy") );
    </script>
  ```
