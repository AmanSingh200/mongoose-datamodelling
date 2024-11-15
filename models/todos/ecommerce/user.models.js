import mongoose from 'mongoose';

const UserInfo=new mongoose.Schema(              // mongoose se Schema lenge jo do option dega phele ki kya data hoga dusra ki kya timestamp hoga  ({data},{timstamp})
    {   
        username:[
            {
                firstname:{
                    type:String,
                    required:true,
                    uppercase:true,
                },
                lastname:{
                    type:String,
                    required:true,
                    uppercase:true
                }
            }
        ],
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
        },
        password:{
            type:String,
            required:true,
            unique:true
        }


    }
)

export const User=mongoose.model('User',UserInfo);