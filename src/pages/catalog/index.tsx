import './style.scss'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Catalog() {
  const [data, setData] = useState({ values: [] })
  const [url, setUrl] = useState('http://127.0.0.1:3500/product')
  const [isLoading, setIsLoading] = useState(true)

  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const result = await axios(url)
        console.log(result)
        setData(result.data)
      } catch (error) {
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [url])

  return (
    <>
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div className="container">
          {data.values.map((pos) => (
            <Product
              image={pos.image}
              name={pos.name}
              auter={pos.auter}
              price={pos.price}
            />
          ))}
        </div>
      )}
    </>
  )
}

function Product(props: {
  image: string
  name:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
  auter:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
  price:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
}) {
  return (
    <>
      <div className="component">
        <div className="cover">
          <img src={[props.image]} alt="cover" height={'300px'} />{' '}
        </div>

        <div className="name">{props.name}</div>
        <div className="auter">{props.auter}</div>
        <div className="price">{props.price}</div>
        <div className="container_button">
          <button className="Buy_in_one_click">
            <label>Buy in one click</label>
          </button>
          <button className="Add_to_cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
