---
title: TypeScript基础

date: 2021-11-14 10:20:59


---



## 第1章 ts 基础

### 1.1 ts安装

npm安装  

`sudo npm install -g typescript`



查看版本  

`$ tsc -v`



## 第2章 语法

### 2.1 基础类型

| 数据类型   | 关键字    |
| ---------- | --------- |
| 数字类型   | number    |
| 字符串类型 | string    |
| 布尔类型   | boolean   |
| 枚举       | enum      |
| void       | void      |
| null       | null      |
| undefined  | undefined |
| never      | never     |



联合类型

```ts
var val:string|number 
val = 12 
console.log("数字为 "+ val) 
val = "Runoob" 
console.log("字符串为 " + val)
```



### 2.2 变量声明

`var uname:string = "Runoob";`

类型推断  

当类型没有给出时，TypeScript 编译器利用类型推断来推断类型。  

如果由于缺乏声明而不能推断出类型，那么它的类型被视作默认的动态 any 类型。




变量作用域

```js
var global_num = 12          // 全局变量
class Numbers { 
   num_val = 13;             // 实例变量
   static sval = 10;         // 静态变量
   
   storeNum():void { 
      var local_num = 14;    // 局部变量
   } 
} 
console.log("全局变量为: "+global_num)  
console.log(Numbers.sval)   // 静态变量
var obj = new Numbers(); 
console.log("实例变量: "+obj.num_val)
```



### 2.3 函数

函数返回值限定

```ts
function greet():string { // 返回字符串
    return "Hello World" 
}
// 调用函数
caller()
```



函数参数 类型限定

```ts
var res = function(a:number,b:number) {
return a*b;
};
console.log(res(12,2))
```



匿名函数自调用

```ts
(function () { 
    var x = "Hello!!";   
    console.log(x)     
 })()
```



递归函数

```ts
function factorial(number) {
    if (number <= 0) {         // 停止执行
        return 1; 
    } else {     
        return (number * factorial(number - 1));     // 调用自身
    } 
}; 
console.log(factorial(6));      // 输出 720
```



箭头函数

```ts
var foo = (x:number) => {10 + x}
console.log(foo(100))      //输出结果为 110
```



函数重载

```ts
function disp(s1:string):void;
function disp(n1:number,s1:string):void;

function disp(x:any,y?:any):void {
    console.log(x);
    console.log(y);
}
disp("abc")
disp(1,"xyz");
```



### 2.4 数组

```ts
var sites:string[]; 
sites = ["Google","Runoob","Taobao"]

var sites:number[]; 
sites = [10,20,30]
```





## 第3章 面向对象

### 3.1 接口

```ts
interface Person { 
   age:number 
} 
 
interface Musician extends Person { 
   instrument:string 
} 
 
var drummer = <Musician>{}; 
drummer.age = 27 
drummer.instrument = "Drums" 
console.log("年龄:  "+drummer.age)
console.log("喜欢的乐器:  "+drummer.instrument)
```



### 3.2 类

```ts
class Car {
    // 字段 
    engine:string;

    // 构造函数 
    constructor(engine:string) {
        this.engine = engine
    }

    // 方法 
    disp():void {
        console.log("发动机为 :   "+this.engine)
    }
}
```



### 3.3 对象

```ts
var sites = { 
   site1:"Runoob", 
   site2:"Google" 
}; 
// 访问对象的值
console.log(sites.site1) 
console.log(sites.site2)
```



### 3.4 命名空间

```ts
namespace SomeNameSpaceName { 
   export interface ISomeInterfaceName {      }  
   export class SomeClassName {      }  
}
```



### 3.5 模块

IShape.ts 文件代码：

```ts
export interface IShape { 
   draw(); 
}
```



Circle.ts 文件代码：

```ts
import shape = require("./IShape"); 
export class Circle implements shape.IShape { 
   public draw() { 
      console.log("Cirlce is drawn (external module)"); 
   } 
}
```



Triangle.ts 文件代码：

```ts
import shape = require("./IShape"); 
export class Triangle implements shape.IShape { 
   public draw() { 
      console.log("Triangle is drawn (external module)"); 
   } 
}
```



TestShape.ts 文件代码：

```ts
import shape = require("./IShape"); 
import circle = require("./Circle"); 
import triangle = require("./Triangle");  
 
function drawAllShapes(shapeToDraw: shape.IShape) {
   shapeToDraw.draw(); 
} 
 
drawAllShapes(new circle.Circle()); 
drawAllShapes(new triangle.Triangle());
```



### 3.6 声明文件

在开发过程中不可避免要引用其他第三方的 JavaScript 的库。
虽然通过直接引用可以调用库的类和方法，但是却无法使用TypeScript 诸如类型检查等特性功能。

```ts
declare var jQuery: (selector: string) => any;

jQuery('#foo');
```