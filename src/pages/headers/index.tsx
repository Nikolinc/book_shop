
import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss'

export default function HomePage() {
  return (
    <div className="App">
      <header>
        <div className = "logoLabel">BOOOK SHOP</div>
        <nav>
            <ul className='nav_links'>
                <li><a>Адрес магазина</a></li>
                <li><a>Контакты </a></li>
                <li><a>Доставка и оплата</a></li>
            </ul>
        </nav>
        <button>contact </button>
    
    </header>

    </div>

    
  );
}
