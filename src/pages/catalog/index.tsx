import './style.scss'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Product from '../../components/product'
import Api from '../../services/api'

export default function Catalog() {
  const data = Api('http://127.0.0.1:3500/product')
  return (
    <>
      <div className="container">
        {data.values.map((pos) => (
          <Product
            image={pos.image}
            name={pos.name}
            auter={pos.author}
            price={pos.price}
          />
        ))}
      </div>
    </>
  )
}
