1. 核心原则 
因为浏览器内嵌页面最后都会编译进本地可执行文件中，冗余的代码会影响浏览器的性能，所以浏览器的前端开发，要非常关注代码的精简，不该添加的JS和图片一定不能添加，尽可能不引用大的第三方库，比如JQuery之类的。小的第三方库的引入也要非常慎重。

2. HTML
2.1 语义化【强制】
请使用语义化的标签，通过标签准确的表达HTML结构含义。
2.2 语法【强制】
  - 用2个空格来代替制表符（tab）；
  - 嵌套元素应当缩进一次（即2个空格）；
  - 为每个HTML页面的第一行添加标准模式（standard mode）的声明<!DOCTYPE html>，确保在每个浏览器中拥有一致的展现；
  - 在头部加载外联样式，不使用@import导入样式表；在页面底部加载JavaScript文件;特殊情况除外；
  - 所有编码均遵循xhtml严格模式标准
    - 标签\属性\属性命名，必须由小写字母及下划线数字组成；
    - 所有标签必须闭合, 包括br (<br />), hr(<hr />)，</li>，</body>）；
    - 所有的属性定义，必须全部使用双引号，不要使用单引号；
    - 所有的属性必须赋值，无值就重复本身，如（checked=“checked”）;
    - 所有的XML标记都必须合理嵌套，结构严谨按顺序；
  - 充分利用无兼容性问题的html自身标签, 比如span, em, strong, optgroup, label,等等; 需要为html元素添加自定义属性的时候, 优先考虑默认已有的合适属性, 如果没有，以"data-"为前缀来添加自定义属性；
  - 在页面中尽量避免使用行内样式，特殊情况除外；
  - 能以背景形式呈现的图片, 尽量写入css样式中；
  - 重要图片加上alt属性; 给重要的元素和截断的元素加上title。
  - 所有的特殊字符必须采用实体符号表示（以防不同编码格式的页面拷贝出错），如“&copy;”替代“©”；
  - 所有文档必须声明编码语言，淘宝域下强制gbk编码，其它css/js文件采用utf-8，引用时注意添加charset="UTF-8"；
  - 在注释内容中使用其它符号替代“---”，如<!---这里是===注释--->[建议]

2.3 语言属性【强制】
根据 HTML5 规范：
强烈建议为 html 根元素指定 lang 属性，从而为文档设置正确的语言。这将有助于语音合成工具确定其所应该采用的发音，有助于翻译工具确定其翻译时所应遵守的规则等等。
<html lang="zh-CN">
<!-- ... -->
</html>

2.4 引入CSS和JavaScript文件
根据 HTML5 规范，在引入 CSS 和 JavaScript 文件时一般不需要指定 type 属性，因为 text/css 和text/javascript 分别是它们的默认值。
<!-- External CSS -->
<link rel="stylesheet" href="code-guide.css" />

<!-- JavaScript -->
<script src="code-guide.js"></script>

2.5 属性顺序【建议】
HTML 属性应当按照以下给出的顺序依次排列，确保代码的易读性。
1. class
2. id,name
3. data-*
4. src,for,type,href
5. title,alt
6. role
class 用于标识高度可复用组件，因此应该排在首位。id 用于标识具体组件，应当谨慎使用（例如，页面内的书签），因此排在第二位。
2.6 减少标签的数量
编写 HTML 代码时，尽量避免多余的父元素。
<!-- Not so great -->
<span class="avatar">
<imgsrc="..." />
</span>

<!-- Better -->
<img class="avatar" src="..." />
2.7 文件头部声明规范
不同的客户端和浏览器内核，其头部声明各有差异
<!-- mobile头部声明 -->
<!-- 省略 -->

