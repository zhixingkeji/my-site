---
title: MongoDB教程

date: 2021-11-14 09:29:05


---

## 一. mongodb 介绍

### 1. 1 **主要特点**

MongoDB 是一个面向文档存储的数据库。  
你可以在MongoDB记录中设置任何属性的索引 (如：FirstName="Sameer",Address="8 Gandhi Road")来实现更快的排序。  
你可以通过本地或者网络创建数据镜像，这使得MongoDB有更强的扩展性。  
如果负载的增加（需要更多的存储空间和更强的处理能力） ，它可以分布在计算机网络中的其他节点上这就是所谓的分片。  
Mongo支持丰富的查询表达式。查询指令使用JSON形式的标记，可轻易查询文档中内嵌的对象及数组。  
MongoDb 使用update()命令可以实现替换完成的文档（数据）或者一些指定的数据字段 。  
Mongodb中的Map/reduce主要是用来对数据进行批量处理和聚合操作。  
Map和Reduce。Map函数调用emit(key,value)遍历集合中所有的记录，将key与value传给Reduce函数进行处理。  
Map函数和Reduce函数是使用Javascript编写的，并可以通过db.runCommand或mapreduce命令来执行MapReduce操作。  
GridFS是MongoDB中的一个内置功能，可以用于存放大量小文件。

### 1.2 **安装**

`brew tap mongodb/brew`    
`brew install mongodb-community`    
配置文件：/usr/local/etc/mongod.conf  
日志文件路径：/usr/local/var/log/mongodb  
数据存放路径：/usr/local/var/mongodb  
停止  
`brew services start mongodb-community`  
启动  
`brew services stop mongodb-community`


## 二. 数据库操作

### 2.1 创建数据库

创建并切换到数据库  
`use runoob`  
显示当前所在的数据库
`db`  
显示所有数据库  
`show dbs`

### 2.2 删除数据库

删除数据库  
`db.dropDatabase()`

### 2.3 创建集合

你不需要创建集合。当你插入一些文档时，MongoDB 会自动创建集合。

```shell
db.mycol2.insert({"name" : "菜鸟教程"})
show collections
```

### 2.4 删除集合

```shell
db.mycol2.drop()
```

### 2.5 插入文档

```shell
db.col.insert({title: 'MongoDB 教程',
description: 'MongoDB 是一个 Nosql 数据库',
by: '菜鸟教程',
url: 'http://www.runoob.com',
tags: ['mongodb', 'database', 'NoSQL'],
likes: 100
})
```

### 2.6 修改文档

update 是直接替换此文档所有内容

使用 $set 是修改属性

使用 $unset 是删除属性

```shell
db.col.update(
  {'title':'MongoDB 教程'},
  {$set:{'title':'MongoDB'}}
)
```

### 2.7 删除文档

删除集合下全部文档：
db.inventory.deleteMany({})

删除 status 等于 A 的全部文档：
db.inventory.deleteMany({ status : "A" })

删除 status 等于 D 的一个文档：
db.inventory.deleteOne( { status: "D" } )

### 2.8 查询文档

`db.col.find().pretty()`

## 三. 条件查询

### 3.1 条件操作符

| 符号 | 比较符 |
| ---- | ------ |
| $gt  | >      |
| $gte | >=     |
| $lt  | <      |
| $lte | <=     |
| $ne  | !=     |
| $eq  | =      |

查询 "col" 集合中 "likes" 小于 150 的数据  
`db.col.find({likes : {$lt : 150}})`

获取 "col" 集合中 "likes" 大于等于 100 的数据  
`db.col.find({likes : {$gte : 100}})`

### 3.2 limit()和skip()

显示查询文档中的两条记录  
`db.col.find({},{"title":1,_id:0}).limit(2)`

只显示第二条文档数据  
`db.col.find({},{"title":1,_id:0}).limit(1).skip(1) `

### 3.3 排序

sort() 方法可以通过参数指定排序的字段，并使用 1 和 -1 来指定排序的方式  
其中 1 为升序排列，而 -1 是用于降序排列

正序排列  
`db.COLLECTION_NAME.find().sort({KEY:1})`

降序排序  
`db.col.find({},{"title":1,_id:0}).sort({"likes":-1})`

### 3.4 索引

语法中 title 值为你要创建的索引字段，1 为指定按升序创建索引  
如果你想按降序来创建索引指定为 -1 即可  
`db.col.createIndex({"title":1})`

