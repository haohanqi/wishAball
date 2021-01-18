import React from "react"
import { Row, Col } from "antd"
import { DetailsPageWrapper } from "./style"
import { BasicTitleStyle } from "../components/homePage/style"
import Layout from "../components/layout"
const detailsPage = ({ pageContext }) => {
  console.log(pageContext.image)
  return (
    <Layout>
      <DetailsPageWrapper>
        <Row justify="space-around" align="start">
          <Col xxl={12} xl={12} md={12} sm={24} xs={24}>
            <BasicTitleStyle width="250px">{pageContext.title}</BasicTitleStyle>

            <img src={require(`../../static${pageContext.image}`)} />

            <div className="info-part">
              <BasicTitleStyle width="100px">Info</BasicTitleStyle>
              <p className="info-des">{pageContext.info}</p>
            </div>
          </Col>

          <Col xxl={12} xl={12} md={12} sm={24} xs={24} align="center">
            <div className="details-info-part">
              <div className="details-info">
                <BasicTitleStyle
                  width="100px"
                  style={{ marginBottom: "0px", fontSize: "1rem" }}
                >
                  Sport
                </BasicTitleStyle>
                <div className="details-info-des">{pageContext.sport}</div>
              </div>
              <div className="details-info">
                <BasicTitleStyle
                  width="100px"
                  style={{ marginBottom: "0px", fontSize: "1rem" }}
                >
                  Address
                </BasicTitleStyle>
                <div className="details-info-des">{pageContext.address}</div>
              </div>
              <div className="details-info">
                <BasicTitleStyle
                  width="100px"
                  style={{ marginBottom: "0px", fontSize: "1rem" }}
                >
                  phone
                </BasicTitleStyle>
                <div className="details-info-des">{pageContext.phone}</div>
              </div>
              <div className="details-info">
                <BasicTitleStyle
                  width="100px"
                  style={{ marginBottom: "0px", fontSize: "1rem" }}
                >
                  Website
                </BasicTitleStyle>
                <div className="details-info-des">{pageContext.website}</div>
              </div>
            </div>
          </Col>
        </Row>
      </DetailsPageWrapper>
    </Layout>
  )
}

export default detailsPage
