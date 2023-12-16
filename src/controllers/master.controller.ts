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

async function editCustomer(req: Request, res: Response) {
  const customerId = req.body.id;

  try {
    if (!customerId) {
      return res.status(400).json({ error: 'Invalid customer ID provided' });
    }

    const updatedCustomer = await Customer.findByIdAndUpdate(
      customerId,
      req.body,

    );

    if (!updatedCustomer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    return res.status(200).json(updatedCustomer);
  } catch (error) {
    console.error('Error editing Customer:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteCustomer(req: Request, res: Response) {
  const customerId = req.body.id;

  try {
    if (!customerId) {
      return res.status(400).json({ error: 'Invalid customer ID provided' });
    }

    const deletedCustomer = await Customer.findByIdAndDelete(customerId);

    if (!deletedCustomer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    return res.status(200).json(deletedCustomer);
  } catch (error) {
    console.error('Error deleting Customer:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
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

async function editMake(req: Request, res: Response) {
  const makeId = req.body.id;

  try {

    if (!makeId) {
      return res.status(400).json({ error: 'Invalid make ID provided' });
    }
    const updatedMake = await Make.findByIdAndUpdate(
      makeId,
      req.body
    );

    if (!updatedMake) {
      return res.status(404).json({ error: 'Make not found' });
    }
    return res.status(200).json(updatedMake);
  } catch (error) {
    console.error('Error editing Make:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteMake(req: Request, res: Response) {
  const makeId = req.body.id;

  try {

    if (!makeId) {
      return res.status(400).json({ error: 'Invalid make ID provided' });
    }
    const deletedMake = await Make.findByIdAndDelete(
      makeId
    );

    if (!deletedMake) {
      return res.status(404).json({ error: 'Make not found' });
    }
    return res.status(200).json(deletedMake);
  } catch (error) {
    console.error('Error deleting Make:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
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

async function editHarness(req: Request, res: Response) {
  const harnessId = req.body.id;

  try {
    if (!harnessId) {
      return res.status(400).json({ error: 'Invalid harness ID provided' });
    }

    const updatedHarness = await Harness.findByIdAndUpdate(
      harnessId,
      req.body,

    );

    if (!updatedHarness) {
      return res.status(404).json({ error: 'Harness not found' });
    }

    return res.status(200).json(updatedHarness);
  } catch (error) {
    console.error('Error editing Harness:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}


async function deleteHarness(req: Request, res: Response) {
  const harnessId = req.body.id;

  try {
    if (!harnessId) {
      return res.status(400).json({ error: 'Invalid harness ID provided' });
    }

    const deletedHarness = await Harness.findByIdAndDelete(harnessId);

    if (!deletedHarness) {
      return res.status(404).json({ error: 'Harness not found' });
    }

    return res.status(200).json(deletedHarness);
  } catch (error) {
    console.error('Error deleting Harness:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
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


async function editBms(req: Request, res: Response) {
  const bmsId = req.body.id;

  try {
    if (!bmsId) {
      return res.status(400).json({ error: 'Invalid Bms ID provided' });
    }

    const updatedBms = await Bms.findByIdAndUpdate(
      bmsId,
      req.body,

    );

    if (!updatedBms) {
      return res.status(404).json({ error: 'Bms not found' });
    }

    return res.status(200).json(updatedBms);
  } catch (error) {
    console.error('Error editing Bms:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}


async function deleteBms(req: Request, res: Response) {
  const bmsId = req.body.id;

  try {
    if (!bmsId) {
      return res.status(400).json({ error: 'Invalid Bms ID provided' });
    }

    const deletedBms = await Bms.findByIdAndDelete(bmsId);

    if (!deletedBms) {
      return res.status(404).json({ error: 'Bms not found' });
    }

    return res.status(200).json(deletedBms);
  } catch (error) {
    console.error('Error deleting Bms:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
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


async function editBatch(req: Request, res: Response) {
  const batchId = req.body.id;

  try {
    if (!batchId) {
      return res.status(400).json({ error: 'Invalid batch ID provided' });
    }

    const updatedBatch = await Batch.findByIdAndUpdate(
      batchId,
      req.body,
    );

    if (!updatedBatch) {
      return res.status(404).json({ error: 'Batch not found' });
    }

    return res.status(200).json(updatedBatch);
  } catch (error) {
    console.error('Error editing Batch:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}


async function deleteBatch(req: Request, res: Response) {
  const batchId = req.body.id;

  try {
    if (!batchId) {
      return res.status(400).json({ error: 'Invalid batch ID provided' });
    }

    const deletedBatch = await Batch.findByIdAndDelete(batchId);

    if (!deletedBatch) {
      return res.status(404).json({ error: 'Batch not found' });
    }

    return res.status(200).json(deletedBatch);
  } catch (error) {
    console.error('Error deleting Batch:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
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
  editCustomer: editCustomer,
  deleteCustomer: deleteCustomer,
  getAllUsers: getAllUsers,
  addBatch: addBatch,
  editBatch: editBatch,
  deleteBatch: deleteBatch,
  getBatch: getBatch,
  getAllBatch: getAllBatch,
  addMake: addMake,
  editMake: editMake,
  deleteMake: deleteMake,
  getAllMake: getAllMake,
  addHarness: addHarness,
  editHarness: editHarness,
  deleteHarness: deleteHarness,
  getAllHarness: getAllHarness,
  addBms: addBms,
  editBms: editBms,
  deleteBms: deleteBms,
  getAllBms: getAllBms,
}
