import {
  ADD_CITY_FILTER,
  ADD_SPORT_FILTER,
  SET_CATE,
  SET_RESULT,
  SHOW_RESULT,
} from "./types"

export const addCityFilter = (city, filter) => {
  //console.log("city filter",city,filter)
  return {
    type: ADD_CITY_FILTER,
    data: {
      city,
      filter,
    },
  }
}

export const addSportFilter = (sport, filter) => {
  //console.log("sport filter", sport, filter)
  return {
    type: ADD_SPORT_FILTER,
    data: {
      sport,
      filter,
    },
  }
}

export const setCate = cate => {
  //console.log("cate",cate)
  return {
    type: SET_CATE,
    data: {
      cate,
    },
  }
}

export const setResult = result => {
  return {
    type: SET_RESULT,
    data: {
      result,
    },
  }
}

export const showResult = show => {
  //console.log("show",show)
  return {
    type: SHOW_RESULT,
    data: {
      show: show,
    },
  }
}
