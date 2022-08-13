# 伪静态规则配置

系统支持动态、生成静态、伪静态，下面说下伪静态规则。

### 伪静态规则

伪静态指向地址说明

栏目列表指向地址：index.php?catpath=栏目目录 或者 index.php?catid=栏目 ID

栏目分页指向地址：index.php?catpath=栏目目录&page=分页 或者 index.php?catid=栏目 ID&page=分页

内容页面指向地址：`index.php?id=文章id`

内容分页指向地址：`index.php?id=文章id&page=分页`

以下面的地址举例 Apache 和 IIS 伪静态规则配置

栏目列表：`http://www.doufox.com/list_news.html`

栏目分页：`http://www.doufox.com/list_news_1.html`

内容页面：`http://www.doufox.com/show_1.html`

内容分页：`http://www.doufox.com/show_1_1.html`

Apache 修改.htaccess 文件 仅供参考

```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^list_([a-z0-9A-Z]+).html$ index.php?catpath=$1 [L]
RewriteRule ^list_([a-z0-9A-Z]+)_([0-9]+).html$ index.php?catpath=$1&page=$2 [L] 
RewriteRule ^show_([0-9]+).html$ index.php?id=$1 [L] 
RewriteRule ^show_([0-9]+)_([0-9]+).html$ index.php?id=$1&page=$2 [L]
```

IIS 修改 httpd.ini 文件仅供参考

```ini
[ISAPI_Rewrite]
CacheClockRate 3600
RepeatLimit 32
RewriteRule ^(.*)/list_([a-z0-9A-Z]+)\.html$ $1/index.php?catpath=$2 [L]
RewriteRule ^(.*)/list_([a-z0-9A-Z]+)_([0-9]+)\.html$ $1/index.php?catpath=$2&page=$3 [L]
RewriteRule ^(.*)/show_([0-9]+)\.html$ $1/index.php?&id=$2 [L]
RewriteRule ^(.*)/show_([0-9]+)_([0-9]+)\.html$ $1/index.php?id=$2&page=$3 [L]
```

可以参考其他的程序伪静态配置，特别是 discuz 论坛程序的伪静态把指向地址改成对应的即可

## 其他常用规则

强制使用 https 访问

```
redirect to https
RewriteCond %{SERVER_PORT} !^443$
RewriteRule ^.*$ https://%{SERVER_NAME}%{REQUEST_URI} [L,R]
```

或

```
RewriteCond %{SERVER_PORT} !^443$
RewriteRule ^.*$ https://%{SERVER_NAME}%{REQUEST_URI} [L,R=301]
RewriteRule ^(.*)?$ https://%{SERVER_NAME}/$1 [L,R]
```

强制使用 www 开头主机访问

```
# Redirect non-www to www
RewriteCond %{HTTP_HOST} !^www\.(.*)
RewriteRule (.*) https://www.%{HTTP_HOST}/$1 [R=301,L]
```
强制不带 www 开头

```
# Redirect www to non-www
RewriteCond %{HTTP_HOST} ^www\.(.*)
RewriteRule (.*) https://%1/$1 [R=301,L]
```

