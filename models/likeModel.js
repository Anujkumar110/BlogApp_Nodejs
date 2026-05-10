//import mongoose
const mongoose = require("mongoose");

//routes handler
const likeSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Posts",    //referene of post model
    },
    user: {
        type: String,
        required: true,
    }
});

//export
module.exports = mongoose.model("Like", likeSchema);