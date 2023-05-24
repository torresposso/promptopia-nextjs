import Prompt from "@models/prompt"
import { connectToDB } from "@utils/database"

export const GET = async (req,) => {

  try {
    await connectToDB()
    const prompts = await Prompt.find({}).populate('author')

    console.log('those are the prompts', prompts)
    return new Response(JSON.stringify(prompts), { status: 200 })
  } catch (error) {
    return new Response('Failed to create new Prompt', { status: 500, statusText: error.message })
  }
}