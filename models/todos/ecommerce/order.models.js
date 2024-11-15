import mongoose from "mongoose";

const orderItems = new mongoose.Schema({

})

const Order = new mongoose.Schema({
    status:{
        type:String,
        enum:["Pending","Cancelled","Delivered"],     // choices deta hai enum in array form
        default:"Pending"       
    },
    address:{
        type:String,
        required:true
    },
    orderItem:{
        type:[orderItems]          //another way to store objects 
    }
})

export const Ord = mongoose.model('Ord',Order);