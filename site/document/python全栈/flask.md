## 第1章 flask 快速入门

### 1.1 **flask简介**  

Flask 是典型的微框架，它仅保留了核心功能：请求响应处理和模板渲染。    

这两类功能分别由 Werkzeug 和 Jinja 完成。  

Flask 内置了这两个依赖。



项目结构
```text
├── .flaskenv
├── app.py
├── test_watchlist.py
├── static
│   ├── favicon.ico
│   ├── images
│   │   ├── avatar.png
│   │   └── totoro.gif
│   └── style.css
└── templates
    ├── 400.html
    ├── 404.html
    ├── 500.html
    ├── base.html
    ├── edit.html
    ├── index.html
    ├── login.html
    └── settings.html
```

---



### 1.2 安装

pip3 install flask





### 1.3 **第一个项目**

```python
from flask import Flask
app = Flask(__name__)

@app.route('/') # 路由装饰器
def hello():
    return 'Welcome to My Watchlist!'

if __name__ == "__main__":
  	print(app.url_map) # 查看所有url映射
    app.run()
```





### 1.4 编辑模板

pycharm -> settings -> editor -> live emplates -> flask -> quickflask

修改 template text -> 只应用于python文件 -> apply -> ok







## 第2章 路由



### 2.1 url 地址动态传参

```python
from flask import escape
@app.route('/user/<int:age>')  # 必须要传入一个int类型的age参数
def user_page(age):
    return 'User: %s' % escape(age)
```



### 2.2 自定义路由匹配规则

给定的路由匹配规则不够灵活

定义类 MyRegexConverter 继承 BaseConverter 

app.url_map.converters["name"] = MyRegexConverter



### 2.3 请求方法

```python
@app.route("/path",methods=[ "POST" ])
```





### 2.4 响应结果

响应 字符串

```python
return "ok";
```



响应 字符串+状态码

```python
return "ok",200
```



响应 字符串+状态码+响应头

```python
return "ok",200,{"Content-Type":"application/json","name":"myname"}
```



响应 json

```python
dict = { "name": "wl" , "age": 18}
return jsonify(dict)
```



响应 重定向

```python
return redirect("https://www.baidu.com")
```



响应 url_for 反解析

```python
return redirect(url_for("taobao",token=123))
```



### 2.5 异常跳转

定义异常处理函数

```python
@app.errorhandler(404)
def page_not_found(e):
  print(e)
  return "404页面"
```



手动模拟异常

```python
@app.route("/")
def hello():
  abort(404)
  return "helloworld"
```



### 2.6 request

```python
from flask import Flask,request
@app.route("/")
def hello():
  print(request.method)  # 输出请求结果
  print(request.url)  # 请求url
  print(request.args)  # 获取所有参数
  print(request.args.get("name"))  # 安全获取某个参数
  
  return "helloworld"
```





### 2.7 运行配置

从配置类中加载

```python
class Myconfig(object):
  	DEBUG=True
    
app.config.from_object(Myconfig)
```





从配置文件中加载

```python
app.config.from_pyfile("config.ini")

//config.ini
DEBUG=True
```





从环境变量中加载

```python
app.config.from_envvar(env)
```





### 2.8 请求钩子

before_first_request 在处理第一个请求前执行, 并且始终执行一次

```python	
# 适合做初始化操作, 如io文件读写
@app.before_first_request
def before_first_request():
  	print("before_first_request")
```



before_request 在每次请求前执行

```python	
# 适合对请求参数做校验,访问统计
@app.before_request
def before_request():
  	print("before_request")
```



after_request 请求后执行, 没有错误的情况下

```python	
# 适合对返回值作统一处理, 如返回统一的json数据格式
@app.after_request
def after_request(resp):
  	resp.headers["Content-Type"] = "application/json"
    return resp
```



teardown_request 请求后执行

```python	
# 请求销毁后执行, 适合做异常信息统计
@app.teardown_request
def teardown_request(e):
  	print(e)
```



### 2.9 cookie

```python
from flask import Flask, make_response, request

@app.route("/setcookie")
def set_cookie():
  	response = make_response("setcookie")
    response.set_cookie("com","baidu")
    return response
  
@app.route("/getcookie")
def get_cookie():
  	name = request.cookies.get("com")
    return name
```





### 2.10 session 

```python
from flask import Flask, session

#设置秘钥
app.config["SECRET_KEY"] = "asldjhalhdjlka"

@app.route("/setsession/<name>")
def set_session(name):
  	session["name"] = name
    return "ok"
  
@app.route("/getsession")
def get_session():
  	value = session.get("name")
    return name
```





