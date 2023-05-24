'use client'

import { useEffect, useState } from "react"
import PromptCard from "./PromptCard"

const PromptCardList = ({ prompts, handleTagClick }) => {
    return (
        <div className="mt-16 prompt_layout">
            {prompts.map((prompt) => (
                <PromptCard
                    key={prompt._id}
                    prompt={prompt}
                    handleTagClick={handleTagClick}
                />))}
        </div>
    )
}

const Feed = () => {
    const [searchText, setSearchText] = useState('')
    const [prompts, setPrompts] = useState([])

    const handleSearchChange = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        const fetchPrompts = async () => {
            const response = await fetch('/api/prompt')
            const data = await response.json()

            setPrompts(data)

        }
        fetchPrompts()
    }, [])


    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input
                    type="text"
                    className="search_input peer"
                    placeholder="Search for a tag or username"
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                />
            </form>
            <PromptCardList
                prompts={prompts}
                handleTagClick={() => { }}
            />
        </section>
    )
}

export default Feed