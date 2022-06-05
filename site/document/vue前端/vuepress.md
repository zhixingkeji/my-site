## 第1章 vuepress



### 1.1 介绍

### 1.2 安装

### 1.3 项目结构

### 1.4 配置

### 1.5 静态资源

### 1.6 md拓展





## 第2章 hopo主题



### 2.1 介绍

虽然标明了这是一个主题仓库，但是它同时包含了十多个同样功能完善且强大的插件。



### 2.2 安装

在当前 `my-vuepress` 项目的 `[my-site]` 文件夹内创建 hope 项目

```bash
npm init vuepress-theme-hope@next my-site
```







## 第3章 md基础





## 第4章 hope-md增强

### 4.1 启用md增强

```ts
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        enableAll: true,
      },
    },
  }),
};
```



### 4.2 自定义容器

启动该功能

```ts
plugins: {
	mdEnhance: {
		container: true,
	},
}
```



信息容器

````
::: info 自定义标题

一个有 `代码` 和 [链接](#markdown) 的信息容器。

```js
const a = 1;
```

:::
````



注释容器

````
::: note 自定义标题

一个有 `代码` 和 [链接](#markdown) 的注释容器。

```js
const a = 1;
```

:::
````



提示容器

````
::: tip 自定义标题

一个有 `代码` 和 [链接](#markdown) 的提示容器。

```js
const a = 1;
```

:::
````



警告容器

````
::: warning 自定义标题

一个有 `代码` 和 [链接](#markdown) 的警告容器。

```js
const a = 1;
```

:::
````



危险容器

````
::: danger 自定义标题

一个有 `代码` 和 [链接](#markdown) 的危险容器。

```js
const a = 1;
```

:::
````



详情容器

````
::: details 自定义标题

一个有 `代码` 和 [链接](#markdown) 的详情容器。

```js
const a = 1;
```

:::
````



### 4.3 选项卡

```ts
plugins: {
	mdEnhance: {
        // 添加选项卡支持
	tabs: true,
	},
},
```



```
::: code-tabs#shell

@tab 标题 1

<!-- tab 1 内容 -->

@tab 标题 2

<!-- tab 2 内容 -->

@tab:active 标题 3

<!-- tab 3 将会被默认激活 -->

<!-- tab 3 内容 -->

:::
```



### 4.4 Tex



### 4.5 图表



### 4.6 徽章



### 组件

徽章

pdf



### 外部引入

思维导图





## 第5章 hope界面





## 第6章 hope布局





## 第7章 hope功能





## 第8章 hope博客





## 第9章 hope插件





