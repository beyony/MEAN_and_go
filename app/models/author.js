var mongoose = require("mongoose");
var Schema = mongoose.Schema;

module.exports = mongoose.model('Author', new Schema({
    name: String,
    story: {type: Schema.Types.ObjectId, ref: 'Story'}
}));