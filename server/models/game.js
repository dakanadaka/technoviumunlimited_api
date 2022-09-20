const mongoose = require('mongoose')

const gamesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required'
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: Array,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    }
})

gamesSchema.index({"$**" : 'text'})


module.exports = mongoose.model('Games', gamesSchema)