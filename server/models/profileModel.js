const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
              user: {
                            type:mongoose.Types.ObjectId,
                            ref: "user",
                            required:true
              },
              houseNo : {
                            type: Number,
                            required:true
              },
              area:{
                            type:String,
                            required:true,


              },
              city:{
                            type: String,
                            required:true
              },
              state:{
                            type: String,
                            required:true
              },
              country:{
                            type: String,
                            required: true
              },
              zipCode: {
                            type: Number,
                            required: true
              },
              contact:{
                            type: String,
                            required: true
              },
              avatar: {
                            type:String,
                            required:true
              }
}, {
              timestamps:true
})

const profileModel = mongoose.model("profile", profileSchema);

module.exports = profileModel;
