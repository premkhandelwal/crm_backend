import { Mongoose } from 'mongoose'

module.exports = (mongoose: Mongoose, Schema) => {
  const complaintSchema = Schema({
    bmsClientName: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    bmsName: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    returnDate: {
      type: mongoose.Schema.Types.Date,
    },
    complaint: {
      type: mongoose.Schema.Types.String,
    },
    batchNo: {
      type: mongoose.Schema.Types.String,
    },
    harnessDetails: {
      type: mongoose.Schema.Types.Array,
    },
    make: {
      type: mongoose.Schema.Types.String,
    },
    customerId: {
      type: mongoose.Schema.Types.String,
    },
  })
  const complaint = mongoose.model('complaint', complaintSchema)
  return complaint
}