### 3.5 备份

备份指令  
`mongodump`

执行以上命令后，客户端会连接到本机 27017 的MongoDB服务上  
并备份所有数据到 bin/dump/ 目录中。

恢复指令  
`mongorestore`

### 3.6 监控

`mongostat`

`mongotop`

## 四. mongoose.js



### 4.1 连接数据库

无密码连接

```java
import com.mongodb.MongoClient;
import com.mongodb.client.MongoDatabase;

public class MongoDBJDBC{
   public static void main( String args[] ){
      try{   
       // 连接到 mongodb 服务
         MongoClient mongoClient = new MongoClient( "localhost" , 27017 );
       
         // 连接到数据库
         MongoDatabase mongoDatabase = mongoClient.getDatabase("mycol");  
       System.out.println("Connect to database successfully");
        
      }catch(Exception e){
        System.err.println( e.getClass().getName() + ": " + e.getMessage() );
     }
   }
}
```

有密码连接

```java
import java.util.ArrayList;  
import java.util.List;  
import com.mongodb.MongoClient;  
import com.mongodb.MongoCredential;  
import com.mongodb.ServerAddress;  
import com.mongodb.client.MongoDatabase;  
  
public class MongoDBJDBC {  
    public static void main(String[] args){  
        try {  
            //连接到MongoDB服务 如果是远程连接可以替换“localhost”为服务器所在IP地址  
            //ServerAddress()两个参数分别为 服务器地址 和 端口  
            ServerAddress serverAddress = new ServerAddress("localhost",27017);  
            List<ServerAddress> addrs = new ArrayList<ServerAddress>();  
            addrs.add(serverAddress);  
              
            //MongoCredential.createScramSha1Credential()三个参数分别为 用户名 数据库名称 密码  
            MongoCredential credential = MongoCredential.createScramSha1Credential("username", "databaseName", "password".toCharArray());  
            List<MongoCredential> credentials = new ArrayList<MongoCredential>();  
            credentials.add(credential);  
              
            //通过连接认证获取MongoDB连接  
            MongoClient mongoClient = new MongoClient(addrs,credentials);  
              
            //连接到数据库  
            MongoDatabase mongoDatabase = mongoClient.getDatabase("databaseName");  
            System.out.println("Connect to database successfully");  
        } catch (Exception e) {  
            System.err.println( e.getClass().getName() + ": " + e.getMessage() );  
        }  
    }  
} 
```

### 4.2 创建集合

```java
import com.mongodb.MongoClient;
import com.mongodb.client.MongoDatabase;

public class MongoDBJDBC{
   public static void main( String args[] ){
      try{   
      // 连接到 mongodb 服务
      MongoClient mongoClient = new MongoClient( "localhost" , 27017 );
         
       
      // 连接到数据库
      MongoDatabase mongoDatabase = mongoClient.getDatabase("mycol");  
      System.out.println("Connect to database successfully");
      mongoDatabase.createCollection("test");
      System.out.println("集合创建成功");
        
      }catch(Exception e){
        System.err.println( e.getClass().getName() + ": " + e.getMessage() );
     }
   }
}
```

### 4.3 获取集合

```java
import org.bson.Document;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class MongoDBJDBC{
   public static void main( String args[] ){
      try{   
       // 连接到 mongodb 服务
         MongoClient mongoClient = new MongoClient( "localhost" , 27017 );
       
         // 连接到数据库
         MongoDatabase mongoDatabase = mongoClient.getDatabase("mycol");  
       System.out.println("Connect to database successfully");
      
       MongoCollection<Document> collection = mongoDatabase.getCollection("test");
       System.out.println("集合 test 选择成功");
      }catch(Exception e){
        System.err.println( e.getClass().getName() + ": " + e.getMessage() );
     }
   }
}
```

### 4.4 插入文档

