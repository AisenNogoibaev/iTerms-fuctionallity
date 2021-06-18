import React from 'react'
import { Button, Select } from 'antd'
import './Header.less'
import { CustomButton } from '../CustomButton'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { routes } from '../../routes'
import arrowDown from '../../images/arrowDown.png'

// actions
import { is_delete } from '../../store/actions'

const { Option } = Select
export const Header = () => {
	const history = useHistory()
	const currentUser = useSelector((state) => state.currentUser)
	const dispatch = useDispatch()

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
			<Select defaultValue='EN' style={{ width: 69 }}>
				<Option value='EN'>EN</Option>
				<Option value='RU'>RU</Option>
			</Select>

			{currentUser.firstName ? (
				<div style={{ display: 'flex' }}>
					<div style={{ alignSelf: 'center' }} className='profile__title'>
						{currentUser.firstName}{' '}
						{currentUser.lastName ? currentUser.lastName[0] : ''}
					</div>
					<Link to={routes.user_profile}>
						<img
							className='profile__img'
							style={{ width: '30px', margin: '0 20px' }}
							src='https://www.pngkey.com/png/full/178-1787134_png-file-svg-github-icon-png.png'
							alt=''
						/>
					</Link>
					<div>
						<Button
							danger
							onClick={() => {
								history.push('/')
								dispatch(is_delete())
							}}
						>
							Exit
						</Button>
					</div>
				</div>
			) : (
				<div>
					<Link to={routes.login}>
						<Button type='text'>Log in</Button>
					</Link>
					<Link to={routes.sign_up}>
						<CustomButton primary>Sign up</CustomButton>
					</Link>
				</div>
			)}
		</header>
	)
}
