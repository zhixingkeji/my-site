---
title: React教程

date: 2022-03-24 00:41:38


---


## 第1章 React 入门

### 1.1 介绍

1）由 facebook 开源

2）用于动态构建用户界面的 JS 库



### 1.2 特点

1）声明式编码

2）组件化编码

3）高效 Diffing 算法

4）原生应用 React Native



### 1.3 基本使用

npm配置源

```bash
//脚手架创建项目时会特别慢,因为很多依赖都在外网,需要换成国内镜像源
//设置npm镜像源
npm config set registry https://registry.npm.taobao.org

//查看npm镜像源
npm config get registry
```



npm升级

```bash
//安装 n 
npm i -g n --force

//升级到稳定版本
sudo n --stable

//升级到最新版
n latest

//升级到指定版本
n 10.0.0
```



脚手架安装

```bash
//安装node 
node -v

//安装cnpm,并且设置镜像源
npm install -g cnpm --registry=https://registry.npm.taobao.org

//全局安装react脚手架
sudo cnpm install -g create-react-app

//创建项目
create-react-app react-study

//启动项目
npm start
```



### 1.4 虚拟DOM



### 1.5 React JSX

1.语法

使用变量时 用单花括号

class 更名为 className

内联样式 style 要用 双花括号

只能有一个根标签

标签首字母小写会从html语法里寻找对应标签

标签首字母大写会搜索React组件

只能遍历数组 不能遍历对象

可以写表达式 不能写语句



注释的写法 要在外面加一层大括号

```jsx
{/*注释的内容 */ }
```







2.区分表达式和语句

表达式 : 左侧可以接值 , 包括函数调用 , 定义函数

语句 :  包括 if  for  switch 等流程控制语句



3.遍历一个数组实例

```jsx
const data = ['a','b','c']

const VDOM = (
	<div>
  	<ul>
      {
        data.map((item,index)=>{
          return <li key={index}>{item}</li>
        })
      }
    </ul>
  </div>
)
```







### 1.6 模块化与组件化

#### 1.6.1 模块

一个业务逻辑 ,  放在一个js文件里



#### 1.6.2 组件

所有实现某个功能的 html , css , js , 图片 , 字体 , 音视频等资源的集合, 构成一个组件



#### 1.6.3 模块化

当应用的 js 都以模块来编写, 这个应用就是模块化的应用



#### 1.6.4 组件化

当应用多是以组件来编写, 这个应用就是组件化的应用





## 第2章 React 组件化

### 2.1 开发者工具



### 2.2 函数式组件和类式组件

#### 2.2.1 函数式组件

1.函数定义的组件适用于简单组件



```js
//创建函数式组件
function MyComponent(){
  //函数里的this是undifind，因为babel开启严格模式编译
	consolo.log(this)
  return <h2>我是函数式组件</h2> 
}

//渲染组件到页面
ReactDOM.render(<MyComponent/>,document.getElementById('text'))
//首先react解析标签,找到该组件
//发现是函数式组件,调用该函数,将返回的虚拟dom转换为真实dom,呈现在页面里
```





#### 2.2.2 类式组件

1.类式组件适用于复杂组件



```js
//创建类式组件
class MyComponent extends React.Component{
  //render放在组件的原型对象上,供实例使用
	//render中的this指向组建的实例对象
  render(){
    return (
    	<div>我是类组件</div>	
    )
  }
}

//渲染组件到页面
ReactDOM.render(<MyComponent/>,document.getElementById('text'))
//首先react解析标签,找到该组件
//发现是类式组件,new出该组件实例,通过实例调用到原型上的render方法
//将render返回的虚拟dom转换为真实dom,呈现在页面里
```





### 2.3 组件实例的三大属性 state

箭头函数的复习



使用构造器的方法

