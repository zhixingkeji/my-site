---
title: css基础

date: 2021-09-30 21:59:00

---

## 第1章 基础语法

### 1.1 CSS的概念

网页是立体的，是一层一层的。我们看到的2D网页其实是俯视图，所有的样式叠加呈现出来的



### 1.2 CSS的使用

（1）内联样式

只能针对一个标签进行修改。

当需要变化时，不方便进行维护。

前后端不分离，耦合程度高，代码复用低。

测试时可以用，开发时一定不能用。

```
<p style="color:red; font-size: 100px">少小离家老大回</p>
```



（2）内部样式表

将css语句写入到一对 style 标签中。

通过css选择器，同时为多个标签设置样式。

只能为一个网页起作用，不能跨页面复用。



（3）外部样式表

创建 .css 文件，通过`<link>`标签引入到 html 中。

调用了浏览器的缓存机制，加速浏览速度。

```css
<link rel="name" href="./style.css">
```



### 1.3 设置宽高

```css
width: 100px
height: fit-content   //根据内容设置高度
```



### 1.4 提升优先级

```css
width: 100px!important
```



### 1.5 指针样式

```css
auto | 指针
default | 指针
none | 没有任何样式
context-menu | 指针
help | 指针带问号
pointer | 手指
progress | 指针+等待
wait | 等待
cell | 粗加号
crosshair | 细加号 
text | 输入
vertical-text | 横着输入
move | 移动
not-allowed | 红色禁用
e-resize | 横向拉长
n-resize | 竖向拉长
ne-resize | 斜着拉长
nw-resize | 反斜着拉长
zoom-in | 放大镜
zoom-out | 放小镜
grab | 抓手
grabbing | 抓手中

```







## 第2章 文字字体

### 2.1 CSS字体相关属性

（1）字体样式

```css
font-size: 10px,	对于像素点的大小
font-size: 10em,	对于自身字体的大小
font-size: 10rem,	对于根元素的字体大小
font-weight: bold,	加粗
color: #000,     	字体颜色
```



（2）字体族

可以指定多个字体，中间用逗号连接，优先使用第一个，若没有则向后延伸，如果名称中间有空格需要用引号引起来。

```
font-family：monospace； //等宽字体族
font-family：serif； //衬线字体
font-family：sans-serif；  //非衬线字体
font-family："黑体"；  //中文黑体,需要用双引号包裹
```

从服务器下载字体给用户使用，注意版权问题，你提供的字体源给用户，必须是免费开源的。

```
@font-face{
font-family：“myfont”；
src：url（“./”）；
}
p{ font-family：myfont }
```



3）字体图标网站https://fa5.dashgame.com/#/

使用图片图标，放大后会导致失真。

使用字体图标，放大不会失真，矢量图的特点。

注意版权问题。

步骤：下载，解压，导入，引入，创建标签

一般只有fas和fab开头是可用的免费的图标。

```
<i class="fas fa-bell"></i>
<i class="fab fa-bell-slash"></i>
```



### 2.2 CSS文本相关属性

(1) 行高

line-height：200px；

行高指的是文字实际占有的高度。

行高会在字体框的上下平均分配。

公式： 行高 =  上间距高度 + 字体框高度 + 下间距高度

字体框：设置字体大小其实是设置字体框的大小。



(2) 文本对题方式

水平对齐

```css
text-align:center  #居中对齐
text-align:left #左对齐
text-align:right #右对齐
text-align:justify # 两端对齐
```



垂直对齐

```css
vertical-align：baseline； 默认为基线对齐
vertical-align：top；  顶部对齐
vertical-align：bottom；  底部对齐
vertical-align：middle；  居中对齐
vertical-align：100px；  值对齐
```



图片引入标签后是按照基线对齐的，也是底部会有一点留白，需要通过底部对齐来去掉底部的白边。



(3) 文本缩进

文本缩进属性是用来指定文本的第一行的缩进。

```css
p {text-indent:50px;}
```



(4) 文本转换

文本转换属性是用来指定在一个文本中的大写和小写字母。

可用于所有字句变成大写或小写字母，或每个单词的首字母大写。

```css
p {text-transform:uppercase;} # 全部大写
p {text-transform:lowercase;} # 全部小写
p {text-transform:capitalize;} # 每个单词首字母大写
```







