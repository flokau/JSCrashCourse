const express = require('express')
const router = express.Router()

const Service = require('../services/mountaineer-service')

router.get('/all', async (req, res) => {
  const items = await Service.findAll()
  res.render('list', { items: items })
})

router.get('/:id', async (req, res) => {
  const item = await Service.find(req.params.id)
  res.render('data', { data: item })
})

router.post('/', async (req, res) => {
  const item = await Service.add(req.body)
  res.send(item)
})

router.delete('/:id', async (req, res) => {
  const item = await Service.del(req.params.id)
  res.send(item)
})

module.exports = router
