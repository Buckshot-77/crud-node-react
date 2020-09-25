const router = require('express').Router()
const Product = require('../model/Product');

router.get('/', (req, res) => {
  res.json({
    message: 'Hello from the server!',
  });
});

router.post('/', async (req, res) => {
  const product = await Product.create(req.body);


  console.log(req.body);

  res.send('Done')
});

module.exports = router;