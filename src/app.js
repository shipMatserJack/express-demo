const express = require('express');
// 是一个express实例
const app = express();
// 引入/注册路由
const memberRouter = require('./member.router');
const skuRouter = require('./sku.router');
app.use('/member', memberRouter);
app.use('/sku', skuRouter);

/**
 * @desc 模型对象（sequliaze集成和使用）
 */
const models = require('../models');
//1.创建用户
app.get('/create', async(req, res) => {
  let { name } = req.query;
  // promise  user-->sequlize对象
  let user = await models.User.create({
    name
  })
  console.log(user);
  res.json({
    message: '服务创建成功',
    user
  })
})
//2.获取所有用户
app.get('/list', async(req, res) => {
  let list  = await models.User.findAll();
  res.json({
    list
  })
})
//3.获取某个用户
app.get('/detail/:id', async(req, res) => {
  let { id } = req.params;
  let user = await models.User.findOne({
    where: {
      id
    }
  })
  res.json({
    user
  })
})


app.listen(3000, () => {
  console.log('服务启动了');
})















function demo_middleware(err, req, res, next) {
  // 1. 异常
  // 2. 处理下业务功能，然后转交控制权--next
  // 3. 响应请求--结束响应-->当作路由处理函数
}

function valid_name_middleware(req, res, next) {
  let { name } = req.query;
  if(!name || !name.length) {
    res.json({
      message: '缺少name参数'
    })
  }else {
    next();
  }
}

app.all('*', valid_name_middleware)

// app.use('/demo', (req, res) => {
//   res.json({
//     name: 'huangjie',
//     method: req.method,
//     uri: req.path
//   })
// })

// app.all('/demo', (req, res) => {
//   res.json({
//     message: 'dmeo',
//     method: req.method
//   })
// })

// app.all('*', (req, res) => {
//   res.json({
//     message: 'dmeo',
//     method: req.method,
//     uri: req.path
//   })
// })

// app.get('/name', (req, res) => {
//   let { age } = req.params;
//   res.json({
//     name: 'huangjie',
//     age: 27
//   })
// })

// app.post('/name', (req, res) => {
//   res.send('post huangjie');
// })

// app.get('/user/byname', (req, res) => {
//   let {name} = req.query
//   res.json({
//     name
//   })
// })

// app.get('/user/byid', (req, res) => {
//   let {id} = req.query
//   res.json({
//     id
//   })
// })

