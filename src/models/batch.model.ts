import { Mongoose } from 'mongoose'

module.exports = (mongoose: Mongoose, Schema) => {
    const batchSchema = Schema({
        id: {
            type: mongoose.Schema.Types.String,
        },
        batchName: {
            type: mongoose.Schema.Types.String,
        },
        bmsList: {
            type: mongoose.Schema.Types.Mixed
        },
        customerId: {
            type: mongoose.Schema.Types.ObjectId,
        },
        
    })
    const customer = mongoose.model('batch', batchSchema);
    return customer;
}