---

title: shiro教程

date: 2021-11-15 21:19:11

---

## 一. shiro简介

### 1.1 shiro 入门

- Apache Shiro 是 Java  的一个安全（权限）框架。
- Shiro 可以非常容易的开发出足够好的应用，其不仅可以用在 JavaSE 环境，也可以用在 JavaEE 环境。
- Shiro 可以完成：认证、授权、加密、会话管理、与Web 集成、缓存 等。



### 1.2 shiro 功能

**Subject**：主体，可以看到主体可以是任何可以与应用交互的“用户”；

**SecurityManager**：相当于SpringMVC中的DispatcherServlet或者Struts2中的FilterDispatcher；是Shiro的心脏；所有具体的交互都通过SecurityManager进行控制；它管理着所有Subject、且负责进行认证和授权、及会话、缓存的管理。

**Authenticator**：认证器，负责主体认证的，这是一个扩展点，如果用户觉得Shiro默认的不好，可以自定义实现；其需要认证策略（Authentication Strategy），即什么情况下算用户认证通过了；

**Authrizer**：授权器，或者访问控制器，用来决定主体是否有权限进行相应的操作；即控制着用户能访问应用中的哪些功能；

**Realm**：可以有1个或多个Realm，可以认为是安全实体数据源，即用于获取安全实体的；可以是JDBC实现，也可以是LDAP实现，或者内存实现等等；由用户提供；注意：Shiro不知道你的用户/权限存储在哪及以何种格式存储；所以我们一般在应用中都需要实现自己的Realm；

**Session Manager**：会话管理，即用户登录后就是一次会话，在没有退出之前，它的所有信息都在会话中；会话可以是普通JavaSE环境的，也可以是如Web环境的；

**Cryptography**：加密，保护数据的安全性，如密码加密存储到数据库，而不是明文存储；

**Web Support**：Web支持，可以非常容易的集成到Web环境；

**CacheManager**：缓存，比如用户登录后，其用户信息、拥有的角色/权限不必每次去查，这样可以提高效率；

**Concurrency**：shiro支持多线程应用的并发验证，即如在一个线程中开启另一个线程，能把权限自动传播过去；

**Testing**：提供测试支持；

**Run As**：允许一个用户假装为另一个用户（如果他们允许）的身份进行访问；

**Remember Me**：记住我，这个是非常常见的功能，即一次登录后，下次再来的话不用登录了。



## 二. 过滤器

### 2.1 过滤级别

anon，authcBasic，auchc，user 是认证过滤器。

perms，roles，ssl，rest，port 是授权过滤器。



使用方法

/admins/=anon # 表示该 uri 可以匿名访问
/admins/=auth # 表示该 uri 需要认证才能访问
/admins/=authcBasic # 表示该 uri 需要 httpBasic 认证
/admins/=perms[user:add:] # 表示该 uri 需要认证用户拥有 user:add: 权限才能访问
/admins/=port[8081] # 表示该 uri 需要使用 8081 端口
/admins/=rest[user] # 相当于 /admins/=perms[user:method]，其中，method 表示 get、post、delete 等
/admins/=roles[admin] # 表示该 uri 需要认证用户拥有 admin 角色才能访问
/admins/=ssl # 表示该 uri 需要使用 https 协议
/admins/=user # 表示该 uri 需要认证或通过记住我认证才能访问
/logout=logout # 表示注销,可以当作固定配置



### 2.2 异常处理

```java

Subject subject = SecurityUtils.getSubject();
if(!subject.isAuthenticated()){
  UsernamePasswordToken usernamePasswordToken = new UsernamePasswordToken(userName,password);
  usernamePasswordToken.setRememberMe(true);
  try{
     subject.login(usernamePasswordToken);
  }catch (UnknownAccountException e){
     System.out.print("账户不存在:"+e.getMessage());
  }catch (LockedAccountException e){
     System.out.print("账户被锁定:"+e.getMessage());
  }catch (IncorrectCredentialsException e){
     System.out.print("密码不匹配:"+e.getMessage());
  }
}

```





## 三. 相关配置

### 3.1 安装依赖

```xml
<dependency>
    <groupId>org.apache.shiro</groupId>
    <artifactId>shiro-core</artifactId>
    <version>1.4.0</version>
</dependency>
```

### 3.2 配置Realm及多Realm的认证策略

### 3.3 配置Cache

### 3.4 配置securityManager

### 3.5 配置shiroFilterFactoryBean



## 第四章 realm的认证和授权

### 4.1 身份认证



### 4.2 Realm





### 4.3 编码散列算法





### 4.4 Reaml使用散列算法





### 4.5 身份授权



## web项目集成shiro

## springboot集成shiro

实现realm的缓存机制

分布式会话管理

限制密码重试次数

在线并发登录人数控制

## jwt集成shiro



分布式统一权限系统