<!-- PC  头部声明 -->
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content"text/html; charset=utf-8" />
<title></title>
<link rel="stylesheet" href="css/reset.css" type="text/css" />
</head>
2.8 校验工具
校验html：http://validator.w3.org/
2.3 Javascript
2.3.1 启用严格模式 "use strict"【强制】
独立的代码模块均须封闭，并为代码块声明严格模式，以减少不规范用法和人为疏忽。例：
(function(){
    "use strict";
    //your code
})();
注：如果集成第三方代码，勿必在文件中增加use strict，以免造成第三方代码执行出错。
2.3.2 语法
  - 单个表达式结束，末尾必须加上“；”表示结束；
  - 起始“｛”紧跟表达式后面，不要单起一行；结束“｝”要另起一行；即使再简单的代码也不能省略｛｝；
  - 在js中使用单引号\’；
  - 参数赋值，单起一行；
  - 习惯用（）表示运算的正确顺序；
  - 函数表达式（有别于函数声明，如：functionx()｛｝）必须使用分号结束；
  - 空格
    1. 关键字后面跟"("(左圆括号)时应用一个空格隔开。
    2. 方法名和方法的"("(左圆括号)之间不要有空格。这利于区分关键字和方法调用。
    3. 匿名函数后面跟"("(左圆括号)时应用一个空格隔开。
    4. 所有的二元操作符，除了"."(圆点)、"("(左圆括号)和"["(左中括号)，都应该使用一个空格来和操作数隔开。
    5. 一元操作符和操作数之间不应该使用空格隔开，除了操作符是一个单词时，如typeof。
    6. for语句控制部分的每个";"(分号)应该在后面跟一个空格。
    7. 每个","(逗号)后面应该跟一个空格。
    8. 缩进的最小单位是2个空格【强制】
/* Bad example */
if(condition)
{ statements; }

if(condition)
  statements;

varmyString = "this is a string";

var a, b = 1, c, d = 2;

s || false == 5

var a = 6 + + new Date();

//注意分号
varmyMethod = function() {
  return 42;
}
(function() {
  // 一个匿名函数，在这里会被错误解析当作参数调用导致报错
})(); /* Good example */
if(condition) {
  statements;
}

varmyString = 'this is a string';

var a, c;
var b = 1,
    d = 2;

s || (false == 5)

var a = 6 + ( + new Date() );

//注意分号
varmyMethod = function() {
  return 42;
};
(function() {
  // 一个匿名函数，在这里会被错误解析当作参数调用导致报错
})();

2.3.3 变量
  - 变量命名--使用驼峰式命名法：【强制】
    1. 变量应以类型前缀+有意义的单词组成 
    2. 私有变量前面应添加“_”，如this._somePrivateVariable = statement
    3. 方法/函数名应为动词或者动词短语，如function getSomeValue()
    4. 类/构造函数的命名应采用帕斯卡命名法--每个单词的首个字符大写的方式，functionMouseEventHandler()
    5. 全局变量应全部大写var HOMEPACE
    6. 全局变量 window.wow = { }
  - 变量声明位置：
    1. 尽量在函数的顶部声明变量
    2. 尽量不要在循环语句里声明变量
    3. 不要在条件语句中声明变量
  - 变量名称：【建议】
    1. 重复变量（循环）建议使用”i“，”j“，”k“等名称
    2. 布尔值变量：“is”/“can”/“has”/should开头
    3. 计算完成的变量：“computed”为前缀
    4. 已经查找完成的变量：“found”为前缀
    5. 已经实例化（初始化）完成的类或者其它类型的变量：“initialize”/“init”
    6. 数字（对象）变量：“num”/“count”开头
  - 变量声明方式【建议】
    1. 必须加上 var 关键字，否则，变量就会暴露在全局上下文中,容易与现有变量冲突；在局部作用域中的变量,也可能很轻易地泄漏到Document 或者 Window 中 
    2. 除了构造函数和时间（Date）, 尽量不要用 new 来声明，使用 {}, [] 替代 new Object()和new Array()。
  - 简化变量声明（相关性变量集合，对多个全局变量进行管理）【建议】
----包括多变量声明和对象成员声明
/* Bad example */
VarsName = '';
var bar = '';
varqux = '';


var type = "";
var user = {};
user.name={};

function abc() {
};

varabc = new Function(){};

