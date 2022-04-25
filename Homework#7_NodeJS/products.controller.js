const ProductsModel = require("./products.model")
const productsModel = new ProductsModel()

class ProductsController {
	fetchAllProducts () {
		return productsModel.getAllProducts()
	}
	fetchProductById (productId) {
		return productsModel.getProductById(productId)
	}
}

module.exports = ProductsController