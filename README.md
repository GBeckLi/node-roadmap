# node-roadmap
node 学习记录

#### 1：初始化yarn

~~~shell
$ yarn init
~~~



#### 2：添加入口文件index.js，添加项目代码和资源目录

~~~shell
$ > index.js
$ mkdir src assets
~~~



#### 3.添加jshint检查

yarn

~~~shell
$ yarn add jshint -D
~~~

npm

~~~shell
$ npm install jshint -s -d
~~~

添加`.jshintrc`和`.jshintignore`文件

~~~shell
$ >.jshintrc .jshintignore 
~~~

然后在.jshintrc中添加配置项，可以参照[文档](<https://github.com/jshint/node-jshint/blob/master/.jshintrc>)，在.jshintignore中添加不需要检查的文件路径，



至此，全局设置基本结束。接下来可以根据以下目录跳转到不同页面，查看示例。



#### 目录

