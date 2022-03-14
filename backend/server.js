//writing our own API. We need routes (URL aka API is a URL), and in plain JS we need to use the list right below:
const express = require('express')
// Express is routes basically it helps us get to something. Express is like a bus or train line.

const products = require('./data/products')
// referring accessbility to products in data folder

const app = express()

// An instance of a express (bus or train) - we want to use Express under the name app.

// a client is in UI, it's asking to get something and we need to get something for them.


app.get('/api/products', (req, res) => {
  res.json(products)
})
// a function to call below and waiting for a response (asking for products and want products back using routes)

// : means it's a parameter coming in. Aka :id which means show us the product parameter of the result


app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
})

app.listen(5000, console.log('Server is running on port 5000'));
