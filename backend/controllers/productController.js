import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

//@desc Fetch all products
//@rout GET /api/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

//@desc Fetch single product
//@rout GET /api/products/:id
//@access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  }
  else {
    res.status(404)
    throw new Error('Product not found')
  }

})

//@desc Delete product by id
//@rout DELETE /api/products/:id
//@access Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({message: 'Product removed'})
  }
  else {
    res.status(404)
    throw new Error('Product not found')
  }
})

//@desc Update product
//@route PUT /api/products/:id
//@access Private
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = req.body.name || product.name
    product.price = req.body.price || product.price
    product.category = req.body.category || product.category
    product.brand = req.body.brand || product.brand

    const updatedProduct = await product.save()

    res.status(201).json({
      _id: updatedProduct._id,
      name: updatedProduct.name,
      price: updatedProduct.price,
      category: updatedProduct.category,
      brand: updatedProduct.brand,
    })

  } else {
    res.status(401)
    throw new Error('Product not found')
  }
})

export {getProducts, getProductById, deleteProduct, updateProduct}