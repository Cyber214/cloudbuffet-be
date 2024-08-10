import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as menuCtrl from '../controllers/menuController.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', checkAuth, menuCtrl.index)              // List all menu items
router.get('/:id', checkAuth, menuCtrl.getById)         // Get a specific menu item by ID

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, menuCtrl.create)            // Create a new menu item

export { router }