```js
//通过点击 使页面的文字更改
class Weather extends React.Component{
  
  //构造器
  constructor(props){
    super(props)
    
    //初始化状态
    this.state = {
      isHot: false,
      wind: '微风'
    }
    
    //解决函数内this指向为undifind问题
    this.changeWeather = this.changeWeather.bind(this)
    
  }
  
  
  //渲染
  render(){
    const {isHot} = this.state
    return (
    	<div onClick={this.changeWeather}>
      今天天气很{isHot ? '炎热' : '凉爽'}
			</div>	
    )}
    
  //鼠标单击更改布尔值
  changeWeather(){
    //获取isHot变量
  	const isHot = this.state.isHot
    //通过react认可的方法进行修改,合并不是替换
    this.setState({isHot: !isHot})
	}
}

ReactDOM.render(<Weather/>,document.getElementById('root'))
```



不使用构造器的方法



```jsx
//通过点击 使页面的文字更改
class Weather extends React.Component{
  state = {isHot: false}
  
  render(){
    const {isHot} = this.state
    return (
    	<div onClick={this.changeWeather}>
      今天天气很{isHot ? '炎热' : '凉爽'}
			</div>	
    	)
    }
    
	changeWeather = () => {
  		const isHot = this.state.isHot
      this.setState({isHot: !isHot})
	}

  
}

ReactDOM.render(<Weather/>,document.getElementById('root'))
```







### 2.4 组件实例的三大属性 props

#### 1.展开运算符的复习



#### 2.批量传递props

```jsx
class Person extends React.Component{
  
  render(){
    const {name,age,sex} = this.props
    return (
      <ul>
      	<li>姓名: {name}</li>
        <li>性别: {sex} </li>
        <li>年龄: {age} </li>
      </ul>    		
    	)
    }
}

ReactDOM.render(
  <Person name="tom" age={18} sex="女"/>,
  document.getElementById('root')
)


//模拟后台请求的数据
const p = {name="tom" age="18" sex="女"}
//使用展开运算符
ReactDOM.render(
  <Person {...p},
  document.getElementById('root')
)
```



#### 3.对props的限制



```jsx
class Person extends React.Component{
  render(){
    const {name,age,sex} = this.props
    return (
      <ul>
      	<li>姓名: {name}</li>
        <li>性别: {sex} </li>
        <li>年龄: {age} </li>
      </ul>    		
    	)
    }
}

Person.propTypes = {
  //对某个参数类型的限制
  name:PropTypes.string
  
  //对某个参数是否为必填的限制
  age:PropTypes.number.isRequired
  
  //限制参数为函数要写成func
	speak:PropTypes.func
}

	

//若某个参数没有,显示为默认值
Person.defaultProps = {
  sex:'不男不女'
}

ReactDOM.render(
  <Person name="tom" age={18} sex="女" spake={spake}/>,
  document.getElementById('root')
)

function speak() {
  conlose.log("我说话了");
}
```



#### 4.props的简写方式

```js
class Person extends React.Component{
  state = {}
  
  //通过static修饰,为类的原型上添加属性
	static defaultProps = {
  	sex:'不男不女'
	}
  
  //通过static修饰,为类的原型上添加属性
	propTypes = {
  	//对某个参数类型的限制
  	name:PropTypes.string
	}
  
  
  render(){
    const {name,age,sex} = this.props
    return (
      <ul>
      	<li>姓名: {name}</li>
        <li>性别: {sex} </li>
        <li>年龄: {age} </li>
      </ul>    		
    )
  }
}

ReactDOM.render(
  <Person name="tom" age={18} sex="女" spake={spake}/>,
  document.getElementById('root')
)
```



#### 5.构造器与props

```js
//在构造器中传入props,在super中接收props,否则this.props为未定义
//但原则上不使用构造器
constructor(props){
  super(props)
  console.log(this.props)
}
```



#### 6.函数式组件使用props

```js
function Person(props){
  const {name,age,sex} = props
  return (
     <ul>
      <li>姓名: {name}</li>
       <li>性别: {sex} </li>
       <li>年龄: {age} </li>
     </ul>    		
    )
}

//函数不能声明static,要在外面外挂属性
Person.propTypes = {
  name:PropTypes.string
}
Person.defaultProps = {
 	sex:'不男不女'
}

ReactDOM.render(
  <Person name="tom" age={18} sex="女" spake={spake}/>,
  document.getElementById('root')
)
```



### 2.5 组件实例的三大属性 refs与事件处理

#### 2.5.1 refs简介

组件内的标签可以定义ref属性来标识自己



