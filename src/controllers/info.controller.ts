import { Request, Response } from 'express'
import { Model } from 'mongoose'

const db = require('../models/index')
const Complaint: Model<any> = db.complaint
const Customer: Model<any> = db.customer

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
    const Complaints = await Complaint.find({})
    res.status(200).json(Complaints)
  } catch (error) {
    res.status(401).json(error)
  }
}

export const info = {
  addComplaint: addComplaint,
  fetchComplaints: fetchComplaints,
  // addNotificationToken: addNotificationToken,
}
