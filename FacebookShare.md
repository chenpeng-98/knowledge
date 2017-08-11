### 流程：
1. 访问[Facebook首页](https://www.facebook.com/)，点击左侧导航的**管理应用**进入[应用管理页面](https://developers.facebook.com/apps/)
- ![进入管理页面](https://img.alicdn.com/tfs/TB1KC__SFXXXXbyapXXXXXXXXXX-634-540.png)
2. 添加新应用并生成app_id
- ![创建按钮](https://img.alicdn.com/tfs/TB1kwQzSFXXXXcLXFXXXXXXXXXX-1065-130.png)
- ![生成APP_id](https://img.alicdn.com/tfs/TB1y93QSFXXXXapXpXXXXXXXXXX-726-826.png)

3. 应用设置：
- ![设置应用](https://img.alicdn.com/tfs/TB1ngMWSFXXXXXCXpXXXXXXXXXX-1902-765.png)

4. 上线应用
- ![应用上线](https://img.alicdn.com/tfs/TB1A8AgSFXXXXcqaXXXXXXXXXXX-1380-382.png)

5. 页面分享功能封装
```js
// Facebook 分享
function shareToFb() {
  const APP_ID = 18571746579;
  const urls = ['']; // 用于分享的页面url，分享好Facebook后好友点击即可进入该url
  const len = urls.length;
  const random = parseInt(Math.random() * (len - 1), 10);
  const fb = `https://www.facebook.com/dialog/feed?app_id=${APP_ID}`;
  const link = urls[random];
  const redectUri = 'https://www.facebook.com/'; // 用户分享成功后跳转到的页面url
  window.open(`${fb}&link=${link}&redirect_uri=${redectUri}`);
}
```

6. 分享页面制作
* [动态发布对话框](https://developers.facebook.com/docs/sharing/reference/feed-dialog)
* [页面规则]( https://developers.facebook.com/docs/sharing/best-practices)中包含了图片格式、开放图谱标签等的基本要求。
* 最简陋的页面：
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>International Activities</title>
  <!-- <meta property="og:type" content="website"> -->
  <!-- <meta property="fb:app_id" content="113869198637480"> -->
  <meta property="og:title" content="Let Anushka answer all your queries. ">
  <meta property="og:description" content="Meet Anushka in a chatroom.">
  <meta property="og:image" content="https://img.alicdn.com/tfs/TB1mxp1SFXXXXczXFXXXXXXXXXX-600-315.jpg">
  <!-- <meta property="og:url" content="https://alimarket.taobao.com/markets/browser/fenda?activityId=insrk0803en"> -->
</head>
<body>
  <script>
    setTimeout(function() {
      <!--参数entry=Facebookshare之类的字段，用于计算Facebook的回流率  -->
      location.href = 'https://alimarket.taobao.com/markets/browser/fenda?activityId=insrk0803en&entry=Facebookshare';
    }, 100);
  </script>
</body>
</html>
```

7. 使用分享调试器：
- 通过[调试工具](https://developers.facebook.com/tools/debug/sharing/)可以查看分享页面是否符合规范,请将分享页面的url粘进来。（本次**活动主页**：https://alimarket.taobao.com/xxx, 本次**分享页面**：https://g.alicdn.taobao.com/xxx）

### 其他
1. [开发者申诉](https://developers.facebook.com/appeal/)请移步这里
2. 分享数据观察，在当前应用界面即可看到。
3. 以下问题请在[常见问题](https://developers.facebook.com/docs/plugins/faqs#like-counter)中查找答案
  - Facebook 为什么抓取我的网站？什么时候抓取？
  - 如何将页面移至其他网址？
4. 第一个分享的用户无法看到呈现的图片，如何解决？请移步[最佳实践](https://developers.facebook.com/docs/sharing/best-practices)中的**预缓存图片** 
  - 通过分享调试器预缓存图片
  - 使用 og:image:width 和 og:image:height 开放图谱标签