### 2.3 超链接样式

```css
text-decoration：none			没有线
text-decoration：underline		下划线
text-decoration：line-through		删除线
text-decoration：overline ；		上划线
```



要删除超链接的下划线可以设置为none

超链接换行会出现一个小空白，两个a标签挨着写就不会有空白



超链接的伪类

```css
a：link{
    表示没访问过的链接效果
}
a：visited{
    表示访问过的链接效果
}
a：hover{
    表示鼠标移入时超链接的效果
}
a：active{
    表示鼠标点击链接时的效果
}
```





### 2.4 空白处理

white-space：normal；正常

white-space：nowrap；不换行

white-space：pre；保留空白



设置文章只显示摘要，省略掉主要内容

width：200px

white-space：nowrap；



```css
overflow: visible; #默认值,内容不会被修剪,会呈现在元素框之外
overflow: hidden; #内容会被修剪，并且其余内容是不可见的。
overflow: scroll; #内容会被修剪，但是浏览器会显示滚动条
overflow: auto; #如果内容被修剪，才显示滚动条
overflow: inherit; #从父元素继承 overflow 属性的值
```



text-overflow：ellipsis；



## 第3章 背景，图片

### 3.1 CSS背景相关属性

（1）颜色

直接使用颜色名会非常不方便，比如yello，blue，green

使用RGB值。red，green，blue的值，0-255之间

使用RGBA，增加了一个透明度设置，为百分比

使用十六进制RGB，`#ff00ff`

HSL：色相（0-360），饱和度（100%），亮度（100%）

全透明颜色：transparent



（2）背景颜色

backround-color：#bfa;



（3）背景图片

backround-image : url ("./path");



### 3.2 背景图片的重复

背景图片的重复

background-repeat：repeat    // 默认xy双方向重复

background-repeat：repeat-x    // 沿着x双方向重复

background-repeat：repeat-y   // 沿着y双方向重复

background-repeat：no-repeat   // 不重复



背景图片的位置

background-position：top left；// 图片显示在左上角

background-position：center center ；// 图片显示在中心

background-position：bottom right ；// 图片显示在右下角

backgournd-position：-50px 300px； //由偏移量确定位置



背景图片的裁剪

backround-clip：border-box；  // 默认值 背景会出现在边框的下边

backround-clip：content-box；  // 背景只会出现在内容区

backround-clip：padding-box； // 背景只出现在内容区和内边距



背景图片的原点

backround-origin：border-box；// 背景图片的原点在边框上

backround-origin：content-box；  // 背景图片的原点在内容区

backround-origin：padding-box； // 背景图片的原点在内边距上



背景图片的大小

backround-size：100px 100px； // 背景图片的宽高

backround-size：100px auto； // 如果只写了宽度，则高度为 auto

backround-size：100% auto ； // 宽度充满父元素，高度自动

backround-size：cover ； // 保持图片比例，把元素铺满，可能显示不全

backround-size：contain ； // 保持图片比例，把图片显示完整，元素可能不会铺满



背景图片的滚动

background-attachment：scroll   //  默认值，背景图片随着元素滚动而滚动

background-attachment：fixed   //  可选值，背景图片不随着元素滚动



背景图片闪烁问题解决

未请求过的图片，在第一次显示时，可能会闪烁。

把几张图片拼接到一张图片上，通过调整 position 来显示不同内容。

background-color：rgb（241,241,241）

给body设置颜色后，对body无效，而是直接传给html



### 3.3 渐变

线性渐变

background-image：linear-gradient（to right，red，yellow）

background-image：linear-gradient（to right top，red，yellow，blue）

background-image：linear-gradient（ 0.25 turn，red，yellow）

background-image：linear-gradient（ 90 deg，red，yellow）



径向渐变

background-image：radial-gradient（ 90 deg，red，yellow）



例子

```css
<div id="nihao"></div>

#nihao{
    height:150px;
    width:100%;
    background-color:#1fc8db;
    background-image:linear-gradient(141deg,#9fb8ad 0%,#1fc8db 51%,#2cb5e8 75%);
    background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
}
```







## 第4章表格，列表

### 4.1 表格相关属性

表格边框

