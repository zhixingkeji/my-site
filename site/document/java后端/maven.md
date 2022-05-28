---

title: maven教程

date: 2021-11-15 21:23:01

---


## 第1章 maven介绍
### 1.1 maven的功能
自动打包，依赖管理，向外暴露自己的jar包，

在本地仓库中没有对应的资源会自动从云仓库中下载依赖的jar包



### 1.2 maven的项目类型

POM类型：依赖管理项目

WAR类型：JavaWeb项目

JAR类型：Java普通项目



### 1.3 maven配置

```text
//镜像配置
<!-- 阿里云镜像 -->
<mirror>
  <id>aliyunmaven</id>
  <mirrorOf>*</mirrorOf>
  <name>阿里云公共仓库</name>
  <url>https://maven.aliyun.com/repository/public</url>
</mirror>

```



## 第2章 pom.xml

### 2.1 依赖管理

```text
<dependencies>
    <dependency>
    <goupId></goupId>
    <artifactId></artifactId>
    <version></version>
    <scope>test<scope>  //test是给测试类使用的
    </dependency>
</dependencies>
```



### 2.2 插件管理

```xml
<build>
    <plugins>
        <plugin>
            //插件的资源坐标
        </plugin>
    </plugins>    
</build>
```





## 第3章 maven关系

### 3.1 依赖
项目间的依赖关系

依赖关系：项目A中导入项目B，即项目A依赖项目B

在开发阶段，maven在同一个工作空间内，不同的maven项目可以通过资源坐标直接调用资源，不需要打包放入到本地仓库中，但是运行时还需要打包引入的。

打包顺序，如果A依赖B，B依赖C，则应该先打包C，再打包B，再打包A，每次修改代码，都需要重新打包



### 3.2 继承

项目间的继承关系

maven项目继承关系，只继承pom资源文件，其他任何代码都不会继承。

创建两个独立的模块，在子模块的pom里，用 parent 标签包裹父模块的资源坐标。

这样两个独立的模块就建立了继承关系。

父项目中的pom依赖都会自动导入到子项目中，子项目也可以配置自己的依赖。

父项目的改造：如果只想做一个资源管理，不做功能开发的父项目。则不用创建JAVAEE或SE类型的项目，而可以创建一个jar类型的项目，删除目录结构，只保留pom文件，在pom文件里将packaging标签的内容修改为pom

注意：父项目要为pom类型，父子项目都是独立的，不能在父项目下创建子项目



### 3.3 聚合

聚合关系：

将本来一个整体的事物，拆分为不同的零件，每个零件在物理视图上是独立的，也就是说肉眼看到的是多个零件，但是在逻辑上是属于一个整体的。

根据MVC的代码结构，将项目拆分成四个子项目，pojo，mapper，service，web

依赖关系：web -> service -> mapper -> pojo

这些子项目都开发的是同一个功能，之间存在相互调用，所以使用依赖关系。

继承关系：这些子项目开发的同一个功能，为方便资源的统一，使这些子项目都继承同一个父项目，所以使用继承关系。

创建流程：

创建 jar 类型的maven父项目，删除src目录，修改pom类型

在父项目中右键创建新的子项目，分别是jar类型的pojo子项目，mapper子项目，service子项目，和war类型的web子项目。

由于继承原理，子项目会自动继承父项目的完整资源，而子项目不需要这么多的资源，就需要在父项目中pom文件中使用 `<dependencyManagement>` 
标签，包裹 `<dependencies>` 标签，在子项目中只需要声明 `<goupId>` 和 `<artifactId>` ，版本号由父项目统一管理。

分别手动配置四个子项目的依赖关系。

将SSM的配置文件放到web子项目中，因为web拥有所有的资源。

在子项目中完成代码的编写，pojo内是实体类代码，mapper类是数据库操作代码，service是业务层代码，web是控制器代码和页面资源。

在父项目中打包。执行clean，执行install

运行拆分后的SSM代码，在web子项目中，执行tomcat run





## 第4章 生命周期

### 4.1 所有功能

mvn compile 编译 

mvn clean 清理 

mvn test 测试 

mvn package 打包项目

mvn install 安装项目

