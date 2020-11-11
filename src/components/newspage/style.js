import styled from 'styled-components'
import {BasicSection} from '../basicStyle'
import {IntroPanel} from '../homePage/style'

//--PanelSection

export const PanelSectionWrapper = styled(BasicSection)`
margin-top:50px;
`

export const PanelItemWrapper = styled(IntroPanel)`
width:100%;
min-height:600px;
padding:5%;

.panelTitle{
	width:50%;
}

.panelDes{
	opacity:1;
	width:50%;
}


&:hover{
	transform: scale(1);
}

@media only screen and (max-width:1300px) and (min-width:992px){
	min-height:500px;
}

@media only screen and (max-width:992px) and (min-width:768px){
	min-height:400px;
	margin-top:30px;
	margin-bottom:30px;
}

@media only screen and (max-width:768px) and (min-width:480px){
	min-height:280px;
	margin:30px 0;

    .panelTitle{
		width:100%;
	}

	.panelDes{
		width:100%;
	}
}

@media only screen and (max-width:480px) and (min-width:320px){
	min-height:230px;
	margin: 35px 0;

	.panelTitle{
		width:100%;
		font-size:1.1rem;
	}

	.panelDes{
		width:100%;
		font-size:0.85rem;
	}
}

@media only screen and (max-width:320px){
	min-height:200px;
	margin: 45px 0;
	.panelTitle{
		width:100%;
		font-size:0.9rem;
	}

	.panelDes{
		width:100%;
		font-size:0.7rem;
	}
}
`

//-- NewsListSection

export const NewsListSectionWrapper = styled(BasicSection)`

`