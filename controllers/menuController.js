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
  try {

  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function getById(req, res) {
  try {

  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

export { index, create, getById }