```css
table, th, td
{
    border: 1px solid black;
}
```



折叠边框

```css
border-spacing：0px  ；   边界的距离为0，但依然是两条边
boder-collapse：collapse  ； 边界合并，只留一条边
```



表格颜色

```css
table, td, th
{
    border:1px solid green;
}
th
{
    background-color:green;
    color:white;
}
```



隔行变色

```css
tr：nth-child（odd）{
color：red；
}
```

tr不是table的子元素，如果没定义tbody，浏览器会自动创建tbody，将tr放入tbody中



表格特有的垂直居中

```css
td{
	vertical-align：middle；
	text-align：center；
}
```

表格应用：日历，课程表







### 4.2 列表相关属性

```css
list-style-type: none;  //去除项目符号
```



```css
# 无序列表
ul.a {list-style-type: circle;} # 圆圈
ul.b {list-style-type: square;} # 方块
 
# 有序列表
ol.c {list-style-type: upper-roman;} # 罗马符号
ol.d {list-style-type: lower-alpha;} # 小写字母
```







## 第5章 弹性盒



### 5.1 Flex弹性盒

（1） 弹性盒

CSS中的一种布局手段，主要用来代替浮动完成页面的布局。

Flex 使元素具有弹性，让元素可以跟随页面大小的改变而改变。

为什么已经复习了浮动，还要学习弹性盒呢？

在CSS3中为了解决浮动带来的问题，引入了弹性盒的概念。

为什么不直接学习弹性盒，还要学习浮动呢？

弹性盒比较新，不兼容老版本。但以后的趋势必然是新技术。



（2）弹性容器

要使用弹性盒，必须先将元素设置为弹性容器。

display：flex；



（3）弹性元素

弹性容器的子元素是弹性元素。

注意，只有弹性容器的直接子元素才是弹性元素。

一个元素可以同时是弹性元素（相对父元素），也是弹性容器（相对子元素）。



### 5.2 弹性容器的样式

```css
//控制x轴
   justify-content：flex-start  //元素沿着主轴起点排列
   justify-content：flex-end  //元素沿着主轴终点排列
   justify-content：center  //元素居中排列
   justify-content：space-round  //空白分布到元素两侧
   justify-content：space-betweend  //空白均匀分布到元素间
   justify-content：space-round  //空白分布到元素单侧
   justify-content：centent  //空白分布到容器两侧，内容居中
   
//控制y轴   
   align-items: flex-start/center/flex-end;
```



```css
ul{
    display：flex;   //开启弹性容器

    flex-direction：row;  //默认值，水平排列，自左向右
    flex-direction：row-reverse;  //默认值，水平排列，自右向左
    flex-direction：column;  //垂直排列，自上向下
    flex-direction：column-reverse;  //垂直排列，自下向上


    主轴：弹性元素的排列方向
    侧轴：与主轴垂直的方向是侧轴
}
```





### 5.3 弹性元素的样式

```css
li{
    //元素增长系数
    flex-grow:0;  //默认值为0，不占弹性容器里的空间
    flex-grow:1;  //不占弹性容器里的空间
    flex-grow:2;  //按比例分配容器里的空白空间

    //元素收缩系数
    flex-shrink：1  //默认值为1，容器变小，等比例收缩
    flex-shrink：0  //容器变小，此元素不进行收缩
    flex-shrink：2  //容器变小，按比例进行收缩

   //设置弹性元素在弹性容器中是否自动换行
   flex-wrap：nowrap   //默认值，元素不会自动换行
   flex-wrap：wrap   //元素沿着辅轴方向自动换行
   flex-wrap：wrap-reverse   //元素沿着辅轴反方向自动换行

   //指定元素在主轴上的基础长度
   flex-basis：auto
   flex-basis：100px  
   如果主轴是垂直的，则改变长度
   如果主轴是水平的，则改变宽度



    //简写模式
    flex ： 1 1 auto    //顺序为 增长 缩减 基础
    flex ： initial    //等价于 0 1 auto
    flex ： auto       //等价于 1 1 auto
    flex ： none       //等价于 0 0 auto


    //设定弹性元素的排列顺序
    可以通过属性改变排列的顺序，而不用更改结构
    order：2
    order：1
    order：3
```





## 第6章 动画

