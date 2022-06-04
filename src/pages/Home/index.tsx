import './style.scss'
import React, { useState, useEffect } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import axios from 'axios'

export default function HomePage() {
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
            <img src="https://raw.githubusercontent.com/Nikolinc/book_shop/main/assets/reading_person.jpg" />
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

      <main className="main">
        <div className="news">
          <Slide />
          <div className="best">
            <div className="header_best">
              <p>The best of the best</p>
            </div>
            <div className="best_image">
              <img
                src="https://github.com/Nikolinc/book_shop/blob/main/assets/bestsell.png?raw=true"
                alt=""
              />
            </div>
            <div className="best_basic_text">
              <p>A selection of the best books</p>
            </div>
            <div className="best_footer">
              <p>Based on online store sales</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

function Slide() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
  })
  const data = Api('http://127.0.0.1:3500/slider')
  let values: string[] = data.values.slice(0, 10)
  let i = 0

  return (
    <div ref={ref} className="keen-slider">
      {data.values.map((pos) => (
        <div className={`keen-slider__slide number-slide` + i}>
          <img src={[pos.image]}></img>
        </div>
      ))}
    </div>
  )
}

function Api(link: String) {
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
        setData(result.data)
      } catch (error) {
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [url])

  return data
}
