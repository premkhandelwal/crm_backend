const mongoose = require('mongoose')
const { Schema } = mongoose
const CustomerModel = require('./customer.model')
const MakeModel = require('./make.model')
const HarnessModel = require('./harness.model')
const BmsModel = require('./bms.model')
const BatchModel = require('./batch.model')
const ComplaintModel = require('./complaint.model')

const Db: any = {}

Db.complaint = ComplaintModel(mongoose, Schema)
Db.customer = CustomerModel(mongoose, Schema)
Db.batch = BatchModel(mongoose, Schema)
Db.make = MakeModel(mongoose, Schema)
Db.harness = HarnessModel(mongoose, Schema)
Db.bms = BmsModel(mongoose, Schema)

module.exports = Db
