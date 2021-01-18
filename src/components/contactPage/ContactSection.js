import React from 'react'
import {Row,Col} from 'antd'
import { HiOutlineMail, HiLocationMarker } from 'react-icons/hi'
import { BsPhone } from 'react-icons/bs'
import { FaInstagram, FaYoutube } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'
import { BasicTitleStyle } from '../homePage/style'
import { ContactSectionWrapper, ContactInfoWrapper, ContactInfoDes, ContactInfo, ContactFormWrapper} from './style'

const ContactSection = () => {
	return (
		<ContactSectionWrapper>
			<Row justify="space-around" align="middle">
				<Col xxl={10} xl={10} lg={10} md={10} sm={20} xs={24}>
					<ContactInfoWrapper>
						<BasicTitleStyle>Get In Tach</BasicTitleStyle>
						<ContactInfoDes>We are 24h avalible, if you have any question. Feel free to contact us.</ContactInfoDes>
						<ContactInfo>
							<HiOutlineMail className="icon"/> 
							<ContactInfoDes>Hohanqi@gmail.com</ContactInfoDes>
						</ContactInfo>
						<ContactInfo>
							<BsPhone className="icon" />
							<ContactInfoDes>647-892-7766</ContactInfoDes>
						</ContactInfo>
						<ContactInfo>
							<HiLocationMarker className="icon" />
							<ContactInfoDes>104 avondale ave North York ON</ContactInfoDes>
						</ContactInfo>

						<BasicTitleStyle>Follow Us</BasicTitleStyle>
						<ContactInfoDes>Get lastest update on our social media</ContactInfoDes>
						<ContactInfo>
							<FaInstagram className="icon" />
							<FaYoutube className="icon"/>
							<AiFillLinkedin className="icon"/>
						</ContactInfo>
					</ContactInfoWrapper>
				</Col>
				<Col xxl={10} xl={10} lg={10} md={10} sm={20} xs={24}>
					<ContactFormWrapper>
						<form className="contact-form-container" method="post" data-netlify="true" data-netlify-honeypot="bot-field" name="contact">
							<BasicTitleStyle>Let's have a talk</BasicTitleStyle>
							<input type="hidden" name="bot-field" />
							<input type="hidden" name="form-name" value="contact" />
							<input type="text" className="formInput" placeholder="Your name" name="clients name" required />
							<input type="email" className="formInput" placeholder="Your Email" name="clients email" required />
							<input type="text" className="formInput" name="company name" placeholder="Company Name" />
							<textarea type="text" className="messageInput" name="message" placeholder="Message" />
							<input type="submit" className="submit-button" value="Send" />
						</form>
					</ContactFormWrapper>
				</Col>
			</Row>
		</ContactSectionWrapper>
	)
}

export default ContactSection
