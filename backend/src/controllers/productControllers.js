import product from "../models/productModels.js";
import mongoose from "mongoose"

export const addProduct = async (req, res) => {
    try {
        const newProduct = new product(req.body);
        await newProduct.save();

        return res.status(201).json({
            success: true,
            message: "Product added successfully",
            product : newProduct
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message // Optionally send the error message for debugging
        });
    }
};

export const getProducts = async(req,res)=>{
    try {
        const products  = await product.find()
        return res.status(200).json({success:true,products})
        
    } catch (error) {
        return res
        .status(500)
        .json({success:false, message: "Internal server error"})
    }
}

export const getProductById = async(req,res)=>{
    const {id} = req.params;
    try {
        const findProduct  = await product.findById(id)
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res 
            .status(400)
            .json({success:false,message:"Invalid product id"})
            
        }
        return res.status(200).json({success:true,product:findProduct})
        
    } catch (error) {
        return res
        .status(500)
        .json({success:false,message: "Internal server error"})
    }
}