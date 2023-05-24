import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  text: {
    type: String,
    required: [true, 'Prompt is required']
  },
  tag: {
    type: String,
    required: [true, 'Prompt is required']
  }
})

const Prompt = models.Prompt || model('Prompt', PromptSchema)

export default Prompt