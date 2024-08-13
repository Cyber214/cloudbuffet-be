import { MenuItem } from '../models/MenuItem.js'

async function index(req, res) {
  try {
    const menuItems = await MenuItem.find({})
    res.json(menuItems)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function create(req, res) {
  const { name, description, price } = req.body
  try {
    const newMenuItem = new MenuItem({ name, description, price })
    const savedMenuItem = await newMenuItem.save()
    res.status(201).json(savedMenuItem)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function getById(req, res) {
  try {
    const menuItem = await MenuItem.findById(req.params.id)
    if (!menuItem) return res.status(404).json({ message: 'Menu item not found' })
    res.json(menuItem)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

export { index, create, getById }
