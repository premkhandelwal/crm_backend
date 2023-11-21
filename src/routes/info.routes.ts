import { Router } from 'express'
import { info } from '../controllers/info.controller'

const router: Router = Router()

// router.post('/addNotificationToken', info.addNotificationToken)

router.post('/addComplaint', info.addComplaint)

router.get('/fetchComplaints', info.fetchComplaints)

module.exports = router
