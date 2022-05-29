import './style.scss'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function HomePage() {

  const [isError, setIsError] = useState(false)
  const data = Api('http://127.0.0.1:3500/product');
  
  let values: string[] = data.values.slice(0, 10)
  return (
    <>
      <div className="home">
        <div className="home_info">
          <div className="bound"></div>
          <div className="info_headers">
            <h1>Beware of expensive books</h1>
            <h3>We only have the best books</h3>
          </div>
          <div className="bound"></div>
          <div className="news_books"></div>
        </div>

        <div className="imabe_home">
          <div className="background_image">
          <img
                  src="https://raw.githubusercontent.com/Nikolinc/book_shop/main/assets/reading_person.jpg"
                />
          </div>
            <div className="Polygon_1"></div>
            <div className="Polygon_2"></div>
            <div className="Polygon_3"></div>
            <div className="Polygon_4"></div>
            <div className="Polygon_5"></div>
            <div className="Polygon_6"></div>
            <div className="Polygon_7"></div>
        </div>
             
      </div>

      <main className='main'>
        <div className="news">
          <Slide/>
        </div>
      </main>
    </>
  )
}



function Slide(){

  const data =  Api('http://127.0.0.1:3500/slider');
  let values: string[] = data.values.slice(0, 10);

  return (
    <>
    <div className="slider">
      <div className="slides">
    {values.map((pos) => (   
      <input type="radio" name = "radio-btn" id ={"radio" + pos.idSliders}/>
      )     
      )}
     


    {values.map((pos) => (    
      
      <div className="slide">
      <img src={[pos.image]} alt="advertising" height={'250px'} />
      </div>
    )     
    )}

      <div className="navigation-auto">
        {values.map((pos) =>(
          <div className={"auto-btn"+[pos.idSliders]}></div>
        ))}
      </div>

    </div>
      <div className="navigation-manual">
      
      {values.map((pos) =>(
           <label htmlFor={"radio"+[pos.idSliders]} className='manual-btn'></label>
        ))}
       
      </div>

    </div>
   <script type = "text/javascript">
   </script>
    </>
  )
 
}

function Novelties(props: { image: string }) {
  return (
    <div className="novelty">
      <img src={[props.image]} alt="cover" height={'250px'} />
    </div>
  )
}


function Api(link:String){
  const [data, setData] = useState({ values: [] })
  const [url, setUrl] = useState(link)
  const [isLoading, setIsLoading] = useState(true)

  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const result = await axios(url)
        console.log(result)
        setData(result.data)
      } catch (error) {
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchData()
    console.log(data)
  }, [url])

  return data
}
