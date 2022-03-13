
import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss'


const categories:string[] = [];

categories.push("Художественная литература",
"Книги для детей",
"Образование",
"Наука и техника",
"Общество",
"Деловая литература",
"Красота. Здоровье. Спорт",
"Увлечения",
"Психология",
"Эзотерика",
"Философия и религия",
"Искусство",
"Подарочные издания",
"Книги на иностранных языках");

export default function HomePage() {
  return (
    <>
    <div className="App">
      <header>
        <div className = "logoLabel">BOOOK SHOP</div>
        <nav>
            <ul className='nav_links'>
                <li><a> Store address</a></li>
                <li><a>Contacts </a></li>
                <li><a>Shipping and payment</a></li>
            </ul>
        </nav>
        <ul className='Sing'>
           <button> Sing in </button>
           <button> Sing up </button>
        </ul>
    </header>

    </div>
    <div className="container_menu">
        
      </div>
   </> 
  );
}

function Categories(){
  return(
   <ul>
     <label className='Categories'>Categories</label>
     {categories.map(category =>(<li>
       <button className='category'>{category}</button>
     </li>))}
    </ul>)
}
