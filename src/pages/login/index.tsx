import React, { useState } from 'react'

import './style.scss'
export default function Login() {
  return (
    <>
      <div className="login">
        <div className="lamp">
          <img
            src="https://github.com/Nikolinc/book_shop/blob/book-search/src/assets/lamp.png?raw=true"
            alt="lamp"
          />
        </div>

        <div className="authorisation">
          <div className="namePage">LOGIN</div>

          <div className="passwordEntryField">
            <input type="Text" placeholder="E-mail or login" />
          </div>

          <div className="passwordEntryField">
            <input type="Password" placeholder="Password" />
          </div>
          <div className="reestablish">
            Forgot your password?<a>Reestablish</a>
          </div>
          <div className="loginButton">
            <button>
              <div className="textButton">Login</div> 
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