#### 2.5.2 字符串形式ref (已经废弃)



```jsx
<input ref="inp1"></input>

const {inp1} = this.refs
```



#### 2.5.3 回调形式ref

内联形式

  ```jsx
//currentNode为当前形参 使用任何名称都可以
//input1 是为这个节点起的名字,react调用ref函数直接挂载到类的属性上
<input ref={(currentNode)=>{this.input1 = currentNode}}></input>

//在类上直接通过this接受
const {input1} = this
  ```



内联形式在更新时会调用两次

第一次先传入一个null , 第二次才传入节点



解决办法

类绑定的回调  在类上定义方法



```jsx
//类内的方法
saveInput = (c) => {
  this.input1 = c;
}

//return里的
<input ref={this.saveInput} type="text"/>
```





#### 2.5.4 createRef形式

```jsx
class Dome extends React.Component{
  //调用reactRef的api,会创建一个容器,专门存放一个ref节点
  //用几个就要创建几个容器,只能保存一个,官方推荐
  myRef1 = React.createRef()
  myRef2 = React.createRef()
  
  //展示数据
  shouwData1 = ()=>{
  	alert(this.myRef1.current.value)
  }
  shouwData12 = ()=>{
  	alert(this.myRef2.current.value)
  }
  
  
  render(){
    return (
      //失去焦点提示数据
      <input onBlur={this.showData1} 
        ref={this.myRef1}/>
      //点击后展示数据
      <button onClick={this.showData2} 
        ref={this.myRef2></button>
    )
  }
}
```



#### 2.5.5 不要过度使用ref

如果被调用的标签要展示的也是当前标签的内容 ,则可以省略ref

```jsx
class Dome extends React.Component{
  //通过传入event获取数据
  shouwData1 = (event)=>{
  	alert(event.target.value)
  }

  
  render(){
    return (
      //失去焦点提示数据
      <input onBlur={this.showData1}/>
    )
  }
}

```



不同标签间展示数据,也可以省略ref

使用受控组件



### 2.6 收集表单数据

#### 2.6.1 非受控组件

```jsx
class Login extends React.Component{
  hadleSubmit = (event)=>{
    event.preventDefault() //阻止表单提交
    const {username,password} = this
    
    //取出来的是节点 需要.value获取值
    alert(`你输入的用户名是:${username.value},
    你输入的密码是:${password.value}`)
  } 
  
  render(){
    return (
     <form onSubmit={this.hadleSubmit}>
        用户名:<input ref={ c=> this.username =c}
        type="text" name="username"}></input>
        
        密码:<input ref={ c=> this.password =c} 
        type="text" name="password"}></input>
        
        <button>登录</button>
      </form>
    )
  }
}

ReactDOM.render(
  <Person name="tom" age={18} sex="女" spake={spake}/>,
  document.getElementById('root')
)
```





#### 2.6.2 受控组件



```jsx
class Login extends React.Component{
  
  //初始化状态
  state = {
    username: '',
    password: ''
  }
  
  //保存用户名到状态
  saveUsername = (event)=> {
    this.setState({username:event.target.value})
  }
  
  //保存密码到状态
   savePassword = (event)=> {
    this.setState({password:event.target.value})
  }
  
  //表单提交回调
  hadleSubmit = (event)=>{
    event.preventDefault() //阻止表单提交
    const {username,password} = this.state
    //取出来的已经是值了 不需要.value
     alert(`你输入的用户名是:${username},
    你输入的密码是:${password}`)
  } 
  
  render(){
    return (
     <form onSubmit={this.hadleSubmit}>
        用户名:<input onChange={this.saveUsername} type="text" name="username"}></input>
        
        密码:<input onChange={this.savePassword} type="password" name="password"}></input>
        
        <button>登录</button>
      </form>
    )
  }
}

ReactDOM.render(
  <Login/>,document.getElementById('root')
)
```







### 2.7 高阶函数和函数的柯里化

1.高阶函数概念

如果一个函数符合下面规范中的任何一个,那就是高阶函数

若A函数接受的参数是一个函数,A就是高阶函数

若A函数调用的返回值依然是一个函数,A就是高阶函数



2.函数的柯里化

