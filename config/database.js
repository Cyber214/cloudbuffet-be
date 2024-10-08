import mongoose from 'mongoose'

const db = mongoose.connection

mongoose.connect(process.env.DATABASE_URL)

db.on('connected', function () {
  console.log(`MongoDB name is ${db.name} at ${db.host}:${db.port}`)
})
