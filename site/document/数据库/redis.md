---
title: redis教程

date: 2021-11-14 09:29:27


---

## 一. redis 简介

### 1.1 nosql 简介

不遵循 sql 标准

不持之 acid

远超 sql 性能

对数据高并发读写

对数据高可拓展性





#### 1.1.1 web 1.0 时代

电脑 -> 服务器 -> 数据库



#### 1.1.2 web 2.0 时代

手机,电脑 -> 服务器 -> 数据库



#### 1.1.3 解决cpu内存压力

session信息存储

1. 存在cookie里, 安全性低
2. session复制, 浪费资源
3. 文件服务器, 花费大
4. 缓存数据库redis, 最终方案

#### 1.1. 4 解决 IO 压力

频繁查询的数据, 放到缓存数据库中, 就不会到关系数据库中查询



### 1.2 redis简介

Redis 是完全开源的，遵守 BSD 协议，是一个高性能的 key-value 数据库。

持久化 , 主从备份, 多种数据结构 , 支持事物 , 时效性 , 原子性


---

### 1.3 **基本数据类型**

Redis支持五种数据类型：  
string（字符串），hash（哈希），list（列表），set（集合）及zset(有序集合)。

---

### 1.4 **安装redis**

**docker安装redis**

默认安装路径 :    /usr/local/bin

默认端口号 : 6379



docker 安装

```bash
docker pull redis:latest
```

配置持久化

更改conf文件的 `daemonize no` 改为 `daemonize yes`, 可以后台启动



启动

redis-server /etc/redis.conf



**windows安装redis**

下载redis安装包

https://github.com/microsoftarchive/redis/releases



配置到目录到path路径变量



设置开启自启动服务

redis-server --service-uninstall

redis-server --service-install redis.windows.conf





### 1.5 常用命令



redis-cli 快速启动

ping   查看是否连通

select 1  选择 db1 数据库

dbsize  查看当前数据库的key数量

flushdb  清空当前库

flushall 通杀全部库

keys * 查看当前库的所有key

exists key 判断某个key是否存在

type key  查看key的类型

del key 删除key

expire key 10  给key设置过期时间

ttl key  查看key的剩余时间

CONFIG get requirepass  查看是否设置了密码验证

CONFIG set requirepass "runoob"   设置密码

AUTH "runoob"   用户登录



### 1.6 单线程+多路IO复用

举例 : 黄牛单线程帮多人买票, 买到票之前 , 顾客可以做各自的事情



思考: java中的两个线程执行 i=0, i++, 100次 ,最终值的范围?

答案: 2-200





## 二.  redis 数据类型

### 2.1 **字符串** String

存储字符串

```shell
set key value # 设置key, 没有创建,有就覆盖
append key value # 对key的值追加内容
strlen key  # 获取值的长度
setnx key value # 设置key,只有当key不存在时才会成功

get key  # 获取key的值

# 略过以下: 
# 设置/取多个key 
# 数字自增/自减 
# 范围设置/取值 
# 设置值和过期时间
```



### 2.2 **哈希** Hash

适合存储对象



映射关系

key -> field : value

```shell
hmset key f1 v1 f2 v2...
hexists key field  # 查看key中的field域是否存在

hget k1 f1 # 取出k1中f1的value

hkeys key # 获取key中所有field
hvals key # 获取key中所有value

hsetnx key f1 value # 新增一个域f1,值为value,若已存在f1则失败
```





### 2.3 **列表** List

底层结构是`双向链表` , 将 `压缩列表` 和 `链表` 结合成`快速列表`

内容可以重复, 有数序

```shell
lpush key v1 # 头插法
lpush key v2 

rpush key v1 v2 v3 # 尾插法

lpop/rpop key  # 从左边/右边 删除一个值.值在键在,值亡键销

rpoplpush k1 k2 # 从k1右边吐一个值,插到k2的左边

LRANGE key 0 2 # 范围取值, 0 -1 是取所有值

llen key # 获取列表长度

lindex key index # 获取key下标是index的值

lset k1 index value # 更新key的index下标的value
```





### 2.4 **无序集合** Set

