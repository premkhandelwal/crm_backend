import { Request, Response } from 'express'
import { Model } from 'mongoose'

const db = require('../models/index')
const Complaint: Model<any> = db.complaint
const Batch: Model<any> = db.batch

async function getBatchForCustomer(req: Request, res: Response) {
  try {
    const custId = req.query["customerId"];
    console.log(custId);
    
    const batchData = await Batch.find({ customerId: custId });

    const batchListJson = batchData.map((batch) => {
      const batchObj = batch.toObject();
      batchObj.id = batchObj._id;
      return batchObj;
    });

    return res.status(200).json(batchListJson);
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

async function addComplaint(req: Request, res: Response) {
  try {
    const complaintData = { ...req.body }
    const complaint = new Complaint(complaintData)
    const savedInfo = await complaint.save()
    return res.json(savedInfo)
  } catch (error) {
    console.error('Error adding complaint:', error)
    return res.status(500).json({ error: 'Failed to add complaint' })
  }
}

async function fetchComplaints(req: Request, res: Response) {
  try {
    const custId = req.query["customerId"];
    console.log(custId);
    
    const Complaints = await Complaint.find({customerId: custId})
    return res.status(200).json(Complaints)
  } catch (error) {
    return res.status(401).json(error)
  }
}

async function addBmsInBatch(req: Request, res: Response) {
  try {
    const batchId = req.body.id;
    const batchData = await Batch.findByIdAndUpdate(batchId, { bmsList: req.body.bmsList }, { new: true });
    return res.status(200).json(batchData);
  } catch (error) {
    return res.status(401).json(error);
  }
}


export const info = {
  addComplaint: addComplaint,
  fetchComplaints: fetchComplaints,
  getBatchForCustomer: getBatchForCustomer,
  addBmsInBatch: addBmsInBatch
}
