---

title: pandas

date: 2021-11-14 09:34:51

---

## 第1章 pandas数据处理

### 1.1 简介

pands数据结构

Series对象 , 类似一维数组  

DataFrame , 类似二维数组 



### 1.2 安装

下载pandas

```shell
conda install pandas 
pip3 install -i https://mirrors.aliyun.com/pypi/simple/
```



项目引入

```python
import pandas as pd
```





### 1.3 相关网站

菜鸟教程 https://www.runoob.com/pandas/pandas-cleaning.html

c语言中文网 http://c.biancheng.net/pandas/



## 第2章 Series 对象





## 第3章 DataFrame 对象

创建DataFrame

```python
data = {
'a': [1,2,3],
'b': [4,5,6],
'c': [7,8,9],
}

data_frame1 = pd.DataFrame(data)
print(data_frame1)
```



创建DataFrame,只要a,b列  

​    data_frame2 = pd.DataFrame(data,columns=['a','b'])  

​    print(data_frame2)  



为DataFrame添加d列  

​    data_frame2['d'] = [11,12,13]  

​    print(data_frame2)  



删除数据  

删除行  

data_frame2.drop([0],inplace=True)   



删除前三行  

data_frame2.drop(labels=range(0,3), axis=0, inplace=True)  



删除列  

data_frame2.drop(labels='a', axis=1, inplace=True)  



修改数据 , 把a列第1行的数据改为10  

data_frame2['a'][0] =10  

data_frame2['b'] = [1,2,3]   

data_frame2['b'] = 1  



查询数据   

查询列  

data_frame2.b  

data_frame2['b']  



查询行  

data_frame2[0:3]  



文件存取  

存储为csv文件  

data_frame2.to_csv('test.csv')  



读取csv文件  

data_frame3 = pd.read_csv('test.csv')





## 第4章 CSV 和 JSON



## 第5章 数据清洗



## 第6章 数据持久化

连接mysql
```py
import mysql.connector

if __name__ == '__main__':
db = mysql.connector.connect(user='root', password='wangle2018', host='127.0.0.1', database='zgc')
curesor = db.cursor()
a = curesor.execute("select * from student")
print(a)
curesor.close()
db.close()
```

出现报错解决  
1.登录mysql数据库 mysql -u root -p  
2.更新身份认证方式 ALTER USER '你的用户名@localhost' IDENTIFIED WITH mysql_native_password BY '你的用户密码';  
