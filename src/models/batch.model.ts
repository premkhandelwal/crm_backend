import { Mongoose } from 'mongoose'

module.exports = (mongoose: Mongoose, Schema) => {
    const batchSchema = Schema({
        id: {
            type: mongoose.Schema.Types.String,
        },
        batchName: {
            type: mongoose.Schema.Types.String,
        },
        bmsId: {
            type: mongoose.Schema.Types.ObjectId,
        },
        harnessDetails: {
            type: mongoose.Schema.Types.Array
        },
        makeId: {
            type: mongoose.Schema.Types.ObjectId,
        },
        customerId: {
            type: mongoose.Schema.Types.ObjectId,
        },
        
    })
    const customer = mongoose.model('batch', batchSchema);
    return customer;
}