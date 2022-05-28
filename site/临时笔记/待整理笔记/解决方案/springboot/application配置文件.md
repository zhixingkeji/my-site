通用方案

```yml
server:
  port: 8090


spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://127.0.0.1:3306/maimaiji?serverTimezone=Asia/Shanghai&useUnicode=true&characterEncoding=utf-8&zeroDateTimeBehavior=convertToNull&useSSL=false&allowPublicKeyRetrieval=true
    username: root
    password: wangle2018

#  mvc:
#    pathmatch:
#      matching-strategy: ant_path_matcher



mybatis-plus:
  configuration:
    map-underscore-to-camel-case: true
    auto-mapping-behavior: full
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
  mapper-locations: classpath:xml/*Mapper.xml
  global-config:
    db-config:
      logic-delete-value: 1
      logic-not-delete-value: 0




jedis :
  pool :
    host : 127.0.0.1
    port : 6379
    config :
      maxTotal: 100
      maxIdle: 10
      maxWaitMillis : 100000

logging:
  file:
    path: ./log/${server.port}
    pattern:
      file: '%d{yyyy/MM/dd HH:mm:ss.SSS} %clr(%-5level) [%magenta(%thread)] %cyan(%logger{15}) : %msg%n'
      console: '%d{yyyy/MM/dd HH:mm:ss.SSS} %clr(%-5level) [%magenta(%thread)] %cyan(%logger{15}) : %msg%n'



alioss:
  endpoint: oss-cn-beijing.aliyuncs.com
  accessKeyId: LTAI5tEqrXLwYDQdDZvJwKBg
  accessKeySecret: RzTBgsKmlujCpMaG1472iybDW7FlKV
  bucketName: xinguan-study



```







devlop



product

