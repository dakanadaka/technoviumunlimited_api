const express = require('express')
const router = express.Router()
const gameController = require('../controller/gameController')

router.get('/api/games',        gameController.listGames)
router.post('/api/games',       gameController.insertSingleGame)
router.patch('/api/games/:id',  gameController.updateSingleGame)
router.delete('/api/games/:id', gameController.deleteSingleGame)

module.exports = router