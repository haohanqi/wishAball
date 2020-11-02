import styled from 'styled-components'
import { basicColor,Title, NavTitle} from '../basicStyle'

//-- Nav 
export const NavWrapper = styled.header`
	position:absolute;
	top:0;
	left:0;
	box-sizing:border-box;
	width:100%;
	height:65px;
	padding:10px 10%;
	overflow:hidden;

	@media only screen and (max-width:480px){
		padding:10px 10px;
	}
`

export const Nav = styled.nav`
	width:100%;
	display:flex;
	flex-direction:row;
	justify-content:space-around;
	align-items:center;

	@media only screen and (max-width:480px){
		justify-content:space-between;
	}
`

export const NavItem = styled(NavTitle)`
	a{
		color:${basicColor.secondaryColor}
	}
	transition:all 0.3s linear;

	&:hover{
		a{
			color:${basicColor.highlightColor}
		}
	}

	@media only screen and (max-width:480px){
		display:none;
	}
`
// mobile hum bar

export const Hum = styled.div`
	display:flex;
	width:35px;
	height:35px;
	flex-direction:column;
	justify-content:space-around;
	align-items:center;

	.humBar{
		width:90%;
		height:3px;
		background-color:${basicColor.secondaryColor}
	}

	@media only screen and (min-width:481px){
		display:none;
	}
`

export const Logo = styled.div`
	img{
		width:80px;
		height:55px;
		object-fit:contain;
	}

	@media only screen and (max-width:480px){
		display:none;
	}
`

export const LogoText = styled(Title)`
	color:${basicColor.secondaryColor};
	display:none;
	vertical-align:middle;

	@media only screen and (max-width:480px){
		display:inline-block;
	}
`

export const MobileHeaderWrapper = styled.header`
	height:100vh;
	width:100%;
	padding:5%;
	z-index:1;
	position:fixed;
	top:0;
	left:0;
	background-color:${basicColor.sideColor};
	display:flex;
	flex-direction:column;
	justify-content:space-around;
	align-items:center;
	.close-button{
		font-size:2rem;
		font-weight:bold;
		color:${basicColor.secondaryColor};
		width:100%;
		text-align:left;
	}
`

export const MobileNavItem = styled(NavItem)`
font-size:2rem;
@media only screen and (max-width:480px){
		display:block;
}
`

//--footer

export const FooterWrapper = styled.footer`
	width:100%;
	min-height:350px;
	background-color:${basicColor.secondaryColor};
	padding:5%;
`

//--BlogItem

export const BlogItemWrapper = styled.article`
	width: ${props=>props.width};
	padding: ${props=>props.padding};
	min-height:300px;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:flex-start;

	header{
		.author{
			margin: 10px 0;
		}

		.date{
			margin: 10px 0;
		}
	}

	.readMore-button{
		width:100%;
		display:flex;
		justify-content:flex-end;
		cursor:pointer;
		transition:all linear 0.3s;

		&:hover{
			font-weight:900
		}
	}

	@media only screen and (max-width:992px) and (min-width:480px){
		width:70%;
		padding:0;
	}

	@media only screen and (max-width:480px){
		width:100%;
		padding:0;
	}
`


