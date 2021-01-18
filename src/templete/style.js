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

export const BlogPageWrapper = styled(BasicSection)`
	.blog-wrapper{
		.blog-title{
			font-size:2rem;
			font-weight:900;
		}

		.blog-date{
			font-size:1rem;
			font-weight:900;
			margin-bottom:10px;
		}

		.blog-author{
			font-size:1.2rem;
			font-weight:900;
			margin-bottom:10px;
		}

		.blog-content{
			font-size:1.2rem;
			img{
				width:60%;
				margin:20px 0px;
				height:300px;
				object-fit:contain;
				border:1px solid black;
			}
		}
	}

	@media only screen and (max-width:480px){
		.blog-wrapper{

			.blog-title{
				font-size:1.5rem;
			}

			.blog-author{
				font-size:1rem;
			}

			.blog-content{
				img{
					width:100%;
					height:200px;
				}

			}
		}
	}

	@media only screen and (min-width:1600px){
		padding:5%
	}

`