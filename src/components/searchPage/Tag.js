import React, {useState}from 'react'
import { TagStyle, TagActiveStyle} from './style'

const Tag = ({ name, setfilter,filter}) => {
	//const [active, setactive] = useState(false)
	const {active} = filter[`${name}`]

	return (
		<>
			{
				active ? <TagActiveStyle onClick={() => { setfilter(name,'')}}>{name}</TagActiveStyle> 
					: <TagStyle onClick={() => {  setfilter(name,name)}}>{name}</TagStyle>
			}
		</>
	)
}



export default Tag
