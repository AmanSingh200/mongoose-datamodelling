import mongoose from "mongoose";
import { Category } from "./categories.models";

const Product = mongoose.Schema({
    description:{
        type:String,
        name:String,
        prodDesc:String
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    price:{
        type:Number,
        default:0
    },
    stock:{
        type:Number,
        default:0
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    }



},{timestamps:true})

export const Prod=mongoose.model('Prod',Product)