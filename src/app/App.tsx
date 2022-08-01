import React from 'react'
import '../style/global.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/login'

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