### 2.11 上下文

current_app  是app的一个代理对象

g 一个局部的全局变量





### 2.12 flask脚本

安装

pip install flask_script



导入

from flask_script import Manager

manager = Manager(app)



入口函数

manager.run()  # 不能传参数



启动

python main.py runserver 



可选参数 

-h 127.0.0.1 

-p 5000 

-d (开启debug模式) 





## 第3章 jinja2模板

### 3.1 模板语法

`{{ pass }}` 用来标记变量。  

`{% pass %}` 用来标记语句，比如 if 语句，for 语句等。  

`{# pass #}` 用来写注释。  



if 判断

```python
<h1>{{ username }}的个人主页</h1>
{% if bio %}
    <p>{{ bio }}</p>  {# 这里的缩进只是为了可读性，不是必须的 #}
{% else %}
    <p>自我介绍为空。</p>
{% endif %}  {# 大部分 Jinja 语句都需要声明关闭 #}
```



for 循环

```jinja2
 <ul>
        {% for movie in movies %}  {# 迭代 movies 变量 #}
        <li>{{ movie.title }} - {{ movie.year }}</li>  
          {# 等同于 movie['title'] #}
        {% endfor %}  {# 使用 endfor 标签结束 for 语句 #}
</ul>      
```





### 3.2 渲染模板

templates/index.html：主页模板
```python
<!DOCTYPE html>
<html lang="en">
	<head>
  	  <meta charset="utf-8">
 	   <title>{{ name }}'s Watchlist</title>
	</head>
	<body>
   	 <h2>{{ name }}'s Watchlist</h2>
   	 {# 使用 length 过滤器获取 movies 变量的长度 #}
     <p>{{ movies|length }} Titles</p>
     <ul>
        {% for movie in movies %}  {# 迭代 movies 变量 #}
        <li>{{ movie.title }} - {{ movie.year }}</li>  
          {# 等同于 movie['title'] #}
        {% endfor %}  {# 使用 endfor 标签结束 for 语句 #}
    </ul>
          
    <footer>
        <small>&copy; 2018 
          <a href="http://helloflask.com/tutorial">
          HelloFlask</a>
        </small>
    </footer>
	</body>
</html>
```



app.py：定义虚拟数据

```python
name = 'Grey Li'
movies = [
    {'title': 'My Neighbor Totoro', 'year': '1988'},
    {'title': 'Dead Poets Society', 'year': '1989'},
    {'title': 'A Perfect World', 'year': '1993'},
    {'title': 'Leon', 'year': '1994'},
    {'title': 'Mahjong', 'year': '1996'},
    {'title': 'Swallowtail Butterfly', 'year': '1996'},
    {'title': 'King of Comedy', 'year': '1999'},
    {'title': 'Devils on the Doorstep', 'year': '1999'},
    {'title': 'WALL-E', 'year': '2008'},
    {'title': 'The Pork of Music', 'year': '2012'},
]
```



渲染主页模板  

```python
from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/parmas')
def index_parmas():
    return render_template('index.html', name=name, age=age)
```



### 3.3 传值和接收

```python
from flask import Flask, render_template
app = Flask(__name__)

@app.route('/parmas')
def index_parmas():
  	name = [1,2,3]
    age = 18
    dict = { year:1988, month: 6}
    return render_template('index.html', name=name, age=age)
```



```jinja2
<h1> {{ name[0] }} <h1>
<h1> {{ age }} <h1>
<h1> {{ dict.year }} <h1>  
<h1> {{ dict.["month"] }} <h1>  # 注意不加引号会把month解释为变量 
```



### 3.4 系统过滤器

系统字符串过滤器

```jinja2
<h1> {{ "HELLO" | lower }} <h1>  # 把值转化成小写
<h1> {{ "HELLO" | title }} <h1>  # 每个单词首字母都大写
<h1> {{ "HELLO" | upper }} <h1>  # 每个单词都大写
<h1> {{ "HELLO" | reverse }} <h1>  # 反转

<h1> {{ "HELLO" | upper | reverse }} <h1>  # 链式调用
```



系统列表过滤器

```jinja2
<h1> {{ [1,2,3] | first }} <h1>  # 取第一个元素
<h1> {{ [1,2,3] | last }} <h1>  # 取最后一个元素
<h1> {{ [1,2,3] | length }} <h1>  # 获取列表长度
<h1> {{ [1,2,3] | sum }} <h1>  # 求和
<h1> {{ [1,2,3] | sort }} <h1>  # 升序排序
```



