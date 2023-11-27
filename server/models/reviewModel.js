const mongoose = require("mongoose");


const reviewSchema = mongoose.Schema({
              review: {
                            type: String,
                            required: true
              },
              rating: {
                            type: Number,
                            required: true
              },
              reviewBy: {
                            type:mongoose.Types.ObjectId,
                            ref:"user",
                            required:true
                            
              }
},{
              timestamps: true
})

const ReviewModel = mongoose.model("review", reviewSchema)

module.exports = ReviewModel;