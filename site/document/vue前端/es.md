---
title: ES语法

date: 2022-03-13 16:16:10


---





## 第1章 ES6语法

### 1.1 类

```
class Person {
//增加类的概念
}
```



### 1.2 模块化



### 1.3 箭头函数

```js
const a = (params)=>{
  ...
}
```



### 1.4 函数参数默认值

```js
//如果传了age则用传入的参数, 如果传则默认为25
function foo(age = 25,){
  // ...
}
```



### 1.5 模板字符串

```js
const name = '小豪';
const str = `Your name is ${name}`;
```



### 1.6 解构赋值

```js
const {data} = obj
等于下面的写法
const a = obj.data


//多重结构

//多重结构重命名
```





### 1.7 延展操作符



### 1.8 对象属性简写

```js
router:router
可以简写为 router
```





### 1.9 Promise





### 1.10 Let与Const

使用let或const定义的变量具有块级作用域域性质,在同一个代码块中不允许重复声明



### 1.11 字符串或数组方法

map filter reduce





## 第2章 ES7语法

### 2.1  includes



### 2.2 指数操作符

```js
2**10;   // 2的10次方等于1024
```





## 第3章 ES8语法

### 3.1 async await

```js
//异步终极解决方案
async getData(){
    const res = await apiGetTableData(); // await 异步任务
    // do something    
}
```



3.2 Object.values

```js
Object.values({a: 1, b: 2, c: 3}); 
// [1, 2, 3]
```



3.3 Object.entries

```js
Object.entries({a: 1, b: 2, c: 3}); 
// [["a", 1], ["b", 2], ["c", 3]]
```



3.4 String.padding

```js
// 右对齐
'hello'.padStart(10); // "     hello"
// 左对齐
'hello'.padEnd(10)    //"hello     "
```



## 第4章 ES9语法



## 第5章 ES10语法



## 第6章 ES11语法



## 第7章 ES12语法











--------



连续解构赋值+重命名

三元表达式连写

