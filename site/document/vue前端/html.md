---
title: HTML基础

date: 2016-04-27 15:08:09


---


## 第1章 HTML入门

1. 前端的三驾马车  
   html 负责页面的结构  
   css 负责页面的样式  
   JavaScript 负责页面的响应



2. 第一个页面

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="keywords" content="这里可以写能被搜索到的关键字">
    <meta name="description" content="这里是描述">
    <meta http-equiv="refresh" content="3;url=https://www.baidu.com">
    //3秒钟以后跳转到百度页面
    
    <title>Document</title>
</head>
<body>
    <h1>hello world</h1>
    
</body>
</html>
```



3. 标题

```html
<h1>标题1</h1>  //最大的字体
<h2>标题2</h2>
<h3>标题3</h3>
<h4>标题4</h4>
<h5>标题5</h5> //最小的字体
```



4. 文本对齐

```html
<h1 align="center">文本内容</h1>

可选： center || right || left
```



5. 文字的下划线,斜体,删除线

```html
<em>斜体内容</em>
<strong>加粗内容</strong>
<u>下划线的文字</u>
<strike>删除线的文字</strike>
```



6. 文字的上下标

```html
<sup>上标的内容</sup>
<sub>下标的内容</sub>
```



7. 特殊符号

```html
"双引号  &quot;    
<左尖括号 &lt;  
>右尖括号 &gt;
X乘号 &times;
版权符号 &copy;
空格 &nbsp;
```



8. 段落

```html
<p>一段文字</p>  //段落标记

<br> 	//换行标记

<pre>一段文字</pre>   // 段落的原格式输出标记 
```



9. 水平线

```html
<hr>  //水平线标签

<hr width="50%">  //水平线标记的宽度

<hr width="5px" align="center">
```



10. 语义化标签

```html
<nav>导航栏</nav> 
<aside>侧边栏</aside>
<article>文章正文</article>
<section>其他区块</section>
<div>任何区块都可以用</div>
```





## 第2章 图像与超链接

1. 添加图片

    ```html
    <img src="图像文件地址">
    图像文件地址 = 绝对地址和相对地址 
    一般用相对地址
    ```



2. 图像的大小与边框

    ```html
    <img src="图像文件地址" height="12px" weight="12px">
    <img src="图像文件地址" border="12px"> 
    ```



3. 图像间距与对齐方式

    ```html
    <img src="图像文件地址"  vspace="垂直间距" hspace="垂直间距">
    <img src="图像文件地址" align="left"> 
    ```



4. 添加图像的提示文字

    ```html
    <img src="图像文件地址" title="一段内容">
    ```



5. 添加图像的替换文字

    ```html
    <img src="图像文件地址" alt="一段文字"> 
    ```



6. 文本超链接

   其中 target="_blank" 作用是新建一个页面打开,默认为从本页打开

    ```html
    <a href="一段网址" target="一段内容">显示的文字</a>
    ```



7. 书签超链接

    ```html
    书签项 	
    <a herf="#dizhi">查看</a>
    
    链接项	
    <a name="dizhi">我被查看了</a>
    
    打开方式     
    <a target="_blank"> 新标签页打开 
    <a target="_self"> 当前标签页打开 
    
    回到顶部    
    <a herf="#">回到顶部</a>   
      
    回到底部     
    将回到顶部超链接设置id属性，直接跳转到这个id标签即可           
    ```



8. 图像的超链接

    ```html
    <a herf="一段网址"><img src="图像文件地址"></a>
    ```



9. 图像热区链接

    ```html
    <img src="图像地址" usemap="热区名称">
    <map name="热区名称">
        <area shape="rect" coords="左上x,左上y,右下x,右下y" herf="链接地址" 
        title="提示名称 target="网页打开方式">
        <area shape="circle" coords="圆心x,圆心y,半径" herf="链接地址" 
        title="提示名称 target="网页打开方式">  
    </map>
    ```



10. 路径

    ```html
    herf="./"  和 herf=“ ” 跳转到本级目录下
    herf="../"  跳转到上级目录下
    ```



## 第3章 表格与div标签

1. 简单的表格制作

   table 表格

   tr = table row 表格的行

   th= table head 表头

   td = table date 表格数据 也就是列



2. 表格的三个部分

```html
   <thead>  表头  </thead>

   <tbody>  表身  </tbody>

   <troot>  表根  </troot>
```

```html
<body>
    <table> //制作表格
        <tr>  //制作表格第一行
            <td>第一行第一列</td> //制作表格第一列
            <td>第一行第二列</td> 
            <td>第一行第三列</td>
        </tr>
        <tr>  //制作表格第二列
             <td>第二行第一列</td> 
            <td>第二行第二列</td>
            <td>第二行第三列</td>
        </tr>
    </table>
