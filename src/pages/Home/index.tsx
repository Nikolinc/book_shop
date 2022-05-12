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

        {isError && <div>Something went wrong ...</div>}
                 
          <div className="novelties">
            {values.map((pos) => (
              <Novelties image={pos.image} />
            ))}
          </div>
        
      </div>

      <main className='main'>
        <div className="news">
          <div className="sliders">
          <Slide/>
          </div>
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
    {for(let i = 0; i < values.length-1; i++ ){
      <input type="radio" name = "radio -btn" id ={"radio" + i}  />
    }}
     


   { values.map((pos) => (    
      
      <div className="slide">
      <img src={[pos.image]} alt="advertising" height={'250px'} />
      </div>
    )     
    )}
    
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
