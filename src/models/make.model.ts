import { Mongoose } from 'mongoose'

module.exports = (mongoose: Mongoose, Schema) => {
    const makeSchema = Schema({
        id: {
            type: mongoose.Schema.Types.String,
        },
        name: {
            type: mongoose.Schema.Types.String,
        },

    })
    const make = mongoose.model('make', makeSchema);
    return make;
}