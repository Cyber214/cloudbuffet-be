import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  profileId: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true }],
  total: { type: Number, required: true }
}, {
  timestamps: true,
})

const Order = mongoose.model('Order', orderSchema)

export { Order }
