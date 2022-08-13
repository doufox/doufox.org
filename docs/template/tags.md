# 模板标签使用说明

#### 基本变量标签

**{$site_title}**

站点标题，`<title>站点标题</title>`

为了制作模板方便系统封装了标题 ，如果您不满意系统封装的标题组合形式，完全可以自己填写标签而不采用上面的标签。

**{$site_keywords}**

站点关键字，`<meta name="keywords" content="{$site_keywords}" />`

**{$site_description}**

站点描述，`<meta name="description" content="{$site_description}" />`

> 上面三个标签常用于页头mate，为了制作模板方便 系统封装了标题 ，如果您不满意系统封装的标题组合形式，完全可以自己填写标签 而不采用上面的标签。

**{$site_url}**

网站的网址，首页地址

**{$site_name}**

站点名称，与站点标题不同，为固定值，可以用于页面展示网站名称

**{$site_template}**

站点当前模板目录，网站当前应用模板目录地址， 如当前应用模板目录为 default 则为标签解析为 /template/default/，常用于保存模板 css、js、图片文件路径。如果您不想您的模板目录被暴露，就建议不用此标签，不过为了方便模板的管理，此标签还是很有用。

#### 加载模板标签

加载模板文件，将对应的模板文件内容渲染在调用标签的位置

示例：

```
{template header.html} // 加载当前模板目录下 header.html 模板文件
{template member/index.html} // 加载当前模板目录下的 member 目录里的 index.html 模板文件
```

#### block 区块

调用指定 ID 的区块，多用于焦点图、描述等随时需要替换的内容

```
{block 1}
```

**if - 条件判断**



**list - 列表**

只需要在 list 标签内添加参数 optional=1 或者 optional=true，就可以在 list 标签内调用自定义字段

在内容模型添加的自定义字段如 abc，可能会调用的地方如下：
加上参数 optional 标志将会对自定义字段进行取值存储，如不显示自定义字段就不要添加

```
{list catid=1 num=10 optional=true}
　　{$vdata[abc]}
{/list}
```
