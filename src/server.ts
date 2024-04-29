import express from 'express'
import productRoute from './routes/product.route'
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/api/products', productRoute)

app.get('/', (req, res) => {
  res.send('Hello from Node API Server Updated')
})
