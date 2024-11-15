import mongoose from 'mongoose';

// const UserSchema = new mongoose.Schema(
//   {
//     userName:String,
//     email:String,
//     isActive:Boolean
//   }
// );


const UserSchema = new mongoose.Schema(
  {
    userName:{
      type:String,
      required:true,
      unique:true,
      lowecase:true
    },
    email:{
      type:String,
      required:true,
      unique:true,
      lowercase:true
    },
    password:{
      type:String,
      required:[true,"password must be required"],
      unique:true
    }
  },{
    timestamps:true
  }
);

export const User=mongoose.model("User",UserSchema);

