import React from 'react'
import { ResultItemWrapper } from './style'
import { BankOutlined, PhoneOutlined, DesktopOutlined} from '@ant-design/icons'

const ResultItem = () => {
	return (
		<ResultItemWrapper>
			<div className="sportTag">BasketBall</div>
			<div className="resultTitle">YMCA Child Gym Center</div>
			<div className="info-row">
				<BankOutlined className="icon"/>
				<div>107 avondale ave North York</div>
			</div>

			<div className="info-row">
				<PhoneOutlined className="icon" />
				<div>647-829-5577</div>
			</div>

			<div className="info-row">
				<DesktopOutlined className="icon" />
				<div>www.ymac.com</div>
			</div>


			
		</ResultItemWrapper>
	)
}

export default ResultItem
