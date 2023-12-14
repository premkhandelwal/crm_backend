import { Router } from 'express'
import { masters } from '../controllers/master.controller'

const router: Router = Router()

router.post('/isUserExist', masters.isUserExist)

router.post('/addCustomer', masters.addUser)
router.get('/getAllCustomers', masters.getAllUsers)

router.post('/addBatch', masters.addBatch)
router.get('/getBatch', masters.getBatch)
router.get('/getAllBatch', masters.getAllBatch)

router.post('/addCustomer', masters.addUser)
router.get('/getAllCustomers', masters.getAllUsers)

router.post('/addMake', masters.addMake)
router.get('/getAllMake', masters.getAllMake)

router.post('/addHarness', masters.addHarness)
router.get('/getAllHarness', masters.getAllHarness)

router.post('/addBms', masters.addBms)
router.get('/getAllBms', masters.getAllBms)


module.exports = router
