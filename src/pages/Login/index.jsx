import React, { useState } from 'react'
import './login.less'
import { useDispatch, useSelector } from 'react-redux'
import { CustomInput, Label } from '../../components/TextField'
import { CustomButton } from '../../components/CustomButton'
import { Link, useHistory } from 'react-router-dom'
import { routes } from '../../routes'
import { login_user } from '../../store/actions'

import imgGoogle from './images/google-login.png'
import imgFacebook from './images/facebook-login.png'

export const Login = () => {
	const dispatch = useDispatch()
	const succes = useSelector((state) => state.succes)

	const [inEmail, setInEmail] = useState('')
	const [inPassword, setInPassword] = useState('')

	const history = useHistory()

	if (succes) {
		history.push('/profile')
	}
	return (
		<div className='sign__main'>
			<div className='sign__block container'>
				<div className='sign__block1'>
					<h1 className='sign__title'>Sign in</h1>
					<p>Sign up with</p>
					<div className='sign__img__btns'>
						<img src={imgGoogle} alt='' />
						<img src={imgFacebook} alt='' />
					</div>
					<p style={{ paddingLeft: '114px' }}>Or</p>
					<br />
					<div className='textfield'>
						<Label htmlFor='Email'>Email</Label>
						<CustomInput
							type='email'
							placeholder='Enter the Email'
							value={inEmail}
							onChange={(e) => setInEmail(e.target.value)}
						/>
					</div>
					<br />
					<div className='textfield'>
						<Label htmlFor='Password'>Password </Label>
						<CustomInput
							type='password'
							placeholder='Password'
							value={inPassword}
							onChange={(e) => setInPassword(e.target.value)}
						/>
					</div>
					<CustomButton
						className='sign__btn'
						primary
						onClick={() => {
							dispatch(login_user({ inEmail, inPassword }))
						}}
					>
						Sign in
					</CustomButton>

					<b className='sign__end__text'>
						Don't have an account?
						<Link to={routes.sign_up}>
							<a href='#'>Sign up</a>
						</Link>
					</b>
				</div>
				<div className='sign__block2'></div>
			</div>
		</div>
	)
}