</body>
```



3. 表头的设置

   caption

``` html
<body>
    <table align="center"> //制作表格
        <caption>简单课程表</caption> //表头标签
        <tr>  //制作表格第一行
            <th>周一</td> //行标题标签  加粗的内容
            <th>周二</td> //行标题标签  加粗的内容
            <th>周三</td> 	//行标题标签  加粗的内容
        </tr>
        <tr>  //制作表格第二行
            <td>数学</td> 
            <td>语文</td>
            <td>英语</td>
        </tr>
    </table>
</body>
```



4. 表格的样式

   bgcolor设置颜色

```html
<body>
    <table align="centere" heigh="200px" width="50%">
        <tr>  
            <td><img src=""></td> 
            <td>语文</td>
            <td>英语</td>
        </tr>
     </table> 
</body>     
```



5. 表格的合并

   rowspan="2" 跨行合并

   colspan="2" 跨列合并

```html
 <table border="10px" cellpadding="10%"> 设置边界的粗细 设置表格的大小
        <tr bgcolor="red">  //将整行的背景颜色设置为
            <td rowspan="2">数学</td> //合并两行的同列的两个表格
            <td bgcolor="blue">语文</td> //将其中一个格的颜色设置为
            <td>英语</td>
        </tr>
    </table>	
```



6. 表格的分组

   对一列元素进行控制

    ```html
    <body>
        <table align="centere" heigh="200px" width="50%">
            <colgroup> //分组标签
                <col style="background-color:red">  //设置第一列的颜色
                <col style="background-color:green">  //设置第二列的颜色
                <col style="background-color:blue"> //单标记标签
            </colgroup> //分组结束标签
            <tr>  
                <td>语文</td>
                <td>英语</td>
            </tr>
         </table> 
    </body>  
    ```


7. div标签

   div分组便于管理  块状结构 会换行

    ```
    <div id="bian" align="center" >
    	<p>内容</p>
    	<p>内容</p>
    </div>
    <div style="background-image:url(5.jgp) ">
    	<p>内容</p>
    	<p>内容</p>
    </div>
    ```


8. span标签

   是行内标签 没有结构意义 不会换行 只是使设计更方便

    ```html
    <span> 使内容设计更加精美方便</span>
    ```


## 第4章 列表

1. 无序列表标记

   列表项之间没有顺序级别之分,项目符号作为列表的前缀

    ```html
    <ul>
        <li>sport</li>
        <li>math</li>
    </ul>
    ```

   无序列表默认为实心圆点

    ```html
    <ul>
        <li>sport</li>  //默认为实心圆
        <li type="disc">math</li>  //符号为实心圆
        <li type="circle">math</li> //符号为空心圆圈
        <li type="square">math</li>  //符号为实心方块
    </ul>
    ```



2. 有序列表标记

   采用数字或英文字母开头,项目有先后顺序性

    ```html
    <ol>
        <li>sport</li>
    </ol>
    ```



3. 有序列表属性

   序号为数字或大小写字母及大小写罗马数字                                   
   start设置从几开始

    ```html
    <ol start="1" type="1/a/A/i/I">     
      //
        <li>sport</li>
    </ol>
    ```



4. 定义列表标记

   定义列表是两个层次的列表,用于解释名词的定义,名词为一层,解释为一层

    ```html
    <dl>  //创建定义列表
        <dt>名词1</dt>  //名词层
            <dd>解释1</dd>  //解释层
            <dd>解释2</dd>  //可以有多个解释层 
        <dt>名词2</dt>
             <dd>解释1</dd>
    </dl>      
    ```



5. 无序列表和有序列表的嵌套

   重复使用 ul 或 ol 实现

    ```html
    <ul><ol></ol><ul>
    <ul><ol></ol><ul>
    ```


## 第5章 表单

1. 表单form标签

    ```html
    <form action=" " name=" " enctype=" " target=" ">
    </form>
    ```



2. input标签

   input标签

   autocomeplete=“off”  关闭自动补全

   readonly  ，将表单设为只读，数据会提交

   disable ，将表单设置为禁用

   autofocus  ，设置表单自动获取焦点

    ```html
    <input readonly></input>
    ```



3. 文本框

   text  password

   value 文本框的默认值

   size 文本框的长度

   name 文本框的名称

   maxlength 最多可输入的字数

    ```html
    单行文本框
    <lable>  //使用lable可以点击图片时聚焦输入框
    <input type="text" name="" size="" maxlength="" value=""> </lable>
    
    单行密码框	
    <input type="password" name="" size="" maxlength="" value="">	
    ```



4. 单选按钮和复选框

   radio checkbook

   checked 默认被选中

   value 传到处理程序中的值

   name 有相同的name被视为一组单选框 只能选中其中一个

    ```html
    单选框
    <input type="radio" name=" " value=" "> 
    多选框	
    <input type="checkbook" name=" " value=" " checked=“checked”>	
    ```



5. 按钮

   普通按钮button

   value 按键上显示的文字

   name 按钮的名称

   onclick 鼠标单击按钮时进行的处理

    ```html
    <input type="button" name=" " value=" " onclick=" ">
    ```



提交按钮submit

name 按钮的名称

value 按键上显示的文字,默认为"提交"

   ```html
