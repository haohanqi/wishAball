import React, { useEffect } from "react"
import { Row, Col } from "antd"
import gsap from "gsap"
import { connect } from "react-redux"
import { setCate } from "./state/actions/actions"
import scrollTo from "gsap/ScrollToPlugin"
import { SearchEntrySectionWrapper, SearchPanel } from "./style"
import { BasicTitleStyle } from "../homePage/style"
import searchEntryCover1 from '../../images/searchEntryCover1.jpeg'
import searchEntryCover2 from '../../images/searchEntryCover2.jpeg'


const SearchEntrySection = ({ setCate,content }) => {
  useEffect(() => {
    gsap.registerPlugin(scrollTo)
  })

  const searchClick = cate => {
    setCate(cate)
    gsap.to(window, { duration: 1, scrollTo: ".search-section-wrapper" })
  }
  return (
    <SearchEntrySectionWrapper>
      <Row justify="space-around" align="middle">
        <Col xxl={12} xl={12} lg={12} sm={24} xs={24} align="center">
          <SearchPanel src={searchEntryCover1}>
            <div className="panelTitle">
              {
              //content.entrySection.wishASport.english.title
              }
              WISH A SPORT
            </div>
            <div className="panelDes">
              {
                content.entrySection.wishASport.english.description
              }
            </div>
            <div className="button-row">
              <BasicTitleStyle
                width="120px"
                onClick={() => {
                  searchClick("sport")
                }}
              >
                Search
              </BasicTitleStyle>
            </div>
          </SearchPanel>
        </Col>

        <Col xxl={12} xl={12} lg={12} sm={24} xs={24} align="center">
          <SearchPanel src={searchEntryCover2}>
            <div className="panelTitle">
              {
              //content.entrySection.wishAClass.english.title
              }
              WISH A BOOK
            </div>
            <div className="panelDes">
              {content.entrySection.wishAClass.english.description}
            </div>
            <div className="button-row">
              <BasicTitleStyle
                width="120px"
                onClick={() => {
                  searchClick("class")
                }}
              >
                Search
              </BasicTitleStyle>
            </div>
          </SearchPanel>
        </Col>
      </Row>
    </SearchEntrySectionWrapper>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    setCate: cate => {
      dispatch(setCate(cate))
    },
  }
}

export default connect(null, mapDispatchToProps)(SearchEntrySection)
