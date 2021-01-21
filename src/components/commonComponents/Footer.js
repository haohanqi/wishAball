import React from "react"
import { Row, Col } from "antd"
import { FooterWrapper, FooterItemWrapper } from "./style"
import standing from "../../images/standing.png"
import { HiOutlineMail, HiLocationMarker } from "react-icons/hi"
import { BsPhone } from "react-icons/bs"

const footer = ({contactInfo,footerInfo}) => {
  return (
    <FooterWrapper>
      <Row justify="space-between" align="middle" >
        <Col xxl={4} xl={4} md={0} sm={0} xs={0} align="center">
          <FooterItemWrapper>
            <img src={standing} />
          </FooterItemWrapper>
        </Col>

        <Col xxl={10} xl={10} md={20} sm={24} xs={24}>
          <FooterItemWrapper>
            <div className="footer-title">{footerInfo.intro.english.title}</div>
            <div className="footer-des">
              {footerInfo.intro.english.description }
            </div>
          </FooterItemWrapper>
        </Col>

        <Col xxl={10} xl={10} md={20} sm={24} xs={24}>
          <FooterItemWrapper>
            <div className="footer-title">Link</div>
            {
              footerInfo.links.map((item)=>{
                return(
                  <a key={item.linkItem.linkName} href={item.linkItem.linkAddress}>{item.linkItem.linkName}</a>
                )
              })
            }
          </FooterItemWrapper>
        </Col>
        <Col xxl={4} xl={4} md={20} sm={12} xs={24} ></Col>
        <Col xxl={10} xl={10} md={20} sm={24} xs={24}>
          <FooterItemWrapper>
            <div className="footer-title">Contact Us</div>
            <div className="footer-contact">
              <HiOutlineMail className="icon" /> {contactInfo.email}
            </div>
            <div className="footer-contact">
              <BsPhone className="icon" />
             
            </div>
            <div className="footer-contact">
              <HiLocationMarker className="icon" />
              {contactInfo.location}
            </div>
          </FooterItemWrapper>
        </Col>
      </Row>

      <Row justify="center" align="middle">
        <Col span={12} align="center">
          <div style={{ color: "white" }}>© Create by OBA basketball 2020</div>
        </Col>
      </Row>
    </FooterWrapper>
  )
}

export default footer
