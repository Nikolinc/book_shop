import React from 'react';
import Header from '../pages/headers/index';
import Product from '../pages/Product/index';
import '../style/global.scss';

interface Piece{
  image:string;
  name:string;
  auter:string;
  price:string;
  key:string
 
}

const productArray : Piece[] = [];

productArray.push({image:"https://img3.labirint.ru/rc/a63fd99361bfb913cf732d979d8b10ff/220x340/books75/747735/cover.jpg?1589469910",
name:"Берсерк том 1 ", 
auter:"Хуй Знает Кто Младший",
price:"1990р",key:"1"})

productArray.push({image:"https://img-gorod.ru/28/966/2896636_detail.jpg",
name:"Невеста Ноября", 
auter:"Арден Л.",
price:"518p",key:"2"})


productArray.push({image:"https://img-gorod.ru/29/023/2902301_detail.jpg",
name:"Живи и давай жить другим", 
auter:"Грун Х.",
price:"629p",key:"3"})

productArray.push({image:"https://img-gorod.ru/28/922/2892294_detail.jpg",
name:"Элизиум", 
auter:"Сакавич Н.",
price:"458p",key:"4"})

productArray.push({image:"https://img-gorod.ru/29/025/2902568_detail.jpg",
name:"Танец пылающего моря (#2)", 
auter:"Меллоу Э.Дж.",
price:"644p",key:"5"})

productArray.push({image:"https://img-gorod.ru/29/025/2902568_detail.jpg",
name:"Я - бездна", 
auter:"Карризи Д.",
price:"536p",key:"6"})

productArray.push({image:"https://img-gorod.ru/29/042/2904206_detail.jpg",
name:"Маркетинг 5.0. Технологии ...", 
auter:"Котлер Ф.",
price:"964",key:"7"})

function App() {

  return (
    <><Header />
    <Position/></>
        
  )
}

function Position(){
  return(<div className='container'>
    {productArray.map(pos => (<Product 
      image = {pos.image}
      name = {pos.name}
      auter = {pos.auter}
      price = {pos.price}
      />))}</div>
  )
}

export default App;
