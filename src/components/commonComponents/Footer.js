import React from 'react'
import {Row,Col} from 'antd'
import { FooterWrapper, FooterItemWrapper} from './style'
import standing from '../../images/standing.png'
import { HiOutlineMail, HiLocationMarker} from 'react-icons/hi'
import { BsPhone } from 'react-icons/bs'


const footer = () => {
	return (
		<FooterWrapper>
			<Row justify="space-around" align="middle" wrap={false}>
				<Col xxl={4} xl={4} md={0} sm={0} xs={0} align="center">
					<FooterItemWrapper>
						<img src={standing}/>
					</FooterItemWrapper>
				</Col>

				<Col xxl={6} xl={6} md={20} sm={24} xs={24} align="center">
					<FooterItemWrapper>
						<div className="footer-title">About Us</div>
						<div className="footer-des">
							Contrary to popular belief, Lorem Ipsum is not simply random 
							has roots in a piece of classical Latin literature from 45 BC
						</div>
					</FooterItemWrapper>
				</Col>

				<Col xxl={6} xl={6} md={20} sm={24} xs={24} align="center">
					<FooterItemWrapper>
						<div className="footer-title">Link</div>
						<a>Toronto Basketball</a>
						<a>OBA Basketball</a>
						<a>Toronto Basketball Training</a>
					</FooterItemWrapper>

				</Col>

				<Col xxl={6} xl={6} md={20} sm={12} xs={24} align="center">
					<FooterItemWrapper>
						<div className="footer-title">Contact Us</div>
						<div className="footer-contact"><HiOutlineMail className="icon"/> haohanqiharry@gmail.com</div>
						<div className="footer-contact"><BsPhone className="icon"/>6478295577</div>
						<div className="footer-contact"><HiLocationMarker className="icon"/>107 avondale ave North York ON</div>
					</FooterItemWrapper>
				</Col>
			</Row>

			<Row justify="center" align="middle">
				<Col span={12} align="center">
					<div style={{color:"white"}}>© Create by OBA basketball 2020</div> 
				</Col>
			</Row>
			
			
		</FooterWrapper>
	)
}

export default footer
