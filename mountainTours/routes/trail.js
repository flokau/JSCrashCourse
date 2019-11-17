const express = require('express')
const router = express.Router()

const Service = require('../services/trail-service')

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
  const start = await Service.find(req.body.startHut)
  const end = await Service.find(req.body.endHut)
  item.initTrail(start, end)
  res.send(item)
})

router.delete('/:id', async (req, res) => {
  const item = await Service.del(req.params.id)
  res.send(item)
})

module.exports = router
