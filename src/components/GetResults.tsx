import axios from 'axios'
import React, { useEffect, useState } from 'react'

const GetResults = (pageNumber: number) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [results, setResults] = useState<any>([])
  const [hasMore, setHasMore] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: `https://randomuser.me/api/?page=${pageNumber}&&results=12`,
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setResults((prevResults) => {
          return [
            ...prevResults,
            ...res.data.results.map((res) => {
              return [res.email, res.name.first, res.picture.large]
            }),
          ]
        })
        setHasMore(res.data.results.length > 0)
        setTimeout(() => {
          setLoading(false)
        }, 2000)
      })
      .catch((e) => {
        if (axios.isCancel(e)) return
        setError(true)
      })
    return () => cancel()
  }, [pageNumber])

  return { loading, error, results, hasMore }
}

export default GetResults