if(true) {
varabc = false;
} /* Good example */
VarsName = '',
  bar = '',
qux = '';


var type =“”，
    user={
       name:{}
    }

varabc = function() {
};

Varabc;
if(true) {
abc = false;
}
2.3.4 常量
常量的形式如：NAMES_LIKE_THIS, 即使用大写字符，并用下划线分隔。你也可用 @const标记来指明它是一个常量。但请永远不要使用const关键词。
/**
 * The number of seconds in a minute.
 * @type {number}
 */
goog.example.SECONDS_IN_A_MINUTE = 60;

/**
 * The number of seconds in each of the given units.
 * @type {Object.<number>}
 * @const
 */
goog.example.SECONDS_TABLE = {
  minute: 60,
  hour: 60 * 60,
  day: 60 * 60 * 24
}

2.3.5 禁止魔鬼数字
字面量在使用前，先赋值给有意义的变量，以使程序可读易维护
switch(thumbnailType){
case 3:..
可以赋予3一个常（变）量，增加可读性可维护性。例：
var ConnectType={
    Disconnect:0,
    USB:1.......
}
switch(thumbnailType){
    case ConnectType.Disconnect: ...
}
2.3.6 代码风格
  - if语句看起来应该这样：
if (condition){
 statements;
}



 if (condition){
statements;
} else {
statements;
}

 if (condition){
statements;
} else if (condition){
statements;
} else {
statements;
}
  - for语句看起来应该这样
for (initialization; condition; update) {
 statements;
} for (variable in object)if (filter) {
statements;
}
  - while语句看起来应该这样：
while (condition){
 statements;
}
  - do while语句看起来应该这样：
do {
 statements;
} while (condition);
  - switch语句看起来应该这样：
switch (expression){
case expression:
statements;
default:
statements;
}
  - try catch语句看起来应该这样：
try {
 statements;
} catch (variable){
statements;
}

 try {
statements;
} catch (variable){
statements;
} finally {
statements;
}
2.3.7 函数声明
不要在块内声明一个函数。虽然很多JS引擎都支持块内声明函数，但它不属于 ECMAScript 规范 (见 ECMA-262, 第13和14条)。各个浏览器糟糕的实现相互不兼容，有些也与未来 ECMAScript 草案相违背。ECMAScript 只允许在脚本的根语句或函数中声明函数。如果确实需要在块中定义函数，建议使用函数表达式来初始化变量。
/* Bad example */
if (x) {
function foo() {}
} /* Good example */
if (x) {
var foo = function() {}
}

2.3.8 闭包
有一点需要牢记, 闭包保留了一个指向它封闭作用域的指针, 所以, 在给 DOM 元素附加闭包时, 很可能会产生循环引用, 进一步导致内存泄漏。
/* Bad example */
function foo(element, a, b) {
element.onclick = function() { /* users a and b */ };
}








 /* Good example */
function foo(element, a, b) {
element.onclick = bar(a, b);
}
这里, 即使没有使用 element, 闭包也保留了 element, a 和 b 的引用, 由于 element 也保留了对闭包的引用, 这就产生了循环引用, 这就不能被 GC 回收. 这种情况下, 可将代码重构为:

function bar(a, b) {
return function() { /* uses a and b */ }
}
2.3.9 this
仅在对象构造器、方法、闭包中使用；.this 的语义很特别，有时它引用一个全局对象(大多数情况下)、调用者的作用域(使用eval时)、DOM 树中的节点(添加事件处理函数时)、新创建的对象(使用一个构造器)、或者其他对象(如果函数被 call() 或 apply())。
使用时很容易出错, 所以只有在下面两个情况时才能使用:
  - 在构造器中
  - 对象的方法(包括创建的闭包)中
2.3.10 注释【建议】
  - 对方法或函数，必须要有注释，注释至少包括以下五个方面
1) 方法的作用
2) 所需要传入的参数（@param）
3) 返回的结果 （@return）
4) 作者及修改人 （@author || @modify ）
5) 编写或最后修改的时间 （@version ）
  - 对于每个方法的注释，在代码块的上面通过 "/* 这里是注释 */" 的方法添加
  - 于方法内部的某些语句的注释，在语句上面通过 "// 这里是注释" 的方法添加
  - 如果业务逻辑复杂，可在方法最前面说明逻辑步骤
  - 对于独立的JavaScript文件需要在开头标明作者(@author)和文件编写（修改）时间(@version)
