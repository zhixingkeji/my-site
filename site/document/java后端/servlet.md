---

title: servlet教程

date: 2021-11-15 19:42:45

---

## 一. 简介
### 1.1 服务器
开源服务器 
tomcat，jetty

### 1.2 创建servlet
```java
public class myservlet extends HttpServlet{

}
```

### 1.3 web.xml配置
```java
加载时机：
<load-on-startup>
0或正数：启动程序时创建，越小优先级越高
负数：访问时才创建
```

### 1.4 注解
@WebServlet(value="/home",loadOnStartup=0)

有注解之后就可以不用web.xml

老版本2.5以下不支持注解

注解和web.xml同时生效


## 二. request
### 2.1 常用方法
1. 获取请求时的完整路径
2. 获取请求时的部分路径
3. 获取请求时的参数字符串
4. 获取请求方式
5. 获取当前协议版本
6. 获取站点名

![截1.png](./assets/images/servlet教程-1636977542181.png)

### 2.2 获取请求参数
![截11图.png](./assets/images/servlet教程-1636980381203.png)


### 2.3 解决乱码问题
`req.setCharacterEncoding("UTF-8");`

### 2.4 请求转发
特点：  
1）服务器行为  
2）地址栏不发生改变  
3）只有一次请求   
4）可以多次跳转，数据一直共享  

```java
//可以调转到servlet 或者WEB-INF目下的文件
req.getRequestDispatcher("s02").forward(req,resp);
req.getRequestDispatcher("index.html").forward(req,resp);
```


### 2.5 域对象
在01里设置内容，请求转发  
在02里接收内容  
![i12312e.png](./assets/images/servlet教程-1636980502238.png)


## 三. reponse
### 3.1 response响应数据
不能同时使用
![ima123ge.png](./assets/images/servlet教程-1636980567156.png)

### 3.2 解决乱码问题

![i1231mage.png](./assets/images/servlet教程-1636980627675.png)

### 3.3 重定向
特点：  
1）客服端行为  
2）两次请求  
3）地址栏发生改变  
4）参数不能共享  

![im231age.png](./assets/images/servlet教程-1636980679905.png)


### 3.4 重定向和请求转发的区别

![123image.png](./assets/images/servlet教程-1636980688456.png)


## 四. cookie
### 4.1 cookie简介
浏览器技术，存在客户端  
应用：记住密码，广告优化  

### 4.2 创建和发送cookie
创建cookie对象  
Cookie cookie = new Cookie("uname","zhangsan")  

发送cookie对象  
response.addCookie(cookie)  

### 4.3 获取cookie
```java
Cookie[] cookies = request.getCookies();
if(cookies !=null && cookies.length>0){
    for(Cookie e : cookies){
        System.out.printIn(e.getName())
        System.out.printIn(e.getValue())
    }
}

```

### 4.4 cookie到期时间
负整数  
不存储, 浏览器关闭就会消失  

正整数   
表示存储的秒数  
  
零   
表示删除该cookie  

![11mage.png](./assets/images/servlet教程-1636981224098.png)


### 4.5 注意事项
1）cookie仅保存在当前浏览器中，不能跨浏览器

2）中文问题

![image12.png](./assets/images/servlet教程-1636981266604.png)

3）同名问题，直接覆盖原有的

4）浏览器中cookie的存放数量，有上限的，由浏览器决定，后期结合session跟踪


### 4.6 路径

![13image.png](./assets/images/servlet教程-1636981379204.png)

![14image.png](./assets/images/servlet教程-1636981385033.png)

![15image.png](./assets/images/servlet教程-1636981356877.png)

![16image.png](./assets/images/servlet教程-1636981392517.png)


## 五. session会话

### 5.1 session
有就显示，没有就新建一个  
session底层依赖cookie  
```java
HttpSession session = request.getsession();
String id = session.getId();
```

### 5.2 域对象
只要没有销毁，数据就一直共享，不管是转发还是重定向  
request域对象重定向后失效  

创建session
```java
HttpSession session = request.getsession();
session.setAttribute("uname","admin");
```