```java
import java.util.ArrayList;
import java.util.List;
import org.bson.Document;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class MongoDBJDBC{
   public static void main( String args[] ){
      try{   
         // 连接到 mongodb 服务
         MongoClient mongoClient = new MongoClient( "localhost" , 27017 );
         
         // 连接到数据库
         MongoDatabase mongoDatabase = mongoClient.getDatabase("mycol");  
         System.out.println("Connect to database successfully");
         
         MongoCollection<Document> collection = mongoDatabase.getCollection("test");
         System.out.println("集合 test 选择成功");
         //插入文档  
         /** 
         * 1. 创建文档 org.bson.Document 参数为key-value的格式 
         * 2. 创建文档集合List<Document> 
         * 3. 将文档集合插入数据库集合中 mongoCollection.insertMany(List<Document>) 插入单个文档可以用 mongoCollection.insertOne(Document) 
         * */
         Document document = new Document("title", "MongoDB").  
         append("description", "database").  
         append("likes", 100).  
         append("by", "Fly");  
         List<Document> documents = new ArrayList<Document>();  
         documents.add(document);  
         collection.insertMany(documents);  
         System.out.println("文档插入成功");  
      }catch(Exception e){
         System.err.println( e.getClass().getName() + ": " + e.getMessage() );
      }
   }
}
```

### 4.5 检索文档

```java
import org.bson.Document;
import com.mongodb.MongoClient;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;

public class MongoDBJDBC{
   public static void main( String args[] ){
      try{   
         // 连接到 mongodb 服务
         MongoClient mongoClient = new MongoClient( "localhost" , 27017 );
         
         // 连接到数据库
         MongoDatabase mongoDatabase = mongoClient.getDatabase("mycol");  
         System.out.println("Connect to database successfully");
         
         MongoCollection<Document> collection = mongoDatabase.getCollection("test");
         System.out.println("集合 test 选择成功");
         
         //检索所有文档  
         /** 
         * 1. 获取迭代器FindIterable<Document> 
         * 2. 获取游标MongoCursor<Document> 
         * 3. 通过游标遍历检索出的文档集合 
         * */  
         FindIterable<Document> findIterable = collection.find();  
         MongoCursor<Document> mongoCursor = findIterable.iterator();  
         while(mongoCursor.hasNext()){  
            System.out.println(mongoCursor.next());  
         }  
      
      }catch(Exception e){
         System.err.println( e.getClass().getName() + ": " + e.getMessage() );
      }
   }
}
```

### 4.6 更新文档

```java
import org.bson.Document;
import com.mongodb.MongoClient;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;

public class MongoDBJDBC{
   public static void main( String args[] ){
      try{   
         // 连接到 mongodb 服务
         MongoClient mongoClient = new MongoClient( "localhost" , 27017 );
         
         // 连接到数据库
         MongoDatabase mongoDatabase = mongoClient.getDatabase("mycol");  
         System.out.println("Connect to database successfully");
         
         MongoCollection<Document> collection = mongoDatabase.getCollection("test");
         System.out.println("集合 test 选择成功");
         
         //更新文档   将文档中likes=100的文档修改为likes=200   
         collection.updateMany(Filters.eq("likes", 100), new Document("$set",new Document("likes",200)));  
         //检索查看结果  
         FindIterable<Document> findIterable = collection.find();  
         MongoCursor<Document> mongoCursor = findIterable.iterator();  
         while(mongoCursor.hasNext()){  
            System.out.println(mongoCursor.next());  
         }  
      
      }catch(Exception e){
         System.err.println( e.getClass().getName() + ": " + e.getMessage() );
      }
   }
}
```

### 4.7 删除文档

```java
import org.bson.Document;
import com.mongodb.MongoClient;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;

public class MongoDBJDBC{
   public static void main( String args[] ){
      try{   
         // 连接到 mongodb 服务
         MongoClient mongoClient = new MongoClient( "localhost" , 27017 );

         // 连接到数据库
         MongoDatabase mongoDatabase = mongoClient.getDatabase("mycol");  
         System.out.println("Connect to database successfully");

         MongoCollection<Document> collection = mongoDatabase.getCollection("test");
         System.out.println("集合 test 选择成功");

         //删除符合条件的第一个文档  
         collection.deleteOne(Filters.eq("likes", 200));  
         //删除所有符合条件的文档  
         collection.deleteMany (Filters.eq("likes", 200));  
         //检索查看结果  
         FindIterable<Document> findIterable = collection.find();  
         MongoCursor<Document> mongoCursor = findIterable.iterator();  
         while(mongoCursor.hasNext()){  
           System.out.println(mongoCursor.next());  
         }  
           
      }catch(Exception e){
        System.err.println( e.getClass().getName() + ": " + e.getMessage() );
     }
   }
}
```