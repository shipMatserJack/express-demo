const express = require('express');

const router = express.Router();

router.get('/list', (req, res) => {
  res.json({
    list:[
      {
        id: 002,
        price: 100,
        name: '胸罩'
      }
    ]
  })
})

module.exports = router;