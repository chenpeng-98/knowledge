* npm init --yes  
*  npm update 可以升级devDependencies里的依赖项 (-g 则更新全局)
* npm outdate 可以查看devDependencies依赖项的最新版本
* npm uninstall --save-dev vue-loader
* peerDependencies:
```js
  "peerDependencies": {
    "name": "vue-loader",
    "peerDependencies": {
      "vue-template-compiler": "2.1.8"
    }
  }
```