### 6.1 动画

```
<style>
div{
animation-name:mymove;  //为这个动画的过程命名
animation-duration:3s;  //动画的持续时间
animation-iteration-count:3 ; //重复播放3次
animation-delay:3s; //延迟3秒启动
animation-timing-function:ease-in-out; //动画时间函数


animation-iteration-count:20;   //指定动画执行的次数
animation-iteration-count:infinite;   //动画无限次执行


animation-direction:normal;  //默认值，动画正向执行
animation-direction:reverse;  //可选值，动画反向执行
animation-direction:alternate;  //可选值，从from向to执行，重复时反向执行
animation-direction:alternate-reverse;  //可选值，从to向from执行，重复时反向执行

animation-play-state:running;   //默认值，动画执行
animation-play-state:pause;   //默认值，动画执行

animation-fill-mode:none;  //默认值，动画执行完毕后，回到原来的状态
animation-fill-mode:forwards;  //动画执行完毕后，停在结束的位置
animation-fill-mode:backwards;  //动画执行完毕后，停在开始的位置
animation-fill-mode:both;  //结合上面两个特点 


}


关键帧
@keyframes mymove{ //为命名过的动画制作过程
from {left:0px;}    //开始位置
to{left:200px;}     //结束位置
}

@keyframes mymove{ //为命名过的动画制作过程
0% {top:opx;}
50% {top:200px;}
100% {top:100px;}
}
</style>
```



### 6.2 变换 transform

变换不会改变页面布局。

（1）缩放

transform：scaleX(1.5 );  //缩放 x轴为1.5倍

transform：scale( 2，1.6);  //缩放 x轴为2倍，y轴为1.6倍



图片移入放大的效果

```css
.img-wrapper {
width：200px；
height：200px；
border：1px red solod；
overflow：hidden；// 是否裁剪
}

img {  transition：2s； }
.img-wrapper：hover   img{
transform：scale（1.2）；
}
```



对Z轴的缩放无法通过只改变视距来看到，缩放Z轴只是对物体高度的拉伸，需要通过旋转来观看到Z轴的缩放。

变形的原点

transform-origin：center；  默认值为图片的中心

transform-origin：20px 20px；



（2）平移

```css
transform:translateX(50px);
transform:translateY(50%);  //相对自身的高度平移Y轴的50%
transform:translateZ(50px) translateY(-50%);
transform:translate(50px,100px)  //平移 x轴平移80px ,y轴平移 100px
```



通过平移居中

```css
.box1{
	left：50%;
	top：50%;
	transform：translate(-50%,-50%);
}
```



通过平移浮出效果

```css
.box4{
	transition：all 0.3s；
}

.box4：hover{
	transform：translateY（-4px）；
	box-shadow：0 0 10px rgba（0,0,0,0.3）；
}
```



通过平移调整视距

```css
html { perspective：800px；}
body { border：1px red solid；}

.box1{
	width：200px；
	height：200px；
	background-color：#bfa；
	margin：200px  auto；
	transition：2s；
}

.box1：hover {
	transform：translateZ（800px）；
}
```



（3）旋转

```css
transform：rotateX( 90 deg ) ; //旋转 图片旋转90度
transform：rotateY( 0.5 turn ); //旋转 图片旋转半圈
transform：skewX(10deg); //沿着X轴倾斜10度
transform：skewY(20deg); //沿着Y轴倾斜20度

写成分号的形式 只能采取最后一种设置
如果需要同时实现旋转和平移 需要写在一起

能够同时实现旋转和平移
transform: :translate(50px,100px) rotate(90deg);

设置元素的背面是否显示
backface-visibility：hidden；
```



### 6.3 过渡 transition

```css
<style>
div{
transition-delay:5000ms;  //延迟时间5秒
transition-duration:3s; //持续时间3秒
transition-property:height，width，，，，;  //设置需要变换的属性

transition-timing-function:ease; //设置动画的速度曲线 由慢到快再到慢
transition-timing-function:linear; //匀速
transition-timing-function:ease-in; //加速运动
transition-timing-function:ease-out; //减速运动
transition-timing-function:ease-in-out; //先加速，后减速 

transition-timing-function:cubic-bezier（.24,.95,.82,-0.88）//贝赛斯曲线

transition-timing-function:steps（2，end）; //分两次执行，先计时在执行
transition-timing-function:steps（2，start）; //先执行，再计时

}


div:hover{
height:300px; //设置最终的结果
}

简写
transition：all，2s；  //全部属性 
transition：height，2s； //只有高度
</style>
```





