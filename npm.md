1.npm init --yes
2.npm update 可以升级devDependencies里的依赖项 (-g 则更新全局)
3.npm outdate 可以查看devDependencies依赖项的最新版本
4.npm uninstall --save-dev vue-loader
4.peerDependencies:
```
  "peerDependencies": {
    "name": "vue-loader",
    "peerDependencies": {
      "vue-template-compiler": "2.1.8"
    }
  }
```
