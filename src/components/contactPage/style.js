import styled from 'styled-components'
import {BasicSection,basicColor,Des} from '../basicStyle'

export const ContactSectionWrapper = styled(BasicSection)`
	margin-top:60px;
	padding:5% 10%
`
export const ContactInfoWrapper = styled.div`
	width:100%;
	min-height:600px;
	display:flex;
	flex-direction:column;
	justify-content:flex-start;
	align-items:flex-start;
`

export const ContactFormWrapper = styled.div`
	width:100%;
	min-height:600px;

	.contact-form-container{
		display:flex;
		flex-direction:column;
		justify-content:space-around;
		align-items:center;

		input{
			width:70%;
			display:block;
			margin:15px 10px;
			outline:none;
			transition:0.3s;
			padding:10px;
			border: 1px solid black;
			background-color:#fafafa;
			font-size:1rem;
			&:focus{
				border: 2px solid black;
			}
		}

		textarea{
			width:70%;
			height:130px;
			display:block;
			margin:15px 10px;
			outline:none;
			transition:0.3s;
			padding:10px;
			border: 1px solid black;
			background-color:#fafafa;
			font-size:1rem;
			&:focus{
				border: 2px solid black;
			}
		}

		.submit-button{
			width:100px;
			height:35px;
			line-height:1rem;
			background-color:black;
			color:white;
		}

		@media only screen and (max-width:480px){
			input{
				width:100%;
			}
			textarea{
				width:100%;
			}
		}
	}

`

export const ContactInfoDes = styled(Des)`

`
export const ContactInfo = styled.div`
	display:flex;
	flex-direction:row;
	justify-content:flex-start;
	align-items:center;
	margin-bottom:10px;

	.icon{
		font-size:2rem;
		color:${basicColor.secondaryColor};
		margin-bottom:16px;
		margin-right:15px;
	}
`