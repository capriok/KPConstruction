import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import arrowPrev from '../images/arrow-prev.png'
import arrowNext from '../images/arrow-next.png'

import F1_1 from '../images/gallery/fencing/fence1-1.jpg'
import F1_2 from '../images/gallery/fencing/fence1-2.jpg'
import F1_3 from '../images/gallery/fencing/fence1-3.jpg'
import F1_4 from '../images/gallery/fencing/fence1-4.jpg'
import F1_5 from '../images/gallery/fencing/fence1-5.jpg'

import H1_1 from "../images/gallery/home-prep/home1-1.jpg";
import H1_2 from "../images/gallery/home-prep/home1-2.jpg";
import H1_3 from "../images/gallery/home-prep/home1-3.jpg";
import H1_4 from "../images/gallery/home-prep/home1-4.jpg";
import H1_5 from "../images/gallery/home-prep/home1-5.jpg";
import H2_1 from "../images/gallery/home-prep/home2-1.jpg";
import H2_2 from "../images/gallery/home-prep/home2-2.jpg";
import H2_3 from "../images/gallery/home-prep/home2-3.jpg";
import H3_1 from "../images/gallery/home-prep/home3-1.jpg";
import H3_2 from "../images/gallery/home-prep/home3-2.jpg";
import H3_3 from "../images/gallery/home-prep/home3-3.jpg";
import H3_4 from "../images/gallery/home-prep/home3-4.jpg";
import H3_5 from "../images/gallery/home-prep/home3-5.jpg";
import H3_6 from "../images/gallery/home-prep/home3-6.jpg";

import LC1_1 from "../images/gallery/land-clearing/clearing1-1.png";
import LC1_2 from "../images/gallery/land-clearing/clearing1-2.png";
import LC1_3 from "../images/gallery/land-clearing/clearing1-3.png";
import LC1_4 from "../images/gallery/land-clearing/clearing1-4.png";
import LC2_1 from "../images/gallery/land-clearing/clearing2-1.jpg";
import LC2_2 from "../images/gallery/land-clearing/clearing2-2.jpg";
import LC2_3 from "../images/gallery/land-clearing/clearing2-3.jpg";
import LC3_1 from "../images/gallery/land-clearing/clearing3-1.jpg";

import LS1_1 from "../images/gallery/lot-shaping/lot1-1.jpg";
import LS1_2 from "../images/gallery/lot-shaping/lot1-2.jpg";
import LS1_3 from "../images/gallery/lot-shaping/lot1-3.jpg";
import LS1_4 from "../images/gallery/lot-shaping/lot1-4.jpg";
import LS2_1 from "../images/gallery/lot-shaping/lot2-1.jpg";
import LS2_2 from "../images/gallery/lot-shaping/lot2-2.jpg";
import LS2_3 from "../images/gallery/lot-shaping/lot2-3.jpg";

import M_1 from "../images/gallery/miscellaneous/misc1.jpg";
import M_2 from "../images/gallery/miscellaneous/misc2.jpg";
import SI_1 from "../images/gallery/miscellaneous/sep-install1.jpg";
import SI_2 from "../images/gallery/miscellaneous/sep-install2.jpg";
import SI_3 from "../images/gallery/miscellaneous/sep-install3.jpg";
import SI_4 from "../images/gallery/miscellaneous/sep-install4.jpg";
import TM_1 from "../images/gallery/miscellaneous/tomill-1.jpg";
import TM_2 from "../images/gallery/miscellaneous/tomill-2.jpg";
import TM_3 from "../images/gallery/miscellaneous/tomill-3.jpg";

const fencing1Images = [F1_1, F1_2, F1_3, F1_4, F1_5]
const home1Images = [H1_1, H1_2, H1_3, H1_4, H1_5]
const home2Images = [H2_1, H2_2, H2_3]
const home3Images = [H3_1, H3_2, H3_3, H3_4, H3_5, H3_6]
const landClearing1Images = [LC1_1, LC1_2, LC1_3, LC1_4]
const landClearing2Images = [LC2_1, LC2_2, LC2_3]
const landClearing3Images = [LC3_1]
const landShaping1Images = [LS1_1, LS1_2, LS1_3, LS1_4]
const landShaping2Images = [LS2_1, LS2_2, LS2_3]
const miscellaneous1Images = [M_1, M_2]
const miscellaneous2Images = [SI_1, SI_2, SI_3, SI_4]
const miscellaneous3Images = [TM_1, TM_2, TM_3]


const fencingImages = fencing1Images.concat()
const homePrepImages = home1Images.concat(home2Images, home3Images);
const landClearingImages = landClearing1Images.concat(landClearing2Images, landClearing3Images);
const lotShapingImages = landShaping1Images.concat(landShaping2Images);
const miscImages = miscellaneous1Images.concat(miscellaneous2Images, miscellaneous3Images);

const Gallery = () => {
  let ref = React.useRef()
  const handleOnDragStart = (e) => e.preventDefault()
  const responsive = { 0: { items: 1 }, 600: { items: 2 }, 1024: { items: 3 } };

  const createMap = (images) => {
    const map = images.map((h, i) => (
      <div className="img-cont" key={i}>
        <img src={h} alt="" className="carousel-img" onDragStart={handleOnDragStart} />
      </div>
    ))
    return map
  }

  const [items, setItems] = React.useState(createMap(landClearingImages))

  const sets = [
    { name: 'Land Clearing', thumb: landClearingImages[7], arr: landClearingImages },
    { name: 'Fencing', thumb: fencingImages[1], arr: fencingImages },
    { name: 'Home Prep', thumb: homePrepImages[13], arr: homePrepImages },
    { name: 'Lot Shaping', thumb: lotShapingImages[4], arr: lotShapingImages },
    { name: 'Miscellaneous', thumb: miscImages[1], arr: miscImages }
  ]

  const navItems = sets.map((s, i) => (
    <span key={i}>
      <div className="img-cont">
        <img src={s.thumb} alt="" onClick={() => setItems(createMap(s.arr))} />
        <p>{s.name}</p>
      </div>
    </span>
  ))

  return (
    <>
      <h1 className="title">Gallery</h1>
      <div className="gallery-cont">
        <img src={arrowPrev} alt=""
          className="slide-btn"
          onClick={() => ref.slidePrev()} />
        <AliceCarousel
          className="alice-carousel"
          ref={(el) => (ref = el)}
          mouseTrackingEnabled={true}
          infinite={false}
          responsive={responsive}
          dotsDisabled={true}
          buttonsDisabled={true}
          items={items}>
        </AliceCarousel>
        <img src={arrowNext} alt=""
          className="slide-btn"
          onClick={() => ref.slideNext()} />
      </div>
      <nav className="carousel-nav">{navItems}</nav>
    </>
  )
}

export default Gallery
