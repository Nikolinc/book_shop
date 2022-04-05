import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../widgets/headers/index';
import Product from '../pages/catalog/index';
import '../style/global.scss';
import { render } from "react-dom";
import { BrowserRouter,Routes,  Route} from "react-router-dom"


function App() {

  const [data, setData] = useState({ values: [] });
  const [url, setUrl] = useState('http://127.0.0.1:3500/product');
  const [isLoading, setIsLoading] = useState(true);

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);
        console.log(result);
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
    console.log(data);
  }, [url]);

 

  return (
    
    <><Header />

    {isError && <div>Something went wrong ...</div>}

    {isLoading ? (
      <div>Loading ...</div>
    ) : (
      <div className='container'>

      {data.values.map(pos => (
        <Product 
          image = {pos.image}
          name = {pos.name}
          auter = {pos.auter}
          price = {pos.price}
      />))}

      </div> )}
      </>  
  )
}

export default App;
