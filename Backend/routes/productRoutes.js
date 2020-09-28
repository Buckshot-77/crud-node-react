const router = require('express').Router();
const cors = require('cors');

const productController = require('../controllers/productController');

router.delete('/wipeAll', productController.wipeDB);
router
  .route('/')
  .get(cors(), productController.getAllProducts)
  .post(productController.postNewProduct);

router
  .route('/:id')
  .get(productController.getOneProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
