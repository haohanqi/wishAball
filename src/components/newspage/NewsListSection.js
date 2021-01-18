import React from "react"
import { Row } from "antd"
import { NewsListSectionWrapper } from "./style"
import { BasicTitleStyle } from "../homePage/style"
import BlogItem from "../commonComponents/BlogItem"

const NewsListSection = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <NewsListSectionWrapper>
      <Row justify="start" align="middle">
        <BasicTitleStyle width="150px">News</BasicTitleStyle>
      </Row>

      <Row justify="space-around" align="middle">
        {edges.map(item => (
          <BlogItem
            key={item.node.frontmatter.path}
            blog={item.node}
            width="40%"
            padding="10px"
          />
        ))}
      </Row>
    </NewsListSectionWrapper>
  )
}

export default NewsListSection
