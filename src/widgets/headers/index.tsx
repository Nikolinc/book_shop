
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import './style.scss'

export default function Heder() {
  return (
    <>
    <div className="App">
      <header>
        <Link to = '/' className='link'>
        <div className="logo">
          <div className="logo_image">
            <img src="https://psv4.userapi.com/c237331/u217672568/docs/d40/081082198388/icons8-stopka-knig-100_1.png?extra=N5LGYG3Q4ogOXrtzoJS7NASAf1nATCGyJOFF9OruCcNZc8kP3YuBO0uMhNhiR-rJ9w9rklCKtnhXNKqV2h0NGZWOem8wqTsYdJXP4dOnJ7ljVWqDEU1u9U6ibu9iJhy0vXCcot8baU-L1_Dt7o1DJ6Hxbw" alt="" />
          </div>
         
          <div className = "logoLabel"><div className="line"></div><h3>BOOK </h3><h3>SHOP</h3><div className="line"></div></div>
        </div>
        </Link>
        <nav>
            <ul className='nav_links'>
                <li><Link to = '/Catalog' className='link'>Catalog</Link></li>
                <li><Link to = '/Contacts' className='link'>Contacts </Link></li>
                <li><Link to = '/Service' className='link'>Servise</Link></li>
            </ul>
        </nav>
        <ul className='Sing'>
           <button><Link to = '/SingIn' className='link'> Sing in </Link></button>
           <button><Link to = '/SingUp' className='link'>Sing up</Link>  </button>
        </ul>
    </header>

    </div>
   
    
     
   </> 
  );
}

