---
title: webpack

date: 2021-11-18 17:38:30


---

## 第1章 webpack简介

### 1.1 前端打包工具的进化

**解决作用域问题**

早期 gruf 和 sss 的接打包方案 

使用函数立即调用的方法 (复杂 效率低, 修改一行代码一个js文件就要重新打包)



**解决打代码拆分问题**

nodejs 基于 commonjs 模块化 (需要第三方工具编译 浏览器才能运行)



**解决浏览器不支持node模块化问题**

使用第三方工具browserify和requirejs



**解决使用node模块化后程序变复杂的问题**

es 模块化 ( 浏览器支持不完整)



**webpack的出现**

支持 commonjs ESmodule 两种方案，并且能打包静态资源



**webpack 竞品**   

parcel rollup vite



### 1.2 webpack简介

webpack是一种前端资源构建工具，一个静态模块打包器

在Webpack看来，前端的所有资源文件（js/json/css/img/less/…）都会作为模块处理

它将根据模块的依赖关系进行静态分析，打包生成对应的静态资源bundle



### 1.3 webpack 安装

首先需要准备node环境

```sh
$ node -v  //推荐使用LTS版本
$ cnpm -v  //国内镜像源
```



创建npm项目

```sh
npm init -y
```



安装 webpack

```sh
cnpm install webpack webpack-cli --save-dev  //开发依赖
npx webpack -v
```



::: info

不推荐全局安装webpack，不同项目之间使用的版本不同，全局安装后可能会出现一些错误

:::



### 1.4 自定义 webpack 配置

项目根目录下创建 `webpack.config.js`  (必须) 

```js
const path = require('path')

module.exports = {
    //入口文件
    entry: './src/index.js',
    
    
    //输出文件
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'./dist')
        
    }
}
```







## 第2章