/**
 * isEmpty( Object obj )
 * 判断对象是否为空
 * @paramsobj
* @return
 * @author || @modify
* @version
 */
varisEmpty = function(obj) {
  /**
   * 1. 判断基本类型
   * 2. 如果为数组或空对象则为true
   * 3. 0也为true
   * 4. 字符串长度为0 true
   * 5. null 或 Nan 或underfined为 true
   */
var type = typeofobj;
  //...
}; 
2.3.11 文件
  - JavaScript程序应该作为一个 .js文件存储和发布，文件编码为utf-8。
  - JavaScript代码不应该嵌入在HTML文件里，除非这些代码是一个单独的会话特有的或者是需要有后台开发工程师进行控制的。HTML里的JavaScript代码大大增加了页面的大小，并且很难通过缓存和压缩来缓解，同时也难以通过前端来维护。
  - JavaScript文件应该在body里越靠后的位置越好，最好是放在最后面。这减少因加载script而导致的其它页面组件的延迟。

2.3.12 异常【建议】
尽量少用，但是在通过接口获取数据惊醒json转换时，必须进行异常处理。
2.3.13 校验工具
校验js代码：http://www.jshint.com/ or http://www.jslint.com/
使用JSLint工具进行检查，并修正报告指出的问题。

2.4 CSS
2.4.1 命名规范【强制】
  - class命名全部小写。
  - class命名需要连接符时请用连字符"-"。
  - class命名应该直观有意义。一般情况下应避免采用特定的样式内容作为class名，比如.content-left，.w-red等（一些已经约定不会变的样式如.w952等除外）；也不要使用表现形式（presentational）的名称；而应使用有组织的或目的明确的名称。
  - class命名意义明确前提下应当尽可能短。但是避免过度的任意的简写。.btn代表button，但是.s不能表达任何意思。
  - 基于最近的父class 或基本（base）class 作为新class的前缀。（可类似于命名空间）（例如，.btn 和 .btn-danger）。
  - 使用 .js-classname 来标识行为（与样式相对），并且不要将这些 classname包含到 CSS 文件中。【建议】
/* Bad example */
.t { …. }
.red { … }
.header { … }
.btn1 { … } /* Good example */
.tweet { … }
.important { … }
.tweet-header { … }

2.4.2 语法规范
  - 避免行内样式
  - 用2个空格来代替制表符（tab）
  - 为选择器分组时，单独的选择器单独放一行
  - 为了代码的易读性，在每个声明块的左花括号前添加一个空格
  - 声明块的右花括号应当单独成行
  - 每条声明语句的 : 后应该插入一个空格
  - 每条声明都应该独占一行，易于维护
  - 所有声明语句都应当以分号结尾，包括最后一条声明语句
  - 对于以逗号分隔的属性值，每个逗号后面都应该插入一个空格（例如，box-shadow）。
  - 不要在 rgb()、rgba()、hsl()、hsla() 或 rect() 值的内部的逗号后面插入空格。这样利于从多个属性值（既加逗号也加空格）中区分多个颜色值（只加逗号不加空格）。
  - 对于属性值或颜色参数，省略小于 1 的小数前面的 0 （例如，.5 代替 0.5；-.5px 代替 -0.5px）。
  - 十六进制值应该全部小写，例如，#fff。在扫描文档时，小写字符易于分辨，因为他们的形式更易于区分。
  - 尽量使用简写形式的十六进制值，例如，用 #fff 代替 #ffffff。
  - 为选择器中的属性添加双引号，例如，input[type="text"]。即使在某些情况下是可选的，为了代码的一致性，也建议都加上双引号。
  - 避免为0值指定单位，例如，用 margin: 0; 代替 margin: 0px;。
  - 如果没有边框时，不要写成border:0，应该写成border:none。
