import express  from "express";
import {
    getProducts,
    getProductsById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/Products.js"

const router =express.Router()

router.get('/product', getProducts)
router.get('/product/:id', getProductsById)
router.post('/product', createProduct)
router.patch('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)

export default router;