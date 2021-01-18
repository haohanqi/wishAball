import React, { memo } from "react"
import { Row, Col } from "antd"
import { connect } from "react-redux"
import { ResultSectionWrapper, KeyWord } from "./style"
import ResultItem from "./ResultItem"

const KeyWords = ({ cities, sports, getSelectFiled }) => {
  return (
    <Row justify="start" align="middle" style={{ marginBottom: "40px" }}>
      <KeyWord>Key Words:</KeyWord>
      {getSelectFiled(cities).map(word => {
        return (
          <Col>
            <KeyWord>{word}</KeyWord>
          </Col>
        )
      })}

      {getSelectFiled(sports).map(word => {
        return (
          <Col>
            <KeyWord>{word}</KeyWord>
          </Col>
        )
      })}
    </Row>
  )
}

const NoResult = () => {
  return (
    <Row justify="start" align="middle">
      <KeyWord>Sorry, No result. Please try other fields </KeyWord>
    </Row>
  )
}

const ResultSection = ({
  result,
  cities,
  sports,
  getSelectFiled,
  showResult,
}) => {
  return (
    <>
      {showResult ? (
        <ResultSectionWrapper className="result-wrapper">
          <KeyWords
            cities={cities}
            sports={sports}
            getSelectFiled={getSelectFiled}
          />

          <Row justify="start" align="middle" gutter={[50, 10]}>
            {result && result.length > 0 ? (
              result.map(item => {
                return (
                  <Col xxl={8} xl={8} lg={22} md={22} sm={22} xs={22}>
                    <ResultItem data={item} />
                  </Col>
                )
              })
            ) : (
              <NoResult />
            )}
          </Row>
        </ResultSectionWrapper>
      ) : null}
    </>
  )
}

const mapStateToProps = state => {
  return {
    result: state.searchReducer.result,
    cities: state.searchReducer.cityFilter,
    sports: state.searchReducer.sportFilter,
    showResult: state.searchReducer.showResult,
  }
}
export default connect(mapStateToProps)(ResultSection)
