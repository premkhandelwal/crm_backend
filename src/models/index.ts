const mongoose = require('mongoose')
const { Schema } = mongoose
const CustomerModel = require('./customer.model')
const ComplaintModel = require('./complaint.model')

const Db: any = {}

Db.customer = CustomerModel(mongoose, Schema)
Db.complaint = ComplaintModel(mongoose, Schema)

module.exports = Db
