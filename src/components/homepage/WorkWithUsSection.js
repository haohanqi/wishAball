import React from 'react'
import {Row, Col} from 'antd'
import { WorkWithUsWrapper, BasicTitleStyle, WorkWithUsDes, IdCard, IdTitle, IdInfoDes} from './style'


const WorkWithUsSection = () => {
	return (
		<WorkWithUsWrapper>
			<Row style={{ height: "100%" }} justify="space-between" align="middle">
				<Col xxl={12} xl={10} lg={18} sm={20} xs={20} align="left">
					<BasicTitleStyle width="180px">Work With Us</BasicTitleStyle>

					<WorkWithUsDes>
						Contrary to popular belief, Lorem Ipsum is not simply random 
						has roots in a piece of classical Latin literature from 45 BC, 
						making it over 2000 years old. Richard McClintock, 
						a Latin professor at Hampden-Sydney College	
					</WorkWithUsDes>

					<div className="button-row">
						<BasicTitleStyle width="150px">Contact</BasicTitleStyle>
					</div>

				</Col>
				<Col xxl={10} xl={10} lg={12} sm={15} xs={24} align="center">
					<IdCard>
						<IdTitle>Wish A Ball</IdTitle>
						<div className="info-row">
							<IdTitle>Email</IdTitle>
							<IdInfoDes>haohanqiharry@gmail.com</IdInfoDes>
						</div>
						<div className="info-row">
							<IdTitle>Phone</IdTitle>
							<IdInfoDes>647-829-5577</IdInfoDes>
						</div>
						<div className="info-row">
							<IdTitle>Follow</IdTitle>
							<IdInfoDes>LinkIn / Facebook / Ins</IdInfoDes>
						</div>
						<div className="info-row"></div>
					</IdCard>
				</Col>
			</Row>
		</WorkWithUsWrapper>
	)
}

export default WorkWithUsSection