<input type="submit" name=" " value=" ">
   ```



重置按钮reset

清楚表单内容

value 按键上显示的文字 默认为"重置"

   ```html
<input type="reset" name=" " value=" ">
   ```



6. 文件域和图像域



```html
<input type="file"></input>
<input type="image"></input>
```



7. 文本域



   ```html
<body>
  <div><form>
		<textarea name="文本域名称" rows="行数" cols="列数"> </textarea >
	</form></div>
</body>
   ```



8. 下拉列表



   ```html
<form>
    <select>
        <option value=“i”>选项一</option>
        <option select value=“ii”>选项二</option>
        <option value=“iii”>选项三</option>
    </select>
</form>
   ```



## 第6章 多媒体

1. HTML4中的多媒体

   已淘汰

2. HTML5中的多媒体

   | 视频格式 | MIME-type  |
       | :------: | :--------: |
   |   MP4    | video/mp4  |
   |   WebM   | video/webm |
   |   Ogg    | video/ogg  |

    ```html
    <video width="320" height="240" controls>
      <source src="movie.mp4" type="video/mp4">
      <source src="movie.ogg" type="video/ogg">
    您的浏览器不支持Video标签。
    </video>
    ```



| 音频格式 | MIME-type  |
| :------: | :--------: |
|   MP3    | audio/mpeg |
|   Ogg    | audio/ogg  |
|   Wav    | audio/wav  |

   ```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
	您的浏览器不支持 audio 元素。
</audio>
   ```



3. 媒体播放时的方法

   media.play()

   media.pause()

   media.load()



4. canplaytype方法

   检测浏览器是否能播放不同类型的视频

    ```js
    var x = document.createElement("VIDEO");
    isSupp = x.canPlayType(vidType + ';codecs="' + codType + '"');	
    ```



5. 事件处理方式

   事件监听 和 直接赋值


## 第7章 HTML5新特性

1. HTML5的语法变化

   现有浏览器与规范背离

   规范向现实靠拢



2. HTML5的标记方法

   拓展名还是.html或.htm
   内容类型还是.text/html
   DOCTYPE声明



3. 新增的元素

   canvas新元素

   | 标签   | 描述                                                         |
       | ------ | ------------------------------------------------------------ |
   | canvas | 标签定义图形，比如图表和其他图像。该标签基于 JavaScript 的绘图 API |

   新多媒体元素

   | 标签   | 描述                                                   |
       | :----- | :----------------------------------------------------- |
   | aduio  | 定义音频内容                                           |
   | video  | 定义视频（video 或者 movie）                           |
   | source | 定义多媒体资源 video 和 audio                          |
   | embed  | 定义嵌入的内容，比如插件                               |
   | track  | 为诸如 video 和 audio 元素之类的媒介规定外部文本轨道。 |

   新表单元素

   | 标签     | 描述                                                         |
       | :------- | :----------------------------------------------------------- |
   | datalist | 定义选项列表。请与 input 元素配合使用该元素，来定义 input 可能的值。 |
   | keygen   | 规定用于表单的密钥对生成器字段。                             |
   | output   | 定义不同类型的输出，比如脚本的输出。                         |

   新的语义和结构元素

   | 标签     | 描述                                               |
       | -------- | -------------------------------------------------- |
   | article  | 定义页面独立的内容区域                             |
   | aside    | 定义页面的侧边栏内容                               |
   | bdi      | 允许您设置一段文本，使其脱离其父元素的文本方向设置 |
   | command  | 定义命令按钮，比如单选按钮、复选框或按钮           |
   | details  | 用于描述文档或文档某个部分的细节                   |
   | progress | 定义任何类型的任务的进度                           |
   | section  | 定义文档中的节（section、区段）                    |
   | time     | 定义日期或时间                                     |
   | wer      | 规定在文本中的何处适合添加换行符                   |



4. 废除的元素

    ```html
    acronym
    applet
    basefont
    big
    center
    dir
    font
    frame
    frameset
    noframes
    strike
    tt
    ```

    