import { Request, Response, Router } from 'express'
const masterRoute = require('./master.routes')
const infoRoute = require('./info.routes')

const router: Router = Router()

router.get('/', (req: Request, res: Response) => {
  res.status(200).send({
    data: {},
    meta: {
      message: 'CRM is now live!!',
    },
  })
})

router.use('/addDetails', infoRoute)
router.use('/masters', masterRoute)

module.exports = router
