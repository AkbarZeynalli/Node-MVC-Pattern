import express from "express";
import { addProduct, deleProduct, getProductById, getProducts } from "../controllers/productControllers.js";

const productRouter = express.Router()

productRouter.post("/", addProduct)
productRouter.get("/", getProducts)
productRouter.get("/:id", getProductById)
productRouter.delete("/:id", deleProduct)

export default productRouter