const mongoose = require("mongoose");

const connectiontoDB=()=>{
              mongoose.connect(`mongodb+srv://PROJECT:ADMINA@cluster0.zzavtjw.mongodb.net/mernstackproject?retryWrites=true&w=majority`).then((res,)=>{
                            console.log("DB Connected to ",res.connection.host);
              }).catch((err)=>{
                            console.log("Error while connecting to DB", err.message)
              })
}


module.exports = connectiontoDB