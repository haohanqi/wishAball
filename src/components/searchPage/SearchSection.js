import React, { useEffect, useMemo, memo, useCallback } from "react"
import { connect } from "react-redux"
import { Row, Col } from "antd"
import gsap from "gsap"
import scrollTo from "gsap/ScrollToPlugin"
import {
  SearchSectionWrapper,
  SearchFilterWrapper,
  Cate,
  TagWrapper,
  DisableCate,
} from "./style"
import Tag from "./Tag"
import ResultSection from "./ResultSection"
import MapSection from "./MapSection"
import {
  addSportFilter,
  addCityFilter,
  setResult,
  showResult,
} from "./state/actions/actions"
import { wishasport } from "../../data/wishASportData.json"

const filterData = (wishasport, cate, cityFilter, sportFilter) => {
  console.log("call")
  // according to cate set data
  let data
  if (cate && cate === "sport") {
    data = wishasport
  } else {
    data = null
  }

  // get selected fields
  let cities = getSelectFiled(cityFilter)
  let sports = getSelectFiled(sportFilter)
  console.log("cities", cities)
  console.log("sports", sports)

  //filter data
  let cityResult = []
  cities.forEach(city => {
    let cityData = data.filter(item => item.city === city)
    cityResult = cityResult.concat(cityData)
  })

  let sportResult = []
  sports.forEach(sport => {
    let sportData = cityResult.filter(item => item.sport === sport)
    sportResult = sportResult.concat(sportData)
  })

  console.log("sportResult", sportResult)

  return sportResult
}

const getSelectFiled = filterObject => {
  let result = []
  for (const [key, value] of Object.entries(filterObject)) {
    if (value.filter.length > 0) {
      result.push(value.filter)
    }
  }
  return result
}

const SearchSection = ({
  cate,
  cityFilter,
  sportFilter,
  addCityFilter,
  addSportFilter,
  setResult,
  showResult,
}) => {
  useEffect(() => {
    gsap.registerPlugin(scrollTo)
  })

  //-- user has to select at least one field at each cate
  const checkNonEmpty = filter => {
    let nonEmpty = false
    for (const [key, value] of Object.entries(filter)) {
      if (value.filter.length > 0) {
        nonEmpty = true
        return nonEmpty
      }
    }
    return nonEmpty
  }

  // --filter data memorize the result
  const memFilterData = useMemo(
    () => filterData(wishasport, cate, cityFilter, sportFilter),
    [wishasport, cate, cityFilter, sportFilter]
  )

  const applyButtonOnClick = () => {
    let result = memFilterData
    setResult(result)
    showResult(true)
    if (result.length > 0) {
      gsap.to(window, { duration: 1, scrollTo: ".result-wrapper" })
    }
  }

  return (
    <>
      {cate ? (
        <SearchSectionWrapper className="search-section-wrapper">
          <SearchFilterWrapper>
            <Row
              justify="start"
              align="middle"
              style={{ marginBottom: "30px" }}
            >
              <Col xl={4} lg={4} sm={10} xs={10} align="left">
                <Cate>Area</Cate>
              </Col>
              <Col xl={18} lg={18} sm={24} xs={24}>
                <TagWrapper>
                  <Tag
                    name="North York"
                    filter={cityFilter}
                    setfilter={addCityFilter}
                  />
                  <Tag
                    name="Toronto"
                    filter={cityFilter}
                    setfilter={addCityFilter}
                  />
                  <Tag
                    name="Markham"
                    filter={cityFilter}
                    setfilter={addCityFilter}
                  />
                  <Tag
                    name="Scarborough"
                    filter={cityFilter}
                    setfilter={addCityFilter}
                  />
                  <Tag
                    name="Vaughan"
                    filter={cityFilter}
                    setfilter={addCityFilter}
                  />
                  <Tag
                    name="Richmond Hill"
                    filter={cityFilter}
                    setfilter={addCityFilter}
                  />
                  <Tag
                    name="Georgina"
                    filter={cityFilter}
                    setfilter={addCityFilter}
                  />
                  <Tag
                    name="Newmarket"
                    filter={cityFilter}
                    setfilter={addCityFilter}
                  />
                  <Tag
                    name="Mississauga"
                    filter={cityFilter}
                    setfilter={addCityFilter}
                  />
                  <Tag
                    name="Aurora"
                    filter={cityFilter}
                    setfilter={addCityFilter}
                  />
                </TagWrapper>
              </Col>
            </Row>

            <Row
              justify="start"
              align="middle"
              style={{ marginBottom: "30px" }}
            >
              <Col xl={4} lg={4} sm={10} xs={10}>
                <Cate>Sports</Cate>
              </Col>
              <Col xl={18} lg={18} sm={24} xs={24}>
                <TagWrapper>
                  <Tag
                    name="Basketball"
                    filter={sportFilter}
                    setfilter={addSportFilter}
                  />
                  <Tag
                    name="Volleyball"
                    filter={sportFilter}
                    setfilter={addSportFilter}
                  />
                  <Tag
                    name="Soccer"
                    filter={sportFilter}
                    setfilter={addSportFilter}
                  />
                  <Tag
                    name="Football"
                    filter={sportFilter}
                    setfilter={addSportFilter}
                  />
                  <Tag
                    name="Hocky"
                    filter={sportFilter}
                    setfilter={addSportFilter}
                  />
                </TagWrapper>
              </Col>
            </Row>

            <Row justify="center" align="middle">
              <Col span={24} align="center">
                {checkNonEmpty(cityFilter) && checkNonEmpty(sportFilter) ? (
                  <Cate width="200px" onClick={applyButtonOnClick}>
                    Apply
                  </Cate>
                ) : (
                  <DisableCate width="200px">Apply</DisableCate>
                )}
              </Col>
            </Row>
          </SearchFilterWrapper>

          <ResultSection getSelectFiled={getSelectFiled} />

          <MapSection />
        </SearchSectionWrapper>
      ) : null}
    </>
  )
}

const mapStateToProps = state => {
  // console.log(state.searchReducer.cityFilter)
  // console.log(state.searchReducer.sportFilter)
  // console.log(state.searchReducer.cate)

  return {
    cate: state.searchReducer.cate,
    cityFilter: state.searchReducer.cityFilter,
    sportFilter: state.searchReducer.sportFilter,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCityFilter: (city, filter) => {
      dispatch(addCityFilter(city, filter))
    },
    addSportFilter: (sport, filter) => {
      dispatch(addSportFilter(sport, filter))
    },
    setResult: result => {
      dispatch(setResult(result))
    },
    showResult: show => {
      dispatch(showResult(show))
    },
  }
}

export default memo(connect(mapStateToProps, mapDispatchToProps)(SearchSection))
