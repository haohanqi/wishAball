import React from 'react'
import {graphql} from 'gatsby'
import {Row,Col} from 'antd'
import { BlogPageWrapper } from './style'


const blogPage = ({data}) => {
	return (
    <BlogPageWrapper>
      <Row justify="space-around" align="middle">
        <Col xxl={16} xl={16} md={20} sm={20} xs={22} >
          <article className="blog-wrapper">
            <h3 className="blog-title">{data.markdownRemark.frontmatter.title}</h3>
            <div className="blog-date">{data.markdownRemark.frontmatter.date}</div>
            
            {data.markdownRemark.frontmatter.author ? <div className="blog-author">Auhtor: {data.markdownRemark.frontmatter.author}</div>:null}

            <div className="blog-content" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
          </article>
        </Col>
      </Row>
      
    </BlogPageWrapper>
	)
}

export default blogPage

export const pageContent = graphql`
query($path: String!) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      path
      title
      author
    }
  }
}
` 