## 第7章 浮动和布局

### 7.1 文档流

最底层的那层，normal flow 。

元素有两个状态，在文档流中，和脱离文档流。

块元素：块元素在页面中总是独占一行，默认宽度是父元素的全部。

自上到下垂直排列。

行内元素：不会独占页面一行，只占自身得到大小。

自左向右水平排列。

若在一个行中不能容纳所有的行内元素，则会自动换行。



### 7.2 浮动

float:left //向左浮动  其他内容会出现在图片的右边

float:right  //向右浮动    其他内容会出现在图片的左边

float:none //不浮动

设置浮动以后，元素完全脱离了文档流，不再占据位置，原来的宽度等式失效。

浮动元素移动的边界不会超过父元素的边界。

浮动元素之间不会覆盖，因为他们都在浮动层，所以按顺序排开。

如果浮动元素的上边是一个没有浮动的块元素，浮动元素就无法上移。

元素脱离文档流后，就没有块元素行内元素之分了。

可以利用浮动效果设置文字环绕

浮动元素不会盖住文字，文字会自动环绕浮动元素。



### 7.3 高度塌陷

在浮动布局中，父元素的高度默认被子元素撑开

当子元素浮动后，其会完全脱离文档流，

子元素脱离文档流，无法撑起父元素，导致父元素高度塌陷。

父元素塌陷后，其下面的块元素会自动上移。

—— 开启BFC特点

使用BFC进行调整，Block Formatting Context，块级格式化环境

开启BFC后，该元素会变成一个独立的布局区域

开启BFC后，该元素不会被浮动元素覆盖，其元素的父子外边距不会重叠

开启BFC后，元素可以包含浮动的子元素

—— 开启BFC方法

\- 设置父元素为浮动（不推荐）

\- 将元素设置为行内元素（不推荐）

\- overflow：auto / hidden；（推荐）

clear属性

浏览器自动为元素加一个外边距，使其不受其他元素浮动的影响

\- clear：left  清除左侧浮动的影响

\- clear：right  清除右侧浮动的影响

\- clear：both ，清除两侧最大的那个浮动的影响

解决高度塌陷完美解决办法

.box1:：after{

content：’‘；

display：table；

clear：both；

}

解决外边距重叠问题

.box1:：before{

content：’‘；

display：table；

}

同时解决外边距重叠和塌陷问题问题

.box1:：before，

.box1:：after{

content：’‘；

display：table；

clear：both；

}

## 第8章 盒模型

### 8.1 盒子模型概念

每一个盒子由以下几部分组成，

内容区content，内边距padding，边框border，外边距marigin。

内容区，内边距，边框，为可见区域，会影响盒子的大小。

外边距不可见，不会影响盒子大小，但会影响盒子位置。



### 8.2 内容区

```css
p{
width：
height：
blackground-color：
}
```



### 8.3 外边距

```css
<style>
p{
margin:10px 10px 10px 10px  
margin-top:100px
margin-left:100px
margin-right:100px
margin-buttom:100px
}
</style>
```



### 8.4 内边距

```css
<style>
p{
padding-top:100px
padding-left:100px
padding-right:100px
padding-buttom:100px

简写模式
padding:10px 10px 10px 10px;
}
</style>

内容区的背景颜色会延伸到内边距，但不能单独修改内边距的背景色，
可以在父div标签中嵌套一个div标签，样式设置为充满
子标签为内容区的颜色，父标签内容区颜色被覆盖
```



### 8.5 边框

```css
p{
border-color:red //设置所有边框的颜色
border-left-color  //只设置左边框的颜色

border-style:soild  //设置所有边框的风格为实线

border-width:2px  //设置所有边框的粗细
border-width:2px 4px 6px 8px //顺序，顺时针 上右下左
border-top-width:30px

border:red soild 2px  //简写模式

}
```



### 8.6 盒子布局

（1）盒子的水平布局

一个元素在其父元素中，必须满足一个等式