通过函数调用继续返回函数的方式,实现多次接受参数最后统一处理的函数编码形式



3.使用了高阶函数和柯里化

```jsx
class Login extends React.Component{
  
  //初始化状态
  state = {
    username: '',
    password: ''
  }
  
  //保存表单数据到状态中
  saveFormData = (dataType)=> {
    return(event)=>{
      //不加方括号,是字符串,等于多加了个dataType属性
      //加上方括号,等于读变量,才是正常
      this.setState({[dataType]:event.target.value})
    }
  }
  
  //表单提交回调
  hadleSubmit = (event)=>{
    event.preventDefault() //阻止表单提交
    const {username,password} = this.state
    //取出来的已经是值了 不需要.value
     alert(`你输入的用户名是:${username},
    你输入的密码是:${password}`)
  } 
  
  render(){
    return (
     <form onSubmit={this.hadleSubmit}>
        //如果加上小括号,则调用的是saveFormData函数的返回值
     用户名:<input onChange={this.saveFormData('username')} type="text" name="username"}></input>
        
     密码:<input onChange={this.saveFormData('password')} type="password" name="password"}></input>
        
        <button>登录</button>
      </form>
    )
  }
}

ReactDOM.render(
  <Login/>,document.getElementById('root')
)
```



4.不使用高阶函数和柯里化

```jsx
class Login extends React.Component{
  
  //初始化状态
  state = {
    username: '',
    password: ''
  }
  
  //保存表单数据到状态中
  saveFormData = (dataType,event)=> { 
    this.setState({[dataType]:event.target.value})
  }
  
  //表单提交回调
  hadleSubmit = (event)=>{
    event.preventDefault() //阻止表单提交
    const {username,password} = this.state
    //取出来的已经是值了 不需要.value
     alert(`你输入的用户名是:${username},
    你输入的密码是:${password}`)
  } 
  
  render(){
    return (
     <form onSubmit={this.hadleSubmit}>
       
     用户名:<input onChange={(event)=>{this.saveFormData('username',event)}} type="text" name="username"}></input>
        
     密码:<input onChange={(event)=>{this.saveFormData('password',event)}} type="password" name="password"}></input>
        
        <button>登录</button>
      </form>
    )
  }
}

ReactDOM.render(
  <Login/>,document.getElementById('root')
)
```



### 2.8 组件生命周期

1.完整生命周期

初始化阶段 ReactDom.render执行

constructor() → getDerivedStateFromProps → render → componentDidMount



更新阶段 调用this.setState或者父组件重新render触发

getDerivedStateFromProps → shouldComponentUpdatae → remder → getSnapshotBeforeUpdate → componntDidUpdate



卸载组件 由ReactDOM.unmountComponentAtNode触发

componentWillUnmoount



2.重要钩子

render 更新时

componentDidMount 挂载后

componentWillUnmount  卸载前



3.废弃钩子

componentWillMount

componentWillReceiveProps

componentWillUpdate



4.新增钩子

使用场景非常罕见



### 2.9 虚拟DOM与DIff算法

key是虚拟DOM对象的表示, 在更新时有及其重要的作用

只是简单展示数据而不会删除或增加,可以使用index作为key

如果需要添加删除等操作, 使用index可能会大大降低效率, 破坏diff算法



### 2.10 所有组件通信方式总结

父子组件 : props

兄弟组件 : pubsub , redux

祖孙组件 :  pubsub , redux , context



## 第3章 React 应用

### 3.1 css样式模块化

首先把 `index.css` 改名为 `index.module.css`

在 `index.jsx` 中 `import aaa from './index.module.css'`

在需要的标签内使用 `<div classsName={aaa.xxx}></div>`

`xxx` 是 css文件中的某个 `.xxx{样式}`



一般很少用css模块化 , 基本上使用 less 或者 scss



### 3.2 案例 TodoList



















## 第4章 React ajax

### 4.1 axios

安装 axios

`npm install axios`





### 4.2 配置代理解决跨域

1.跨域限制是ajax的限制, 比如3000端口向5000发送 , 发送成功但是返回数据时候被3000拦截 , 需要在中间加入一个3000端口代理, 代理使用的是请求转发而不是ajax , 所以不受限制



