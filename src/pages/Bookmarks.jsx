import React from 'react'
import { useFetchBookmarks } from '../hooks/useFetchBookmarks.jsx'
import './Bookmarks.css'

const BookmarksList = () => {
    const { bookmarks, loading, error } = useFetchBookmarks()

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>

    return ( 
        <div className="bookmarks">
            {
                bookmarks && bookmarks.length > 0 && 
                bookmarks.map(bm => 
                    <div className="bookmark" key={bm.id}>
                        <a className="title" href={bm.url}>{bm.title}</a>
                        <ul className="taglist">
                            {bm.tags.map(tag => (
                                <li className="tag" key={tag.id}>{tag.name}</li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default BookmarksList