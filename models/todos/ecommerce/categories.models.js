import mongoose from 'mongoose';

const categories = new mongoose.Schema({         //Schema ek method hai jo apne saath leta hai object 

})

export const Category = mongoose.model('Category',categories);    //model ka kya naam rakhna hai and kis Schema pe based hoga jo upar bana rhe hai hum