2.如果只有一台服务器 ,可以在 package.json中配置proxy , 开启代理后,3000发送请求时 会先从自己的端口下寻找资源,如果找到了就不会再向5000请求, 所以可能请求到自己的数据

```js
"proxy":"http://localhost:5000" 
```



3.如果有多台服务器, 需要创建文件

```js
//src/setupProxy.js 
const proxy = require('http-proxy-middleware')

module.exports = function(app){
  app.use{
    
    //代理第一台服务器
    proxy('/api1',{
      //遇见/api1前缀的请求则转发到5000端口
      target:'http://localhost:5000',
      //控制服务器收到的请求头中的Host的值
      changeOrigin:true,
      //重写请求路径
      pathRewrite:{'^/api1',''}
    }),
      
      //代理第二台服务器
     proxy('/api1',{
      target:'http://localhost:5001',
      changeOrigin:true,
      pathRewrite:{'^/api2',''}
    }), 
  }
}



//react组件中的请求
//由于匹配到api1字段了,请求自动转发给5001端口号
//即新的请求地址为 http://localhost:5001/students
//api1的位置要在端口号后
axios.get("/api1/students").then(
	response =>{ },
  error => {}
)
```





### 4.3 案例 github搜索







### 4.4 消息订阅与发布

1.pubsub组件库安装

```jsx
//安装组件
yarn add pubsub-js

//引入组件
import PubSub from 'pubsub-js'
//commonJS风格引入组件
const PubSub = require('pubsub-js')
```









2.订阅消息的组件

```jsx
//组件挂载完毕后 开启订阅消息的函数 订阅名称为atguigu的消息
componenetDidMount(){
  this.token = PubSub.subscribe("atguigu",(msg,data)=>{
    consolo.log(data)
  })
}

//组件卸载前取消订阅
componentWillUnmount(){
  PubSub.unsubscribe(this.token)
}
```



3.发布消息的组件

```jsx
//发布名为 atguigu的消息,后面是传递的消息对象,逗号分开
PubSub.publish("atguigu",{data1:false,data2:true})
```





## 第5章 React-router-dom

### 5.1 spa理解

spa意思是单页面应用 , 只有一个完整的页面

不会刷新页面 , 只对局部更新



前端路由是路径匹配组件, 后端路由是路径匹配函数



### 5.2 路由相关api

安装web开发的库

`yarn add react-router-dom`



hash 和 browser 路由的区别

hash刷新后会丢失state参数,但有时可以解决一些路径错误的问题





### 5.3 基本路由

#### 5.3.1 路由的基本使用

给App开启路由

```jsx
//index.jsx
//把 <App/> 外侧包裹路由
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,
                document.getElementById('root'))
```



组件内的语法

```jsx
//菜单栏组件
<div>
  //普通的link 没有点击高亮
  <Link to="/about">About</Link>
  <Link to="/home">Home</Link>
  
  //高级的link 多了个属性 可以设置点击时高亮
  <NavLink activeClassName="demo">...</NavLink>
<div/>
  
  
//内容区展示不同组件
<div>
  <Route path="/about" component={About}/>
  <Route path="/home" component={Home}/>
<div/>
  
```



#### 5.3.2 一般组件和路由组件

一般组件写在 component 文件夹下, 使用时候用尖括号`<Home/>`

路由组件写在 pages 文件夹下,使用时用路由` <Route component={Home}/>`



#### 5.3.3 路由组件的三个重要属性

history 包括 go , goBack , goForward , push .replace

location 包括 pathname , search , state

match 包括 params , path , url



#### 5.3.4 封装NavLink

自定义MyNavLink组件

```jsx
import React ,{Component} from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
  render(){
    return(
      //使用原始标签,配置好样式和激活样式
      //展开props属性,里面包括children属性,是标签内的文本
      //把children属性放到标签上,等于标签内容上写了文本
    	<NavLink activeClassName="myclass" className="class" {...this.props}/>
    ) 		   
  }
}
```



在其他组件内使用MyNavLink组件

```jsx
<MyNavLink to="/about">About</MyNavLink>
```



#### 5.3.5 switch组件

