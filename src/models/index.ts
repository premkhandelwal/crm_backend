const mongoose = require('mongoose')
const { Schema } = mongoose
const ComplaintModel = require('./complaint.model')

const Db: any = {}

Db.complaint = ComplaintModel(mongoose, Schema)

module.exports = Db
