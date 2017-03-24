#### Scripts may close only the windows that were opened by it.
The message is pretty clear, you can't close a window if your current javascript is not the one that has opened it.  
You can't close yourself. What is the purpose of those lines

### windows窗口对象（历史）history.go(),history.back(),history.forward()。
* go()方法只有一个参数，可以是整数、负数。如果是正数，就前进。负数就是后退。（相当于Forward和Back的区别）  
* go(±n|URL): 前进/后退n步  
* history.back();   后退  
* history.forward(); 前进  
* history.length查看历史中的页面数
### history.go(-1)和history.back()的区别
* history.go(-1)表示后退与刷新。如数据有改变也随之改变  
* history.back()只是单纯的返回到上一页。  
* go(-1): 返回上一页，原页面表单中的内容会丢失；back(-1): 返回上一页，原页表表单中的内容会保留，一般还是back(-1)用的多
