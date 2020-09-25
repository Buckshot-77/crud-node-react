const router = require('express').Router();

const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);

router.get('/:id', productController.getOneProduct);

router.post('/', productController.postNewProduct);

router.patch('/:id', productController.updateProduct);

router.delete('/', productController.deleteProduct);

router.delete('/wipeAll', productController.wipeDB);

module.exports = router;
