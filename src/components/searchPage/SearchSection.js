import React from 'react'
import {connect} from 'react-redux'
import {Row,Col} from 'antd'
import { SearchSectionWrapper, SearchFilterWrapper, Cate, TagWrapper, DisableCate} from './style'
import Tag from './Tag'
import ResultSection from './ResultSection'
import MapSection from './MapSection'
import { addSportFilter, addCityFilter} from './state/actions/actions'

const SearchSection = ({ show, cate, cityFilter, sportFilter, addCityFilter, addSportFilter}) => {

	//-- user has to select at least one field at each cate
	const checkNonEmpty = (filter)=>{
		let nonEmpty = false
		for(const [key, value] of Object.entries(filter)){
			if(value.filter.length > 0){
				nonEmpty=true
				return nonEmpty
			}
		}
		return false
	}

	return (
		<>
			{
			show ?
			<SearchSectionWrapper className="search-section-wrapper">
				<SearchFilterWrapper>
					
					<Row justify="start" align="middle" style={{marginBottom:"30px"}}>
						<Col xl={4} lg={4} sm={10} xs={10} align="left">
							<Cate>Area</Cate>
						</Col>
						<Col xl={18} lg={18} sm={24} xs={24}>
							<TagWrapper>	
								<Tag name="North York" filter={cityFilter} setfilter={addCityFilter}/>
								<Tag name="Downtown" filter={cityFilter} setfilter={addCityFilter}/>
								<Tag name="Markhum" filter={cityFilter} setfilter={addCityFilter}/>
								<Tag name="Scarborough" filter={cityFilter} setfilter={addCityFilter} />
								<Tag name="Vaughan" filter={cityFilter} setfilter={addCityFilter}/>
								<Tag name="Richmond Hill" filter={cityFilter} setfilter={addCityFilter} />
								<Tag name="Georgina" filter={cityFilter} setfilter={addCityFilter} />
								<Tag name="Newmarket" filter={cityFilter} setfilter={addCityFilter} />
								<Tag name="Mississauga" filter={cityFilter} setfilter={addCityFilter} />
								<Tag name="Aurora" filter={cityFilter} setfilter={addCityFilter} />
							</TagWrapper>
						</Col>
					</Row>

					<Row justify="start" align="middle" style={{ marginBottom: "30px" }}>
						<Col xl={4} lg={4} sm={10} xs={10}>
							<Cate>Sports</Cate>
						</Col>
						<Col xl={18} lg={18} sm={24} xs={24}>
							<TagWrapper>
								<Tag name="Basketball" filter={sportFilter} setfilter={addSportFilter} />
								<Tag name="Volleyball" filter={sportFilter} setfilter={addSportFilter} />
								<Tag name="Soccer" filter={sportFilter} setfilter={addSportFilter} />
								<Tag name="Football" filter={sportFilter} setfilter={addSportFilter} />
								<Tag name="Hockey" filter={sportFilter} setfilter={addSportFilter} />
							</TagWrapper>
						</Col>
					</Row>

					<Row justify="center" align="middle">
						<Col span={24} align="center">
							{
								checkNonEmpty(cityFilter) && checkNonEmpty(sportFilter) ? <Cate width="200px">Apply</Cate> : <DisableCate width="200px">Apply</DisableCate>
							}
						</Col>
					
					</Row>

				</SearchFilterWrapper>

				<MapSection/>

				<ResultSection/>
				
			</SearchSectionWrapper> : null
			}
		</>
	)
}

const mapStateToProps = (state)=>{
	console.log(state.searchReducer.cityFilter)
	console.log(state.searchReducer.sportFilter)
	return {
		cityFilter: state.searchReducer.cityFilter,
		sportFilter: state.searchReducer.sportFilter
	}
}

const mapDispatchToProps =(dispatch)=>{
	return {
		addCityFilter: (city,filter) => { dispatch(addCityFilter(city,filter))},
		addSportFilter: (sport,filter) => { dispatch(addSportFilter(sport,filter)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchSection)

	//< Tag name = "North York" filter = { filter } setfilter = { setfilter } />


	// < Tag name = "Basketball" filter = { sportsFilter } setfilter = { setSportsFilter } />
	// 	<Tag name="Volleyball" filter={sportsFilter} setfilter={setSportsFilter} />
	// 	<Tag name="Soccer" filter={sportsFilter} setfilter={setSportsFilter} />
	// 	<Tag name="Football" filter={sportsFilter} setfilter={setSportsFilter} />
	// 	<Tag name="Hockey" filter={sportsFilter} setfilter={setSportsFilter} />