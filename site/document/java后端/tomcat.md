使用tomcat启动SpringBoot项目

springboot默认内嵌tomcat服务器，也默认使用main函数启动整个项目。

```xml
<dependency>
   <groupId>org.springframework.boot</groupId>
   <artifactId>spring-boot-starter-web</artifactId>
   <version>2.1.6.RELEASE</version>
</dependency>
```

发布的时候，目前大多数的做法还是排除内置的tomcat，打瓦包（war）然后部署在生产的tomcat中，那打包的时候应该怎么处理？

1、tomcat容器里面运行的是war，而spring boot默认生成的是jar包，所以需要先把jar包的打包方式改成war包

在pom文件中添加`<packaging>war</packaging>`

2、springboot里面会内置一个tomcat容器，如果再加入tomcat容器中会出错，所以先要去除内置tomcat

在pom文件中添加

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-tomcat</artifactId>
</dependency>
```

3、添加servlet依赖

```xml
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>javax.servlet-api</artifactId>
    <version>3.1.0</version>
    <scope>provided</scope>
</dependency>
```

4、修改启动类，在spring boot中项目启动是通过main方法启动的，而使用外置tomcat是通过web.xml方式启动，所以要修改该启动类。

```java
@SpringBootApplication
public class TestApplication extends SpringBootServletInitializer {
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder springApplicationBuilder){
        return springApplicationBuilder.sources(TestApplication.class);
    }
    public static void main(String[] args) {
        SpringApplication.run(TestApplication.class, args);
    }
}
```

5、运行maven中的install，打包，在target文件夹中寻找war包，放入tomcat中。

6、部署步骤

在tomcat根目录下创建一个新的文件夹wars，并将要部署的war包放进去。

删除原本webapps下的所有文件。

修改conf目录下server.xml，在文件末尾Host标签中加上如下配置:

`<Context path="/" docBase="../wars/project.war" reloadable="true" crossContext="true" />`

启动tomcat，会将war自动解压到webapps下的ROOT目录，这样就可以直接通过localhost:8080访问项目了。

