import { Request, Response } from 'express'
import { Model, Mongoose } from 'mongoose'
const mongoose: Mongoose = require('mongoose')

const db = require('../models/index')
const Customer: Model<any> = db.customer
const Make: Model<any> = db.make
const Harness: Model<any> = db.harness
const Bms: Model<any> = db.bms
const Batch: Model<any> = db.batch

async function addCustomer(req: Request, res: Response) {
  const customerData = {
    name: req.body.name,
  }
  const customer = new Customer(customerData)
  const savedCustomer = await customer.save()
  return res.json(savedCustomer)
}

async function isUserExist(req: Request, res: Response) {
  const getgoogleId = req.body.googleId
  console.log(getgoogleId)
  const customerData: Model<any> = await Customer.findOne({
    googleId: getgoogleId,
  }).catch((error) => {
    console.log(error)
    res.status(400).json(error)
  })
  console.log(customerData)
  const data = JSON.parse(JSON.stringify(customerData))
  if (data != null) {
    data.id = data._id
  }
  console.log(data)
  return res.status(200).json(data)
}

async function getAllUsers(req: Request, res: Response) {
  try {
    const customerData: Model<any>[] = await Customer.find()

    const customerListJson = JSON.parse(JSON.stringify(customerData))
    customerListJson.forEach((customer) => {
      customer.id = customer._id
    })

    res.status(200).json(customerListJson)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

async function addMake(req: Request, res: Response) {
  const makeData = {
    name: req.body.name,
  }
  const make = new Make(makeData)
  const savedMake = await make.save()
  return res.json(savedMake);
}

async function getAllMake(req: Request, res: Response) {
  try {
    const makeData: Model<any>[] = await Make.find()

    const makeListJson = JSON.parse(JSON.stringify(makeData))
    makeListJson.forEach((make) => {
      make.id = make._id
    })

    res.status(200).json(makeListJson)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

async function addHarness(req: Request, res: Response) {
  const harnessData = {
    name: req.body.name,
  }
  const harness = new Harness(harnessData)
  const savedHarness = await harness.save()
  return res.json(savedHarness);
}

async function getAllHarness(req: Request, res: Response) {
  try {
    const harnessData: Model<any>[] = await Harness.find()

    const harnessListJson = JSON.parse(JSON.stringify(harnessData))
    harnessListJson.forEach((harness) => {
      harness.id = harness._id
    })

    res.status(200).json(harnessListJson)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

async function addBms(req: Request, res: Response) {
  const bmsData = {
    name: req.body.name,
    details: req.body.details,
  }
  const bms = new Bms(bmsData)
  const savedBms = await bms.save()
  return res.json(savedBms);
}

async function getAllBms(req: Request, res: Response) {
  try {
    const bmsData: Model<any>[] = await Bms.find()

    const bmsListJson = JSON.parse(JSON.stringify(bmsData))
    bmsListJson.forEach((bms) => {
      bms.id = bms._id
    })

    res.status(200).json(bmsListJson)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}





async function addBatch(req: Request, res: Response) {
  try {
    const batchData = {
      batchName: req.body.batchName,
      bmsId: req.body.bmsId,
      harnessDetails: req.body.harnessDetails,
      makeId: req.body.makeId,
      customerId: req.body.customerId,

    }
    const batch = new Batch(batchData)
    const savedBatch = await batch.save()
    return res.json(savedBatch)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
 
}


async function getBatch(req: Request, res: Response) {
  try {
    const custId = req.body.customerId;
    const batchData = await Batch.find({ customerId: custId });

    const batchListJson = batchData.map((batch) => {
      const batchObj = batch.toObject();
      batchObj.id = batchObj._id;
      return batchObj;
    });

    res.status(200).json(batchListJson);
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}
async function getAllBatch(req: Request, res: Response) {
  try {
    const custId = req.body.customerId;
    const batchData = await Batch.find();

    const batchListJson = batchData.map((batch) => {
      const batchObj = batch.toObject();
      batchObj.id = batchObj._id;
      return batchObj;
    });

    res.status(200).json(batchListJson);
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}


export const masters = {
  addUser: addCustomer,
  isUserExist: isUserExist,
  getAllUsers: getAllUsers,
  addBatch: addBatch,
  getBatch: getBatch,
  getAllBatch: getAllBatch,
  addMake: addMake,
  getAllMake: getAllMake,
  addHarness: addHarness,
  getAllHarness: getAllHarness,
  addBms: addBms,
  getAllBms: getAllBms,
}
