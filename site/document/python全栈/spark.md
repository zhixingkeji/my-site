---

title: spark

date: 2021-11-14 09:34:40

---



## 第1章 概述

### 1.1 spark

spark是一种基于内存的快速通用、可扩展的大数据分析计算引擎。



### 1.2 sprak 对比 hadoop

spark数据通信是基于内存，而hadoop是基于磁盘

spark更擅长大数据计算，但受内存限制。



### 1.3 核心模块

spark core



spark sql



spark streaming



sprak mllib



spark graphx





## 第2章 Spark安装

### 2.1 scala环境配置

官网下载 2.13.8 版本二进制源码，解压缩到一个目录

添加环境变量，`SCALA_HOME` ，在Path变量下添加`%SCALA_HOME%\bin`

命令行输入`scala`，安装完成



### 2.2 scala在vscode中集成

在项目下创建 .vscode目录，新建 tasks.json 文件

```json
{
    "version": "0.1.0",
    "isShellCommand": true,
    "args": [],
    "showOutput": "always",
    "echoCommand": true,
    "suppressTaskName": true,
    "windows": {
        "command": "cmd",
        "args": [
            "/C",
            "scala"
        ]
    },
    "linux": {
        "command": "sh",
        "args": [
            "scala"
        ]
    },
    "osx": {
        "command": "sh",
        "args": [
            "scala"
        ]
    },
    "tasks": [
        {
            "taskName": "run script",
            "isBuildCommand": true,
            "args": [
                "${file}"
            ]
        }
    ]
}
```



在项目下新建一个 HelloWorld.scala 文件

```scala
object HelloWorld {
 def main(args: Array[String]): Unit = {
        println("Hello, world!")
    }
}
```



使用 `Ctrl+Shift+B` 运行 `scala` 文件

一定要使用 `Ctrl+Shift+B` 运行文件





### 2.3 idea集成spark

在 idea 中安装scala插件，SDK使用自己下载的2.13.8版本



pom依赖

```xml
<dependencies>
<dependency>
    <groupId>org.apache.spark</groupId>
    <artifactId>spark-core_2.13</artifactId>
    <version>3.2.0</version>
</dependency>
<dependency>
    <groupId>org.apache.spark</groupId>
    <artifactId>spark-sql_2.13</artifactId>
    <version>3.2.0</version>
    <scope>provided</scope>
</dependency>
<dependency>
    <groupId>org.apache.spark</groupId>
    <artifactId>spark-streaming_2.13</artifactId>
    <version>3.2.0</version>
    <scope>provided</scope>
</dependency>
<dependency>
    <groupId>org.apache.spark</groupId>
    <artifactId>spark-mllib_2.13</artifactId>
    <version>3.2.0</version>
    <scope>provided</scope>
</dependency>
</dependencies>
```



测试类

```scala
# spark-project/src/main/java/test.scala
import org.apache.spark.rdd.RDD
import org.apache.spark.{SparkConf, SparkContext}

object test {
  def main(args: Array[String]): Unit = {
    //application


    //spark framework

    val sparkConf = new SparkConf().setMaster("local").setAppName("WordCount")
    val sc : SparkContext = new SparkContext(sparkConf)
    val fileRDD : RDD[String] = sc.textFile("input/word.txt")
    val wordRDD: RDD[String] = fileRDD.flatMap(_.split(" "))
    val word2OneRDD: RDD[(String,Int)] = wordRDD.map((_,1))
    val word2CountRDD : RDD[(String,Int)] = word2OneRDD.reduceByKey(_+_)
    val word2Count:Array[(String,Int)] = word2CountRDD.collect()
    word2Count.foreach(println)

    sc.stop()
  }
}
```



测试文件

```
# spark-project/input/word.txt

aaa bbb ccc eee fff aaa 
aaa    aaa   bbb
```



配置日志输出目录和日志级别

