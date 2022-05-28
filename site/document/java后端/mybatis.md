---

title: mybatis教程

date: 2021-11-15 21:18:08

---





## 一.  框架概述

### 1.1 软件开发常用结构

#### 1.1.1 三层架构

表现层：用户界面（jsp，html，servlet）
业务层：接受界面层传过来的数据，处理逻辑，调用api
持久层：操作数据库



#### 1.1.2 三层框架对应的框架

表现层：springmvc 框架（servlet）controller包
业务层：spring 框架 service类
持久层：mybatis框架 （jdbc）dao包



#### 1.1.3 三层的交互

用户界面 -> 业务逻辑层 -> 持久层 -> 数据库



### 1.2 框架的定义

#### 1.2.1 框架是什么

框架是一个半成品，骨架，定义好了基础的功能。



### 1.3 JDBC编程

#### 1.3.1 jdbc 复习

java database connectivity     java语言连接数据库

JDBC是sun公司的一套接口。

面向接口编程：降低耦合，多态。



JDBC编程六步

①注册驱动

②获取连接

③获取数据库操作对象

④执行sql语句

⑤处理查询结果集

⑥释放资源



#### 1.3.2 jdbc 的缺点

六步走，关闭资源，唯一的核心就是一句sql，却要编写一大堆重复代码



### 1.4 mybatis框架概述

#### 1.4.1 mybatis功能

sql 映射，把一行数据映射成一个java对象
数据访问，对数据库的增删改查



#### 1.4.2 mybatis封装

连接对象，包括connection，satatement，resultset
sql语句
循环sql，封装list集合
关闭资源的能力



#### 1.4.3 开发人员的工作

开发人员集中精力在开发sql语句上即可，而不用关心创建，连接，关闭等繁琐操作



## 二. 快速入门

### 2.1 创建mybatis

maven安装依赖

```xml
<dependency>
  <groupId>org.mybatis</groupId>
  <artifactId>mybatis</artifactId>
  <version>3.5.7</version>
</dependency>
```

#### 2.1.1 新建student表

```sql
CREATE TABLE `studen` (
`id` int(11) NOT NULL,
`name` varchar(255) DEFAULT NULL, 
`email` varchar(255) DEFAULT NULL, 
`age` int(11) DEFAULT NULL, 
PRIMARY KEY(id)
)
ENGINE=INNODB DEFAULT CHARSET=utf8;
```



#### 2.1.2 配置pom

```xml
<dependencys>
    <dependency>
      <groupId>org.mybatis</groupId>
      <artifactId>mybatis</artifactId>
      <version>3.5.7</version>
    </dependency>

    <dependency>
      <groupId>mysql</groupId>
      <artifactId>mysql-connector-java</artifactId>
      <version>8.0.26</version>
    </dependency>
</dependencys>

<build>
    <resources>
      <resource>
        <directory>src/main/java</directory>
        <includes>
          <include>**/*.properties</include>
          <include>**/*.xml</include>
        </includes>
        <filtering>false</filtering>
      </resource>
    </resources>
</build>
```



#### 2.1.3 创建实体类目录下的Student

```java
package org.example.model;

@Data
public class Student {
    private Integer id;
    private String name;
    private String email;
    private Integer age;
}
```

#### 2.1.4 创建mapper目录下的StudentMapper接口类

```java
package org.example.dao;

import org.example.domain.Student;

import java.util.List;

public interface StudentDao {
    //查询表中所有数据
    public List<Student> selectStudents();
   public int insertStudent(Student student);
}
```

#### 2.1.5 创建类路径mapper目录下的StudentMapper.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0/EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<!--约束文件-->


