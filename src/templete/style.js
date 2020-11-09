import styled from 'styled-components'
import {BasicSection, basicColor} from '../components/basicStyle'

export const DetailsPageWrapper = styled(BasicSection)`
	margin-top:60px;
	img{
		width:60%;
		margin:20px 0px;
		height:300px;
		object-fit:contain;
		border:1px solid black;
	}

	.info-part{
		font-size:1rem;
		color:${basicColor.secondaryColor};
	}

	.details-info-part{
		width:100%;
		min-height: 300px;
		display:flex;
		flex-direction:column;
		justify-content:space-around;
		align-items:center;

		.details-info{
			width:80%;
			margin-left:20%;
			display:flex;
			flex-direction:row;
			align-items:center;
		
			.details-info-des{
				font-size:1rem;
				color:${basicColor.secondaryColor};
				margin-left:20px;
			}
		}
	}

	@media only screen and (max-width:480px){
		.details-info-part{

			.details-info{
				width:100%;
				margin-left:0;
			}

		}

		img{
			width:100%;
			height:200px;
		}
		
	}
`