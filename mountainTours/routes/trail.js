const express = require('express')
const router = express.Router()

const TrailService = require('../services/trail-service')
const HutService = require('../services/hut-service')

router.get('/all', async (req, res) => {
  const items = await TrailService.findAll()
  res.render('list', { items: items })
})

router.get('/:id', async (req, res) => {
  const item = await TrailService.find(req.params.id)
  res.render('data', { data: item })
})

router.post('/', async (req, res) => {
  const item = await TrailService.add(req.body)
  await TrailService.connectTrail(item)
  res.send(item)
})

router.delete('/:id', async (req, res) => {
  const item = await TrailService.del(req.params.id)
  res.send(item)
})

module.exports = router