如果多个Route组件, 并且一个路径如`/home`对应着多个组件 `Home` `Index`   ,  直到循环完所有Route,并且展示所有`/home`对应的组件



switch的作用是单一匹配, 找到 `/home` 路径对应的一个组件`Home`之后立刻停止寻找,即便下面还有对应的`Index`组件,也不会向下匹配路径,也不会展示该组件,提高效率



```jsx
<Switch>
  <Route path="/about" component={About}/>
  <Route path="/home" component={Home}/>
  <Route path="/home" component={Index}/>
</Switch>
```





#### 5.3.6 样式丢失

问题: 如果刷新, 多层路由路径错误,请求不到css, 会返回index.html



解决1: 用绝对路径

`<link ref="stylesheet" href="/css/bootstrap.css">`



解决2: 使用特殊变量

`<link ref="stylesheet" href="%PUBLIC_URL%/css/bootstrap.css">`



解决3: 使用哈希表路由

一般不使用, 哈希路由不美观





#### 5.3.7 模糊匹配与严格匹配

react 默认使用的是模糊匹配

严格匹配是路径必须完美匹配,不能多也不能少,必须一模一样才能匹配上

一般来说, 只有当遇到问题时才开启, 会导致无法匹配二级路由

为Route标签增加exact属性可开启



```jsx
 <Route exact path="/home" component={Index}/>
```



#### 5.3.8 重定向

重定向写在最后一个Route标签后, 任何路由都匹配不上的时候重定向



```jsx
<Switch>
  <Route path="/about" component={About}/>
  <Route path="/home" component={Home}/>
  <Redirect to="/about" />
</Switch>
```





### 5.4 嵌套路由

注册子路由要写上父路由的path

路由的匹配是按照注册的顺序进行的





### 5.5 路由传参

#### 5.5.1 通过params传参

在父级路由组件传参

```jsx
//在导航栏向路由组件传递参数
<Link to={`/home/message/detail/${obj.id}/${obj.title}`}></Link>

//在路由处声明参数
<Route path="/home/message/detail/:id/:title" component={Detail}/>
```



在子路由组件接受参数

```jsx
const {id,title} = this.props.match.prams
```



#### 5.5.2 通过search传参

在父级路由组件传参

```jsx
//在导航栏向路由组件传递参数
<Link to={`/home/message/detail/
?id=${obj.id}&titile=${obj.title}`}></Link>

//在路由处无需声明
<Route path="/home/message/detail" component={Detail}/>
```

在子路由组件接受参数

```jsx
const {search} = this.props.location
//截取掉问号
const {id,title} = qs.parse(search.slice(1))
```



引入qs库

```js
//qs库可以把key=value&key=value转化为对象
import qs from 'querystring'

//把对象转化为URLencoded
qs.stringify(obj)

//把URLencoded转化为对象
qs.parse(str)
```



#### 5.5.3 通过state传参

params和search都会在地址栏显示参数不安全, state可以隐藏参数



在父级路由组件传参

```jsx
//在导航栏向路由组件传递参数
<Link to={{pathname:"/home/message/detail",state:{id:obj.id,titile:obj.title}}}></Link>

//在路由处无需声明
<Route path="/home/message/detail" component={Detail}/>
```

在子路由组件接受参数

```jsx
const {id,title} = this.props.location.stat
```



### 5.6多种路由跳转方式

#### 5.6.1 标签式路由导航

push模式 压入路由可以后退

replace模式 替换顶部的记录



默认是push模式,开启replace需要在Link标签上声明

`<Link replace></Link>`



#### 5.6.2 编程式路由导航

1.后退, 前进, 跳转

```jsx
//后退函数
back = ()=>{
  this.props.history.goBack()
}

//前进函数
forward = ()=>{
  this.props.history.goForward()
}

//跳转指定函数
go = ()=>{
  this.props.history.go(-2)
}
```



2.push 和 replace

```jsx
//push函数 + 携带params参数
pushShow = (id,title)=>{
 this.props.history.push(
   `/home/message/detail/${id}/${title}`)  
}

//replace函数 + 携带params参数
replaceShow = (id,title)=>{
 this.props.history.replace(
   `/home/message/detail/${id}/${title}`)  
}

//按钮调用方法
<button onClick={()=>{this.pushShow(obj,id,obj.title)}}>
<button onClick={()=>{this.replaceShow(obj,id,obj.title)}}>
```



