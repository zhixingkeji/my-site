---

title: springmvc教程

date: 2021-11-15 21:18:36

---





## 第1章 Spring MVC概述

### 1.1 概述

springMVC是基于spring的一个框架，实际上是专门做web开发的模块

底层是servlet，使开发更方便



### 1.2 入门案例

需求：

用户在页面发起一个请求，请求交给springmvc的控制器对象

并显示请求的处理结果（在结果页面显示一个欢迎语句）



#### 1.2.1 新建web maven工程



#### 1.2.2 加入依赖



#### 1.2.3 web.xml中注册DispatcherServlet

DispatcherServlet叫做中央调度器，是一个servlet，它的父类是继承HttpServlet

DispatcherServlet页叫做前端控制器（front controller ）

DispatcherServlet负责接收用户提交的请求，调用其它的控制器对象，并把请求的处理结果显示给用户

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
          http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
    <servlet>
      <servlet-name>myweb</servlet-name>
      <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
      <init-param>
          <param-name>contextConfigLocation</param-name>
          <param-value>classpath:springmvc.xml</param-value>
      </init-param>
      <load-on-startup>1</load-on-startup>
    </servlet>

    <servlet-mapping>
        <servlet-name>myweb</servlet-name>
        <url-pattern>*.do</url-pattern>
    </servlet-mapping>
</web-app>
```



#### 1.2.4 创建一个发起请求的页面index.jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
        <h1>第一个springmvc项目lele</h1>
        <p><a href="some.do">发起some.do的请求</a></p>
</body>
</html>
```



#### 1.2.5 创建控制器类

```java
package com.example.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

//处理器对象
@Controller
public class MyController {

    @RequestMapping("/some.do")
    public ModelAndView doSome(){
        ModelAndView mv = new ModelAndView();
        mv.addObject("msg","欢迎使用springmvc做web开发");
        mv.addObject("fun","执行的是doSome方法");

        mv.setViewName("/show.jsp");
        return mv;
    }

}
```

#### 1.2.6 响应结果的页面

创建一个作为结果的jsp，显示请求的处理结果

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <h3>show.jsp</h3>
    <h3>msg:${msg}</h3><br>
    <h3>fun:${fun}</h3>
</body>
</html>
```



#### 1.2.7 创建springmvc的配置文件

注意踩坑 tomcat版本和servlet版本要对应 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans 
       http://www.springframework.org/schema/beans/spring-beans.xsd 
       http://www.springframework.org/schema/context 
       https://www.springframework.org/schema/context/spring-context.xsd">

    <context:component-scan base-package="com.example.controller"/>

</beans>
```





## 第2章 注解式开发



## 第3章 框架整合



## 第4章 核心技术

### 4.1 请求重定向和转发



### 4.2 异常处理



### 4.3 拦截器





## 第5章 restful 风格

### 5.1 简介

1.目的

简化网址名称

隐藏请求目的



2.通过行为区分同一链接

查询 GET

添加 POST

修改 PUT

删除 DELETE



3.演示

```java
//通过method修改请求方法
@RequestMapping(value="/users/{id}",method=RequestMethod.DELETE)
@ResponseBody
//通过PathVariable获取路径变量,需要有{}占位符
public String delete (@PathVariable Integer id){
  System.out.println("user delete:" + id)
}
```



### 5.2 简化注解

在类上使用@RestController,其下面所有方法都是接收json数据

在类上使用@RequestMapping("/books"), 省略在所有方法上

在方法上使用@PostMapping代替method=Request.POST