### 3.5 自定义过滤器

main.py

```python
from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

# 1. 创建求偶数和逻辑的函数 不使用注解方式
def get_evensum(list):
    sum = 0
    for i in list:
      if i % 2 == 0 :
        sum += i
    return sum
  
# 把求偶数和函数关联到过滤器evensum
app.add_template_filter(get_evensum,"evensum")  


# 2. 创建反转列表的函数  使用注解直接创建
@app.add_template_filter("lreverse")
def list_reverse(list):
   list.reverse()
    return list
```



templates/index.html

```jinja2
<h2> {{ [1,2,3,4] | evensum }} <h2>  # 结果为6
<h2> {{ [6,2,5,3,8] | sort | lreverse }} <h2>  # 结果为 [8,6,5,3,2]
```



### 3.6 宏

```jinja2
{# 定义宏 #}
{% macro mymacro(name,password) %}
	用户名: <input type="text" value="{{name}}"/><br>
	密码: <input type="password" value="{{password}}"/><br>
{% endmacro %}

{# 调用当前文件内的宏 #}
{{ mymacro("zangsan","123456") }}

{# 调用其他文件里的宏 #}
{% import 'xxx.html' as other  %}
{{ other.mydiv() }}

```



xxx.html

```jinja2
{% macro mydiv() %}
	<div>我是另一个文件中的宏</div>
{% endmacro %}

```





### 3.7 继承





### 3.8 包含





### 3.9 模板特有变量

app.config

request

g

url_for()

get_flashed_messages()





### 3.10 csrf 跨站请求伪造

csrf攻击



csrf project

pip install flask-wtf







## 第4章 静态文件

### 4.1 **添加图片**  

templates/index.html：添加图片

```py
<h2>
    <img alt="Avatar" src="{{ url_for('static', filename='images/avatar.png') }}">
    {{ name }}'s Watchlist
</h2>
...
<img alt="Walking Totoro" src="{{ url_for('static', filename='images/totoro.gif') }}">
```

---



### 4.2 **添加css**  

static/style.css：定义页面样式
```py
/* 页面整体 */
body {
    margin: auto;
    max-width: 580px;
    font-size: 14px;
    font-family: Helvetica, Arial, sans-serif;
}
```

templates/index.html：引入 CSS 文件
```py
<head>
    ...
    <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}" type="text/css">
</head>
```





## 第5章 数据库

### 5.1 ORM 对象关系映射模型

不需要编写sql语句

不关注使用的是哪种关系数据库

会有时间上的损耗



### 5.2 **安装数据库模块**

**安装Flask - SQLAlchemy**  

```shell
pip3 install flask-sqlalchemy
pip3 install pymysql 
```



**使用数据库模块**

```python
from flask import Flask
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# app入口
app = Flask(__name__)

# 数据库连接
engine = create_engine
('mysql+pymysql://root:wangle2018@127.0.0.1:3306/studyflask', echo=True)
session_maker = sessionmaker(bind=engine)
session = session_maker()
Base = declarative_base()

# 数据库模型
class Student(Base):
    __tablename__ = 'student'
    id = Column('id', Integer, primary_key=True)
    name = Column('name', String(32), )
		
    # 重写打印方法
    def __repr__(self):
        return '<Student(id:%s, name:%s)>' % (self.id, self.name)



# 查询所有学生
@app.route('/')
def hello():
    # 若存在STUDENT表则不做，不存在则创建。
    Base.metadata.create_all(engine)
    # 查询所有student学生
    queryObject = session.query(Student).order_by(Student.id.desc())
    for ins in queryObject:
        print(ins.id, ins.name)
    return "ok"
  
  
# 添加一条记录
@app.route('/insert')
def insert():
    stu1 = Student(id=200, name="zhangsan")
    # 新增一个学生
    session.add(stu1)
    session.commit()
    return "ok"


# 入口函数
if __name__ == "__main__":
    app.run()

```



### 5.3 **创建模型**  

```python
# 数据库模型
class Student(Base):
    __tablename__ = 'student'
    id = Column('id', Integer, primary_key=True)
    name = Column('name', String(32), )
		
    # 重写打印方法
    def __repr__(self):
        return '<Student(id:%s, name:%s)>' % (self.id, self.name)

```



### 5.4 增删改

```python
# 添加单个对象
session.add(obj)  

# 添加多个对象
session.add_all([obj1,obj2])

# 删除单个对象
session.delete(obj)

# 提交会话
session.commit()

# 回滚
session.rollback()

# 移除会话
session.remove()
```







