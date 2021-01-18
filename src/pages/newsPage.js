import React, { useEffect } from "react"
import gsap from "gsap"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PanelSection from "../components/newsPage/PanelSection"
import NewsListSection from "../components/newsPage/NewsListSection"

const NewsPage = ({ data }) => {
  useEffect(() => {
    gsap.set("body", { overflowY: "auto" })
  })

  return (
    <Layout>
      <SEO title="News" />
      <PanelSection />
      <NewsListSection data={data} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogList {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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

export default NewsPage
