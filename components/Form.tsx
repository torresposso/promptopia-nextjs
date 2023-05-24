import Link from "next/link"

const Form = ({
  type,
  prompt,
  setPrompt,
  submitting,
  handleSubmit,
}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left blue_gradient">{type} Prompt</h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts  with the world, and let your imagination run wild with any AI-powered platform
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex  flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt:
          </span>

          <textarea
            value={prompt.text}
            onChange={(e) => setPrompt({ ...prompt, text: e.target.value })}
            required
            placeholder="Write your prompt here"
            className="form_textarea"
          ></textarea>
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag:
          </span>

          <input
            value={prompt.tag}
            onChange={(e) => setPrompt({ ...prompt, tag: e.target.value })}
            required
            placeholder="#tag"
            className="form_input"
          />
        </label>
        <div className=" flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">Cancel</Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>

        </div>
      </form>
    </section>
  )
}

export default Form