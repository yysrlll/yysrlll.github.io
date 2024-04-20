const express = require('express')
const router = express.Router()

router.get('/get', (req, res) => {
  const query = req.query
  console.log(req.query)
  console.log(req.url)
  console.log(req)
  res.send({
    status: 0,
    msg: 'GET 请求成功！', 
    data: query, 
  })
})

router.post('/post', (req, res) => {
  const body = req.body.content;
  res.send({
    status: 0,
    msg: 'POST 请求成功！',
    data: body,
  })
  console.log(req.body)
})

router.delete('/delete', (req, res) => {
  res.send({
    status: 0,
    msg: 'DELETE请求成功',
  })
})
module.exports = router

