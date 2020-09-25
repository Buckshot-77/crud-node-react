const router = require('express').Router();

const productController = require('../controllers/productController');

router
  .route('/')
  .get(productController.getAllProducts)
  .post(productController.postNewProduct);

router
  .route('/:id')
  .get(productController.getOneProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

router.delete('/wipeAll', productController.wipeDB);

module.exports = router;
