# 简单的扫码结果呈现APP(Cordova)

## 项目搭建流程
1. react脚手架安装主项目
2. cordova创建初始APP项目
3. 移动cordova相关内容到react
4. cordova根目录在WWW,所以更改react项目打包结果至WWW目录(可以更改默认buildPath或使用命令行)
5. 参考官方文档, 添加cordova相关环境（例如: cordova platform add ios）
6. 依据业务安装cordova相关插件
7. 开发环境,打包app(Xocde/Android Studio)

## 环境注意项
安卓根据cordova安装的环境构建版本，安装相应版本
目录: platforms/android/build.gradle
```
    project.ext {
      defaultBuildToolsVersion="29.0.2" //String
      defaultMinSdkVersion=22 //Integer - Minimum requirement is Android 5.1
      defaultTargetSdkVersion=29 //Integer - We ALWAYS target the latest by default
      defaultCompileSdkVersion=29 //Integer - We ALWAYS compile with the latest by default
    }
```
### `npm start`
启动项目
### `npm test`
测试
### `npm run build`
打包
### `npm run eject`
打开webpack配置
