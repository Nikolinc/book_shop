import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss'

export default function Heder() {
    return (
        <footer>
            <div className="In_our_stores">
                 
                 <div className="In_our_stores_header">
                    <img src={"https://github.com/Nikolinc/book_shop/blob/main/assets/books.png?raw=true"} alt="" height={"50px"} />    
                    <h3>In our store</h3>
                </div>
                    <div className="link_container">
                        <a href="">Store addresses</a>
                        <a href="">Services</a>
                        <a href="">Our partners</a>
                        <a href="">About company</a>
                        <a href="">Do you want to work with us?</a>
                    </div>
                </div>
            <div className="In_the_online_store">
                <div className="In_the_online_store_header">
                    <img src={"https://github.com/Nikolinc/book_shop/blob/main/assets/shopping_cart.png?raw=true"} alt="" height={"50px"} />    
                    <h3>In the online store</h3>
                </div>
                <div className="link_container">
                        <a href="">Shipping and payment</a>
                        <a href="">Questions and answers</a>
                        <a href="">Stock</a>
                        <a href="">Books</a>
                        <a href="">Souvenirs</a>
                        <a href="">Selling Rules</a>
                        <a href="">Privacy Policy</a>
                        <a href="">Mobile version of the site</a>
                </div>
            </div>
            <div className="Subscribe_to_news">
               
                <div className="Subscribe_to_news_header">
                    <img src={"https://github.com/Nikolinc/book_shop/blob/main/assets/letter.png?raw=true"} alt="" height={"50px"} />    
                    <h3>Subscribe to new</h3>
                </div>
                <div className="link_container">
                        <a href="">We are in social networks:</a>
                </div>
            </div>
        </footer>
    )
}