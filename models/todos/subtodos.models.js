import mongoose from 'mongoose';

const SubTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    createdby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    },
  },
  { timestamps: true }
);

export const SubTodo = mongoose.model('SubTodo', SubTodoSchema);
