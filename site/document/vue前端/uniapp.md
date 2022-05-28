---
title: uniapp教程

date: 2022-03-24 00:43:01


---




## 一. 简介

### 1.1 初体验



**命令行创建项目**

```sh
vue create -p dcloudio/uni-preset-vue uniapp-study
```



**运行项目**

```sh
npm run dev:mp-weixin
```



**微信开发者工具导入项目**

导入 `dist/dev/mp_weixin` 目录



### 1.2 项目结构

App.vu  应用配置

main.js   vue入口文件

manifest.json  配置应用 appid logo 版本等打包信息

pages.json  配置路由 导航 选项卡等

uni.scss 内置的scss变量

pages-index-index.vue  页面组件

static-logo.png  静态资源



### 1.3 pages.json

路由 谁在前面谁就是首页







### 1.4 单位

rpx 小程序单位  750rpx 等于屏幕宽度



vm  H5单位 100vm 等于屏幕的宽和高





### 1.5 样式

启用scss

npm install sass-loader node-sass

npm install sass-loader dart-sass



### 1.6 标签

`<view>` 等于 `<div>`









## 二.  基本语法

### 2.1 数据的展示

通过在data里定义 , 在标签里用 双大括号展示



还可以用在标签上绑定属性 , `<view :data-color="color"/>`





### 2.2 数据的循环

```js
<view v-for="(item,index) in list" :key="item.id">
    {{item.text}}
</view>
```





### 2.3 条件编译

v-if  不适合做频繁切换

v-show   适合频繁切换



### 2.4 计算属性





```js
<view>{{cvMoney}}</view>
```

```js
computed:{
    cvMoney(){
        //计算属性的加工功能
        return "$" + this.money
    }
    filtList(){
        //计算属性的过滤功能
        //过滤掉id小于0的对象
        return this.list.filter(v => v.id <= 0)
    }
}
```





## 三. 事件和组件

### 3.1 事件的使用

注册事件

```js
<view @click="handleClick"></view>
```



定义函数

```js
methods:{
    handleClick(){
        console.log("这里是函数内容")
    }

}
```



### 3.2 事件的传参

普通传参



```js
<view @click="handleClick('abc')"></view>
```





$event 把整个对象传入

```js
<view @click="handleClick($event)"></view>
```





### 3.3 组件使用

创建组件

src/components/img-border.vue



引入组件

src/pages/index/index.vue

import imgBorder from "@/components/img-border";



注册组件

```js
components:{
    imgBorder
}
```

使用组件

```js
<img-border></img-border>
```





### 3.4 组件传参

#### 3.4.1 父传子

父组件内标签上 绑定属性

```js
<img-border :list="[1,2,3]"></img-border>
```



子组件在props属性里接受

声明传递内容的类型

```js
props:{
    list: Array
},

```



#### 3.4.2 子传父

子组件触发事件传递数据

```js
<view @click="clickHandler></view>

methods:{
    clickHandler(){
        this.$emit("srcChange","内容")
    }
}
```



父组件监听接收数据

e形参就是子组件传过来的参数

```js
<view @srcChange="HandlerSrcChange></view>

methods:{
    HandlersrcChange(e){
        console.log(e)
    }
}
```





### 3.5 全局共享数据

#### 3.5.1 通过Vue原型共享数据

在 src/main.js

`Vue.prototype.baseurl="www.baidu.com"`



在某个组件里的 onLoad 函数内

`console.log(this.baseurl)`



#### 3.5.2 通过小程序特性 globalData 共享数据

在 src/App.vue

```js
globalData:{
    base:"www.badiu.com"
}
```



在某个组件里的 onLoad 函数内

`e = getApp().globalData.base`

`console.log(e)`





#### 3.5.3 vuex





#### 3.5.4 本地存储





### 3.6 组件插槽

插槽可以实现动态给子组件传递标签



创建子组件 `<tab-Bar>`  在需要插入的地方使用 `<slot></slot>`占位



父组件引入子组件 并在内部写入标签 即可插入到子组件内

```js
<tab-Bar>
    <view>要插入的标签内容</view>
</tab-Bar>
```





## 四. 生命周期

### 4.1 生命周期



全局APP中使用 onLaunch 应用启动时



页面中使用 onLoad 页面加载完成时



页面中使用 onShow 页面显示时



组件内使用 mounted 组件挂载完毕时

组件内的声明周期与vue2相同







## 五. 项目实战 懂你找图

### 5.1 项目介绍

懂你找图



### 5.2 项目搭建

#### 5.2.1 环境准备

创建项目

`vue create -p dcloudio/uni-preset-vue uniapp-study`



安装样式依赖

`npm i sass -D`

`npm i sass-loader@10.1.1 -D `





打开webstrom运行项目

`npm run dev:mp-weixin`



打开微信开发工具导入dist/weixin目录



#### 5.2.2 底部导航栏开发

| 页面     | 路径                       |
| -------- | -------------------------- |
| 首页     | pages/home/index.vue       |
| 横屏     | pages/horizontal/index.vue |
| 精美视频 | pages/video/index.vue      |
| 搜索     | pages/search/index.vue     |
| 我的     | pages/mine/index.vue       |



配置路由



配置图标





#### 5.2.3 配置样式和组件库

配置基础样式和字体库并全局引入





安装 uni-ui 组件库

npm install @dcloudio/uni-ui





#### 5.2.4 封装请求














### 5.3 首页界面开发

#### 5.3.1 创建分段器







### 5.4 搜索界面开发







### 5.5 我的界面开发









### 5.6 横屏界面开发







### 5.7 视频界面开发





## 六. 常用功能总结

### 6.1 静音功能

video 标签上 muted 属性 : 设置为 true 或 false



### 6.2 下载功能



### 6.3 触控功能

滑动

长按

点击

多指





### 6.4 