## 插入一条数据后获取自动生成的id

1.建表时设置主键id自增

2.在实体类上的id字段有注解 

```java
@TableId(value = "id", type = IdType.AUTO)
private Integer id;
```

3.在插入sql标签中添加两个值

```java
  <insert id="commit_order" keyProperty="id" useGeneratedKeys="true">
    ...
    </insert>
```

4.控制器编写

```java
Integer id = requestOrder.getId();
orderService.commit_order(requestOrder)
Integer id_new = requestOrder.getId();
```





## 逻辑删除

1.在创建数据库的时候加入 isdelete 字段 , int类型,  该字段0表示正常, 1表示删除

2.在实体类的字段上添加注解 @TableLogic

3.配置application.yml

```yml
mybatis-plus:
  global-config:
    db-config:
      logic-delete-value: 1  # 逻辑删除
      logic-not-delete-value: 0  # 逻辑未删除
```



4.调用方法

```java
//调用该方法后, 不会实际删除该条数据,而是把 isdelete字段标记为1
commentMapper.deleteById(id);
```









## redis设置过期key

1.修改redis配置文件

vim /usr/local/etc/redis.conf

默认为notify-keyspace-events ""， 修改为  notify-keyspace-events Ex



2.获取所有的key

```java
public Set<String> getListKey(String prefix) {
    Set<String> keys = redisTemplate.keys("*");
    return keys;
}
```





3.获取所有的key

```java

public List<String> getListKey(String prefix) {
    Set<String> keys = redisTemplate.keys("*");
    List<String> values = redisTemplate.opsForValue().multiGet(keys);
    return values;
}
```









## 分页查询
