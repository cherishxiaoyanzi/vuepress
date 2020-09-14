(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{315:function(t,a,s){"use strict";s.r(a);var n=s(38),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"博客支持功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#博客支持功能"}},[t._v("¶")]),t._v(" 博客支持功能")]),t._v(" "),s("ul",[s("li",[t._v("[x] 文章分类功能")]),t._v(" "),s("li",[t._v("[x] 打赏模块")]),t._v(" "),s("li",[t._v("[x] 按年归档")]),t._v(" "),s("li",[t._v("[x] 文章置顶")]),t._v(" "),s("li",[t._v("[x] 文章创建时间支持")]),t._v(" "),s("li",[t._v("[x] 文章阅读量统计与评论")]),t._v(" "),s("li",[t._v("[x] 更好的移动端阅读效果")]),t._v(" "),s("li",[t._v("[x] RSS订阅")]),t._v(" "),s("li",[t._v("[x] 文章设置密码")])]),t._v(" "),s("h2",{attrs:{id:"开发环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发环境"}},[t._v("¶")]),t._v(" 开发环境")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress 1.x"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Node.js v10.8.0")])]),t._v(" "),s("h2",{attrs:{id:"本博客的开源代码地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本博客的开源代码地址"}},[t._v("¶")]),t._v(" 本博客的开源代码地址")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/ChangMM/blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[t._v("¶")]),t._v(" 开始")]),t._v(" "),s("p",[t._v("具体的开发细节官网上已经说得很详细了，而且代码已经开源，所以这里不在说具体的细节，主要列举开发过程中遇到的一些问题。")]),t._v(" "),s("h2",{attrs:{id:"如何添加分类的路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何添加分类的路由"}},[t._v("¶")]),t._v(" 如何添加分类的路由")]),t._v(" "),s("p",[t._v("只需要在 "),s("code",[t._v("enhanceApp.js")]),t._v(" 中获取 "),s("code",[t._v("Vue")]),t._v(" 以及 "),s("code",[t._v("router")]),t._v(" 这两个对象，然后像在开发Vue项目中给应用添加正常的路由即可。")]),t._v(" "),s("p",[t._v("代码如下：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("CategoryLayout")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@theme/layouts/CategoryLayout'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CATEGORYPATH")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/category/'")]),t._v("\t\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" router "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" routes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\t\n  routes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\n    path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CATEGORYPATH")]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(":category?")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\n    component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CategoryLayout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\n    meta"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" tag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\t\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\n  router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addRoutes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("routes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\t\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" install "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\t\n")])])]),s("h2",{attrs:{id:"文章创建时间支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文章创建时间支持"}},[t._v("¶")]),t._v(" 文章创建时间支持")]),t._v(" "),s("p",[s("code",[t._v("VuePress")]),t._v(" 默认是没有文章的创建时间这个字段的，其实实现这个功能也比较简单，就是通过 "),s("code",[t._v("Vuepress")]),t._v(" 提供的 "),s("code",[t._v("Plugin")]),t._v(" 的功能。")]),t._v(" "),s("p",[t._v("需要知道的是， vuepress 中的 plugin 是运行在 node 的环境中的。所以只需要，利用 node 提供的 "),s("code",[t._v("fs.statSync")]),t._v(" 这个api即可。")]),t._v(" "),s("p",[t._v("具体代码如下：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("extendPageData")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("$page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\n    $page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("publishDate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFilePublishDate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_filePath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\t\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFilePublishDate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("filePath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" publishDate\t\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\n    publishDate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("statSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filePath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("birthtime\t\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* do not handle for now */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\t\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" publishDate\t\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\t\n")])])]),s("p",[t._v("只需要在 vuepress 的 "),s("code",[t._v("config.js")]),t._v(" 中加载这个plugin即可。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v(" ···\t\n plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\t\n   "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./plugins/page-publish-date.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\n ···\t\n")])])]),s("h2",{attrs:{id:"文章阅读量统计与评论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文章阅读量统计与评论"}},[t._v("¶")]),t._v(" 文章阅读量统计与评论")]),t._v(" "),s("p",[t._v("文章的阅读量与统计功能其用的是 "),s("code",[t._v("Valine")]),t._v(" 这个库。好像只有这个库可以同时有这两个功能，所以就选了这个。")]),t._v(" "),s("p",[t._v("实现起来也是比较简单的，但是中间遇到了两个问题。")]),t._v(" "),s("h3",{attrs:{id:"_1-vuepress-无法编译成功"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-vuepress-无法编译成功"}},[t._v("¶")]),t._v(" 1. vuepress 无法编译成功")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code")])]),s("p",[t._v("如果按照下面的方式初始化评论组件的话，在本地dev模式是可以通过的，但是 "),s("code",[t._v("npm run build")]),t._v(" 的时候会提示 "),s("code",[t._v("is not undefied")]),t._v(" 的错误，即使在评论组件加上 VuePress 提供的 "),s("code",[t._v("ClientOnly")]),t._v(" 的标识符也会出现这个问题。")]),t._v(" "),s("p",[t._v("最后的解决办法是，以 "),s("code",[t._v("script")]),t._v(" 标签的方式引入 leancloud-storage 和 valine 两个库。并在评论组件中轮询检查这两个库是否加载完成，在加载完成之后在初始化评论组件。\t\n代码如下：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code")])]),s("h3",{attrs:{id:"_2-按照教程配置好后-发现文章切换时-评论内容并没有切换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-按照教程配置好后-发现文章切换时-评论内容并没有切换"}},[t._v("¶")]),t._v(" 2.按照教程配置好后，发现文章切换时，评论内容并没有切换")]),t._v(" "),s("p",[t._v("这个主要是由于 "),s("code",[t._v("Valine")]),t._v(" 这个库在初始化全局对象时，如果没有传入path这个属性，其内部会缓存当前页面的 path。解决的办法也很简单，只要在传 path 的时候指定的值即可，也即👆上面代码中的 "),s("code",[t._v("window.location.pathname")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"一些其他问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一些其他问题"}},[t._v("¶")]),t._v(" 一些其他问题")]),t._v(" "),s("p",[t._v("其实在开发过程中还是有一些其他的问题，比如 分类的路由通过首页页面点进去可以直接访问，但是如果直接在浏览器的地址栏输入地址的话 Nginx 会索引不到相应的文件 提示 404 的错误。")]),t._v(" "),s("p",[t._v("这个问题的话，只需要在 "),s("code",[t._v("nginx")]),t._v(" 的配置中添加下面👇的配置即可")]),t._v(" "),s("div",{staticClass:"language-Nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try_files")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("404.")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\t\n")])])]),s("h2",{attrs:{id:"最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("¶")]),t._v(" 最后")]),t._v(" "),s("p",[t._v("如果还有其他问题的话，可以加我微信好友，请备注【vuepress】不然不会通过的。")])])}),[],!1,null,null,null);a.default=e.exports}}]);