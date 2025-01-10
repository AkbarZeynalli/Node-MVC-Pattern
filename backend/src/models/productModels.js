import mongoose from "mongoose"

const productShema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true }

}, {
    collection: "Person", timestamps: true
})

const product = mongoose.model("Product", productShema)

export default product;