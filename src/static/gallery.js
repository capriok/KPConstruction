import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import arrowPrev from '../images/arrow-prev.png'
import arrowNext from '../images/arrow-next.png'

import h1_1 from "../images/gallery/home-prep/home1-1.jpg";
import h1_2 from "../images/gallery/home-prep/home1-2.jpg";
import h1_3 from "../images/gallery/home-prep/home1-3.jpg";
import h1_4 from "../images/gallery/home-prep/home1-4.jpg";
import h1_5 from "../images/gallery/home-prep/home1-5.jpg";


const Gallery = () => {

  let ref = React.useRef()

  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 }
  };

  const handleOnDragStart = (e) => e.preventDefault()
  return (
    <>
      <h1 className="title">Gallery</h1>
      <div className="gallery-cont">
        <button className="carousel-slide-btn"
          onClick={() => ref.slidePrev()}>
          <img src={arrowPrev} alt="" />
        </button>
        <AliceCarousel
          className="alice-carousel"
          ref={(el) => (ref = el)}
          mouseTrackingEnabled={true}
          infinite={false}
          responsive={responsive}
          dotsDisabled={true}
          buttonsDisabled={true}
        >
          <img src={h1_1} onDragStart={handleOnDragStart} className="carousel-img" />
          <img src={h1_2} onDragStart={handleOnDragStart} className="carousel-img" />
          <img src={h1_3} onDragStart={handleOnDragStart} className="carousel-img" />
          <img src={h1_4} onDragStart={handleOnDragStart} className="carousel-img" />
          <img src={h1_5} onDragStart={handleOnDragStart} className="carousel-img" />
        </AliceCarousel>
        <button className="carousel-slide-btn"
          onClick={() => ref.slideNext()}>
          <img src={arrowNext} alt="" />
        </button>
      </div>
    </>
  )
}

export default Gallery
