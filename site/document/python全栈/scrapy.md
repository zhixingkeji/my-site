mac和linux安装

pip install scrapy



创建一个小点

scrapy startproject firstproject



创建爬虫文件 first

cd firstproject   # 保证子目录有spiders文件夹

scrapy genspider first www.xxx.com



执行工程

scrapy crawl first



数据持久化 基于终端

scrapy crawl first -o ./xxx.csv



数据持久化 基于管道



