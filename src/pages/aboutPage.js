import React, { useEffect } from "react"
import gsap from "gsap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import EntrySection from "../components/homePage/EntrySection"
import IntroSection from "../components/homePage/IntroSection"
import WhatWeDoSection from "../components/homePage/WhatWeDoSection"
import WorkWithUs from "../components/homePage/WorkWithUsSection"
import NewsSection from "../components/homePage/NewsSection"
import { graphql } from "gatsby"
import aboutPageContent from '../pageContent/AboutPage.json'

const AboutPage = ({data}) => {
  useEffect(() => {
    gsap.set("body", { overflowY: "auto" })
  })

  return (
    <Layout>
      <SEO title="Home" />
      <EntrySection content={aboutPageContent}/>
      <IntroSection content={aboutPageContent}/>
      <WhatWeDoSection />
      <NewsSection data={data} />
      <WorkWithUs />
    </Layout>
  )
}

export default AboutPage

//get first two blog post
export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark(
      limit: 2
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`



