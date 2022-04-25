const path = require("path")
const dataService = require("./data.service")
const productsPath = path.join(__dirname, "products.json")


class ProductsModel {
	getAllProducts () {
		return new Promise((resolve, reject) => {
			const productsData = JSON.parse(dataService.readDataFromDb(productsPath))
			resolve(productsData)
		})
	}
	getProductById (productId) {
		return new Promise ((resolve,reject) => {
			const productsData = JSON.parse(dataService.readDataFromDb(productsPath))

			const foundProduct = productsData.products.filter(product => product.id === productId)[0]

			if(foundProduct) {
				resolve(foundProduct)
			} else {
				reject({
					message: "Error! No such product found"
				})
			}

		})
	}
}

module.exports = ProductsModel