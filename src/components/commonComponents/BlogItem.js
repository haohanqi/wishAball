import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { BlogTitle, LargeDes } from "../basicStyle"
import { BlogItemWrapper } from "./style"
import {Col} from 'antd'

const BlogItem = ({blog }) => {
  return (
    <Col xxl={10} xl={10} md={20} sm={24} xs={24}>
      <BlogItemWrapper>
        <header className="header-part">
          <BlogTitle>{blog.frontmatter.title}</BlogTitle>
          <div className="date">{blog.frontmatter.date}</div>
        </header>
        <LargeDes>{blog.excerpt}</LargeDes>
        <div className="readMore-button">
          <AniLink paintDrip hex="#fafafa" to={blog.frontmatter.path}>
            Read More
          </AniLink>
        </div>
      </BlogItemWrapper>
    </Col>
  )
}

export default BlogItem
