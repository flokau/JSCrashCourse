const express = require('express')
const router = express.Router()

const HutService = require('../services/hut-service')
const MountainService = require('../services/mountain-service')

router.get('/all', async (req, res) => {
  const items = await HutService.findAll()
  res.render('list', { items: items })
})

router.get('/:id', async (req, res) => {
  const item = await HutService.find(req.params.id)
  res.render('data', { data: item })
})

router.post('/', async (req, res) => {
  const item = await HutService.add(req.body)
  await HutService.addToMountain(item)
  res.send(item)
})

router.delete('/:id', async (req, res) => {
  const item = await HutService.del(req.params.id)
  res.send(item)
})

module.exports = router
