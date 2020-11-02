import React, { useEffect,useState } from "react"
import gsap from 'gsap'
import Layout from '../components/layout'
import SearchEntrySection from '../components/searchPage/SearchEntrySection'
import SearchSection from '../components/searchPage/SearchSection'

const SearchPage = () => {

	useEffect(() => {
		gsap.set("body", { overflowY: "auto" })
	})

	const [showSrearchSection, setshowSrearchSection] = useState(false)
	const [cate, setCate] = useState('sport')


	return (
		<Layout>
			<SearchEntrySection setCate={setCate} showFilter={setshowSrearchSection}/>
			<SearchSection show={showSrearchSection} cate={cate}/>
		</Layout>
	)
}

export default SearchPage
