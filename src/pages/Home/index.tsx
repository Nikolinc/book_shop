import './style.scss'
import React, { useState, useEffect, useRef } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import axios from 'axios'
import Api from '../../services/api'
import Product from '../../components/product'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper'

export default function HomePage() {
  const selections = [
    'New literature',
    'The best of the best',
    '10 books by contemporary Asian writers',
    'Coming soon',
  ]

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
            <img src="https://raw.githubusercontent.com/Nikolinc/book_shop/main/src/assets/reading_person.jpg" />
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
                src="https://github.com/Nikolinc/book_shop/blob/main/src/assets/bestsell.png?raw=true"
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

          <div className="features">
            <FeaturesBlock
              image={`https://github.com/Nikolinc/book_shop/blob/main/assets/chick.png?raw=true`}
              header={"Let's grow together"}
              body={'Gifts for children and parents'}
            />

            <FeaturesBlock
              image={`https://github.com/Nikolinc/book_shop/blob/main/assets/animals.png?raw=true`}
              header={'Book watch'}
              body={'Share your impressions, get bonuses'}
            />

            <FeaturesBlock
              image={`https://github.com/Nikolinc/book_shop/blob/main/assets/cat.png?raw=true`}
              header={`Game "Book Field"`}
              body={'10% discount for winning'}
            />
          </div>
        </div>

        <div className="body_content">
          <SelectionBooks selections={selections} />
        </div>
      </main>
    </>
  )
}

function SelectionBooks(props) {
  return props.selections.map((pos) => (
    <div className={pos}>
      <div className="headersSelection">
        <p>{pos}</p>
      </div>
      <SlidersBooks />
    </div>
  ))
}

function FeaturesBlock(props) {
  return (
    <div className="features_block">
      <img src={[props.image]} alt="" />
      <div className="features_block_text">
        <div className="features_block_text_header">
          <p>{props.header}</p>
        </div>
        <div className="features_block_text_body">{props.body}</div>
      </div>
    </div>
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

function SlidersBooks() {
  const data = Api('http://127.0.0.1:3500/product')

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.values.map((pos) => (
          <SwiperSlide>
            <Product
              image={pos.image}
              name={pos.name}
              auter={pos.author}
              price={pos.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
