import React from 'react'
import {Row} from 'antd'
import { NewsListSectionWrapper } from './style'
import {BasicTitleStyle} from '../homepage/style'
import BlogItem from '../commonComponents/BlogItem'

const NewsListSection = () => {
	return (
		<NewsListSectionWrapper>
			<Row justify="start" align="middle">
				<BasicTitleStyle width="150px">News</BasicTitleStyle>
			</Row>

			<Row justify="space-around" align="middle">
				<BlogItem width="35%" padding="10px"/>
				<BlogItem width="35%" padding="10px"/>
				<BlogItem width="35%" padding="10px"/>
				<BlogItem width="35%" padding="10px"/>
			</Row>
			
		</NewsListSectionWrapper>
	)
}

export default NewsListSection
