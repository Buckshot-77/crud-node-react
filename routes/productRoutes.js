const router = require('express').Router();

const productController = require('../controllers/productController');

router.get('/', productController.getProducts);

router.post('/', productController.postNewProduct);

router.delete('/', productController.deleteProduct);

router.delete('/wipeAll', productController.wipeDB);

module.exports = router;
