const express = require("express")
const router = require("./products.route")

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || "0.0.0.0"

app.use(router)

app.listen(PORT,HOST, () => {
	console.log(`Server is up and running at port: ${PORT}`)
})