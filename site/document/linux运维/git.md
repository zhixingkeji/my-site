---
title: git 基础

date: 2021-11-14 09:33:09


---

## 第1章 git 基础

### 1.1**本地项目上传远端**

在磁盘上新建一个空的文件夹，最好是英文名称

输入 `git init`

在 github 新建一个仓库，名称与本地相同。

使用 git add 文件名.后缀 添加到暂存区

如果文件太多，可以使用 git add --all

使用 git commit -m “这里写提交的备注”

使用 git remote add origin git@github.com:zhixingkeji/仓库名称.git 与github关联

使用 git push -u origin master 首次提交

先用 git branch 查看当前的分支，如果不是master则修改

使用 git push origin master 后续提交

使用 git pull origin master 拉取更新

---

### 1.2 **错误排查**

fatal: remote origin already exists.

使用 git remote -v 查看远程源

输入 git remote rm origin 删除关联的origin远程库

可能是没有readme文件

error: failed to push some refs to 'github.com:zhixingkeji/wlfirstblog.top.git

git pull --rebase origin master





### 1.3 从远端拉去储存库到本地

在本地打开一个目录，不需要新建，克隆会自动新建仓库文件夹
在当前目录打开 git bash
输入 git clone git@github.com:你的用户名/你的仓库名.git



### 

### 1.4 git 指令大全

**查看历史**

git log # 查看当前分支的所有成员的提交记录

git reflog # 方便回滚

git log oneline # 一行简略哈希值

git log --pretty=oneline # 一行完整哈希值



**查看状态**

git status           #查看工作区状态



**更改版本**

git reflog # 查看索引值

git reset --hard xxxxxxx # 将指针指向到索引值的版本

git reset --hard HEAD^^^ # 后退三步

git reset --hard HEAD~3 # 后退三步



**创建分支、切换分支、合并分支**

git branch -v        # 查看所有分支

git branch dev       # 创建dev分支

git checkout dev     # 切换分支到 dev

git checkout main    # 切换分支到 main

git merge dev        # 在当前 main分支上，吸收 dev分支

解决冲突，手动删除特殊符号，保存

<<<<<<<某个分支  冲突1 ======= 冲突2 某个分支 >>>>>>>>

如果被合并的分支是dev，则显示dev，如果当前分支是master，则显示HEAD

git add name.txt

git commit -m “ message ”

冲突的文件提交时不能带有文件名



**比较文件差异**

git diff  # 工作区和暂存区比较多个文件

git diff name.text  # 将工作区中的单个文件进行比较

git diff HEAD^ name.text # 和上个版本进行比较



**添加，提交**

git add . # 将更改提交至工作暂存区

git commit -m "    # 将工作区暂存区内容提交到本地仓库

> 1. 第一行
> 2. 第二行"  # 输入另一个双引号可以结束， 在输入另一个双引号之前可以随意换行。



**设置项目级别**

git config --global user.email "替换为你的邮箱" # 设置你在这台电脑的全局邮箱

git config --global user.name "替换为你的昵称" # 设置你在这台电脑的全局姓名



**推拉更新**

git push # 推向远程仓库

git pull # 从远程仓库拉取更新



**克隆**

git clone git@github.com:name/.git #克隆github



**查看帮助**

git help reset  # 查看reset指令的API





## 第2章 github 基础

github是一个基于git的代码托管平台，用户可以建私人仓库和公共仓库。





## 第3章 SSH 基础

在 Linux 系统上 SSH 是非常常用的工具，通过 SSH Client 我们可以连接到运行了 SSH Server 的远程机器上。

连接远程服务器

```sh
ssh user@remote -p port
```



安装 OpenSSH Server

```sh
sudo apt-get install openssh-server
```



生成 ssh key

```sh
ssh-keygen
```



分发后可免密登录

```sh
ssh-copy-id user@remote -p port
```