String 类型的无序集合, 集合成员是唯一的

 ```shell
sadd key v1 # 设置一个值
sadd key v1 v2 v3  # 设置多个值

smembers key  # 取出该集合的所有值
sismember key value  # 判断该集合中是否有某个值 返回01
scard key  # 返回集合中的元素个数

srem key v1 v2 # 删除集合中的某些元素
spop key  # 随机删除一个值

sinter key1 key2 # 返回两个集合的交集
sunion k1 k2 # 返回两个集合的并集
sdiff k1 k2 # 返回两个集合的差集(k1有但k2没有的)
 ```



### 2.5 **有序集合Zset**

底层数据结构是 跳跃表 , 效率相当与红黑树

有序集合的成员是唯一的

redis通过评分进行排序, 分数可以重复

分数相同时, 根据value的数字或字母大小进行排序

```shell
zadd key score value # 添加一个值
zadd runoobkey 3 mysql 4 c++ 5 redis # 添加多个值

zrange runoobkey 0 10 WITHSCORES # 根据索引范围,获取key的值和评分

zincrby key 50 value # 为value的评分增加50

zrem key value # 删除指定元素

zcount key min max # 统计该分数区间内的元素个数

zrank key value #返回该值在集合中的排名,从0开始

zrangebyscore #根据评分范围,获取key的值和评分
```





### 2.6 Bitmaps

位操作



### 2.7 HyperLogLog

基数



### 2.8 Geospatial

地理坐标



## 三.  redis 进阶

### 3.1 配置文件详解

```shell
# 更改端口号
port 6379

# 支持远程调用
注释掉 bind 127.0.0.1
保护模式改为no

# 超时 长时间未操作断开连接
timeout

# 后台模式启动 
daemonize yes

# 日志级别
loglevel notice

# 文件输出路径
logfile

# 数据库个数
databases 16

# 以下略过
# 最大连接数
# 最大内存占用
# 抽样数量
```

### 3.2 **发布和订阅**

#### 3.2.1 简单的发布订阅

```shell
SUBSCRIBE runoobChat  # 第一个客户端订阅频道

PUBLISH runoobChat "Redis PUBLISH test"  # 第二个客户端发送消息
```

#### 3.2.2 **管道技术**

Redis 管道技术可以在服务端未响应时，客户端可以继续向服务端发送请求，并最终一次性读取所有服务端的响应。



**Stream**

发布订阅 (pub/sub) 可以分发消息，但无法记录历史消息

Redis Stream 提供了消息的持久化和主备复制功能

消息队列相关命令

XADD - 添加消息到末尾

XTRIM - 对流进行修剪，限制长度

XDEL - 删除消息

XLEN - 获取流包含的元素数量，即消息长度

XRANGE - 获取消息列表，会自动过滤已经删除的消息



消费者组相关命令

XGROUP CREATE - 创建消费者组

XREADGROUP GROUP - 读取消费者组中的消息

XACK - 将消息标记为"已处理"

XGROUP SETID - 为消费者组设置新的最后递送消息ID

XGROUP DELCONSUMER - 删除消费者

XGROUP DESTROY - 删除消费者组

XPENDING - 显示待处理消息的相关信息

XCLAIM - 转移消息的归属权

XINFO - 查看流和消费者组的相关信息







### 3.3 jedis操作redis

创建maven工程



引入依赖

```xml
<dependency>
		<goupId>redis.clients</groupId>
  	<artifactId>jedis</artifactId>
  	<version>3.2.0</version>
</dependency>
```

修改redis配置文件



关闭服务器防火墙



连接到redis服务

```java
import redis.clients.jedis.Jedis;
 
public class RedisJava {
    public static void main(String[] args) {
        //连接本地的 Redis 服务
        Jedis jedis = new Jedis("localhost",6379);
        // 如果 Redis 服务设置了密码，需要下面这行，没有就不需要
        // jedis.auth("123456"); 
        System.out.println("连接成功");
        //查看服务是否运行
        System.out.println("服务正在运行: "+jedis.ping());
      
      
       //设置 redis 字符串数据
        jedis.set("runoobkey", "www.runoob.com");
      
      
       //存储数据到列表中
        jedis.lpush("site-list", "Runoob");
        jedis.lpush("site-list", "Google");
        jedis.lpush("site-list", "Taobao");
      
    }
}
```



