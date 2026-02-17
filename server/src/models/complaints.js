import mongoose from "mongoose";

const  ComplainSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
     message: {
        type:String,
        required:true
     },
     createdAt: {
        type: Date,
        default: Date.now
    }
})

const Complain = mongoose.model("Complain", ComplainSchema);

export default Complain