const ProductsService = require('../services/productsService');


async function createProduct(req, res) {
  try {
    const newProduct = req.body;
    const product = ProductsService.createProduct(newProduct);
    res.status(201).json(product);
  } catch (error) {
    console.error('Erreur lors de la création du produit:', error);
    res.status(500).json({ error: 'Erreur lors de la création du produit.' });
  }
}


async function getProducts(req, res) {
  try {
    const products = ProductsService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    console.error('Erreur lors de la récupération des products:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des products.' });
  }
}

async function getProductById(req, res) {
  try {
    const { id } = req.params;
    const product = ProductsService.getProductById(parseInt(id));
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).send('Produit non trouvé');
    }
  } catch (error) {
    console.error('Erreur lors de la récupération du Produit:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération de Produit.' });
  }
}

async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    const updatedProduct = req.body;

    const product = ProductsService.updateProduct(parseInt(id), updatedProduct);

    if (product) {
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).send('Produit non trouvé');
    }
  } catch (error) {
    console.error('Erreur lors de la mise à jour du Produit:', error);
    res.status(500).json({ error: 'Erreur lors de la mise à jour du Produit.' });
  }
}

async function deleteProduct(req, res) {
  try {
    const { id } = req.params;

    if (ProductsService.deleteProduct(parseInt(id))) {
      res.status(204).send();
    } else {
      res.status(404).send('Produit non trouvé');
    }
  } catch (error) {
    console.error('Erreur lors de la suppression du Produit:', error);
    res.status(500).json({ error: 'Erreur lors de la suppression du Produit.' });
  }
}

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
