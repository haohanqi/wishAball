import React from 'react'
import {Row,Col} from 'antd'
import { NewsSectionWrapper, BasicTitleStyle } from './style'
import BlogItem from '../commonComponents/BlogItem'

const NewsSection = () => {
	return (
		<NewsSectionWrapper>
			<Row justify="start">
				<BasicTitleStyle width="180px">Latest News</BasicTitleStyle>
			</Row>

			<Row justify="center">
				<BlogItem width="40%" padding="10px"/>
			</Row>

			<Row justify="center">
				<BlogItem width="40%" padding="10px"/>
			</Row>

			<Row justify="center">
				<BlogItem width="40%" padding="10px"/>
			</Row>

			<div className="button-row">
				<BasicTitleStyle width="180px">See More</BasicTitleStyle>
			</div>
		</NewsSectionWrapper>
	)
}

export default NewsSection
