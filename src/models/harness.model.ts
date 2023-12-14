import { Mongoose } from 'mongoose'

module.exports = (mongoose: Mongoose, Schema) => {
    const harnessSchema = Schema({
        id: {
            type: mongoose.Schema.Types.String,
        },
        name: {
            type: mongoose.Schema.Types.String,
        },

    })
    const harness = mongoose.model('harness', harnessSchema);
    return harness;
}