```properties
# log4j.properties

log4j.rootCategory=ERROR, console
log4j.appender.console: org.apache.log4j.ConsoleAppender
log4j.appender.console.target: System.err
log4j.appender.console.layout: org.apache.log4j.PatternLayout
log4j.appender.console.layout.ConversionPattern: %d{yy/MM/dd HH:mm:ss} %p %c{1}：%m%n
log4j.logger.org.apache.spark.repl.Main: ERROR
log4j.logger.org.spark_project.jetty=ERROR
log4j.logger.org.spark_project.jetty.util.component.AbstractLifeCycle=ERROR
log4j.logger.org.apache.repl.SparkIMain$exprTyper=ERROR
log4j.logger.org.apache.repl.SparkILoop$SparkILoopInterpreter=ERROR
log4j.logger.org.apache.parquet=ERROR
log4j.logger.parquet=ERROR
log4j.logger.org.apache.hadoop.hive.metastore.RetryingHMSHandler=FATAL
og4j.logger.org.apache.hadoop.hive.ql.exec.FunctionRegistry=ERROR					
```



### 2.4 win系统部署





### 2.5 常见安装报错

- win 系统需要 hadoop 的 wine工具

https://github.com/cdarlint/winutils

- win 系统的 spark-shell 无论怎样都会报错





## 第3章 运行环境

### 3.1 linux本地模式安装

下载安装包 

[spark-3.2.1-bin-hadoop3.2.tgz](https://dlcdn.apache.org/spark/spark-3.2.1/spark-3.2.1-bin-hadoop3.2.tgz)



解压缩到 /opt/module 目录下

```sh
sudo tar -zxvf spark-3.2.1-bin-hadoop3.2.tar -C /opt/module
mv /opt/module/spark-3.2.1-bin-hadoop3.2.tar /opt/module/spark-local
```



配置环境变量

```sh
# 打开自定义的用户变量文件
sudo vim /etc/profile.d/my_env.sh

# 添加以下内容
# SPARK_HOME
export SPARL_HOME=/opt/module/spark-local
export PATH=$PATH:$SPARK_HOME/bin
export PATH=$PATH:$PRARK_HOME/sbin

# 保存退出
:wq

# 刷新
source /etc/profile
```



在 $SPARL_HOME/data 目录下新建 word.txt 文件

```
hello nihao
hello spark
hello spark
```



启动spark-shell

```sh
spark-shell

sc.textFile("data/word.txt").flatMap(_.split(" ")).map((_,1)).reduceByKey(_+_).collect
```



监控页面

http://虚拟机ip:4040



spark-submit 运行的小例子

```sh
# 注意在命令行，不是spark-shell里
spark-submit \
--class org.apache.spark.examples.SparkPi \
--master local[2] \
./examples/jars/spark-examples_2.12-3.2.1.jar \
10
```





### 3.2 独立集群模式  有问题！！！



解压缩，重命名

```sh
sudo tar -xvf spark-3.2.1-bin-hadoop3.2.tar -C /opt/module
mv /opt/module/spark-3.2.1-bin-hadoop3.2 /opt/module/spark-standalone
```



修改 conf / workers 文件

```sh
# 重命名
cd /opt/module/spark-standalone/conf
mv workers.template workers

# 修改里面的 ip 地址
hadoop102
hadoop103
hadoop104
```



修改 conf / spark-env.sh 文件

```sh
cd /opt/module/spark-standalone/conf
mv spark-env.sh.template spark-env.sh

# spark 集群配置
export JAVA_HOME=/opt/module/jdk1.8.0_202  
SPARK_MASTER_HOST=hadoop102
SPARK_MASTER_PORT=7077
```



分发集群

```sh
scp -r /opt/module/spark-standalone root@192.168.10.103:/opt/module/

scp -r /opt/module/spark-standalone root@192.168.10.104:/opt/module/
```



启动集群

```sh
sbin/start-all.sh
jps   
```



 查看后台页面

http://hadoop102:7077



提交应用

```sh
bin/spark-submit \
--class org.apache.spark.examples.SparkPi \
--master spark://hadoop102:7077 \
./examples/jars/spark-examples_2.12-3.2.1.jar \
10
```





历史服务器配置





高可用配置





### 3.3 yarn集群模式

 

 



xsync

xcall





## 第4章 core



## 第5章 sql



## 第6章 steaming



## 第7章 mllib



## 第8章 graphx
