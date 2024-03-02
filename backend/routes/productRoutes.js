const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Créer un produit
router.post('/api/products', productsController.createProduct);

// Obtenir tous les produits
router.get('/api/products', productsController.getProducts);

// Obtenir un produit par son ID
router.get('/api/product/:id', productsController.getProductById);

// Mettre à jour un produit
router.put('/api/product/:id', productsController.updateProduct);

// Supprimer un produit
router.delete('/api/product/:id', productsController.deleteProduct);

module.exports = router;
