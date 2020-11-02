import React,{useEffect} from 'react'
import {Row,Col} from 'antd' 
import gsap from 'gsap'
import  scrollTo  from 'gsap/ScrollToPlugin'
import { SearchEntrySectionWrapper, SearchPanel} from './style'
import {BasicTitleStyle} from '../homepage/style'


const SearchEntrySection = ({ setCate, showFilter}) => {
	useEffect(()=>{
		gsap.registerPlugin(scrollTo)
	})

	const searchClick = (cate)=>{
		showFilter(true); 
		setCate(cate);
		gsap.to(window, { duration: 1, scrollTo:".search-section-wrapper"})

	}
	return (
		<SearchEntrySectionWrapper>
			<Row justify="space-around" align="middle">
				<Col xxl={12} xl={12} lg={12} sm={24} xs={24} align="center">
					<SearchPanel src="https://images.unsplash.com/photo-1584129450613-8fde3f4bd426?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">
						<div className="panelTitle">Wish A Sport</div>
						<div className="panelDes">
							Contrary to popular belief, Lorem Ipsum is not simply random 
							has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years ol
						</div> 
						<div className="button-row">
							<BasicTitleStyle width="120px" onClick={() => { searchClick('sport') }}>Search</BasicTitleStyle>
						</div>
					</SearchPanel>
				</Col>

				<Col xxl={12} xl={12} lg={12} sm={24} xs={24} align="center">
					<SearchPanel src="https://images.unsplash.com/photo-1526391922840-891b87f9af1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">
						<div className="panelTitle">Wish A Class</div>
						<div className="panelDes">
							Contrary to popular belief, Lorem Ipsum is not simply random
							has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years ol
						</div>
						<div className="button-row">
							<BasicTitleStyle width="120px" onClick={() => { searchClick('class') }}>Search</BasicTitleStyle>
						</div>
					</SearchPanel>
				</Col>
			
			</Row>
			
		</SearchEntrySectionWrapper>
	)
}

export default SearchEntrySection
