import React from 'react'
import useGetWebPage from '../hooks/useGetWebPage'

const NewBookmark = () => {
    const tagProcessor = (url) => {
        alert(`Got URL: ${url}`)
    }

    const { inputs, handleInputChange, handleSubmit } = useGetWebPage(tagProcessor)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>URL: 
                    <input type="text" name="url" onChange={handleInputChange} value={inputs.url} required />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default NewBookmark