子元素的外边框+外边框+边框+内容区的宽度 = 父元素内容区宽度

浏览器会自动调整子元素的 margin-right

如果有auto的值，则自动调整auto的值，以满足等式，

若没有就强制优先调整margin-right

水平居中方法，将左右外边距调整为auto，会得到相等的两个外边距



（2）盒子的垂直布局

如果子元素中从父元素溢出，默认允许，若不允许则在父元素中设置

overflow：hidden，则不显示溢出内容，但有些内容又需要显示

直接设置 overflow：scroll，则生成两个方向的滚动条，

自动处理 overflow：auto，根据需要自动设置需要一个或者两个滚动条

垂直居中方法，height：25px，line-height：25px



（3）外边距的折叠

只有垂直方向才会发生，相邻的垂直方向上的外边距会发生重叠现象

—— 兄弟元素

兄弟元素会取两者之间的较大值，

如果一正一负，则相加，如果两者都负取绝对值较大的

以上的情况，对开发有利，无需处理

—— 父子元素

父子元素的外边距重叠，子元素的外边距会传递给父元素。



（4）行内元素的盒子模型

行内元素不支持设置内容区宽高，不能手动修改，由内容决定

水平方向外边距求和，垂直方向外边距不起作用，垂直塌陷

行内元素变成块元素

display： inline ，默认值

display： block，块元素

display： inline-block，行内块元素既可以设置宽高，也不会独占一行

display：nono ，彻底隐藏一个元素，不保留原来占得位置

visibility：hidden ；隐藏一个元素，保留原来的位置



（5）盒子的大小

box-sizing：content-box   //内容盒子，width，height 为内容区的大小

box-sizing：border-box    //边界盒子，width，height 为内容区和可见框的大小



（6）轮廓和圆角

outline 用来设置轮廓线，语法和border 一样。

outline 和 border 的区别是不会影响布局。

box-shadow 用来设置阴影，参数有四个。

box-shadow : 水平偏移量，垂直偏移量，模糊半径，颜色。

偏移量可以为负值，作用是向反方向移动。

模糊半径越大，阴影越模糊。

颜色一般为带透明rgba的颜色。



border-radius 用来设置圆角

border-radius：

四个值： 左上 ，右上， 右下， 左下

三个值：左上 ，右上左下 ，右下

两个值：左上右下，右上左下

一个值：全部

如果只有一个参数，则画圆角，如果为两个参数，则画椭圆角

border-top-left-radius：

border-top-right-radius：

border-bottom-left-radius：

border-bottom-right-radius：

将元素设置为一个圆形

border-radius：50%



### 8.7 网格布局











## 第9章 定位

### 9.1 定位相关属性

只有开启定位的元素才能设置偏移量。

边界的大小会影响别人，而定位只会影响自己。



（1）relative 相对定位

开启相对定位后，不设置偏移量元素不会发生变化。

相对定位不会脱离文档流，不会改变元素性质。

提升元素的层级，可以覆盖别的元素。

相对定位的元素根据自己最原始的位置进行移动的。



（2）absolute 绝对定位

开启绝对定位后，不设置偏移量元素的位置不会发生变化。

绝对定位会让元素脱离文档流。

绝对定位会改变元素的性质，行内变成块，块的宽高被内容撑开。

绝对定位会使元素提升一个层级。

绝对定位的元素以包含块为基准，进行偏移。

包含块：离当前元素最近的祖先块元素。

绝对定位的包含块：离当前元素最近的开启了定位的祖先块元素

如果所有的祖先块元素都没有开启定位，那就以html根元素为包含块。

一般将需要绝对定位的父元素块设置成相对定位。

相对约束变成了9个值，7+left+righ = 父元素可见框的宽度

垂直方向也出现了相对约束。

垂直水平居中方法

margin：auto；

left，right，top，bottom：0；



（3）fixed 固定定位

固定定位永远参照浏览器的可视窗口进行定位。

固定定位的元素不会随浏览器的窗口滚动而移动。

就像网页里某个广告的弹窗一样，会一直固定在某个位置。



（4）sticky 粘滞定位

粘滞定位在一定范围内会随着滚动条滚动，但是达到某个极限值后，将其固定在可视窗口。

