import React from 'react'
import {Row,Col} from 'antd'
import { AdvertisementWrapper } from './style'

const Advertiesment = () => {
	return (
		<Row justify="center" align="middle">
			<Col xxl={12} xl={12} lg={20} sm={22} xs={24}>
				<AdvertisementWrapper>
					<div className="cover-img"></div>
					<div className="ad-des"></div>
				</AdvertisementWrapper>
			</Col>
		</Row>
	)
}

export default Advertiesment
