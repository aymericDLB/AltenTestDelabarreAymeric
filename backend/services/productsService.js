const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../utils/database.json');

function readProducts() {
  try {
    const productsData = fs.readFileSync(productsFilePath, 'utf-8');
    return JSON.parse(productsData);
  } catch (error) {
    console.error(error);
    return [];
  }
}

function writeProducts(products) {
  try {
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2), 'utf-8');
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getAllProducts: function() {
    return readProducts();
  },

  getProductById: function(productId) {
    const products = readProducts();
    return products.find(product => product.id === productId);
  },

  createProduct: function(newProduct) {
    const products = readProducts();
    // Défini un id au produit
    newProduct.id = products.length + 1;
    products.push(newProduct);
    // Ajout le produit dans le fichier json
    writeProducts(products);
    return newProduct;
  },

  updateProduct: function (productId, updatedProduct) {
    const products = readProducts();
    const existingProductIndex = products.findIndex(product => product.id === productId);

    if (existingProductIndex !== -1) {
      // Mettre à jour le produit existant
      products[existingProductIndex] = { ...products[existingProductIndex], ...updatedProduct };
      writeProducts(products);
      return products[existingProductIndex];
    } else {
      return false; // Produit non trouvé
    }
  },

  deleteProduct: function (productId) {
    const products = readProducts();
    const filteredProducts = products.filter(product => product.id !== productId);

    if (filteredProducts.length < products.length) {
      // Supprimer le produit
      writeProducts(filteredProducts);
      return true; // Suppression réussie
    } else {
      return false; // Produit non trouvé
    }
  }
};