/* Bad CSS */
.selector, .selector-secondary, .selector[type=text] {
  padding:15px;
  margin:0px 0px 15px;
background-color:rgba(0, 0, 0, 0.5);
  box-shadow:0px 1px 2px #CCC,inset 0 1px 0 #FFFFFF
border:0;
} /* Good CSS */
.selector,
.selector-secondary,
.selector[type="text"] {
  padding: 15px;
  margin-bottom: 15px;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;
border:none;
}
2.4.3 声明顺序
相关的属性声明应当归为一组，并按照下面的顺序排列：
1. Positioning 定位【强制】
2. Box model盒模型
3. Typographic文本
4. other
由于定位（positioning）可以从正常的文档流中移除元素，并且还能覆盖盒模型（box model）相关的样式，因此排在首位。盒模型排在第二位，因为它决定了组件的尺寸和位置。
其他属性只是影响组件的内部（inside）或者是不影响前两组属性，因此排在后面。
/*定位*/ 
position
display || visibility
list-style : list-style-type || list-style-position || list-style-image
top || right || bottom || left
z-index
clear
float
/*盒模型*/
width
max-width || min-width
height
max-height || min-height
overflow || clip
margin : margin-top || margin-right || margin-bottom || margin-left
padding : padding-top || padding-right || padding-bottom || padding-left
outline : outline-color || outline-style || outline-width
border
background : background-color || background-image || background-repeat || background-attachment || background-position
/*文本*/
color
font : font-style || font-variant || font-weight || font-size || line-height || font-family
font : caption | icon | menu | message-box | small-caption | status-bar
text-overflow
text-align
text-indent
line-height
white-space
vertical-align
cursor
2.4.4 选择器
  - 禁止使用*选择器
  - 避免使用低效的选择器如body >span ( 参考文档 )。
  - 除reset外，避免直接修改标签选择器，如 p{padding-bottom:5px;}
  - 对于经常出现的组件，避免使用属性选择器（例如，[class^="..."]），影响浏览器性能
  - 尽量不要给id（结构定义） 赋予样式，除非做某些区块等的划分
  - 建议通用元素使用class，利于渲染性能的优化。
  - 建议选择器尽可能短，并且尽量限制层级，最好不超过3层。
  - 只有在必要的时候才将class限制在最近的父元素内（也就是后代选择器）（例如，不使用带前缀的class 时 -- 前缀类似于命名空间）。
/* Bad example */
span { …. }
.page-container #stream .stream-item .tweet .tweet-header .username {…}
.avatar { … } /* Good example */
.avatar { … }
.tweet-header .username { … }
.tweet .avatar { … }


2.4.5 禁止滥用简写属性【建议】
在需要显示地设置所有值的情况下，应当尽量限制使用简写形式的属性声明。常见的滥用简写属性声明的情况如下：
• padding
• margin
• font
• background
• border
• border-radius
大部分情况下，我们不需要为简写形式的属性声明指定所有值。例如，HTML 的 heading 元素只需要设置上、下边距（margin）的值，因此，在必要的时候，只需覆盖这两个值就可以。过度使用简写形式的属性声明会导致代码混乱，并且会对属性值带来不必要的覆盖从而引起意外的副作用。
/* Bad example */
.element {
  margin: 0 0 10px;
  background: red;
  background: url("image.jpg");
  border-radius: 3px 3px 0 0;
}

 /* Good example */
