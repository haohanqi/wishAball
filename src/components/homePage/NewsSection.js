import React from "react"
import { Row, Col } from "antd"
import { NewsSectionWrapper, BasicTitleStyle } from "./style"
import BlogItem from "../commonComponents/BlogItem"

const NewsSection = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <NewsSectionWrapper>
      <Row justify="start">
        <BasicTitleStyle width="180px">Latest News</BasicTitleStyle>
      </Row>
      <Row justify="space-between" align="middle">
        {
        
            edges.map(item => (    
                <BlogItem
                  key={item.node.frontmatter.path}
                  blog={item.node}
                />
            ))
        
        }
      </Row>

      <div className="button-row">
        <BasicTitleStyle width="180px">See More</BasicTitleStyle>
      </div>
    </NewsSectionWrapper>
  )
}

{
  /* <Row justify="center">
	<BlogItem width="40%" padding="10px" />
</Row>

	<Row justify="center">
		<BlogItem width="40%" padding="10px" />
	</Row>

	<Row justify="center">
		<BlogItem width="40%" padding="10px" />
	</Row> */
}

export default NewsSection
