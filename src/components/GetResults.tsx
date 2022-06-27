import axios from 'axios'
import React, { useEffect, useState } from 'react'

// @ts-ignore
const GetResults = (pageNumber: number) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [results, setResults] = useState([])
  const [hasMore, setHasMore] = useState(false)

  console.log('pageNumber :>> ', pageNumber)

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: `https://randomuser.me/api/?page=${pageNumber}&&results=10`,
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        console.log('res :>> ', res)
        // @ts-ignore
        setResults((prevResults: any[] = []) => {
          return [
            ...prevResults,
            ...res.data.results.map((res) => {
              return [res.email,res.name.first,res.picture.large]
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