###  3.4 redis与springboot整合

改pom

spring-boot-starter-data-redis

commons-pool2



写yml

spring: redis: ...



写配置类

RedisConfig extends CachingConfigurerSupport



使用RedisTemplate操作



### 3.5 性能测试

#### 3.5.1 网络测试

ab工具



#### 3.5.2 本机测试

使用 redis-benchmark

主机为 127.0.0.1，端口号为 6379  
执行的命令为 set,lpush，请求数为 10000  
通过 -q 参数让结果只显示每秒执行的请求数

_注意: 在命令行使用 而不是redis控制台_

```shell
$ redis-benchmark -h 127.0.0.1 -p 6379 -t set,lpush -n 10000 -q
```

---









## 四. redis 事物和锁机制

### 4.1 事物

redis 事物是一个单独的隔离操作, 事物中的所有命令都会被序列化 按顺序的执行

事物在执行的过程中, 不会被其他客户端发送来的命令请求所打断

事物的主要作用就是串联多个命令防止别的命令插队



在组队阶段发生错误, 则不会执行任何操作

在执行阶段发生错误, 谁错了谁不执行, 其他正常执行



```shell
MULTI  # 开始事物
SET book-name "Mastering C++ in 21 days"
GET book-name
SADD tag "C++" "Programming" "Mastering Series"

EXEC  # 执行事物
discard # 放弃事物




```



### 4.2 事物冲突的问题

#### 4.2.1 悲观锁

默认拿数据的时候, 别人都跟他抢数据, 所以必须上锁

效率低



#### 4.2.2 乐观锁

通过版本号检查是否相同

提交前将拿到的版本号与数据库当前的版本号对比, 不同则不能操作



#### 4.2.3 单例自旋锁





#### 4.2.4 监听

对某个值进行监听, 在事物中, 若被监听的值发生了改变, 则终止事物

watch k1 k2....

unwatch k1 k2...



### 4.3 事物的三特性

单独的隔离操作

没有隔离级别的概念

不保证原子性



### 4.4 秒杀案例



模拟并发请求工具  ab

yum -y install httpd-tools



## 五. 持久化

### 5.1  持久化 RDB

在指定的时间间隔将内存数据集的快照写入磁盘

创建fork子进程, 将数据读入一个临时区域, 再写到rdb文件内

使用了写时复制技术, 需要两倍的内存 , 适合大规模数据储存,

最后一次持久化可能丢失



手动备份

```shell
SAVE   //前台执行备份
BGSAVE  //后台执行备份
```

备份命令将在 redis 安装目录中创建dump.rdb文件。
如果需要恢复数据，只需将备份文件 (dump.rdb) 移动到 redis 安装目录并启动服务即可

获取 redis 安装目录可以使用 CONFIG 命令

```shell
CONFIG GET dir
```





### 5.2 持久化 AOF

append only file

以日志记录每个写操作 , 只许追加文件但不改写

aof和rdb同时开启, 优先使用aof, 因为数据更可靠





### 5.3  主从复制

#### 5.3.1 特点

主机数据更新后, 自动同步后从机

实现读写分离, 主机负责写, 从机负责读

容灾快速恢复



#### 5.3.2 详细步骤

- 创建 /myredis/redis.conf 文件

关闭保护模式

开启后台进程

关闭地址绑定

关闭aof



- 复制三个 conf 文件

redis6379.conf

```text
include /myredis/redis.conf

pidfile /var/run/redis_6379.pid

portt 6379

dbfilename dumb6379.rdb
```

redis6380.conf

```text
include /myredis/redis.conf

pidfile /var/run/redis_6380.pid

portt 6380

dbfilename dumb6380.rdb
```



redis6381.conf

```text
include /myredis/redis.conf

pidfile /var/run/redis_6381.pid

portt 6381

dbfilename dumb6381.rdb
```



启动服务



