import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Api(link: String) {
  const [data, setData] = useState({ values: [] })
  const [url, setUrl] = useState(link)
  const [isLoading, setIsLoading] = useState(true)

  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const result = await axios(url)
        setData(result.data)
      } catch (error) {
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [url])

  return data
}
