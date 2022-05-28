## 第1章 Django 简介

### 1.1 Django概念



### 1.2 项目结构

```python
study_django/.
├── manage.py	# 管理文件
├── myapp	 # 项目的app 
│   ├── __init__.py
│   ├── admin.py  # 默认的后台管理功能 
│   ├── apps.py  # 启动类
│   ├── migrations # 数据库字段变更记录
│   │   └── __init__.py
│   ├── models.py   # 对应数据库实体类
│   ├── tests.py  # 单元测试
│   └── views.py  # 视图函数,对应路由
│ 
├── study_django 	# 与项目路径同名
│   ├── __init__.py  
│   ├── asgi.py   # 异步请求
│   ├── settings.py  # 配置
│   ├── urls.py  # 路由对应关系
│   └── wsgi.py  # 同步请求
└── templates  

```



### 1.3 app概念

类似于springcould的微服务, 普通项目一般只有一个app





## 第2章 Django 项目搭建

### 2.1 原始环境搭建

安装django

```sh
conda install django
```

创建项目

```sh
django-admin startproject myproject
```

创建app

```shell
python manage.py startapp app01
```



### 2.2 高级环境搭建

使用pycharm专业版 ,  创建 Django 项目即可 , 自动安装依赖



### 2.3 快速上手

**注册app**

```python
# 项目名/同名文件夹/settings.py
INSTALLED_APPS = [

   # myapp下的apps.py里的class类名MyappConfig
  'myapp.apps.MyappConfig',  

]

```

**编写路由**

```python
# 项目名/同名文件夹/urls.py
from myapp import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('index/',views.index)
]

```



**编写视图函数**

```python
# 项目名/app名/views.py
from django.http import HttpResponse

def index(request):
    return HttpResponse("欢迎使用")

```



**启动项目**

pycharm专业版直接点运行即可



命令行启动

```sh
python manage.py runserver 8000
```





## 第3章 基本功能

### 3.1 视图模板

**返回视图模板**

```python
# views.py

def index_page(request):
    return render(request,"user_list.html")
  
```



**创建模板**

```html
# 项目路径/myapp/templates/user_list.html

<h1>我是视图模板</h1>

```



**注意**

寻找模板时不是只找本app下的templates文件, 而已根据注册的app的顺序, 逐个寻找templates文件





### 3.2 静态文件

类似flask , 在 app下面创建 static 文件夹 

```
项目名/app名/static

static
	/js
	/css
	/img
	/lib
```



配置文件里默认

```python
# settings.py
STATIC_URL = '/static/'

```



在视图模板中使用

```html
{% load static %} 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <h1>我是视图模板</h1>
    <img src="{% static 'img/logo.png' %}" alt="">
</body>
</html>
```

 

### 3.3 模板语法

传值给视图模板

```python
def index_data(request):
    user = "wl"
    user_list = ["zhang3","li4","wang5"]
    user_dict = {
      "name": "hehe",
      "salary": 10000,
    }
    
    
    return render(request, "user_list.html", {
      "user": user,
      "userlist": user_list,
      "userdict": user_dict
    
    })

```



字符串

```html
<div>{{ user }}</div>
```



列表

```html
<div>{{ userlist.0 }}</div>
<div>{{ userlist.1 }}</div>
<div>{{ userlist.2 }}</div>
```



字典

```html
<div>{{ userdict.name }}</div>
<div>{{ userdict.salary }}</div>
```



if

```html
{% if user == "wl" %}
	<h1>哈哈</h1>
{% elif user == "lele" %}
	<h1>噗噗</h1>
{% else %}
	<h1>呵呵</h1>
{% endif %}
```



for

```html
<ul>
	{% for k,v in n3.items %}        
  	<li> {{ k }} = {{ v }} </li>
  {% endfor %}
</ul>

# dict.values
# dict.keys
# dict.items
```





### 3.4 请求和响应

request 参数

```
request.method
```



获取表单数据

```
request.get("user")
```



重定向

```python
return redirect("http://www.baidu.com")
```



### 3.5 跨域配置

```html
{% csrf_token %}
```



## 第4章 数据库

### 4.1 连接数据库

安装模块

```sh
conda install mysqlclient
```



手动创建数据库



settings配置数据源

```python
DATABASES = {
	'default': {
		'ENGINE':'django.db.backends.mysql',
    'NAME': 'study-django',
    'USER': 'root',
    'PASSWORD':'wangle2018',
    'HOST':'127.0.0.1',
    'PORT': 3306
  }
}
```



操作表

​    



### 4.2 增删改查 





## 第5章 高级功能

