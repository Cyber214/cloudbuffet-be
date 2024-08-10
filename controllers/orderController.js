import { Order } from '../models/Order.js'

async function index(req, res) {
  try {
    const orders = await Order.find({})
    res.json(orders)
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
