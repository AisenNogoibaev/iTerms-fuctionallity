import React from 'react'
import { Button, Select } from 'antd'
import './Header.less'
import { CustomButton } from '../CustomButton'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { useHistory } from 'react-router'
import { routes } from '../../routes'
import arrowDown from '../../images/arrowDown.png'

// actions 
import { is_delete } from '../../store/actions'

const { Option } = Select
export const Header = () => {
	const dispatch = useDispatch()

	const logins = useSelector((state) => state)
	console.log(logins);
	return (
		<header className='container header'>
			<Link to={routes.home} style={{ color: '#1D212A' }}>
				<div className='logo'>iTerms</div>
			</Link>
			<nav>
				<a href='#'>Generate</a>
				<a href='#'>Contact us</a>
				<a href='#'>Pricing</a>
				<a href='#'>Blog</a>
			</nav>
			<Select defaultValue='EN' style={{ width: 69}}>
				<Option value='EN'>EN</Option>
				<Option value='RU'>RU</Option>
			</Select>
		{
			logins.is_login 
			? <div style={{display: 'flex'}}>
				<div style={{alignSelf: "center"}}>
					{logins.localUsers[0].userName}
					</div>
				<Link to={routes.user_profile}>

				<img style={{ width: "30px", margin: "0 20px"}} src="https://chto-eto-takoe.ru/uryaimg/32574385521dd1847f7d1e5b940491ef.jpg" alt="" />
				</Link>
				<div>
					<Button danger
					onClick={(e) => dispatch(is_delete({
						localUsers: [],
						is_login: false,
					}))}>Exit</Button>
				</div>
			</div>
			:
			<div>
				<Link to={routes.login}>
					<Button type='text'>Log in</Button>
				</Link>
				<Link to={routes.sign_up}>
					<CustomButton primary>Sign up</CustomButton>
				</Link>

					{/* <CustomButton primary>prifile</CustomButton> */}
			</div>}
		</header>
	)
}
