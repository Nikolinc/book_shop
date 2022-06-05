import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import './style.scss'

export default function Heder() {
  return (
    <>
      <div style={{ zIndex: '5000' }} className="App">
        <header>
          <Link to="/" className="link">
            <div className="logo">
              <div className="logo_image">
                <img src="https://raw.githubusercontent.com/Nikolinc/book_shop/main/src/assets/logo_header.png" />
              </div>

              <div className="logoLabel">
                <div className="line"></div>
                <h3>BOOK </h3>
                <h3>SHOP</h3>
                <div className="line"></div>
              </div>
            </div>
          </Link>
          <nav>
            <ul className="nav_links">
              <li>
                <Link to="/Catalog" className="link">
                  Catalog
                </Link>
              </li>
              <li>
                <Link to="/Contacts" className="link">
                  Contacts
                </Link>
              </li>
              <li>
                <Link to="/Service" className="link">
                  Servise
                </Link>
              </li>
            </ul>
          </nav>
          <ul className="Sing">
            <button>
              <Link to="/SingIn" className="link">
                Sing in
              </Link>
            </button>
            <button>
              <Link to="/SingUp" className="link">
                Sing up
              </Link>
            </button>
          </ul>
        </header>
      </div>
    </>
  )
}
