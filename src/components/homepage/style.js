import styled from 'styled-components'
import { basicColor, BasicSection, Title, Des, SectionTitle, BlogTitle} from '../basicStyle'

//--HomeOverlay

export const HomeOverlayWrapper = styled.div`

	width:100%;
	min-height:100vh;
	z-index:1;
	position:fixed;
	top:0;
	left:0;
	right:0;
	bottom:0;

	&:after{
		content:'';
		display:block;
		background-image:url(${props => props.src});
		background-repeat:no-repeat;
		background-size:cover;
		opacity: 1;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1; 
	}

	.overlayTitle{
		width:100%;
		font-size:6rem;
		font-weight:900;
		text-align:center;
		margin-top:50px;
		color:${basicColor.highlightColor}
	}

	@media only screen and (max-width:480px){
		display:none;
	}
`


//--EntrySection
export const EntrySectionWrapper = styled(BasicSection)`
	margin-top:60px;
	&:after{
		content:'';
		display:block;
		background-image:url(${props => props.src});
		background-repeat:no-repeat;
		background-size: contain;
		opacity: 0.8;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1; 
	}

	@media only screen and (max-width:768px){
		&:after{
			background-image:url('');
		}
	}

`

export const EntryTitle = styled(SectionTitle)`
	
`

export const EntryDes = styled(Title)`
	color:${basicColor.highlightColor};
	margin-bottom:30px;
`

export const TopNewsWrapper = styled.div`

	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
`

export const TopNewsItemWrapper = styled.div`

	width:220px;
	height:150px;
	background-color:${basicColor.sideColor};
	color:${basicColor.secondaryColor};
	margin-bottom:10px;
	padding:10px;
	opacity:0.7;
	cursor:pointer;

	.seeMore{
		width:100%;
		text-align:right;
	}

	@media only screen and (max-width:480px){
		width:100%;
	}

`

export const TopNewsTitle = styled(BlogTitle)`

	font-size:1.1rem;
`

//--IntroSection
export const IntroSectionWrapper = styled(BasicSection)`

`

export const BasicTitleStyle = styled(Title)`

	align-content:flex-end;
	width:${props=>props.width};
	margin-bottom:30px;
	padding:5px;
	background:${basicColor.highlightColor};
	height:50px;
	line-height:40px;
	text-align:center;

	@media only screen and (max-width:480px){

	}
`

export const IntroDes = styled(Des)`

	width:100%;
	margin-left:10%;
	margin-bottom:30px;
	line-height:3;
`

export const IntroPanelWrapper = styled.div`

	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	width:100%;
	height:100%;
	overflow:hidden;
`

export const IntroPanel = styled.div`

	width:70%;
	height:220px;
	cursor:pointer;
	display:flex;
	flex-direction:column;
	justify-content:flex-end;
	align-items:flex-start;
	padding:5px 10px;
	transition: all 0.4s linear;
	position:relative;

	&:after{
		display:block;
		content:'';
		background-image:url(${props => props.src});
		background-repeat:no-repeat;
		background-size:cover;
		opacity: 1;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1;  
	}

	.panelTitle{
		width:100%;
		text-align:left;
		font-size:1.5rem;
		font-weight:900;
		color:${basicColor.primaryColor};
		margin-bottom:5px;
		transition: all 0.4s linear;
	}

	.panelDes{
		opacity:0;
		font-size:1rem;
		font-weight:900;
		color:${basicColor.primaryColor};
		text-align:left;
		transition: all 0.4s linear;
	}

	&:hover{
		transform:scale(1.2);

		.panelTitle{
			transform:translateY(-20px);
		}

		.panelDes{
			opacity:1;
			transform:translateY(-30px);
		}

		&:after{
			opacity:0.8;
		}
	}

	@media only screen and (max-width:480px){
		width:100%;
		padding:5px 40px;
	}

	@media only screen and (min-width:992px) and (max-width:1200px){
		height:350px;
	}
`

//--WhatWeDoSection

export const WhatWeDoSectionWrapper = styled(BasicSection)`

`

export const SearchPanel = styled(IntroPanel)`

width:65%;
min-height:600px;
padding:20px;
margin-top:30px;
margin-bottom:30px;

.panelTitle{
	margin-bottom:20px;
}

.panelDes{
	opacity:1;
}

.panelButton{
	opacity:0;
	width:100%;
	font-size:1.5rem;
	font-weight:900;
	text-align:right;
	color:${basicColor.primaryColor};
	transition:all 0.4s linear;
}

&:hover{
	transform:scale(1);
	.panelButton{
		opacity:1;
	}
}

@media only screen and (max-width:480px){
	min-height:500px;
	width:100%;
}
`

//--WorkWithUsSection

export const WorkWithUsWrapper = styled(BasicSection)`

`

export const WorkWithUsDes = styled(IntroDes)`

`

export const IdCard = styled.div`

	width:100%;
	height:400px;
	padding:5%;
	background-color:#fafafa;
	display:flex;
	flex-direction:column;
	justify-content:space-around;
	align-items:center;
	border-radius:5%;

	.info-row{
		width:80%;
		display:flex;
		flex-direction:row;
		justify-content:space-between;
		align-items:center;
	}

	@media only screen and (max-width:480px){
		padding:0;
	}
`
export const IdTitle = styled(Title)`

	color:${basicColor.secondaryColor}
`
export const IdInfoDes = styled(Des)`

`


//--NewsSection

export const NewsSectionWrapper = styled(BasicSection)`

`


