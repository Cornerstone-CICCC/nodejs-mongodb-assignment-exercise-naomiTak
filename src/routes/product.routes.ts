import { Router } from "express";
import studentController from "../controllers/product.controller";

const productRouter = Router()

// Routes
productRouter.get('/', studentController.getAllProducts)
productRouter.get('/:id', studentController.getProductById)
productRouter.post('/', studentController.addProduct)
productRouter.put('/:id', studentController.updateProductById)
productRouter.delete('/:id', studentController.deleteProductById)

export default productRouter