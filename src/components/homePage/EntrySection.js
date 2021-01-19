import React from "react"
import { Row, Col } from "antd"
import {
  EntrySectionWrapper,
  EntryTitle,
  EntryDes,
  TopNewsWrapper,
  TopNewsItemWrapper,
  TopNewsTitle,
} from "./style"
import ReactMarkdown from "react-markdown"
import aboutPageContent from '../../pageContent/AboutPage.json'

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

const EntrySection = () => {
  return (
    <EntrySectionWrapper src="https://images.unsplash.com/photo-1520399636535-24741e71b160?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">
      <Row justify="space-between" align="bottom">
        <Col xxl={12} xl={12} md={12} lg={12} sm={24} xs={24}>
          <EntryTitle className="entry-title">{aboutPageContent.entrySection.english.title}</EntryTitle>
          <EntryDes className="entry-des">
            <ReactMarkdown>{aboutPageContent.entrySection.english.description }</ReactMarkdown>
          </EntryDes>
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

export default EntrySection