<!--namespace：接口的全限定名-->
<!--id：方法名-->
<!--resultType：类的全限定名称-->
<mapper namespace="org.example.dao.StudentDao">
        <select id="selectStudents" resultType="org.example.domain.Student">
            select * from student order by id  
        </select>
        <insert id="insertStudent">
            insert into student values(#{id},#{name},#{email},#{age})
        </insert>
</mapper>
```



#### 2.1.6 创建config目录下的mybatisConfig主配置文件



#### 2.1.7 创建myApp类

```java
//查询操作
public class myApp {
    public static void main(String[] args)  {
         SqlSession sqlSession = MyBatisUtils.getSqlSession();
        String sqlID = "org.example.dao.StudentDao.selectStudents";
        List<Student> studentsList = sqlSession.selectList(sqlID);
        for (Student stu : studentsList){
            System.out.println("查询到的数据"+stu);
        }
        sqlSession.close();
    }
}



//插入操作
public class testinsert {
    public static void main(String[] args)  {
        SqlSession sqlSession = MyBatisUtils.getSqlSession();
        String sqlID = "org.example.dao.StudentDao.insertStudent";
        Student student1 = new Student();
        student1.setId(1005);
        student1.setAge(20);
        student1.setName("张飞");
        student1.setEmail("zf@qq.com");
        int nums = sqlSession.insert(sqlID,student1);
        sqlSession.commit();
        System.out.println(nums);
        sqlSession.close();
    }
}
```



#### 2.1.8  创建工具类

```java
package org.example.utils;

public class MyBatisUtils {
    private static  SqlSessionFactory factory = null;

    static {
        String config = "mybatis.xml";
        try {
            InputStream in = Resources.getResourceAsStream(config);
           factory = new SqlSessionFactoryBuilder().build(in);

        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    public static SqlSession getSqlSession(){
        SqlSession sqlSession = null;
        if(factory!=null){
            sqlSession = factory.openSession();
        }
        return sqlSession;
    }
}
```





## 三. dao代理

### 3.1 动态代理

mybatis根据dao接口，创建一个dao接口的实现类，并创建这个类的对象

使用SqlSession.getMapper(dao接口.class)

```java
public class prox {
    @Test
    public void test1(){
        SqlSession sqlSession = MyBatisUtils.getSqlSession();
        StudentDao dao = sqlSession.getMapper(StudentDao.class);
        List<Student> students = dao.selectStudents();
        for(Student stu: students){
            System.out.println(stu);
        }
    }

}
```



### 3.2 传入参数

从java代码中把数据传入到mapper文件的sql语句中

#### 3.2.1 传一个简单参数

在dao接口方法中写入一个参数，

在映射文件中select标签里，parameterType="java.lang.Integer"

可以不写，因为反射机制会自动获取

在sql语句中写入 where id=#{id}，占位符： #{  任意字符 }



#### 3.2.2 传多个参数

接口中有两个参数，使用 @Param 命名参数

```java
public List<Student> selectMulitParam ( 
    @Param("myname") String name,
    @Param("myage") Inter age
);

select id, name, email, age from student where name=#(myname} or age=#{myagel}

```



#### 3.2.3 传入对象

创建新的类 或用原有的类 ,接口方法传参写对象 

sql语句用占位符 里面直接加属性名 name=#{paramName}



#### 3.2.4 按位置传参

按参数的位置传值

name = #{arg0}

age = #{arg1}



#### 3.2.5 Map传参 

不建议使用





### 3.3 封装mybatis输出结果

resuleType可以自定义返回类型

列名和属性名不一样时,要用resultMap(属性多)或者用as(属性较少)



### 3.4 模糊like

sql语句    	where name like #{name}

测试方法 	name="%李%"





## 四. 动态sql

### 4.1 概念

sql的内容是变化的,可以根据条件获取到不同的sql语句

主要是where部分发生变化



### 4.2 使用mybatis的标签 `<if>`

if 语句注意拼接后是否符合sql语法

可以添加 where 1=1  

```xml
<select id= result=>
	select id,name from student
  where 1=1
  <if test="name !=null and name !='' ">
    and name = #{name}
  </if>
  <if test="age>0">
    and age &gt; #{age}
	</if>
</select>
```



### 4.3  使用 `<where>` 标签

可以防止 使用 `<if>` 标签造成的语法错误, 自动去掉多余的 `or`   `and`

```xml
<select id= result=>
    select id,name from student
    <where>
        <if test="name !=null and name !='' ">
          	and name = #{name}
        </if>
        <if test="age>0">
          	and age &gt; #{age}
        </if>
    </where>
</select>
```



### 4.4 使用 `<foreach>` 标签

```xml
<select id= result=>
    select id,name from student where id in
    <foreach cpllection="list" item="myid" open="(" close=")" separator=",">
    		#{myid}
    </foreach>
</select>
```





### 4.5 sql代码片段复用

首先定义sql片段

```xml
<sql id="id的值"></sql>


在select中复用sql片段
<select> 
    <include refid="id的值"/>
    .......
</select>
```



## 五. 配置文件

### 5.1 主配置文件

settings里的所有设置

mybatis内定义的别名

JDBC参数表示mybatis底层调用是JDBC中的对象，MANAGED是委托给其他容器，比如服务器软件或者spring框架

POOLED参数，使用连接池，UPOOLED不使用连接池





### 5.2 数据库属性配置文件

jdbc.yml

```yaml
jdbc:
	driver: com.mysql.cj.jdbc.Driver
	url: jdbc:mysql://localhost:3306/wl?serverTimezone=Asia/Shanghai
  username: root
  password: root
```





## 六. 扩展

6.1 PageHelper 分页插件

6.1.1 添加maven坐标

6.1.2 加入plugin配置

6.1.3 创建对象



