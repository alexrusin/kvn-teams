import mongoose from 'mongoose'

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
