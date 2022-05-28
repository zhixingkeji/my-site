

## 第1章 使用变量

### 1.1 变量声明

把反复使用的css属性值 定义成变量，然后通过变量名来引用它们，而无需重复书写这一属性值

```scss
$nav-color: #F90;

nav {
  color: $nav-color;
}
```



## 第2章 嵌套

css中重复写选择器是非常恼人的。如果要写一大串指向页面中同一块的样式时，往往需要 一遍又一遍地写同一个ID，scss可以让你只写一遍，且使样式可读性更高。在scss中，你可以像俄罗斯套娃那样在规则块中嵌套规则块

```scss
#content {
  article {
    h1 { color: #333 }
    p { margin-bottom: 1.4em }
  }
  aside { background-color: #EEE }
}
```



### 2.1 父选择器标识符&

当包含父选择器标识符的嵌套规则被打开时，它不会像后代选择器那样进行拼接，而是`&`被父选择器直接替换

```scss
article a {
  color: blue;
  &:hover { color: red }
}
```



### 2.2 群组选择器的嵌套

```scss
.container {
  h1, h2, h3 {margin-bottom: .8em}
}
```



### 2.3 子组合选择器和同层组合选择器

```scss
article {
  ~ article { border-top: 1px dashed #ccc }
  > section { background: #eee }
  dl > {
    dt { color: #333 }
    dd { color: #555 }
  }
  nav + & { margin-top: 0 }
}
```



### 2.4 嵌套属性

```scss
nav {
  border: 1px solid #ccc {
  	left: 0px;
 	 	right: 0px;
  }
}
```



## 第3章 导入scss文件

### 3.1 使用scss部分文件

当通过`@import`把`sass`样式分散到多个文件时，你通常只想生成少数几个`css`文件。那些专门为`@import`命令而编写的`sass`文件，并不需要生成对应的独立`css`文件，这样的`sass`文件称为局部文件。对此，`sass`有一个特殊的约定来命名这些文件。

此约定即，`sass`局部文件的文件名以下划线开头。这样，`sass`就不会在编译时单独编译这个文件输出`css`，而只把这个文件用作导入。当你`@import`一个局部文件时，还可以不写文件的全名，即省略文件名开头的下划线。举例来说，你想导入`themes/_night-sky.scss`这个局部文件里的变量，你只需在样式表中写`@import` `"themes/night-sky";`。



### 3.2 默认变量值

`!default`用于变量，含义是：如果这个变量被声明赋值了，那就用它声明的值，否则就用这个默认值。

```scss
$fancybox-width: 400px !default;
.fancybox {
width: $fancybox-width;
}
```



### 3.3 嵌套导入

有一个名为`_blue-theme.scss`的局部文件

```scss
aside {
  background: blue;
  color: white;
}
```

然后把它导入到一个CSS规则内

```scss
.blue-theme {@import "blue-theme"}

//生成的结果跟你直接在.blue-theme选择器内写_blue-theme.scss文件的内容完全一样。

.blue-theme {
  aside {
    background: blue;
    color: #fff;
  }
}
```



### 3.4 原生css导入

你不能用`sass`的`@import`直接导入一个原始的`css`文件，因为`sass`会认为你想用`css`原生的`@import`。但是，因为`sass`的语法完全兼容`css`，所以你可以把原始的`css`文件改名为`.scss`后缀，即可直接导入了。



## 第4章 静默注释

```scss
body {
  color: #333; // 这种注释内容不会出现在生成的css文件中
  padding: 0; /* 这种注释内容会出现在生成的css文件中 */
}
```



## 第5章 混合器

```scss
@mixin rounded-corners {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}

notice {
  background-color: green;
  border: 2px solid #00aa00;
  @include rounded-corners;
}


//sass最终生成：
.notice {
  background-color: green;
  border: 2px solid #00aa00;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
```





## 第6章 使用选择器继承来精简css



以`class="seriousError"` 修饰的`html`元素最终的展示效果就好像是`class="seriousError error"`。

```scss
//通过选择器继承继承样式
.error {
  border: 1px solid red;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
```

