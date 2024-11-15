import { Timestamp } from 'bson';
import mogoose from 'mongoose';

const todoScheme = new mongoose.Schema (
  {
    createdby:{
      type: mongoose.Schema.Types.ObjectId,       // mongoose se lete hain scheme ke andar lete ho types and last me ObjectId (iska mtlb kisi aur model ka reference aane wla hai next)
      ref:"Users"     // user.model se export jo karwya hai wo lenge yeh batayega ki Todo kisne create kia hai, Users ki details dega
    },
    subtodos:[
      {
        type:mogoose.Schema.Types.ObjectId,
        ref:"SubTodo"
      },
      {

      }
    ] // Array of SubTodos 

  },
  {timestamps:true}
);

export const Todo = mogoose.model("Todo",todoScheme); //model do sawal puchta hai naam kya rakha hai database me (todos hoga) kiske basis pe wo scheme banau