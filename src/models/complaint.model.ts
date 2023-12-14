import { Mongoose } from 'mongoose'

module.exports = (mongoose: Mongoose, Schema) => {
  const complaintSchema = Schema({
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    bmsId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    batchId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    harnessId: {
      type: mongoose.Schema.Types.Array,
    },
    make: {
      type: mongoose.Schema.Types.ObjectId,
    },
    returnDate: {
      type: mongoose.Schema.Types.Date,
    },
    complaint: {
      type: mongoose.Schema.Types.String,
    },
    observation: {
      type: mongoose.Schema.Types.String,
    },
    comment: {
      type: mongoose.Schema.Types.String,
    },
    solution: {
      type: mongoose.Schema.Types.String,
    },
    testingDoneBy: {
      type: mongoose.Schema.Types.String,
    },
    status: {
      type: mongoose.Schema.Types.String,
    }

  })
  const complaint = mongoose.model('complaint', complaintSchema)
  return complaint
}
