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
  const { profileId, items, total } = req.body
  try {
    const newOrder = new Order({ profileId, items, total })
    const savedOrder = await newOrder.save()
    res.status(201).json(savedOrder)
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
