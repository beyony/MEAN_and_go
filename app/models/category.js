var mongoose = require("mongoose");
var Schema = mongoose.Schema;

module.exports = mongoose.model('Category', new Schema({
    name: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    iconUrl: {
        type: String,
        default: ''
    },
    objects : [{ type: Schema.Types.ObjectId, ref: 'Object' }]
}));