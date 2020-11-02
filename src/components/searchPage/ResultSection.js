import React from 'react'
import {Row, Col} from 'antd'
import { ResultSectionWrapper } from './style'
import ResultItem from './ResultItem'

 const ResultSection = () => {
	return (
		<ResultSectionWrapper>
			<Row justify="start" align="middle" gutter={[50,50]}>
				<Col lg={8} xs={22} >
					<ResultItem/>
				</Col>

				<Col lg={8} xs={22}>
					<ResultItem/>
				</Col>

				<Col lg={8} xs={22}>
					<ResultItem/>
				</Col>

				<Col lg={8} xs={22}>
					<ResultItem/>
				</Col>

				<Col lg={8} xs={22}>
					<ResultItem/>
				</Col>
			</Row>
		</ResultSectionWrapper>
	)
}

export default ResultSection
