import React from 'react'
import Header from '../components/headers/index'
import Footer from '../components/footer/index'
import Catalog from '../pages/catalog/index'
import HomePage from '../pages/Home/index'
import '../style/global.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Catalog" element={<Catalog />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