### 5.5 基本查询

完整代码

```python
#  / 路由 查询所有学生
@app.route('/')
def hello():
    # 若存在STUDENT表则不做，不存在则创建。
    Base.metadata.create_all(engine)
    # 查询所有student学生
    queryObject = session.query(Student).order_by(Student.id.desc())
    for ins in queryObject:
        print(ins.id, ins.name)
    return queryObject
```



常用查询公式

```python
# 查询所有用户数据
session.query(Student).all()

# 查询10条用户数据
session.query(Student).limit(10).all()

# 查询有多少个用户
session.query(Student).count()

# 查询第1个用户
session.query(Student).first()

# 查询id为4的用户[3种方式]
session.query(Student).get(4)
session.query(Student).filter(Student.id==4).first()

# 查询名字结尾字符为g的所有数据[开始/包含]
session.query(Student).filter(Student.name.endswith('g')).all()
session.query(Student).filter(Student.name.startswith('g')).all()
session.query(Student).filter(Student.name.contains('g')).all()

# 查询名字不等于wang的所有数据
session.query(Student).filter(User.name!='wang').all()

# 查询名字和邮箱都以i开头的所有数据[2种方法]
session.query(Student).filter(Student.name.startswith('g'),
		Student.email.startswith('g')).all()
session.query(Student).filter(and_(Student.name.startswith('g'),
		Student.email.startswith('g'))).all()

# 查询 password 是123456或者 email以 itheima.com结尾的所有数据
session.query(Student).filter(or_(Student.password =='123456',		Student.email.endswith('itheima.com'))).all()

# 查询id为[1,3,5,7,9]的用户列表
session.query(Student).filter(Student.id.in_([1,3,5,7,9])).all()

# 查询name为liu的角色数据
student = session.query(Student).filter(Student.name == 'liu').first()
session.query(Role).filter(Role.id == user.role_id).first()

# 查询所有用户数据，并以邮箱排序
session.query(Student).order_by(Student.email).all()
session.query(Student).order_by(Student.email.desc()).all()

# 每页3个，查询第2页的数据
paginate = session.query(Student)
		.paginate(2,3,False) # 2代表查询第二页的内容, 3代表每页有3个数据

paginate.pages # 输出总页数
paginate.page # 输在当前在第几页
paginate.items # 输出当前页的所有数据

```





### 5.6 关系查询

作用 : 解决两表联查需要写很多过滤器的问题

需求 : 查询所有角色为admin的所有学生

```python
# 1.先在Role表中定义虚拟键
users = relationship("Student")

# 2.查询admin角色
role = Role.query.get(1)  # 1对象的admin

# 3.获取列表
user_list = role.users
```





### 5.7 反向查询

作用 : 解决两表联查需要写很多过滤器的问题

需求 : 知道一个学生的情况下, 查询到他的角色

```python
# 1.先在Role表中定义虚拟键 加上backref属性
users = relationship("Student", backref="role")

# 2.查询admin角色
user = Student.query.get(1)

# 3.获取列表
role_list = user.role
```





### 5.8 懒查询

**作用** : 解决关系查询和反向查询带来的效率问题



**子查询(subquery)** : 查询出了一方, 就会自动将关联的一方查询出来(默认)

**动态查询(dynamic)** : 只有用到了才去查询

```python
# 在Role表中定义虚拟键 加上lazy属性 不加默认为subquery模式
users = relationship("Student", backref="role",lazy="dynamic")

```







### 5.9 接入redis数据库

启动 redis

redis-server /usr/local/redis/redis.conf



安装缓存模块

pip3 install flask_cache



开启配置

```python
import Flask from flask 
import Cache from flask_cache 
cache = Cache()

config = {
  'CACHE_TYPE': 'redis',
  'CACHE_REDIS_HOST': '127.0.0.1',
  'CACHE_REDIS_PORT': 6379,
  'CACHE_REDIS_DB': '',
  'CACHE_REDIS_PASSWORD': ''
}

app = Flask(__name__)
app.config.from_object(config)
cache.init_app(app)

@app.route('/')
@cache.cached(timeout=60*2)
def index():
  name = 'mink'
  return name

if __name__ == '__main__':
  app.run()
```





## 第6章 权限框架

### 6.1 原生的登录注册

**1. 典型的表单**  

