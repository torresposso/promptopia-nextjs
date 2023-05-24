'use client'

import Form from "@components/Form"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"



const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false)
  const [prompt, setPrompt] = useState({
    text: '',
    tag: ''
  })

  const createPrompt = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const response = await fetch('/api/prompt/new', {
        method: 'POST',
        body: JSON.stringify({
          userId: session?.user?.id,
          text: prompt.text,
          tag: prompt.tag

        })
      })

      console.log('response', response)

      if (response.ok) {
        router.push("/")
      }
    } catch (error) {
      console.log(error)
    } finally {
      setSubmitting(false)
    }

  }


  return (
    <>
      <Form
        type='Create'
        prompt={prompt}
        setPrompt={setPrompt}
        submitting={submitting}
        handleSubmit={createPrompt}
      />
    </>

  )
}

export default CreatePrompt