.element {
  margin-bottom: 10px;
  background-color: red;
  background-image: url("image.jpg");
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
2.4.6 其他
  - 避免使用@import
与 <link> 标签相比，@import 指令要慢很多，不光增加了额外的请求次数，还会导致不可预料的问题。替代办法有以下几种：
1. 使用多个 <link> 元素
2. 通过 Sass 或 Less 类似的 CSS 预处理器将多个 CSS 文件编译为一个文件
3. 通过 Rails、Jekyll 或其他系统中提供过 CSS 文件合并功能
  - Filter
避免使用滤镜。
  - !important
尽量避免!important的使用以避免最高优先级带来的维护性问题。
!important只作为优先级应用，不要将!important作为hack使用
  - 清除浮动
清除浮动尽量用after方式，overflow方式作为第二选择
  - 继承
在重用的模块结构中尽量避免使用可继承的属性，以防止被内部元素继承带来隐患和维护性问题。
给予业务的CSS可尽量利用继承减少代码和提高性能。
  - hack
尽量少使用hack
  - z-index使用规范【强制】
z-index是控制一个position为absolute或relative的HTML DOM节点深度的样式属性，它能够使DOM节点相互覆盖重叠。为了合理设置DOM节点的深度
所有没有设置"position"，或者"position"不是"absolute"或"relative"的DOM不允许设置"z-index"属性。
需要层级递进。
2.4.7 CSS Hack的使用
IE6 _property:value
IE6/7 *property:value / +property:value
IE8/9 property:value\0
IE6/7/8/9 property:value\9

IE6 *html selector {…}
IE7 *:first-child+html selector {…}
非IE6 html>body selector {...}
firefox only @-moz-document url-prefix {…}
saf3+/chrome1+ @media all and {-webkit-min-device-pixel-ratio:0}
opera only @media all and {-webkit-min-device-pixel-ratio:10000}, not all and {-webkit-min-device-pixel-ratio:0} {…}
iPhone/mobile webkit @media media and (max-device-width:480px) {…}
2.4.8 SEO常用命名
页面结构 命名 页面结构 命名 页面结构 命名
容器 container 页头 header 外套 wrap
页面主体 main 内容 content 页脚 footer
导航 nav 侧栏 sidebar 栏目 column
主导航 mainnav 子导航 subnav 顶导航 topnav
面包屑 breadcrumb 菜单 menu 子菜单 submenu
标题 title 标志 logo 广告 ad
广告条 banner 登录 login 登录条 loginbar
注册 register 搜索 search 状态 status
按钮 btn 滚动 scroll 标签页 tab
文章列表 list 提示信息 msg 当前的 current
图标 icon 小技巧 tips 注释 note
指南 guild 服务 service 热点 hot
下载 download 新闻 news 投票 vote
合作伙伴 partner 友情链接 friendlink 版权 copyright
摘要 summary    
2.4.9 校验工具
校验css：http://csslint.net/
2.5 图片
  - 图片用CSS中的命名+后缀来命名，如wow_hot_news用到了背景图片，对应的图片名称为 wow_hot_newsbg.jpg。如果wow_hot_new中插入了图片，可命名为wow_hot_news.jpg。
  - 图片多时，需要进行图片的整合（sprites），以减少客户端请求，请注意设置整合图片的尺寸，考虑background-size属性，一般以整百，整千像素，以方便尺寸缩小时的换算。
  - 图片整合分类，以页面元素的特征来区分，如：大量icon图标可集中在一张图片，类似标题等横向平辅元素可集中在一张图片，方便调用，相互之间不会造成影响。
  - 优先级jpg > png
2.6 文件命名
  - 图片，js，css，html页面命名均为小写。
  - 文件名命名为wow_功能（浏览器内部）。功能为英文，多个英文单词用下划线连接。
2.7 Chrome Extension
//待补充
2.7.1 慎用ContentScript的AllFrame注入方式
Chrome插件可以配置在注入页面时， 选择是否注入页面中的所有iframe，称为AllFrame注入。 如果选择注入所有iframe， 那么每一个iframe都会注入插件中的js。选择了AllFrame注入（即使js代码为空）， 经过测试， 会极大的影响页面的加载速度。因为chrome在插入插件js时， 是要阻塞后面的资源加载的， allFrame注入会注入多次， 成倍的增加阻塞时间。 
现在的处理方法有两个：
1) 和产品讨论在业务运行的情况下采用非AllFrame注入。
2) 改变交互方式，使用非插件的模式来实现， 避免allFrame注入。

