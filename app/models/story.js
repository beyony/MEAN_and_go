var mongoose = require("mongoose");
var Schema = mongoose.Schema;

module.exports = mongoose.model('Story', new Schema({
    author: {type: Schema.Types.ObjectId, ref: 'Author'},
    title: String
}));