```html
<p>{{ movies|length }} Titles</p>
<form method="post">
    Name <input type="text" name="title" autocomplete="off" required>
    Year <input type="text" name="year" autocomplete="off" required>
    <input class="btn" type="submit" name="submit" value="Add">
</form>
```



**2. 处理表单数据**  

```python
from flask import request, url_for, redirect, flash

# ...

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':  # 判断是否是 POST 请求
        # 获取表单数据
        title = request.form.get('title')  # 传入表单对应输入字段的 name 值
        year = request.form.get('year')
        # 验证数据
        if not title or not year or len(year) > 4 or len(title) > 60:
            flash('Invalid input.')  # 显示错误提示
            return redirect(url_for('index'))  # 重定向回主页
        # 保存表单数据到数据库
        movie = Movie(title=title, year=year)  # 创建记录
        db.session.add(movie)  # 添加到数据库会话
        db.session.commit()  # 提交数据库会话
        flash('Item created.')  # 显示成功创建的提示
        return redirect(url_for('index'))  # 重定向回主页

    movies = Movie.query.all()
    return render_template('index.html', movies=movies)
```



**3. 用户认证模块**  

```shell
$ pip install flask-login
```



**4. 初始化 Flask-L**ogin

```python
# app.py
from flask_login import LoginManager

login_manager = LoginManager(app)  # 实例化扩展类

@login_manager.user_loader
def load_user(user_id):  # 创建用户加载回调函数，接受用户 ID 作为参数
    user = User.query.get(int(user_id))  # 用 ID 作为 User 模型的主键查询对应的用户
    return user  # 返回用户对象
```



存储用户的 User 模型类继承 UserMixin 类

```python
from flask_login import UserMixin

class User(db.Model, UserMixin):
    # ...
```



app.py：用户登录

```python
from flask_login import login_user

# ...

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        if not username or not password:
            flash('Invalid input.')
            return redirect(url_for('login'))

        user = User.query.first()
        # 验证用户名和密码是否一致
        if username == user.username and user.validate_password(password):
            login_user(user)  # 登入用户
            flash('Login success.')
            return redirect(url_for('index'))  # 重定向到主页

        flash('Invalid username or password.')  # 如果验证失败，显示错误消息
        return redirect(url_for('login'))  # 重定向回登录页面

    return render_template('login.html')
```



templates/login.html：登录页面

```python
{% extends 'base.html' %}

{% block content %}
<h3>Login</h3>
<form method="post">
    Username<br>
    <input type="text" name="username" required><br><br>
    Password<br>
    <!-- 密码输入框的 type 属性使用 password，会将输入值显示为圆点 -->
    <input type="password" name="password" required><br><br>
    <input class="btn" type="submit" name="submit" value="Submit">
</form>
{% endblock %}
```



用户登出

```python
from flask_login import login_required, logout_user

# ...

@app.route('/logout')
@login_required  # 用于视图保护，后面会详细介绍
def logout():
    logout_user()  # 登出用户
    flash('Goodbye.')
    return redirect(url_for('index'))  # 重定向回首页
```



认证保护

```python
@app.route('/movie/delete/<int:movie_id>', methods=['POST'])
@login_required  # 登录保护
def delete(movie_id):
    movie = Movie.query.get_or_404(movie_id)
    db.session.delete(movie)
    db.session.commit()
    flash('Item deleted.')
    return redirect(url_for('index'))
```

```python
login_manager.login_view = 'login'
```

```python
@app.route('/movie/edit/<int:movie_id>', methods=['GET', 'POST'])
@login_required
def edit(movie_id):
    # ...
```

```python
from flask_login import login_required, current_user

# ...

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        if not current_user.is_authenticated:  # 如果当前用户未认证
            return redirect(url_for('index'))  # 重定向到主页
        # ...
```

app.py：支持设置用户名字
```python
from flask_login import login_required, current_user

# ...

@app.route('/settings', methods=['GET', 'POST'])
@login_required
def settings():
    if request.method == 'POST':
        name = request.form['name']

        if not name or len(name) > 20:
            flash('Invalid input.')
            return redirect(url_for('settings'))

        current_user.name = name
        # current_user 会返回当前登录用户的数据库记录对象
        # 等同于下面的用法
        # user = User.query.first()
        # user.name = name
        db.session.commit()
        flash('Settings updated.')
        return redirect(url_for('index'))

    return render_template('settings.html')
```

templates/settings.html：设置页面模板
```python
{% extends 'base.html' %}

{% block content %}
<h3>Settings</h3>
<form method="post">
    Your Name <input type="text" name="name" autocomplete="off" required value="{{ current_user.name }}">
    <input class="btn" type="submit" name="submit" value="Save">
</form>
{% endblock %}
```

