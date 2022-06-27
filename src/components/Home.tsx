import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from 'mdb-react-ui-kit'
import { useNavigate } from 'react-router-dom'
import GetResults from './GetResults'
import Loader from './Loader'

const Home = () => {
  const Navigate = useNavigate()
  const savedEamil = localStorage.getItem('email')
  const savedPassword = localStorage.getItem('password')
  useEffect(() => {
    if (!savedEamil || !savedPassword) Navigate('/')
  }, [Navigate, savedEamil, savedPassword])

  const [pageNumber, setPageNumber] = useState(1)

  const { results, hasMore, loading, error } = GetResults(pageNumber)

  const observer = useRef()
  const lastResultElementRef = useCallback(
    (node) => {
      if (loading) return
      let { current } = observer
      // @ts-ignore
      if (current) current.disconnect()

      // @ts-ignore
      current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1)
        }
      })

      // @ts-ignore
      if (node) current.observe(node)
    },
    [loading, hasMore]
  )

  return (
    <MDBContainer className='mb-10'>
      <h1 className='text-center mx-3 my-2 mb-2'>User Data</h1>
      <MDBRow>
        {results.map((result, index) => {
          if (results.length === index + 1) {
            return (
              <MDBCol
                className='d-flex align-items-center justify-content-center'
                md='3'
                sm='6'
                xs='12'
                key={result}
                ref={lastResultElementRef}
              >
                <MDBCard style={{ width: '18rem' }}>
                  <MDBCardImage
                    src={result[2]}
                    alt='ukfvjh'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardText>
                      <MDBTypography>Name : {result[1]}</MDBTypography>
                      <MDBTypography>Email : {result[0]}</MDBTypography>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            )
          } else {
            return (
              <MDBCol
                className='d-flex align-items-center justify-content-center'
                md='3'
                sm='6'
                xs='12'
                key={result}
              >
                <MDBCard style={{ width: '18rem' }}>
                  <MDBCardImage
                    src={result[2]}
                    alt='ukfvjh'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardText>
                      <MDBTypography>Name : {result[1]}</MDBTypography>
                      <MDBTypography>Email : {result[0]}</MDBTypography>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            )
          }
        })}
      </MDBRow>

      <div className='text-center'>{loading && <Loader />}</div>
      <div>{error && 'Error'}</div>
    </MDBContainer>
  )
}
export default Home
