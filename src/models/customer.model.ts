import { Mongoose } from 'mongoose'

module.exports = (mongoose: Mongoose, Schema) => {
    const customerSchema = Schema({
        id: {
            type: mongoose.Schema.Types.String,
        },
        name: {
            type: mongoose.Schema.Types.String,
        },
    
    })
    const customer = mongoose.model('customers', customerSchema);
    return customer;
}