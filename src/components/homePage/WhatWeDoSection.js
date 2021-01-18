import React from "react"
import { Row, Col } from "antd"
import { WhatWeDoSectionWrapper, BasicTitleStyle, SearchPanel } from "./style"

const WhatWeDoSection = () => {
  return (
    <WhatWeDoSectionWrapper>
      <Row style={{ height: "100%" }} justify="space-between" align="middle">
        <Row justify="start" style={{ width: "100%" }}>
          <Col>
            <BasicTitleStyle width="180px">What We Do</BasicTitleStyle>
          </Col>
        </Row>

        <Row justify="space-around" style={{ width: "100%" }}>
          <Col xxl={12} xl={12} lg={20} sm={24} xs={24} align="center">
            <SearchPanel src="https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">
              <div className="panelTitle">Wish A Sport</div>
              <div className="panelDes">
                In a piece of classical Latin literature from 45 BC,making it
                over
              </div>
              <div className="panelButton">See More</div>
            </SearchPanel>
          </Col>

          <Col xxl={12} xl={12} lg={20} sm={24} xs={24} align="center">
            <SearchPanel src="https://images.unsplash.com/photo-1517969275635-991027b42c4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">
              <div className="panelTitle">Wish A Class</div>
              <div className="panelDes">
                In a piece of classical Latin literature from 45 BC,making it
                over
              </div>
              <div className="panelButton">See More</div>
            </SearchPanel>
          </Col>
        </Row>
      </Row>
    </WhatWeDoSectionWrapper>
  )
}

export default WhatWeDoSection
