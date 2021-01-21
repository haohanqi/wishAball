import React from "react"
import { Row, Col } from "antd"
import {
  EntrySectionWrapper,
  EntryTitle,
  EntryDes,
  LanguageTrans,
  TopNewsWrapper,
  TopNewsItemWrapper,
  TopNewsTitle,
} from "./style"
import ReactMarkdown from "react-markdown"
import { connect } from "react-redux"
import { changeLanguage } from './state/actions/actions'

const TopNewsItem = () => {
  return (
    <TopNewsItemWrapper className="top-news-item">
      <TopNewsTitle>
        Winter Kids Basketball Train startAt Feb 4th 2021
      </TopNewsTitle>
      <div className="seeMore">See More</div>
    </TopNewsItemWrapper>
  )
}

const EntrySection = ({ content, language, changeLanguage}) => {
  const languageTrans = ()=>{
    changeLanguage()
  }
  return (
    <EntrySectionWrapper src="https://images.unsplash.com/photo-1520399636535-24741e71b160?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">
      <Row justify="space-between" align="bottom">
        <Col xxl={12} xl={12} md={12} lg={12} sm={24} xs={24}>
          <EntryTitle className="entry-title">{content[`${language}`].title}</EntryTitle>
          <EntryDes className="entry-des">
            <ReactMarkdown>{content[`${language}`].description }</ReactMarkdown>
          </EntryDes>
          <LanguageTrans onClick={() => { languageTrans() }}>{language === "chinese" ? "English":"中文"}</LanguageTrans>
        </Col>

        <Col xxl={6} xl={6} md={6} lg={6} sm={24} xs={24}>
          <TopNewsWrapper>
            <TopNewsItem />
            <TopNewsItem />
            <TopNewsItem />
          </TopNewsWrapper>
        </Col>
      </Row>
    </EntrySectionWrapper>
  )
}

const mapDispatchToProps = dispatch =>{
  return {
    changeLanguage: ()=>{
      dispatch(changeLanguage())
    }
  }
}

export default connect(null,mapDispatchToProps)(EntrySection)