### 5.3 销毁
默认30分钟，可以在web.xml项目里更改，但是会影响整个项目
```xml
<session-config>
    <session-timeout>30</session-timeout>>
</session-config>
```

自定义时间  
`session.setMaxInactiveInterval(15)`

立刻销毁  
`session.invalidate()`  

关闭浏览器  
关闭浏览器会话失效  

关闭服务器
关闭服务器会话失效


## 六. ServletContext对象

### 6.1 context对象
每个web应用只有一个context对象，
作用：共享数据
只要服务器不关闭，context就存在

![23image.png](./assets/images/servlet教程-1636981875986.png)


### 6.2 获取
![24image.png](./assets/images/servlet教程-1636981879851.png)


### 6.3 常用方法

![25image.png](./assets/images/servlet教程-1636981888746.png)



## 七. 文件上传下载
### 7.1 文件上传
前台发送文件，后台接收保存文件
```html
<form method="post" action="upload" enctype="multipart/form-data">
    姓名： <input type="text" name="uname"> <br>
    文件： <input type="file" name="myfile"> <br>
    <button type="submit">提交</button>
</form>
```

```java
package com.example.servletstudy;

import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

@WebServlet( value = {"/upload"})
@MultipartConfig   //文件上传的注解
public class upload extends HttpServlet {

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        System.out.println("文件上传");

        //解决中文乱码问题
        req.setCharacterEncoding("UTF-8");

        //获取参数
        String uname = req.getParameter("uname");
        System.out.println(uname);

        //获取part对象
        Part part = req.getPart("myfile");

        //得到文件名
        String filename = part.getSubmittedFileName();
        System.out.println(filename);

        //得到文件路径
        String filepath = req.getServletContext().getRealPath("/");
        System.out.println(filepath);

        //上传到指定目录
        part.write(filepath+'/'+filename);


    }

}
```

### 7.2 文件下载（超链接）
页面放在webapp下，可以直接通过浏览器地址直接访问
放在WEB-INF文件夹下，是受保护的，无法通过地址直接访问

构建项目时，把工件设置为 /s01  项目名的意思
外部源，是项目中的一些图片视频等资源，设置成  /s01/asset

超链接会自动展示txt或图片，点击后不会自动下载
无法识别的格式如压缩文件，点击后自动下载
如果需要自动下载图片，需要在标签上加 download

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<!--超链接方式下载-->
    <a href="asset/ewshop.zip">压缩文件超链接方式下载</a>

<!--编程方式下载-->
    <br>
    <from action="downloadServlet">
        文件名： <input type="text" name="fileName" placeholder="请输入要下载的文件名">
        <br>
        <button type="submit">下载</button>

    </from>
</body>
</html>
```

### 7.3 文件下载（后台）
```java
//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.servletstudy;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet({"/downloadServlet"})
public class download extends HttpServlet {
    public download() {
    }

    protected void service(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        System.out.println("文件下载");
        req.setCharacterEncoding("UTF-8");
        resp.setContentType("text/html;charset=UTF-8");
        System.out.println(req.getParameter("fileName"));
        String filename = req.getParameter("fileName");
        if (filename != null && !"".equals(filename.trim())) {
            String path = req.getServletContext().getRealPath("/asset/");
            File file = new File(path + filename);
            if (file.exists() && file.isFile()) {
                resp.setContentType("application/x-msdownload");
                resp.setHeader("Content-Disposition", "attachment;filename=" + filename);
                InputStream in = new FileInputStream(file);
                ServletOutputStream out = resp.getOutputStream();
                byte[] bytes = new byte[1024];
                boolean var9 = false;

                int len;
                while((len = in.read(bytes)) != -1) {
                    out.write(bytes, 0, len);
                }

                out.close();
                in.close();
            } else {
                resp.getWriter().write("文件不存在");
                resp.getWriter().close();
            }

        } else {
            resp.getWriter().write("请输入下载的文件名");
            resp.getWriter().close();
        }
    }
}
```