模板内容保护
index.html

```python
<!-- 在模板中可以直接使用 current_user 变量 -->
{% if current_user.is_authenticated %}
<form method="post">
    Name <input type="text" name="title" autocomplete="off" required>
    Year <input type="text" name="year" autocomplete="off" required>
    <input class="btn" type="submit" name="submit" value="Add">
</form>
{% endif %}
```
```python
{% if current_user.is_authenticated %}
    <a class="btn" href="{{ url_for('edit', movie_id=movie.id) }}">Edit</a>
    <form class="inline-form" method="post" action="{{ url_for('.delete', movie_id=movie.id) }}">
        <input class="btn" type="submit" name="delete" value="Delete" onclick="return confirm('Are you sure?')">
    </form>
{% endif %}
```
```python
{% if current_user.is_authenticated %}
    <li><a href="{{ url_for('settings') }}">Settings</a></li>
    <li><a href="{{ url_for('logout') }}">Logout</a></li>
{% else %}
    <li><a href="{{ url_for('login') }}">Login</a></li>
{% endif %}
```



### 6.2 flask-security







## 第7章 蓝图和单元测试

### 7.1 蓝图独立使用

作用 : 方便模块化开发

demo.py

```python
# 创建蓝图对象
import Blueprint from flask
# blue才是真正的变量,myblue字段只用做打印区分,无意义
blue = Blueprint("myblue",__name__)  

#使用蓝图装饰视图函数
@blue.route('/')
def index():
  return "hello"
```



main.py

```python
# 将蓝图注册到app中
import blue from demo.py
app.register_blueprint(blue)
```





### 7.2 蓝图 包的使用

**作用:** 每个蓝图都可以有自己的模板文件, 静态文件, 配置文件等

**为什么使用包 而不是是文件夹?** 因为包有初始化文件 `__init__.py`



`user/__init__.py`

```python
import Blueprint from flask

# __name__ 固定参数 必须这么写
# static_folder 该蓝图的静态文件夹位置  
# template_folder 该蓝图的模板文件夹位置
# url_prefix 与根目录的静态文件区分

user_blue = Blueprint("user",__name__,
                   static_folder="static",
                      url_prefix="/user",
                      template_folder="templates")  

# 导入的顺序必须是这样, 不然导致循环导包 
import views from user
```



`user/views.py`

```python
import user_blue from user
@user_blue.route('/user')
def user():
  return "hello"
```



`main.py`

```python
import Flask from flask
import user_blue from user
app=Flask(__name__)
app.register_blueprint(user_blue)
if__name__ == "__main__":
  app.run()
```





### 7.3 循环导包

**概念 :** 两个文件之间相互引用, 并且导入的顺序不对, 导致程序循环导包

![image-20220411114815869](asset/image-20220411114815869-9648899.png)





### 7.4 断言

**定义** : 判断程序执行到某个地方, 能否达到预期效果

**应用** : 单元测试 , 开发框架



```python
def dis_num(num1,num2):
  assert isinstance(nun1,int), "num1必须为整数"  
  return num1/num2

# num1为不期待的结果,会抛出异常,日志信息会很清楚
print(dis_num("10",5))
```





### 7.5 单元测试

```python
def sayhello(to=None):
    if to:
        return 'Hello, %s!' % to
    return 'Hello!'
```

单元测试
```python
import unittest
from hello import sayhello

class SayHelloTestCase(unittest.TestCase):  # 测试用例
    def setUp(self):  # 测试固件
        pass

    def tearDown(self):  # 测试固件
        pass

    def test_sayhello(self):  # 第1个测试,方法必须以test开头
        rv = sayhello()
        self.assertEqual(rv, 'Hello!')

    def test_sayhello_to_somebody(self):  # 第 2 个测试
        rv = sayhello(to='Grey')
        self.assertEqual(rv, 'Hello, Grey!')

if __name__ == '__main__':
    unittest.main()
```





## 第8章 部署上线

生成依赖列表

```shell
$ pip freeze > requirements.txt
```



安装依赖列表

```sh
$ pip install -r requirements.txt
```



使用 manger 管理后部署

```shell
python manager.py runserver --host 0.0.0.0 --port 80
```







## 第9章 此笔记相关信息

### 参考视频连接

 https://www.bilibili.com/video/BV1Lf4y117PS?p=77&spm_id_from=pageDriver



### 待完成项目

6.2 shiro+jwt

