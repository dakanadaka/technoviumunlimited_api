require('../models/db')
const Games = require('../models/game')

/**
 * /api/games
 * get all games
 */

exports.listGames = async(req, res) => {
    console.log(res.query);
    let {limit = 10, page = 1, category, q } = req.query

    let query = {}
    
    if(q){
        query = {$text: { $search : q}}
    }
    if(category) query.category = category
    console.log(query)

    const limitRecords = parseInt(limit)
    const skip = (page -1) * limit
    try {
        const games = await Games.find(query).limit(limitRecords).skip(skip)
        res.json(games)
    } catch (error) {
        res.status(400).json({message: error})
    }
}

/**
 * /api/games
 * post insert single game
 */

exports.insertSingleGame = async(req, res) => {
    const newGame = new Games({
        name:           req.body.name,
        description:    req.body.description,
        category:       req.body.caegory,
        thumbnail:      req.body.thumbnail
    })
    
    try {
        await newGame.save()
        res.json(newGame)
    } catch (error) {
        res.status(400).json({message: error})
    }
}


/**
 * /api/games
 * patch  single game
 */

 exports.updateSingleGame = async(req, res) => {
    console.log('updatesingle')
    let paramID = req.params.id
    console.log(paramID)
    let name = req.body.name
    console.log(name)
    try {
        const updateGame = await Games.updateOne({_id: paramID}, {name: name})
        res.json(updateGame)
    } catch (error) {
        res.status(400).json({message: error})
    }
}

/**
 * /api/games
 * delete  single game
 */

 exports.deleteSingleGame = async(req, res) => {
    let paramID = req.params.id
    try {
        const deleteGame = await Games.deleteOne({_id: paramID})
        res.json(deleteGame)
    } catch (error) {
        res.status(400).json({message: error})
    }
}