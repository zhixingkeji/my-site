## 第1章 Electron 简介

### 1.1 主进程和渲染进程简介

**主进程**

Electron 运行 package.json 的 main 脚本（background.js）的进程被称为主进程。

 在主进程中运行的脚本通过创建web页面来展示用户界面。

一个 Electron 应用总是有且只有一个主进程。

主进程在 Node.js 环境中运行，这意味着它能够`require`模块化和使用所有 Node.js API。



**渲染进程**

由于 Electron 使用了 Chromium 来展示 web 页面，所以 Chromium 的多进程架构也被使用到。

每个 Electron 中的 web 页面运行在它自己的渲染进程中。

在普通的浏览器中，web页面通常在一个沙盒环境中运行，不被允许去接触原生的资源。

渲染器无法直接访问`require` 或其他 Node.js API。为了在渲染器中直接包含 NPM 模块，您必须使用在 Web 上使用的相同捆绑工具链（例如，`webpack`或`parcel`



**主进程与渲染进程的关系**

主进程使用 BrowserWindow 实例创建页面。 每个 BrowserWindow 实例都在自己的渲染进程里运行页面。 当一个 BrowserWindow 实例被销毁后，相应的渲染进程也会被终止。

主进程管理所有的[web页面](https://www.zhihu.com/search?q=web页面&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A75764907})和它们对应的渲染进程。 每个渲染进程都是独立的，它只关心它所运行的 web 页面。



### 1.2 嵌入网页





### 1.3 预加载

``预加载脚本包含在其 Web 内容开始加载之前在渲染器进程中执行的代码。这些脚本在渲染器上下文中运行，但通过访问 Node.js API 被授予更多权限。



因为预加载脚本[`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window)与渲染器共享一个全局接口并且可以访问 Node.js API，它通过在`window`全局中公开任意 API 来增强渲染器，然后您的 Web 内容可以使用这些 API。



```js
//main.js
const { BrowserWindow } = require('electron')
//...
const win = new BrowserWindow({
  webPreferences: {
    preload: 'path/to/preload.js'
  }
})
```



尽管预加载脚本 `window`与它们所附加的渲染器共享一个全局变量，但`window`由于`contextIsolation` 默认设置为 `true` 您不能直接将预加载脚本中的任何变量附加到内部的 `window` 对象上。



### 1.4 上下文桥

在上下文隔离模式下 , 通过preload把变量和函数传递到子进程的`window`对象上



preload.js

````js
const { contextBridge } = require('electron')

//
contextBridge.exposeInMainWorld('myAPI', {
  doAThing: () => {}
})
````



redener.js

```js
window.myAPI.doAThing()
```



### 1.5 进程间通信

**子进程到主进程**

```js
监听
ipcMain.on('set-title', handleSetTitle)
ipcRenderer.on

发送
ipcRenderer.send('set-title', title)
ipcMain.send()
```

**主进程到子进程**



**子进程到子进程**

消息转发





## 第2章  Electron 项目搭建

### 2.1 入门项目

**官方文档**

```sh
https://www.electronjs.org/docs
```



**官方 quick start**

```sh
git clone https://github.com/electron/electron-quick-start
```



**完整功能实例代码**

```sh
git clone https://gitee.com/kiamusze/electron-api-demos-Zh_CN
```





### 2.2 搭建 vue-electron

**创建vue项目**

```text
vue create electron-vue-demo
```



**安装插件**

```text
vue add electron-builder
```



**踩坑1** ：在安装过程中，很可能会卡在这一步不动了，我们先强制结束掉，再执行一次

```text
vue add electron-builder
```



**踩坑2**：webpack5之后移除了某个模块 , 需要手动安装





**踩坑3** :  把某个配置设置为false





配置 vue.config

```text
const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  devServer: {
    // can be overwritten by process.env.HOST
    host: '0.0.0.0',
    port: 8080
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('src', resolve('src'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'));
  }
};
```

devServer 用于设置开发环境的服务，这里表示在本地8080端口启动web服务。

chainWebpack 我们给项目目录起了“别名(alias)”，在代码中，我们可以直接用“别名”访问资源，省去了每次输入完整相对路径的麻烦。

> ※注：
> ◉ 在js代码中可直接使用别名，例如：
> @/common/js/xxx.js 等价于 src/common/js/xxx.js
> common/js/xxx.js 等价于 src/common/js/xxx.js
> ◉ 在css或者html中使用别名，需要在别名前加“~”，例如：
> @import "~common/stylus/font.styl";





## 第3章 Electron 全部API

### 3.1 渲染进程



### 3.2 主进程

### 3.2 APP窗口大小

修改background.js：

```text
function createWindow () {
      // Create the browser window.
      win = new BrowserWindow({
M       width: 1200,
M       height: 620,
        webPreferences: {
          nodeIntegration: true
        }
      })
```



### 3.1 内嵌页面



### 3.2 主进程和渲染进程通信

```js
//渲染进程发送消息
ipcRenderer.sendToHost()

//渲染进程监听消息
ipcRenderer.on("channel",(e,message)=>{ pass })
```



### 3.3 取消跨域限制

修改background.js：

```text
function createWindow () {
      // Create the browser window.
      win = new BrowserWindow({
        width: 1200,
        height: 620,
        webPreferences: {
+         webSecurity: false,
          nodeIntegration: true
        }
      })
```

### 3.4 取消菜单栏

在我们生成的桌面APP中，我们可以看到默认的菜单栏。

在windows中，菜单栏在APP窗口内的顶部；在macOS中，菜单栏位于电脑屏幕顶部。

为了方便项目将来也能直接生成纯web应用，尽量把APP的全部功能都做到渲染进程里，这里我们取消菜单栏。

由于macOS的特殊性，顶部菜单栏无法删除，所以我们针对macOS特殊处理，把菜单栏只保留“关于”和“退出”。

修改background.js：

```text
M   import { app, protocol, BrowserWindow, Menu } from 'electron'
    ...
    function createWindow () {
        ...
        win.on('closed', () => {
            win = null
        })

+       createMenu()
    }

+   // 设置菜单栏
+   function createMenu() {
+       // darwin表示macOS，针对macOS的设置
+       if (process.platform === 'darwin') {
+           const template = [
+           {
+               label: 'App Demo',
+               submenu: [
+                   {
+                       role: 'about'
+                   },
+                   {
+                       role: 'quit'
+                   }]
+           }]
+           let menu = Menu.buildFromTemplate(template)
+           Menu.setApplicationMenu(menu)
+       } else {
+           // windows及linux系统
+           Menu.setApplicationMenu(null)
+       }
+   }
```



![img](https://pic1.zhimg.com/80/v2-243f591c62c81d7027c4b5e9f674effc_720w.jpg)windows界面菜单栏已消失

![img](https://pic2.zhimg.com/80/v2-1972a0b1f0cccd671fe0f72738b28825_720w.jpg)macOS界面菜单栏已简化

> macOS菜单栏名称label的“App Demo”会在build版本生效，dev版本会显示“Electron”。

更多关于菜单栏设置，请参阅：[https://electronjs.org/docs/api/menu](https://link.zhihu.com/?target=https%3A//electronjs.org/docs/api/menu)



### 3.5 设置APP窗口图标

准备windows和macOS两版图标。

> windows: [app.ico](https://www.zhihu.com/search?q=app.ico&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A75764907}) 最小尺寸：256x256
> macOS: app.png或[app.icns](https://www.zhihu.com/search?q=app.icns&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A75764907}) 最小尺寸：512x512 （后续4.1章节用到）

把图标文件放到public/目录下，项目结构如下：

```text
|- /dist_electron
  （略）
|- /public
   |- app.icns  <-- 本教程暂时未使用icns
   |- app.ico
   |- app.png
   |- favicon.ico
   |- index.html
|- /src
  （略）
|- .editorconfig
|- .eslintrc.js
|- .gitignore
|- babel.config.js
|- package.json
|- package-lock.json
|- README.md
```

可以顺便把[favicon.ico](https://www.zhihu.com/search?q=favicon.ico&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A75764907})也修改一下，但是在桌面版APP上是用不到的。如果以后生成纯web项目才会用到。

修改background.js，让APP窗口应用图标：

```text
function createWindow () {
      // Create the browser window.
      win = new BrowserWindow({
        width: 1200,
        height: 620,
        webPreferences: {
          nodeIntegration: true
        },
+       // eslint-disable-next-line no-undef
+       icon: `${__static}/app.ico`
      })
```

> 这里的${__static}对应的是public目录

现在，Windows系统上可以看到开发环境的APP[窗口图标](https://www.zhihu.com/search?q=窗口图标&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A75764907})已经生效了。

macOS图标请参照4.1章节，并且需要在build后才能生效。

![img](https://pic4.zhimg.com/80/v2-1d4e795580183238a869be17230216e3_720w.jpg)windows APP窗口及任务栏图标

### 3.6 设置APP窗口标题栏名称

修改public/index.html:

我们把electron-vue-demo改为App Demo。

```text
<head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <link rel="icon" href="<%= BASE_URL %>favicon.ico">
M       <title>App Demo</title>
  </head>
```







## 第4章  Electron打包

这里我们已经集成了electron-builder工具，官方文档可以参阅：[https://www.electron.build/](https://link.zhihu.com/?target=https%3A//www.electron.build/)

### 4.1 设置APP及安装包图标

在3.5章节，我们的图标生效于运行APP的窗口。本小节将生效于最终生成的可执行文件和安装包图标。需要准备的图标文件请回看3.5章节。

修改vue.config.js

```text
chainWebpack: config => {...},
+   pluginOptions: {
+       electronBuilder: {
+           builderOptions: {
+               win: {
+                   icon: './public/app.ico'
+               },
+               mac: {
+                   icon: './public/app.png'
+               }
+           }
+       }
+   }
    ...
```

运行build后的mac版本，可以看到图标都已生效了。

![img](https://pic3.zhimg.com/80/v2-a731460485841be4eb202caceb0b337e_720w.jpg)macOS APP Dock图标

安装包和可执行文件的截图就不再放出了。

更多详细介绍，可参阅： [https://www.electron.build/icons.html](https://link.zhihu.com/?target=https%3A//www.electron.build/icons.html)

### 4.2 设置APP名称

APP名称包括安装包中APP的名称、可执行文件的文件名。

修改vue.config.js:

```text
pluginOptions: {
        electronBuilder: {
            builderOptions: {
                win: {
                    icon: './public/app.ico'
                },
                mac: {
                    icon: './public/app.png'
                },
+               productName: 'AppDemo'
            }
        }
    }
```

### 4.3 打包APP

执行以下命令，可以build工程：

```text
npm run electron:build
```

最终在dist_electron目录下生成build后的产品。

### windows版本

目录如下：

```text
/dist_electron
|- /bundled
  （略）
|- /win-unpacked  <-- 绿色版
  （略）
|- AppDemo Setup 0.1.0.exe  <-- 安装文件
|- AppDemo Setup 0.1.0.exe.blockmap
|- builder-effective-config.yaml
|- index.js
```

这里其实就win-unpacked和AppDemo Setup 0.1.0.exe有用。

> ※注：在32位环境下打包生成的是32位APP，在64位环境下打包生成的是64位APP。

### mac版本

```text
/dist_electron
|- /bundled
  （略）
|- /mac
   |- AppDemo   <-- 绿色版
|- AppDemo-0.1.0-mac.zip  <-- 绿色版压缩包
|- AppDemo-0.1.0-mac.dmg  <-- 安装包
|- AppDemo-0.1.0.dmg.blockmap
|- builder-effective-config.yaml
|- index.js
```

### 4.4 可能出现的错误

我曾经在Win10 64bit 1809版本上build失败，保存信息中提示：

```text
Error output:
Can't open output file
Error - aborting creation process
```

与此同时，在win7和win10 1803版本build正常。经研究，无果。后来把windows升级到1903版本，问题解决了。应该是vue-cli-plugin-electron-builder插件与系统之间的问题导致。







## 五.  完整功能解决方案

在完成以上章节后，后面基本可以完全按照web方式开发了。这里简单分享下一些小经验。

### 5.1 src目录结构参考

```text
/src
|- /common
   |- /fonts
   |- /images
   |- /js
      |- api
      |- libs
   |- /stylus
   |- /components
   |- /base
   |- /modules
      |- /moduleA
      |- /moduleB
      ...
   |- /views
   |- App.vue
   |- background.js
   |- main.js
   |- router.js
   |- store.js
```

下面对部分重要目录简要说明：

```text
common/ - 项目公用库
common/fonts/ - 字体文件
common/images/ - 公用图片
common/js/ - 公用js目录
common/js/api/ - 把api按类别封装成函数，并export出去，减少业务逻辑中的重复代码
common/js/lib/ - 存放一些公用函数库、定义的常量库等
common/stylus/ - Stylus样式文件
components/ - vue组件目录
component/base/ - vue基础组件，例如自定义的CheckBox、日期选择器、Dialog、Toaster、分页组件等
component/modules/ - vue模块
views/ - vue页面
```

### 5.2 换肤功能的实现

很多项目都有实时换肤的需求，在实际开发中，虽然我们使用了Sass、Less、Stylus等高端样式工具，但最终经过编译还是要回归到最原始的CSS。换肤的本质还是实时替换皮肤样式文件。

### 失败案例

以Stylus为例，抽象出皮肤文件skin.styl:

```text
$color-bg = #fff
$color-text = #333
```

在业务样式中引用：

```text
@import 'skin.styl'

body
 background: $color-bg
 color: $color-text
```

当经过编译后，生成的css为：

```text
body {background: #fff; color: #333;}
```

样式已经写死了，无法换肤。

那么应该怎么做呢？

### 成功案例

项目根目录下的public目录是静态目录，也就是说在build最终产品的时候，它里面的文件将原封不动保留。所以，可以将皮肤文件放在这里。

```text
|- /public
+  |- /skin
+     |- /skin01
+        |- skin.css
+     |- /skin02
+        |- skin.css
   |- app.icns
   |- app.ico
   |- app.png
   |- favicon.ico
   |- index.html
```

由于Electron的是基于[chromium内核](https://www.zhihu.com/search?q=chromium内核&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A75764907})，所以不用担心代码的浏览器兼容问题。接下来就是发挥CSS3变量var(--*)的时候了。

public/skin/skin01/skin.css：

```text
:root {
    --color-bg: #fff;
    --color-text: #333;
}
```

public/skin/skin02/skin.css：

```text
:root {
    --color-bg: #263238;
    --color-text: #b2ccd6;
}
```

修改src/App.vue：

```text
...
    <style lang="stylus">
+   body
+     background: var(--color-bg)
+     color: var(--color-text)
    #app
      font-family 'Avenir', Helvetica, Arial, sans-serif
      -webkit-font-smoothing antialiased
      -moz-osx-font-smoothing grayscale
      text-align center
M     color: var(--color-text)

    #nav
      padding 30px
      a
        font-weight bold
M       color: var(--color-text)
        &.router-link-exact-active
          color #42b983
    </style>
```

在public/index.html引入皮肤样式，注意加上id="app-skin"：

```text
<head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <link rel="icon" href="<%= BASE_URL %>favicon.ico">
+       <link rel="stylesheet" href="<%= BASE_URL %>skin/skin01/skin.css" id="app-skin">
        <title>App Demo</title>
  </head>
```

篇幅有限，这里就不写通过js修改皮肤的代码了。通过调试工具手动修改skin的css路径，可看到换肤效果：

![img](https://pic3.zhimg.com/80/v2-4e42205d182fddfc520a4a0e0e5c9bb6_720w.jpg)skin01浅色皮肤

![img](https://pic1.zhimg.com/80/v2-721e4b15b9d560ec146eadd0680eb420_720w.jpg)skin02深色皮肤



### 5.4 注册快捷键打开devTools

在Electron中打开devTools是通过主线程中调用win.webContents.openDevTools()实现的。以上教程仅在开发环境初始启动的时候打开devTools，但是一旦关闭就不能再打开了。下面讲一下怎么通过快捷键打开devTools。

修改background.js:

```text
...
M   import { app, protocol, BrowserWindow, Menu, globalShortcut } from 'electron'
    ...
    app.on('ready', async () => {
        if (isDevelopment && !process.env.IS_TEST) {
        // Install Vue Devtools
            try {
                await installVueDevtools()
            } catch (e) {
                console.error('Vue Devtools failed to install:', e.toString())
            }
        }
        // 在开发环境和生产环境均可通过快捷键打开devTools
+       globalShortcut.register('CommandOrControl+Shift+i', function () {
+           win.webContents.openDevTools()
+       })
        createWindow()
})
```

在windows下，按Ctrl+Shift+i即可打开devTools

在macOS下，按Commond+Shift+i即可打开devTools

为什么没用F12？因为windows系统中，F12是系统保留快捷键，无法使用。官方原话是这么解释的：

> The F12 key is reserved for use by the debugger at all times, so it should not be registered as a hot key. Even when you are not debugging an application, F12 is reserved in case a kernel-mode debugger or a just-in-time debugger is resident.

但是可以使用Ctrl+F12，只要不单独使用F12就可以。

以上代码在开发环境和生产环境中均有效，为保证生产环境的安全，建议不要在生产环境中使用。放到上面的if语句中即可。





### 5.5 截图

注意 在17版本后 electron只有在主进程的js中有 desktopCapturer 属性, 所以要使用 ipcMain发送消息, 在preload中写截图逻辑

```js
const { app, BrowserWindow, desktopCapturer } = require('electron')
const path = require('path')
const electron = require('electron')


//截图函数
    desktopCapturer.getSources({ types: ['window', 'screen'], thumbnailSize: thumbSize }).then(async sources => {
        console.log(sources)

        for (const source of sources) {
            if (source.name === 'Screen 1') {
                console.log("找到了electron进程")
                    // mainWindow.webContents.send('SET_SOURCE', source.id)
                    // console.log(source.thumbnail.crop())

                //crop  resize

                //base64
                // console.log(source.thumbnail.toDataURL())

                //截图后
                let rect = {
                    height: 100,
                    width: 100,
                    x: 0,
                    y: 0
                }



                let image = source.thumbnail.crop(rect)


                const fs = require('fs')
                fs.writeFileSync('./code.png', image.toPNG(), function(err) {
                    if (err) {
                        console.log("write error")
                    } else {
                        console.log("write success")
                    }
                })



                return
            }
        }
    })


```





### 5.6 录像



### 5.7 超级鹰验证码识别

```js
//安装 restler请求库
var restler = require('restler')

restler.post('http://upload.chaojiying.net/Upload/Processing.php', {
    multipart: true,
    data: {
      //用户名
        'user': 'wl2020',
      //密码
        'pass': 'wangle2018.',
      //软件ID
        'softid': '911390',
      //验证码类型
        'codetype': '1104',
      //base64字符串, 去掉前缀
        'file_base64':  'iVBORw0KGgoAAAANSUhEUgAAAF8AAAAoCAIAAAAXCbHbAAADG0lEQVR42u2aPWgVQRDHHyKoWJhgoSKIxEbBSvGjUCHpJJXREAI2ih+VlaRQUxjiE96DmDSGEERE7MTCQrEQJLVNFDWgKJIUFhGxEvRpcGB0stm73ZuZ29286Dv+Rbib3bf32//O7F2u8mN+piWXKv/wvQ1OdrXoRAT0/9JZ/+iYpX3VXktl6VT+HoUxTQKoY+MbVCLvFAIyrx5f2MTp8+32kQQOIlIuXn8GPfFgSyQ62UsAiMMoLCCOspgW6TQGbgan46HGZOTXu8Fz0qFqsnIMOmnSDSfx6YKX0NlfO4kKMr5kmVh0w0Pfn4nywOJfmHp0Dsr+ZHo6tMqmNtdLpgK6ZEcEoZOyhJs/zQRETcBKKOccBx9i4t2NywgmoC/Px0m5rVwrLjAd8+A0SUPHFDJypQLyUVzvcPaHUenw15dnqgTj6569Jco7haUhNh2R3/VPEjNPJkEIqHHvIYpTs5ilga8zh4dBQSizPM7vzmRk+ciz5fFsFNXeQUYgTj+1r1dBCt+9mv6l97bJqJACHEdfrPMM69SVvqjLKstI5p27G1bFWPy5gHLjAVBjdFZU1KQeJEbMCmufBUY6TMw0jIxArngykWhnkBs2fWkK5Wl1o+OOb2qzpxR0RCXcEwzeATp8R1Dkx741rhhihJioCfooQM3ya9veoVAogY4CDQZ7ADGrR6z3yiJAnBROJ0df94A4/RTSURRQGZ0TO9cyAQ23dYWaQGJkYco28QPipMX3O9pBeu8AIBcjE5CIDvPVvYUpwYZb2bXJaK53F4q5xFyPHYoHXbNVf+cHEP8WLnzeE4tOro8IE8EqU784gLIxHEZjl7+ZEvzH5sBcP6mkXXMxqdGIxPQR2seCZfJaMrKe64cikRLNv19bT38KxQjp1HY/pTMv2x/7vGMBivcqT20ZPh2Od+oTbaBlpjNwpC5aSmMHz8dGQ0JAFiZnVo4EqDo/goyYAkAuRvFkYcqfxhiAgA6aKD2jhZ+rm/0Llerts+ZCEzEqLx2gpB+OmIASa2XQWS5AK4CO5aBrF++jWl9VNssSa303GEy/AZkSmaIA7j4MAAAAAElFTkSuQmCC'
    },
  //固定请求头
    headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}).on('complete', function(data) {
    var captcha = JSON.stringify(data);
  //输出验证码信息
    console.log(captcha);
});
```







