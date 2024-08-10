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
    const order = await Order.findById(req.params.id)
    if (!order) return res.status(404).json({ message: 'Order not found' })
    res.json(order)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

export { index, create, getById }