新技术的兼容性不好。





```css
<style>
p{
position:static; //默认静止定位
position:relative; //相对定位
position:absolute; //绝对定位
position:fixed; //固定定位
position:sticky; //粘滞定位

left:200px;
right：200px；
top:150px;
bottom：150；

position:fixed; //适应于浏览器的绝对定位
right:0px;  //附着浏览器的右边
buttom:0px; //附着浏览器底部

position:rarelative;
left: -20px; //相对于其正常的位置向左偏移-20px
right: 20px; //相对与其正常的位置向右偏移20px
}
</style>
```



### 9.2 定位的z轴

（1）有三个元素，都开启了定位，这三个元素不存在父子关系，在z轴上默认都为0，所以是按照顺序覆盖的，先有的box1，后有的box2，所以box2在box1上面，最后有的box3，所以box3在最上面。



（2）提升元素的层级

当把box1的z-index值设为1后，比2和3默认为0的z-index的值要高，所以box1会在最上面。

```
.box1{z-index：1；}
```



（3）父子元素的层级

如果box4是box3的子元素，为box3的z轴设为3，为box4的z轴设为1，即便是这样，box3也无法覆盖box4。

因为父子元素之间，box4本身就在box3上，box3的定位提高了，box4在box3身上，等于box3也提高了，所以无法通过修改box3或者box4的z轴高度来实现box3覆盖box4，父元素永远无法覆盖子元素。



## 第10章 响应式布局

### 10.1 响应式布局





   

```html
<head>
	<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1.0,maximum-scale=1.0">
</head>
<style>
    //超大电视
    @media screen and (min-width: 2090px)(){
        body{
            background: pink;
        }
    }
        
      //移动端
    @media screen and (max-width: 750px)(){
        body{
            background: blue;
        }
    }
    
       //平板端
    @media screen and (min-width: 750) 
        		  and (max-width: 960px){
        body{
            background: pink;
        }
    }
    
       //电脑端
   	@media screen and (min-width: 960px) 
        		  and (max-width: 1440px){
        body{
            background: pink;
        }
    }
        
</style>
```





**element-plus 栅格布局**

xs	<768px 响应式栅格数或者栅格属性对象	
sm	≥768px 响应式栅格数或者栅格属性对象	
md	≥992px 响应式栅格数或者栅格属性对象	
lg	≥1200px 响应式栅格数或者栅格属性对象	
xl	≥1920px 响应式栅格数或者栅格属性对象





**媒体查询**

当可视窗口为大于500，且小于700时候生效的样式

```css
@media（min-width：500px）and（max-width：700px）{
	body{     //并列时候用逗号连接
		background：：#bfa
	}
}
```



**媒体查询宽度**

宽屏电脑 1200-1920px

窄屏电脑 992-1200px

移动端 0-768px

平板 768-992px

演示屏幕 1920px-∞







### 10.2 屏幕自适应

//淘宝无限适配+rem单位  已淘汰



#### 10.2.1 电脑端自适应

响应式范围在 1200px以上

设计稿为1440px

固定内容区宽 1040px

两边空隙各200px 自适应 



最窄屏幕1200px 两边各80px空隙 比例86%



最小文字在 14px







#### 10.2.2 平板端自适应

响应式范围 768-1200px 

设计稿为 ?

固定内容区在 668px

两边间隙 自适应

最窄屏幕 768px 两边个 50px空隙 比例87%



导航栏收起来

使用中或大图片



 两边空隙自适应

最小文字在 16px



#### 10.2.3 手机端自适应

响应式范围 768px以下 

 导航栏收起来

使用小图片



使用固定尺寸的外边距

使用 vm vh 调整图片和内容

最小文字在 12px







### 10.3 响应式图片





```html
<picture>
	<source media="(min-width: 650px)" srcset="demo1.jpg">
  	<source media="(min-width: 465px)" srcset="demo2.jpg">
  	<img src="img_girl.jpg">
</picture>
```









## 第11章 选择器

### 11.1 属性选择器

选择所有 font=fontsize23 的标签

