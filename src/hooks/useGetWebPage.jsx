import { useState } from 'react'
import axios from 'axios'

const useGetWebPage = (callback) => {
    const [inputs, setInputs] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault()
        }
        let purl = "https://localhost:8000/ff?url=" + inputs.url
        axios.get(purl)
            .then( (result) => {
                setLoading(false)
                if (result.data) {
                    callback(result.data.tags);
                } else {
                    callback({});
                }
            })
            .catch( (err) => {
                setError(err.message)
                setLoading(false)
            })
    }
    const handleInputChange = (event) => {
        event.persist()
        setInputs( inputs => ({...inputs, [event.target.name]: event.target.value}))
    }
    return { handleSubmit, handleInputChange, inputs }
}

export default useGetWebPage