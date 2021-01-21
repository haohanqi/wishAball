import React from "react"
import { Row, Col } from "antd"
import {
  WorkWithUsWrapper,
  BasicTitleStyle,
  WorkWithUsDes,
  WorkWithUsItemWrapper
} from "./style"
import { GiNetworkBars } from 'react-icons/gi'
import { BsLaptop, BsQuestionSquare } from 'react-icons/bs'
import { RiAdvertisementLine } from 'react-icons/ri'



const WorkWithUsItem = ({ content, language,Icon })=>{
  return (
    <Col xxl={4} xl={5} lg={6} md={5} sm={10} xs={20}>
      <WorkWithUsItemWrapper>
        <div className="titleIcon"><Icon/></div>
        <WorkWithUsDes>
          {content[`${language}`].workDescription}
        </WorkWithUsDes>
      </WorkWithUsItemWrapper>
    </Col>

  )

}

const WorkWithUsSection = ({content, language}) => {
  return (
    <WorkWithUsWrapper>
          <BasicTitleStyle width="180px">Work With Us</BasicTitleStyle>

          <Row justify="space-around">
                <WorkWithUsItem Icon={GiNetworkBars} content={content[0].work} language={language}/>
                <WorkWithUsItem Icon={BsLaptop} content={content[1].work} language={language} />
                <WorkWithUsItem Icon={BsQuestionSquare} content={content[2].work} language={language} />
                <WorkWithUsItem Icon={RiAdvertisementLine} content={content[3].work} language={language} />
          </Row>

          <div className="button-row">
            <BasicTitleStyle width="150px">Contact</BasicTitleStyle>
          </div>
       
    </WorkWithUsWrapper>
  )
}

export default WorkWithUsSection


  // < div key = { index } >
  //   <span style={{ marginRight: "10px" }}><b>{index + 1}:</b></span>
  //   <span >{item.work.english.workDescription}</span>
  //                   </div >