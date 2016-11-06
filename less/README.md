###命令行中使用：
    npm install less -g   
    lessc main.less  
    lessc main.less main.css  
    lessc --clean-css main.less main.css
###参考链接：
[less小总结：]('http://www.bootcss.com/p/lesscss/')
###注释：
/**/  编译时保留   
//  编译时不保留   
###变量：
@width: 120px;    
    p {  
      width: @width;  
    }   
###混合：
    .border {  
      border: 5px solid green;  
    }
----
    .border2(@width) {  
      border: @width solid blue;  
    }
----
    .border3(@width:10px) {  
      border: @width solid blue;  
    }
----

    div {  
      width: 200px;  
      hieght: 100px;  
      .border;  
      .border2(2px);  
      .border3();  
    }
###匹配模式：
    .triangle(@_, @w:5px, @c:###666) {  // @_总是会被匹配到,参数要和匹配的其他项保持一致。  
      width: 0;  
      height: 0;  
      overflow: hidden; // IE6的最小高度问题。  
    }
    .triangle(top, @w:3px, @c:###666) {  
      border-width: @w;  
      border-color: transparent transparent  @c transparent;//显示的方位加颜色  
      // border-style: solid;  
      border-style: dashed dashed solid dashed; //兼容IE  
    }  
    .triangle(right, @w:3px, @c:###666) {  
      border-width: @w;  
      border-color: transparent transparent transparent  @c;  
      border-style: dashed dashed dashed solid;  
    }  
    .triangle(bottom, @w:3px, @c:###666) {  
      border-width: @w;  
      border-color:  @c transparent transparent transparent;  
      border-style: solid dashed dashed dashed;  
    }  
    .triangle(left, @w:3px, @c:###666) {  
      border-width: @w;  
      border-color: transparent  @c transparent transparent;  
      border-style: dashed solid dashed dashed;  
    }
------
    .pst(a) {  
      position: absolute;  
    }  
    .pst(r) {  
      position: relative;  
    }  
    .pst(f) {  
        position: fixed;  
    }
###运算：
    @wid: 300px;  
    div {  
      width: @wid + 20;  
      height: @wid * 1.5;  
    }
###嵌套：层级最好不要超过3层
    div {  
      width: 100px;  
      p {  
        width: 50%;  
        .a {  
          color: #ccc;  
          // &代表上一层选择器
          &:hover {  
            color: green;  
          }
          &-span {
            font-color: #666;
          }
        }  
      }  
    }  
###arguments
    .border(@w:3px, solid, @c: green) {
      border: @arguments;
    }
###避免编译：
    .width{
      width: ~'calc(300px - 30px)';
    }

###important
    .test_important{
      .border !important;
      .border2(6px) !important;
    }
###importing
    @import "head.less"   // 后缀可以不带
    @import "footer.css"  // 加上.css后缀，LESS就会跳过它不去处理它。
####字符串插值：
    @base-url: "https://www.baidu.com";
    background-image: url('@{base-url}/search/index?tn=baiduimage');
###JS表达式：
    @val: `'hello'.toUpperCase() + !`;
