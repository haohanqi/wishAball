import React from 'react'
import { BlogTitle, LargeDes} from '../basicStyle'
import { BlogItemWrapper } from './style'

const BlogItem = ({width,padding}) => {
	return (
		<BlogItemWrapper width={width} padding={padding}>
			<header className="header-part">
				<BlogTitle>Winter Kids Basketball training</BlogTitle>
				<div className="date">2020 / 10 / 27</div>	
				<div className="author">Author: YE</div>
			</header>
			<LargeDes>
				Contrary to popular belief, Lorem Ipsum is not simply random 
				has roots in a piece of classical Latin literature from 45 BC, 
				making it over 2000 years old…..
			</LargeDes>
			<div className="readMore-button">
				Read More
			</div>
			
		</BlogItemWrapper>
	)
}

export default BlogItem
