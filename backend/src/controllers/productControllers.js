import product from "../models/productModels.js";
import mongoose from "mongoose"

export const addProduct = async (req, res) => {
    try {
        const newProduct = new product(req.body);
        await newProduct.save();

        return res.status(201).json({
            success: true,
            message: "Product added successfully",
            product: newProduct
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

export const getProducts = async (req, res) => {
    try {
        const products = await product.find()
        return res.status(200).json({ success: true, products })

    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "Internal server error" })
    }
}

export const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const findProduct = await product.findById(id)
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res
                .status(400)
                .json({ success: false, message: "Invalid product id" })

        }
        return res.status(200).json({ success: true, product: findProduct })

    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "Internal server error" })
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res
                .status(400)
                .json({ success: false, message: "Invalid product id" })
        }
        const deleteProduct = await product.findByIdAndDelete(id)
        if (!deleteProduct) {
            return res.status(404).json({ success: false, message: "Product not delete ...!" })
        }
        else {
            return res.status(200).json({ success: true, message: "Product delete succesfly" })
        }
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "Internal server error " })
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res
                .status(400)
                .json({ success: false, message: "Invalid product id" })
        }
        const updateProduct = await product.findByIdAndUpdate(id, req.body)
        if (!updateProduct) {
            return res.status(400).json({ success: false, message: "Product not update" })
        }
        else {
            return res.status(200).json({ success: true, message: "Product update successfly" })
        }

    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "international server error" })
    }

}