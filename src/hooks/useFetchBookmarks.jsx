import { useEffect, useState } from 'react'
import axios from 'axios'

export const useFetchBookmarks = (search) => {
    const [bookmarks, setBookmarks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect( (search) => {
        setLoading(true) // 1st we set the loading
        setError(null)   // and error states

        const apiUrl = search && search.length > 0 ? 
            `http://localhost:8000/bookmarks?tags=${search}` : 
            `http://localhost:8000/bookmarks`

        axios.get(apiUrl)
            .then( (result) => {
                setLoading(false)
                if (result.data) {
                    setBookmarks(result.data.bookmarks)
                } else {
                    setBookmarks([])
                }
            })
            .catch( (err) => {
                setError(err.message)
                setLoading(false)
            })
        }, [])

    return { bookmarks, loading, error }
}
