import React from 'react'
import ReactDOM from 'react-dom'
import { render } from "react-dom"; 
import { 
 BrowserRouter, 
 Routes, 
 Route, 
} from "react-router-dom"; 
import './style/global.scss'
import App from './app/App'

ReactDOM.render(
<BrowserRouter> 
 <Routes> 
   <Route path="/" element={<App />}> </Route>
 </Routes> 
 </BrowserRouter>,

  document.getElementById('root')
)
