## web 服务 如何处理一个请求

url-->网络传输-->dns解析-->目标服务器
  1. 如何响应这个请求--> 路由//规则

1. 请求的方法区分

1. get-->响应
2. post-->请求

## 通过 uri --> 路径
www.baidu.com/a/b/c.html

## 1.需要定义以恶搞 api/路由 需要满足客户端无论使用什么请求方式 （get/post/delete/path)... 都可以响应

1. app.all
  app.all('/demo', (req, res)=>{})

## 2. 无论客户端使用 任何的 uri， 服务端否可以响应--->日志

2. app.use -->使用中间件

## 3.如何做路由的拆分
### member
### sku
### order
express.Router


node-application -- ORM(sequlize) --> 驱动（mysql） --> mysql db
