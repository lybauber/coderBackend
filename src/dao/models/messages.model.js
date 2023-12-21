import mongoose from "mongoose";

const collection = 'Message';

const messageSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true, 
        required: true
    },
    message: {
        type: String,
    }
})

const messageModel = mongoose.model(collection, messageSchema);

export default messageModel;