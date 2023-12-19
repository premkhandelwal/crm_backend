import { Mongoose } from 'mongoose'

module.exports = (mongoose: Mongoose, Schema) => {
    const bmsSchema = Schema({
        id: {
            type: mongoose.Schema.Types.String,
        },
        name: {
            type: mongoose.Schema.Types.String,
        },
        harnessDetails: {
            type: mongoose.Schema.Types.Array
        },
        makeId: {
            type: mongoose.Schema.Types.ObjectId,
        },
        details: {
            type: mongoose.Schema.Types.String,
        },
    })
    const bms = mongoose.model('bms', bmsSchema);
    return bms;
}