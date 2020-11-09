import React,{useEffect} from "react"
import gsap from 'gsap'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeOverlay from '../components/homepage/HomeOverlay'
import EntrySection from '../components/homepage/EntrySection'
import IntroSection from '../components/homepage/IntroSection'
import WhatWeDoSection from '../components/homepage/WhatWeDoSection'
import WorkWithUs from '../components/homepage/WorkWithUsSection'
import NewsSection from '../components/homepage/NewsSection'


const IndexPage = () => {
  useEffect(()=>{
    //const t1 = gsap.timeline()
    // gsap.set("body", { overflowY: "hidden" })

    // if(window.innerWidth >= 1024){
    //   t1.from(".overlayTitle", 2, { opacity: 0, width: 0 })
    //     .to(".overlayTitle", 0.6, { opacity: 0, y: 100 })
    //     .to(".overlayTitle", { display: "none" })
    //     .to(".home-overlay-wrapper", 0.6, { opacity: 0 })
    //     .to(".home-overlay-wrapper", { display: "none" })
    //     .from(".entry-title", 0.3, { opacity: 0, color: "black", y: -100 })
    //     .from(".entry-des", 0.3, { opacity: 0, color: "black", y: -100 })
    //     .from(".top-news-item", 0.3, { stagger: 0.3, x: 100, opacity: 0 })
    // }

    gsap.set("body", { overflowY: "auto" })


  })

  return(
  <Layout>
    <SEO title="Home" />
    <EntrySection/>
    <IntroSection/>
    <WhatWeDoSection/>
    <NewsSection/>
    <WorkWithUs />
  </Layout>
  )
}

export default IndexPage
