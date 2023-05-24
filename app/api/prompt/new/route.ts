import Prompt from "@models/prompt"
import { connectToDB } from "@utils/database"

export const POST = async (req,) => {
  const { userId, text, tag } = await req.json()



  try {
    await connectToDB()
    const newPrompt = await Prompt.create({
      author: userId,
      text,
      tag
    })

    return new Response(JSON.stringify(newPrompt), { status: 201 })
  } catch (error) {
    return new Response('Failed to create new Prompt', { status: 500, statusText: error.message })
  }
}