```css
[font]{
     选择带有指定属性的标签   
    }

    [font=fontsize23]{  
    选择带有指定属性为指定属性值的标签
    }

    [font^=a]{  
    选择带有指定属性为指定属性值开头的标签
    } 

    [font$=a]{
    选择带有指定属性为指定属性值结尾的标签  
    }

     [font*=a]{
    选择带有指定属性为指定属性值含有任意位置为指定字符串的标签  
    }

<p font="fontsize23">一段内容</p>
```



### 11.2 元素选择器

选择所有的`<p>`标签

```css
<p font="fontsize23">一段内容</p>

<style>
   p{  front-size :20px   }
</style>
```



### 11.3 类和 ID 选择器

js 使用id选择较多，id 属性只能对应一个标签，

css使用class选择器较多，但是 class 属性可以对应多个标签。

而且一个标签可以拥有多个 class属性。

```css
<style>    
        .fff{   
        front-size : 20px
        color:red 
        }

        #eee{
            color:gold
        }
</style>

<p class="fff">一段内容</p>
<p id="eee">一段内容</p>
```



### 11.4 伪类和伪元素选择器

（1）伪类选择器

```css
ul > li:first-child{
    选择ul父类，li为子类的，第一个li标签
    }  
ul > li:last-child{
    选择ul父类，li为子类的，最后一个li标签
    } 
ul > li:nth-child（3）{
    选择ul父类，li为子类的，第3个li标签
    }    
ul > li:nth-child（n）{
    若直接写n，则传入0到正无穷
    }   
ul > li:nth-child（2n）{
    若直接写2n或odd，则传入所有偶数的0到正无穷
    }
ul > li:nth-child（2n+1）{
    若直接写2n+1或even，则传入所有奇数的0到正无穷
    } 
ul > li:not（：nth-child（3））{
    选中所有ul下的li，除了第3个标签
    }
```





（2）伪元素选择器

```css
p::first-letter{
    选中p标签中的第一个字母，对其单独设置样式
}
p::first-line{
    选中p标签中的第行，对其单独设置样式
}
p::selection{
    被鼠标选中的某些段落的，对其单独设置样式
}
p::before{
    content:'abc'
    在文章最开头追加一个字符串abc，该字符串无法被选中
}
p::after{
    content:'abc';
    在文章最结尾追加一个字符串abc，该字符串无法被选中
}

<p>ltter</p>
```



### 11.5 关系选择器

概念：父元素，子元素，祖先元祖，后代元素，兄弟元素

```
子元素选择器
div > span{
    应用于所有被div包括的子span标签
}

后代元素选择器
div span {
    应用于所有div标签中所有的后代div标签
}

兄弟选择器
p + span{
    应用于仅挨着p下面的下一个span标签,中间不能隔着任何东西
}

p ~ span{
     应用于仅挨着p下面的所有的span标签
}
```



### 11.6 其他选择器

（1）通配选择器

所有的标签属性都被选择

*{    color:red }

（2）复合选择器

交集选择，既要是 div 标签，也是class="red"选择。

连写即可，同时选择多个选择器，选择器1选择器2选择器3{ }。

有元素选择器时要开头，其中不应该有 id 选择器，因为编码时 id 属性要唯一。

div.red{    color:red }

并集选择，中间用逗号隔开

选择器1，选择器2，选择器3{ }

h1，span{    color：green }



### 11.7 继承

div里所有的后代都会被改变，但是有些无法继承，如背景颜色

div{color：green} `<div><span>` 我是div的后代 `</div>`



### 11.8 样式冲突，选择器的权重

选择器的优先级：

内联样式1000，

id选择器100，

类和伪类选择器10，

元素选择器1，

通配选择器0，

继承的样式，无优先级

如果优先级相同，则后者覆盖前者 如果优先级不同，则优先使用优先级高的 优先级可以累加，但不能跨其最大的数量级，多个id选择器累加也不会超过内联样式的优先级 可以在某个样式后面加上 ！important 则把这个优先级提到最高，一般不用

```
div{ color：red ！important }
```





## 第12章 常见需求解决方案

### 12.1 单行省略解决方案



### 12.2 高度塌陷解决方案

float 塌陷

```css
.father:after{
    content: "";  <!--content指你写的父元素-->
    display: block; 
    height: 0;
    clear: both;
    visibility: hidden;
} 
```





margin 塌陷

可以为父元素添加 overflow:hidden。



