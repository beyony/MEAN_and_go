var mongoose = require("mongoose");
var Schema = mongoose.Schema;

module.exports = mongoose.model('ObjectDetails', new Schema({
    sizeX: {type: Number},
    sizeY: {type: Number},
    sizeZ: {type: Number},
    object: {
        type: Schema.Types.ObjectId,
        ref: 'Object'
    }
}));