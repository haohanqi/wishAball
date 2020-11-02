import React, { useEffect } from "react"
import gsap from 'gsap'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PanelSection from '../components/newspage/PanelSection'
import NewsListSection from '../components/newspage/NewsListSection'


const NewsPage = () => {
  
  useEffect(() => {
    gsap.set("body", { overflowY: "auto" })
  })

  return(
    <Layout>
      <SEO title="News"/>
      <PanelSection/>
      <NewsListSection/>
    </Layout>
)

}

export default NewsPage
