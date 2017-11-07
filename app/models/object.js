var mongoose = require("mongoose");
var Schema = mongoose.Schema;

module.exports = mongoose.model('Object', new Schema({
    name: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    imageUrl: {
        type: String,
        default: ''
    },
    category: {
        type: Schema.ObjectId,
        ref: 'category'
    }
}));