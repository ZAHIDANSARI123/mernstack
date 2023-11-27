const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
              title: {
                            type: String,
                            required: true
              },
              descriptin: {
                            type: String,
                            required: true
              },
              stock: {
                            type: Number,
                            default: 1
              },
              price: {
                            type: Number,
                            default: 1
              },
              productImage: {
                            type: String,
                            required: true
              },
              createdBy: {
                            type:mongoose.Types.ObjectId,
                            ref:"User",
                            required: true
              },
              
},{
              timestamps: true
})


const ProductModel = mongoose.model("Product", productSchema)

module.exports = ProductModel