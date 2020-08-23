/*eslint react-hooks/exhaustive-deps: "off"*/
import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import * as i from './bank/bank.js'

import FullView from '../full-view'

import arrowPrev from '../../images/arrow-prev.png'
import arrowNext from '../../images/arrow-next.png'

const fencing1Images = [i.F1_1, i.F1_2, i.F1_3, i.F1_4, i.F1_5]
const home1Images = [i.H1_1, i.H1_2, i.H1_3, i.H1_4, i.H1_5]
const home2Images = [i.H2_1, i.H2_2, i.H2_3]
const home3Images = [i.H3_1, i.H3_2, i.H3_3, i.H3_4, i.H3_5, i.H3_6]
const landClearing1Images = [i.LC1_1, i.LC1_2, i.LC1_3, i.LC1_4]
const landClearing2Images = [i.LC2_1, i.LC2_2, i.LC2_3]
const landClearing3Images = [i.LC3_1]
const roadMaintenance1Images = [i.RM1_1, i.RM1_2, i.RM1_3, i.RM1_4]
const roadMaintenance2Images = [i.RM2_1, i.RM2_2, i.RM2_3]
const trenching1Images = [i.T1_1, i.T1_2, i.T1_3, i.T1_4]
const miscellaneous1Images = [i.M_1, i.M_2]
const miscellaneous2Images = [i.SI_1, i.SI_2, i.SI_3, i.SI_4]
const miscellaneous3Images = [i.TM_1, i.TM_2, i.TM_3]

const fencingImages = fencing1Images.concat()
const homePrepImages = home1Images.concat(home2Images, home3Images);
const landClearingImages = landClearing1Images.concat(landClearing2Images, landClearing3Images);
const roadMaintenanceImages = roadMaintenance1Images.concat(roadMaintenance2Images);
const trenchingImages = trenching1Images.concat();
const miscImages = miscellaneous1Images.concat(miscellaneous2Images, miscellaneous3Images);

const Gallery = () => {
  const isMobile = window.innerWidth < 500
  let ref = React.useRef()
  const handleOnDragStart = (e) => e.preventDefault()
  const responsive = { 0: { items: 1 }, 600: { items: 2 }, 1024: { items: 3 } };

  const createMap = (images) => {
    const map = images.map((src, i) => (
      <div className="img-cont" key={i}>
        <img src={src} alt="" className="carousel-img"
          onDragStart={handleOnDragStart}
          onClick={() => !isMobile && setViewState({ open: true, img: src })} />
      </div>
    ))
    return map
  }

  const [items, setItems] = React.useState([])
  const [viewState, setViewState] = React.useState({
    open: false,
    img: ''
  })

  const handleViewClose = () => {
    setViewState({ open: false, img: '' })
  }

  const sets = [
    { name: 'Land Clearing', thumb: landClearingImages[7], arr: landClearingImages },
    { name: 'Site Preparation', thumb: homePrepImages[3], arr: homePrepImages },
    { name: 'Road Maintenance', thumb: roadMaintenanceImages[4], arr: roadMaintenanceImages },
    { name: 'Utilities Trenching', thumb: trenchingImages[0], arr: trenchingImages },
    { name: 'Fencing', thumb: fencingImages[1], arr: fencingImages },
    { name: 'Miscellaneous', thumb: miscImages[1], arr: miscImages }
  ]

  const navItems = sets.map((set, i) => (
    <div className="img-cont" key={i}>
      <img src={set.thumb} alt="" onClick={() => setItems(createMap(set.arr))} />
      <p>{set.name}</p>
    </div>
  ))

  React.useEffect(() => {
    setItems(createMap(landClearingImages))
  }, [])

  const Nav = (props, { src }) => (<img src={src} alt="" className="slide-btn" {...props} />)

  return (
    <>
      {viewState.open && <FullView state={viewState} close={handleViewClose} />}
      <h1 className="title">Gallery</h1>
      <div className="gallery-cont">
        <Nav src={arrowPrev} onClick={() => ref.slidePrev()} />
        <AliceCarousel
          className="alice-carousel"
          ref={(el) => (ref = el)}
          mouseTrackingEnabled={isMobile ? true : false}
          infinite={true}
          responsive={responsive}
          dotsDisabled={true}
          buttonsDisabled={true}
          items={items}
          startIndex={0}
        >
        </AliceCarousel>
        <Nav src={arrowNext} onClick={() => ref.slideNext()} />
      </div>
      <nav className="carousel-nav">{navItems}</nav>
    </>
  )
}

export default Gallery
