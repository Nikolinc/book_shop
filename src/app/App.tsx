import {useEffect,useState} from 'react';
import axios from 'axios';
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


function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3500/product',
        );
    setData(result.data)
      };
      fetchData();
      setLoading(false);
  },[]);

 
  if (loading){
    return <div>loading</div>
  }

  console.log(data);
  return (
    <><Header />
    <div className='container'>
     //{data.map(pos => (<Product 
      image = {pos.image}
      name = {pos.name}
      auter = {pos.auter}
      price = {pos.price}
      />))}</div>
      </>  
  )
}




export default App;
