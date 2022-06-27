import axios from 'axios'
import React, { useEffect } from 'react'

const GetResults = ({ pageNumber }) => {
  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://randomuser.me/api/?page=${pageNumber}&&results=10`,
    }).then((res) => {
      console.log(res.data)
    })
  }, [pageNumber])
  return <div></div>
}

export default GetResults
