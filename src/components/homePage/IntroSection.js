import React from "react"
import {
  IntroSectionWrapper,
  BasicTitleStyle,
  IntroDes,
  IntroPanelWrapper,
  IntroPanel,
} from "./style"
import { Row, Col } from "antd"

const IntroSection = () => {
  return (
    <IntroSectionWrapper>
      <Row style={{ height: "100%" }} justify="space-between" align="middle">
        <Col xxl={12} xl={10} lg={18} sm={20} xs={20} align="left">
          <BasicTitleStyle width="150px">About Us</BasicTitleStyle>
          <IntroDes>
            Contrary to popular belief, Lorem Ipsum is not simply random has
            roots in a piece of classical Latin literature from 45 BC, making it
            over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words
          </IntroDes>
        </Col>

        <Col xxl={12} xl={12} lg={24} sm={24} xs={24} align="center">
          <IntroPanelWrapper>
            <IntroPanel src="https://images.unsplash.com/photo-1570878786170-0723365bdf35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">
              <div className="panelTitle">Wish A Team</div>
              <div className="panelDes">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              </div>
            </IntroPanel>
            <IntroPanel src="https://images.unsplash.com/photo-1593787406536-3676a152d9cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">
              <div className="panelTitle">Wish A Win</div>
              <div className="panelDes">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              </div>
            </IntroPanel>
            <IntroPanel src="https://images.unsplash.com/photo-1508802595585-a7e56c972036?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">
              <div className="panelTitle">Wish A Dream</div>
              <div className="panelDes">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              </div>
            </IntroPanel>
          </IntroPanelWrapper>
        </Col>
      </Row>
    </IntroSectionWrapper>
  )
}

export default IntroSection