#### 5.6.3 一般组件的路由跳转

只有路由组件才有history的api, 但是一般组件没有

需要 withRouter 进行封装一般组件 , 会给一般组件路由组件的特性



```jsx
import React ,{Component} from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component{...}

//加工组件
export default withRouter(Header)
```







## 第6章 React UI组件库



### 6.1 material UI 国外





### 6.2 Ant design 蚂蚁金服





### 6.3 element for react 饿了么





### 6.4 vant 移动端







## 第7章 redux

### 7.1 redux概述

1.redux是一个用于javascript的状态管理



2.redux三大核心

单一数据源

state是只读的

使用纯函数进行修改



### 7.2 redux组成

1.state状态



2.action事件

只是描述有事情要发生，但没有实际去更新state

本质是js对象， 必须包含type属性



3.reducer

本质是函数，接收初始的state，和action

响应发送来的action，必须有return返回值



4.store

用来把action和reducer关联到一起

store.dispatch 提交action

store.getState 获取state

store.subscribe 注册监听

store.unsubscribe 注销监听





### 7.3 redux案例

安装 redux

`npm install --save redux`



1.构建action , 创建一个函数, 返回一个包含type属性的对象

2.构建reducer, 用来响应action , 通过return把数据传给store

3.使用createStore创建store,传递reducer

4.利用store.subscribe注册监听

5.利用store.dispatch发送action, 使用store.getState可以拿到值



src/Pages/Home/index.jsx

```jsx
import React, {Component} from "react";
import store from '../../store'
import {sendAction} from "../../action"
export default class Index extends Component {

    //按钮点击回调
    handleClick = () => {
        //调用函数返回action
        const action = sendAction();
      	//提交一个action
        store.dispatch(action)
    }

    //组件挂载完毕钩子
    componentDidMount() {
      	//当有提交的action时,会触发到监听钩子
        store.subscribe(()=>{
            console.log("监听:",store.getState())
            this.setState({})
        })
    }


    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                  点我发送一个action</button>
                <div>{store.getState().value}</div>
            </div>
        )
    }
}

```



src/action/index.js

```js
const sendAction = () => {
    return {
        type: 'send_type',
        value: "我是一个action"
    }
}

module.exports = { sendAction }
```



src/reducer/index.js

```js
const initState = { value: "默认值" }

//state 如果传入则使用state,没传的话用默认值
const reducer = (state=initState,action) => {
    console.log("reducer",state,action)
    switch (action.type){
        case "send_type":
            return Object.assign({},state,action)
        default:
            return state;
    }
}

module.exports = { reducer }
```



src/store/index.js

```jsx
import {createStore} from 'redux'
import {reducer} from  '../reducer'
const store = createStore(reducer)
export default store
```





### 7.4 react-redux简介

1.概念

官方出的适配 react 的 redux



2.provider概念

在app.js的最外层包裹provider标签, 意思是store可以管理这个项目了



3.connect概念

分别在接收方和发送方 配置connect

接收方传入第一个参数mapStateToProps

发送放传入第二个参数mapDispatchToProps ,第一个参数用null占位



被connect加强过的组件  可以在props属性上调用action或者state

`this.props.sendAction()`

`this.props.count`



### 7.5 react-redux 案例

安装 redux  react-redux redux-devtools

```jsx
npm install --save redux
npm install --save react-redux
npm install --save-dev redux-devtools
```



src/App.js

```jsx
import store from './store'
import ComA from './pages/ComA'
import ComB from './pages/ComB'
import {Provider} from 'react-redux'

function App() {
  return (
    //最外层包裹provider,传入store属性
      <Provider store={store}>
          <div className="App">
              <ComA/>
              <ComB/>
          </div>
      </Provider>
  );
}

export default App;

```



src/store.js

```js
import {createStore} from 'redux'
import {reducer} from  '../reducer'
const store = createStore(reducer)
export default store
```



src/reducer/index.js

