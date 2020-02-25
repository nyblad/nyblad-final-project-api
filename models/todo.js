import mongoose from 'mongoose'

export const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  addedAt: {
    type: Date,
    default: Date.now
  },
  isCompleted: {
    type: Boolean,
    default: false
  }
})