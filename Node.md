# 内容回顾

## HTTP协议的增强(以文件上传)
	目标:
		1、理解普通的POST 和 文件上传的POST的区别
			请求头
				Content-Type的值不一样
			
			请求体
			
		2、学会multiparty date-format第三方包使用
			看文档，百度
			
			require('xxxx')
			
		3、对fs和path进一步巩固
		
## 自定义模块及上传到npmjs.com
	目标:
		1、要学会遵循CommonJS规范导出模块给别人用
			module.exports = 你想导出的内容【函数/字符串/对象】
			
			如果想导出多个，一定要接对象
			
			导出对象的写法
				module.exports = {}
				
				module.exports.属性 = 值
				
				exports.属性 = 值
		
		2、把写好的模块上传到npmjs.com【所有操作都要在项目根目录】
			2.1、把package.json生成并且配置正确
				npm init -y
				
			2.2、使用npm adduser指令连接到npmjs.com
			
			2.3、使用npm publish【之前必须验证邮箱】
			
			2.4、如果升级发布，记得把版本号递增
			
## 服务端渲染
	目标:
		1、理解服务端渲染的时候，后台做了哪些事情
		
		2、从file://转到http协议
			所有的代码将来都要发布服务器上面
			浏览器需要展现什么内容，都得发送http请求，找服务器要
			
		3、学会xtemplate 和 xtpl的使用
			作用：简化我们动态生成网页的代码
			
			xtemplate:在html中写模版代码
			
			xtpl:在node中写代码，使用真实的数据，替换页面中的模版，然后生成一个完整的，已经渲染好的完整网页

--------------------

# 今日课程目标

## 完成音乐播放器的案例
	目标:
		1、对服务端渲染进一步加深理解
		
		2、进一步加深对xtemplate 和 xtpl的使用的理解
		
		3、进一步加深对HTTP协议的理解
		
	步骤:【目标拆解】
		1、给用户呈现出音乐播放列表
			1.1、先写好静态页面
			1.2、开启Node服务器
			1.3、读取数据，渲染完整的页面【xtpl & xtemplate】
		
		2、实现点击播放，播放出音乐
			2.1、现在网页中要有一个audio标签
			
			2.2、当我们点击播放按钮的时候，更改aiduo的src，发送新的请求给后台
			
			2.3、服务器接收到请求之后，就去服务器的硬盘的文件夹下面找到对应的音频文件，返回给浏览器
			
		注意：如何我们的url中有中文或是特殊字符，浏览器在发送请求的时候，就会给我们自动编码
			解决方式:url中避免使用中文或是特殊字符
			
			后台url解码:node中就是使用 querystring.unescape
			
--------------------

## Express
	作用：简化我们Node开发，就有点类似于jQuery替代原生Dom的感觉
	
	原生http模块开启Web服务不太好的地方:
		1、所有的请求处理，都是写在一个处理函数中，坏处是代码会越写越多，并且不方便多人协作开发
		
		2、对静态资源的处理比较繁琐
		
		3、获取通过GET&POST传递过来的请求参数的时候，很麻烦
		
	Express:
		网址:http://www.expressjs.com.cn/
		基于 Node.js 平台，快速、开放、极简的 web 开发框架。
	
	目标:
		1、对Express如何使用要了解
		
		2、如何开启Web服务
		
		3、如何进行GET & POST请求的监听【以登录为例】
			GET req.query
			
			POST 需要先安装 body-parser 中间件，然后通过
			req.body就可以直接获取
		
		4、对Express中路由理解
			1、创建一个模块(manRouter.js)，在里面写代码
				1.1、创建路由
			
				1.2、处理请求
				
				1.3、导出路由
				
			2、在入口文件中(app.js)，在里面写代码
				2.1、导入路由模块
				
				2.2、集成路由中间件
		
		5、对静态资源的处理理解
			5.1、在node的入口文件中，加一句代码
				app.use(express.static(path.join(__dirname,'静态资源根目录')))
				
			5.2、在我们list.html中，通过link，src发送请求
			找服务器要静态资源的时候，路径必须写成服务器硬盘下面
			根目录下面对应的路径
		
		6、完成音乐播放器的改造

--------------------

## MongoDB
	为什么要有数据库
		海量存取数据方便
		
	数据库
		分类:
			客户端(前端，iOS，Android)
				sqlite
			
			
			服务器端
				关系型数据库
					mysql 10万以下 几百/小时
					
					sqlserver 20万以上50万以上 几千/小时
					
					oracle(收购了mysql，收购了sun)
						60万以上 几万/小时
						
						google 83亿美金
						乔布斯 
				
				非关系（对象型）数据库
					MongoDB
					Redis
					Memcached

	目标:
		1、理解MongoDB
		
		2、如何安装及启动MongoDB服务端
			2.1、安装Mongodb的服务端，下一步，下一步
			
			2.2、设置环境变量
				C:\Program Files\MongoDB\Server\3.4\bin
				
			2.3、启动MongoDB服务端
				在C盘根目录，创建一个mongodb_datas的空文件夹
				
				启动MongoDB方式1:
					直接写
					
				启动MongoDB方式2:
					批处理
					
				启动MongoDB方式3：
					做成开机启动服务
					
					在c盘根目录下的mongodb_datas中，创建一个server_log，然后在它下面创建一个mongodb.log
		
		3、使用RoboMongo操作MongoDB中的数据
			Mongo      mysql
			集合			表
			文档			记录
			
			MongoDB底层存储数据，就是靠BSON
		
		4、Node中如何操作MongoDB【作业】

---------------------