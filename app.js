const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.get('/users', (req, res) => {
  res.status(200).json({
    message: 'Hello, World!'
  })
});

module.exports = app;