docker run -itd -p 6379:6379 --name redis6379 -v /myredis/redis6379.conf:/etc/redis/redis6379.conf  redis redis-server /etc/redis/redis6379.conf



docker run -itd -p 6380:6380 --name redis6380 -v /myredis/redis6380.conf:/etc/redis/redis6380.conf  redis redis-server /etc/redis/redis6380.conf



docker run -itd -p 6381:6381 --name redis6381 -v /myredis/redis6381.conf:/etc/redis/redis6381.conf  redis redis-server /etc/redis/redis6381.conf



安装redis工具

apt install redis-tools



进入redis控制台

redis-cli -p 6379



- 关闭防火墙

开启云服务器端口

关闭物理机的防火墙



- 控制台指令

info replication

slaveof 39.107.251.205  6379





#### 5.3.3 一主二仆

主机挂机重启就可 , 从机挂了重新认主 , 自动拉取数据



#### 5.3.4 薪火相传

从机 也可以有自己的从机, 从机从主机同步数据, 从机的从机从从机同步数据



#### 5.3.5 反客为主

主机挂了, 丛机变成主机

slaveof no one



#### 5.3.6 哨兵模式

反客为主的自动版

主机挂后, 从机自动变为主机, 主机连接后变为从机

slave-priority 设置从机变主机的权重





## 六. 集群

### 6.1  集群简介

容量不够,  需要扩容

并发写操作 . redis 如何分摊



早起使用主机代理方式, redis3 以后使用 无中心化集群方式

任何一个节点都可以作为入口, 相互注册 转发

每个节点存放总数据库的 1/n





### 6.2 集群配置

略



### 6.3 插槽

一个集群包含16384个插槽

这些插槽平分给每个节点

当存key的时候 , redis计算出一个值,  将这个值匹配到相对应的插槽 , 如果超过当前节点的插槽范围 , 则自动切换到对应节点, 完成插入操作



### 6.4 故障恢复

可以设置一个节点挂了 整个集群都挂

或者一个节点挂了 其他节点正常运行



### 6.5 使用 Jedis 操作集群

略



## 七. 现实应用场景

### 7.1 缓存穿透

#### 7.1.1 现象

请求大量进入, redis没缓存过数据, 命中率降低, 一直查数据库



#### 7.1.2 原因

黑客攻击, 访问大量空url



#### 7.1.1 解决

空url也设置缓存, 但把时间过期设短

设置请求的白名单

布隆过滤器

实时监控

报网警解决



### 7.2 缓存击穿

#### 7.2.1 现象

现象

数据库访问压力瞬间变大

redis没有出现大量的key过期

redis运行平稳



#### 7.2.2 原因

某个超级热点key过期



#### 7.2.2 解决

预先设置热门数据

监控实时调整

使用锁  (降低效率)



### 7.3 缓存雪崩

#### 7.3.1 现象

大量key集中过期, 此时有了高并发请求



#### 7.3.2  原因

到了某个时间点 , 大量的key统一过期 , 请求都到了数据库



#### 7.3.3 解决

构建多级换错架构

使用锁和队列

设置过期标志

将缓存失效时间分散开



### 7.4 分布式锁

#### 7.4.1 简介

在集群中, 对某个数据加锁 , 要把集群中所有机器都配置上锁



#### 7.4.2 优化之过期时间

上锁同时设置锁的过期时间

防止上锁后, 机器故障, 无法设置过期时间



#### 7.4.3 优化之防止误删

使用 uuid 防止锁误删



#### 7.4.4 优化之保证原子性

使用 lua 脚本保证原子性



#### 7.4.5 锁必须满足的条件

- 互斥性: 同时只有一个客户端可以持有锁
- 不能死锁: 过期时间到了自动解锁
- 加锁和解锁必须是同一个客户端
- 加锁解锁要有原子性







## 八. 新功能 redis 6

### 8.1 ACL 更强的权限控制

acl list 查看所有用户

acl cat 查看所有命令





### 8.2 IO 多线程

并不是支持了多线程, 执行命令依然是单线程+多路IO复用

只是网络请求和协议解析可以使用多线程

默认关闭



### 8.3 工具支持 cluster

不需要单独安装ruby环境