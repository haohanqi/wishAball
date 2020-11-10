import React from 'react'
import {Link} from 'gatsby'
import { BlogTitle, LargeDes} from '../basicStyle'
import { BlogItemWrapper } from './style'

const BlogItem = ({width,padding,blog}) => {
	console.log(blog)
	return (
		<BlogItemWrapper width={width} padding={padding}>
			<header className="header-part">
			<BlogTitle>{blog.frontmatter.title}</BlogTitle>
				<div className="date">{blog.frontmatter.date}</div>
			</header>
			<LargeDes>
				{blog.excerpt}
			</LargeDes>
			<div className="readMore-button">
				<Link to={blog.frontmatter.path}>Read More</Link>
			</div>
			
		</BlogItemWrapper>
	)
}

export default BlogItem