```js
//初始化变量
const initState = { count: 0 }

exports.reducer = (state = initState,action) => {
    console.log("reducer",action)
    switch (action.type) {
        case "add_action":
            return { count: state.count + 1 };
        default:    
        		return state
    }
}
```



src/Pages/ComA/index.jsp

```jsx
import React, {Component} from "react";
import {connect} from "react-redux";

class ComA extends Component {
  	//按钮点击回调
    handleClick = () => {
        console.log("A组件的props:",this.props)
      	//提交sendAction的action
        this.props.sendAction()
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}

//实现发送方的mapDispatchToProps参数
const mapDispatchToProps = (dispatch) => {
    return{
        sendAction: ()=>{
            dispatch({
                type: "add_action"
            })
        }
    }
}

//使用connect加强A组件并导出
//发送方的第一个参数mapStateTpProps要为空
//发送方实现第二个参数mapDispatchToProps
export default connect(null,mapDispatchToProps)(ComA)

```



src/Pages/ComB/index.jsp

```jsx
import React, {Component} from "react";
import {connect} from "react-redux";

class ComB extends Component {
    render() {
        console.log("B组件的props",this.props)
        return (
            <div> {this.props.count} </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("B组件:",state)
    return state
}

//connect加强B组件
//接收方只实现第一个参数mapStateToProps
export default connect(mapStateToProps)(ComB)

```











### 7.5 redux devtools

1.首先，我们要安装到项目的一些基本使用，如： react、redux、react-redux等

```
npm install  redux-devtools-extension --save-dev
npm install --save redux
npm install --save react-redux
```



2.去谷歌应用商店搜索redux-devtools直接安装即可。 成功后，在浏览器的右上角会有相关的显示。



3.最终效果如下

```js
import Redux from 'redux'

// 引入createStore创建store，引入applyMiddleware 来使用中间件
import {createStore, applyMiddleware} from 'redux'

// 引入所有的reducer
import storeReducer from '../Reducer/index.jsx'

// 利用redux-logger打印日志
import {createLogger} from 'redux-logger'

// 安装redux-devtools-extension的可视化工具。
import { composeWithDevTools } from 'redux-devtools-extension'


// 使用日志打印方法， collapsed让action折叠，看着舒服。
const loggerMiddleware = createLogger({collapsed: true});

export default  createStore(
    storeReducer,
  //applyMiddleware()如果有异步的话放在小括号里
    composeWithDevTools(applyMiddleware())
);
```



###  7.6 serve库

npm install -g serve

快速启动一台服务器 , 不能在生产环境使用





## 第8章 新语法扩展

### 8.1 setState

1.对象式写法

setState(stateChange, [ callback ])

推荐使用: 不依赖于原状态

对象更改是异步的 , 但回调函数是状态更新后且render调用后才调用

```jsx
add = (){
  this.setState({count:count+1},()=>{
      consolo.log(this.state.count) // 输出1
  })
  consolo.log(this.state.count) // 输出0
}
```



2.函数式写法

推荐使用: 依赖于原状态

```jsx
//可以接受到state和props参数
this.setState((state,props)=>{
  return {count:state.count+1}
})
```





### 8.2 lazyLoad

```jsx
//懒加载方式引入路由组件
const Home = lazy(()=> import('./Home'))

//引入一个一般组件作为加载超时显示的组件
import Loading from './Loading'

//用Suspense标签把路由包裹起来
//回调函数声明fallback,如果超时则显示Loading组件
<Subpense fallback={<Loading/>}>
		<Route path="/home" component={Home}></Route>  
</Suspense>

```





### 8.3 stateHook

函数式组件可以使用state



### 8.4 effectHook

函数式组件可以使用生命周期钩子



### 8.5 refHook





### 8.6 FragMent

因为每个组件都必须有根标签div,导致div太多太复杂

使用Fragment当作根标签, 不会真实渲染出来, 就跟没有根标签一样,同时也满足语法

能且只能接收 key 属性, 其他属性都会丢失 , 连标签本身都会丢失



### 8.7 Context

通常用于祖先组件和后代组件传值



### 8.8 PureComponent

组件优化



### 8.9 renderProps

向组件内部动态传入带内容的标签

类似vue中的slot技术



### 8.10 ErrorBoundary

用来捕获后代组件的错误