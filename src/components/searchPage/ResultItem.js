import React from 'react'
import {Link} from 'gatsby'
import { ResultItemWrapper } from './style'
import { BankOutlined, PhoneOutlined, DesktopOutlined} from '@ant-design/icons'

const ResultItem = ({data}) => {
	return (
		<ResultItemWrapper>
			<div className="sportTag">{data?data.sport:null}</div>
			<div className="resultTitle">{data ? data.organization : null}</div>
			<div className="info-row">
				<BankOutlined className="icon"/>
				<div>{data ? data.address:null}</div>
			</div>

			<div className="info-row">
				<PhoneOutlined className="icon" />
				<div>{data ? data.phone : null}</div>
			</div>

			<div className="info-row">
				<DesktopOutlined className="icon" />
				<div>{data ? data.website : null}</div>
			</div>

			<div className="see-more-button">
				<Link to={`/wishaball/${data.path}`}>See More</Link>
			</div>


			
		</ResultItemWrapper>
	)
}

export default ResultItem
