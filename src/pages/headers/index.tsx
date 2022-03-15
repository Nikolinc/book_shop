
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

        <div className="dropdown">
          <button className='dropbtn'> Categories</button>
            <div className="dropdown-content">
             <Categories/>
           </div>
        </div>

        <div className="search">
           <input type="search" id="search" placeholder="Search..." />
           <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        </div>



      <div className="shopping_cart">
        <button> 
          <div className="number_product_to_cart">
           {0}
         </div>
         <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </button>
      </div>    

      </div>
      
   </> 
  );
}

function Categories(){
  return(

   <>
     {categories.map(category =>(
         <button>{category}
         </button>    
     ))}
    </>)

}
