import React, { useEffect } from "react"
import gsap from "gsap"
import { HomeOverlayWrapper } from "./style"
import overlay from "../../images/overlay.jpg"

const HomeOverlay = () => {
  // useEffect(()=>{
  // 	const t1 = gsap.timeline()
  // 	gsap.set("body",{overflowY:"hidden"})

  // 	t1.from(".overlayTitle",0.6,{opacity:0,height:-100})
  // 	  .to(".overlayTitle",0.6,{bottom:40,left:40})

  // })

  return (
    <HomeOverlayWrapper src={overlay} className="home-overlay-wrapper">
      <div className="overlayTitle">Wish A Ball</div>
    </HomeOverlayWrapper>
  )
}

export default HomeOverlay
