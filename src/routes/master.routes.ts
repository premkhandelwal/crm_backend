import { Router } from 'express'
import { masters } from '../controllers/master.controller'

const router: Router = Router()

router.post('/addCustomer', masters.addUser)
router.put('/editCustomer', masters.editCustomer)
router.delete('/deleteCustomer', masters.deleteCustomer)
router.get('/getAllCustomers', masters.getAllUsers)

router.post('/addBatch', masters.addBatch)
router.put('/editBatch', masters.editBatch)
router.delete('/deleteBatch', masters.deleteBatch)
router.get('/getBatch', masters.getBatch)
router.get('/getAllBatch', masters.getAllBatch)

router.post('/addMake', masters.addMake)
router.put('/editMake', masters.editMake)
router.delete('/deleteMake', masters.deleteMake)
router.get('/getAllMake', masters.getAllMake)

router.post('/addHarness', masters.addHarness)
router.put('/editHarness', masters.editHarness)
router.delete('/deleteHarness', masters.deleteHarness)
router.get('/getAllHarness', masters.getAllHarness)

router.post('/addBms', masters.addBms)
router.put('/editBms', masters.editBms)
router.delete('/deleteBms', masters.deleteBms)
router.get('/getAllBms', masters.getAllBms)


module.exports = router
