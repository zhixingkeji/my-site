---
title: vue3教程

date: 2021-11-14 09:15:04

[//]: # (sidebar: heading)

---

## 第1章 入门

### 1.1 vue介绍

Vue 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。



### 1.2 编程范式

命令式编程：以往的编程例如jq，js 都是先执行什么再执行什么。

例如，先创建div元素，定义message，把message放到div中显示



声明式编程：Vue只需要声明div中需要显示什么，由vue对象进行管理元素

好处是前后端完全分离，响应式后端数据更改后前端自动修改）



### 1.3 设置活动模板

设置，编辑器，活动模板，在Vue下添加vue，和代码，定义在html里响应

之后在敲代码时输入vue按tab键会自动导出模板里的代码





## 第2章 使用

### 2.1 安装

```bash
$ npm install -g vue@next
```

```bash
npm install -g @vue/cli
```



### 2.2 vue-cli脚手架

命令行创建项目

```sh
vue create myproject
```



gui界面

```sh
vue ui
```





### 2.3 计算属性

#### 2.3.1 computed

一般的, computed函数只有get方法, 所以不能 plusOne++ , 如果需要 需要对其设置 set 方法

```js
const plusOne = computed({
  get: () => count.value + 1,
  set: val => {
    count.value = val - 1
  }
})
```



### 2.4 监听属性

#### 2.4.1 watchEffect

立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数

```javascript
const count = ref(0)

watchEffect(() => console.log(count.value))
// -> logs 0

setTimeout(() => {
  count.value++
  // -> logs 1
}, 100)
```

#### 2.4.2 watch

侦听单一源

```javascript
// 侦听一个 getter
const state = reactive({ count: 0 })
watch(
  () => state.count,
  (count, prevCount) => {
    /* ... */
  }
)

// 直接侦听一个 ref
const count = ref(0)
watch(count, (count, prevCount) => {
  /* ... */
})
```



### 2.5 条件渲染

#### 2.5.1 v-if

```html
<h2 v-if="score>=90">{{message}}</h2>
<h2 v-else-if="score>=80">{{message}}</h2>
<h2 v-else-if="score>=70">{{message}}</h2>
<h2 v-else>{{message}}</h2>
```

#### 2.5.2 v-show 和 v-if 的区别

v-if 为 false 的时候，是从虚拟dom里删除，当为true时再添加渲染。
v-show 只是把行内元素样式改为不显示，但是还在dom里。
v-show 适合频繁切换显示隐藏，因为不用新添加dom。

### 2.6 列表渲染

#### 2.6.1 遍历数组

```html
<li v-for="item in names"> {{ item }} </li>

<li v-for="(item, index) in names">{{index+1}} {{ item }} </li>
```

#### 2.6.2 遍历对象

```html
<li v-for="value in obj"> {{ value }} </li>

<li v-for="(value,key) in obj">{{key}} : {{ value }} </li>

<li v-for="(value,key,index) in obj">{{key}} . {{key}} : {{ value }} </li>
```

#### 2.6.3 与数据响应有关的数组方法

| 方法    | 描述                                                 |
| ------- | ---------------------------------------------------- |
| push    | 将一个元素添加到数组末尾，并返回新数组的长度         |
| pop     | 从数组中删除并返回最后一个元素                       |
| shift   | 从数组中删除并返回第一个元素                         |
| unshitf | 将一个或多个元素添加到数组的开头，并返回新数组的长度 |
| splice  | 从数组中删除或向数组添加元素                         |
| sort    | 对数组元素排序，返回排序后的数组                     |
| reserve | 将数组中的元素位置颠倒，返回颠倒后的数组             |



#### 2.6.4 列表渲染中的key

虚拟dom会进行判断，是否进行复用，

如果key值一样则复用，否则创建新的缓存

当某一层有很多相同节点时，也就是列表节点，我们希望插入一个新的节点，

所以我们需要使用key来给每个节点做一个唯一的标识，

diff就会识别两者的不同，找到正确位置进行插入，

而不是将整个列表重新排序插入，提高虚拟DOM的效率

```html
<li v-for="item in names" :key="item"> {{ item }} </li>
```







### 2.7 事件处理

#### 2.7.1 v-on

语法糖简写为 `@`



#### 2.7.2 多事件处理

```html
<!-- 这两个 one() 和 two() 将执行按钮点击事件 -->
<button @click="one($event), two($event)">
  Submit
</button>
```



#### 2.7.3 事件修饰符

`.stop `

`.prevent`

`.capture `

`.self`

`.once`

`.passive`

```html
<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div @click.self="doThat">...</div>
```





### 2.8 v-model

表单输入绑定

```html
<input v-model="message" placeholder="edit me" />
<p>Message is: {{ message }}</p>
```





### 2.9 动态样式绑定

普通样式与动态样式共存

isActive ,hasError 是变量 保存的布尔值

```html
<div
  class="static"
  :class="{ active: isActive, 'text-danger': hasError }"
></div>
```



### 2.10 生命周期

#### 2.10.1 生命周期介绍



#### 2.10.2 setup

接收两个参数

1. `props`

props是响应式的, 使用普通的解构赋值会消除响应性

```js
// MyBook.vue

import { toRefs } from 'vue'

setup(props) {
  const { title } = toRefs(props)

  console.log(title.value)
}
```



2. `context`

不是响应式的, 可以使用结构赋值

```js
// MyBook.vue

export default {
  setup(props, context) {
    // Attribute (非响应式对象，等同于 $attrs)
    console.log(context.attrs)

    // 插槽 (非响应式对象，等同于 $slots)
    console.log(context.slots)

    // 触发事件 (方法，等同于 $emit)
    console.log(context.emit)

    // 暴露公共 property (函数)
    console.log(context.expose)
  }
}
```



#### 2.10.3 生命周期钩子

| 选项式 API        | Hook inside         |
| ----------------- | ------------------- |
| `beforeMount`     | `onBeforeMount`     |
| `mounted`         | `onMounted`         |
| `beforeUpdate`    | `onBeforeUpdate`    |
| `updated`         | `onUpdated`         |
| `beforeUnmount`   | `onBeforeUnmount`   |
| `unmounted`       | `onUnmounted`       |
| `errorCaptured`   | `onErrorCaptured`   |
| `renderTracked`   | `onRenderTracked`   |
| `renderTriggered` | `onRenderTriggered` |
| `activated`       | `onActivated`       |
| `deactivated`     | `onDeactivated`     |



```js
export default {
  setup() {
    // mounted
    onMounted(() => {
      console.log('Component is mounted!')
    })
  }
}
```



### 2.11 模板语法

#### 2.11.1 文本

数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值

```html
<span>Message: {{ msg }}</span>
```



#### 2.11.2 v-html

原始html

```html
<span v-html="rawHtml"/>
```



#### 2.11.3 v-pre

不用任何解析，保留原格式输出



#### 2.11.4 v-cloak

在没渲染加载完成之前不显示





## 第3章 组件

### 3.1 组件注册

```js
import ComponentA from './ComponentA.vue'

export default {
  components: {
    ComponentA
  }
  // ...
}
```



### 3.2 父传子props传值

**父组件发送**

在组件标签上绑定一个变量即可

```vue
<son :data=12></son>
```



**子组件接收**

```js
props: {
    // 类型检查
    height: Number,
        
    // 类型检查 + 其他验证
    age: {
      type: Number,
      default: 0,
      required: true,
      validator: value => {
        return value >= 0
      }
    }
  }


setup(props,content){
    //接收变量
    const age = props.age
}
```



### 3.3 子传父emit

**子组件发送**

```js
setup(props,content){
    function menuClick (menuName) {
        // 通过⾃定义事件回传值
        context.emit('menuClick', { menuName })
    }
}
```



父组件接收

```js
<son @menuClick="menuClick"></son>

setup(){
	//父组件传给子组件的值
	let parentValue = ref()
    
 	const menuClick = (value) => {
    	parentValue.value = value
    }
}
```





### 3.4 插槽



### 3.4 加强组件传值

provide不限层级，只要是处于A页面下的子组件 或者孙子组件都可以。

`provide` 和 `inject` 都需要放在setup中才能够使用，不在里头会报错像下面这样。

```js
父组件发送
provide(key, 'foo') // 若提供非字符串值将出错

子组件接收
const foo = inject(key) // foo 的类型: string | undefined
```





### 3.5



### 3.6 模板使用





### 3.7 css样式隔离

sooped



### 3.8 异步组件

#### 3.8.1 keep-alive

#### 保持组件活性介绍

vue内部的一个组件，保留组件的状态。



```html
<keep-alive>
		<router-view/>
</keep-alive>
```



#### 3.8.2 被保持状态的组件的方法

activated（），deactivated（）



#### 3.8.3 包含和排除

keep-alive标签内的属性，include 和 exclude

keep-alive exclude="About"  //排除about组件的保留记录





## 第4章 组件库

### 4.1 elementUI组件库

#### 4.1.1 安装element组件库和icon库

安装element-plus

```sh
vue add element-plus
```



安装 element icon

```she
 cnpm install --save @element-plus/icons-vue 
```



全局注册 plugins/element.js

```js

import ElementPlus from 'element-plus'
import '../element-variables.scss'
import * as ElIcons from '@element-plus/icons-vue'


export default (app) => {
  for (const name in ElIcons){
    app.component(name,(ElIcons)[name])
  }

  app.use(ElementPlus)
}

```





#### 4.1.2 对话框显示方案

父子组件,父组件按钮打开一个对话框,对话框是他的子组件,

实现是否显示对话框的双向绑定.



子组件 UserAdd

```js
//html
<el-dialog
    title="新增用户"
    :model-value="adduserbtn"
    @close="onClose"
    @open="onOpen"
>

//script
props: {
  adduserbtn: {
    type: Boolean,
    default: false,
    required: true
  }
},

setup(props, context) {
    let adduserbtn = ref(props.adduserbtn)
    watch(() => props.adduserbtn, (val) => {
      //查看父组件传过来的值是否变化，从而修改值
      adduserbtn.value = val
    });
    watch(() => adduserbtn.value, (val) => {
      //查看子组件值是否变化，在赋值给父组件
      context.emit('update:adduserbtn', val)
    });
    
    
    //取消按钮
    let close = () => {
      adduserbtn.value = false
    }

    //弹窗关闭按钮
    let onClose = () => {
      close()
    }

    //提交按钮
    let handelConfirm = () => {
      close()
    }
}
```

父组件

```html
//html
<UserAdd v-model:adduserbtn="adduserbtn"></UserAdd>
//script
let adduserbtn = ref(false)
```



### 4.2 前端权限方案

1. 后端根据账号的等级,返回不同的菜单列表,前端做动态路由进行展示(路由拦截,缓存菜单)

2. 后端返回账号信息和角色信息,前端从公共类中展示所有菜单,根据角色不同,把某些菜单设置为禁用



### 4.3 网络请求axios

axios安装

`cnpm i axios --save`







### 4.4 别名

alias 解决引入文件路径问题

使用import导入时可以简写

在标签内使用src时需要在前加 `~`

`import TabBar from "@/views/TabBar" `

`<img src="~@/assets/img/home.svg">`



webpack.base.conf.js 文件

```js
resolve: {
    extensions: [ '.js', '.vue', '.json' ],
    alias: {
        '@': resolve('src'),
        'assets': resolve('@/assets'),
        'components': resolve('@/components'),
        'views': resolve('@/views'),
    }
}
```



### 4.5 使用网页md编辑器组件





#### 4.5.1 vue3下安装

```bash
npm i mavon-editor@3.0.0-beta
```



main.js中引入

```js
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

app.use(mavonEditor)
```

组件内使用

```html
<mavon-editor v-model="formLabelAlign.content"></mavon-editor>
```





#### 4.5.2 vue2下安装

npm i mavon-editor



#### 4.5.3 解析

npm install markdown-it --save

npm install github-markdown-css


## 第5章 axios

### 5.1 概念

Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中

### 5.2 特点

-   从浏览器中创建 [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
-   从 node.js 创建 [http](http://nodejs.org/api/http.html) 请求
-   支持 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
-   拦截请求和响应
-   转换请求数据和响应数据
-   取消请求
-   自动转换 JSON 数据
-   客户端支持防御 XSRF

### 5.3 安装

```shell
cnpm install axios
```

### 5.4 发送请求

原生请求

```js
// 获取远端图片
axios({
  method:'get',
  url:'http://bit.ly/2mTM3nY',
  responseType:'stream'
})
  .then(function(response) {
  response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
});
```

封装的请求方法

```js
axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.options(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])
axios.all()  //执行并发请求
```

### 5.5 配置拦截

### 5.6 封装项目api



## 第6章 vue-router

### 6.1 vue路由



动态路由遍历菜单



在组件中获取 router  route

```js
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
  }
}
```


## 第7章 vuex




### 7.1 在组件内获取store

```js
import {useStore} from "vuex";

const store = useStore()
```


在state里定义数据

在muation里定义set方法

在getters里定义getter方法

在modules里定义模块


cookie

localstore  本地存储空间

sessionstore  会话存储空间 区别


组件内提交

```js
store.commit('SET_TOKEN',jwt)
```


