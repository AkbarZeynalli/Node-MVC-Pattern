import express from "express";
import { addProduct, getProductById, getProducts } from "../controllers/productControllers.js";

const productRouter = express.Router()

productRouter.post("/", addProduct)
productRouter.get("/",getProducts)
productRouter.get("/:id",getProductById)

export default productRouter