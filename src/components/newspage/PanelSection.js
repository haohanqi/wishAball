import React from 'react'
import { Row, Col, Carousel} from 'antd'
import { PanelSectionWrapper, PanelItemWrapper, CarouselWrapper} from './style'

const PanelItem = () => {
	return (
		<PanelItemWrapper src="https://images.unsplash.com/photo-1544919982-b61976f0ba43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">
			<div className="panelTitle">North York Night BasketBall</div>
			<div className="panelDes">Richard McClintock, Latin professor at Hampden-Sydney College 
				n Virginia.Richard McClintock, Latin professor at Hampden-Sydney College in Virginia.
			</div>
		</PanelItemWrapper>
	)
}


const PanelSection = () => {
	return (
		<PanelSectionWrapper>
			<Row justify="center" align="middle">
				<Col xxl={22} xl={22} lg={22} md={0} sm={0} xs={0}>
					<Carousel style={{width: "100%"}} autoplay={true}>
						<PanelItem/>
						<PanelItem/>
						<PanelItem/>
					</Carousel>
				</Col>

				<Col xxl={0} xl={0} lg={0} md={22} sm={24} xs={24}>
					<PanelItem />
					<PanelItem />
					<PanelItem />
				</Col>
			</Row>

		</PanelSectionWrapper>
	)
}

export default PanelSection
