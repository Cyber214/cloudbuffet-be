import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as menuCtrl from '../controllers/menuController.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', checkAuth, ordersCtrl.index)            // List all orders
router.get('/:id', checkAuth, ordersCtrl.getById)       // Get a specific order by ID

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, ordersCtrl.create)          // Create a new order

export { router }