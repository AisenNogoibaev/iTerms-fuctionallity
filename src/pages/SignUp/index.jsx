import React from 'react'

import { CustomInput, Label, TextField } from '../../components/TextField'
import './index.less'
import { CustomButton } from '../../components/CustomButton'
import imgGoogle from './images/google.png'
import imgFacebook from './images/facebook.png'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { add_user, is_login } from '../../store/actions'
import { useEffect } from 'react'
import { useHistory } from 'react-router'
export const SignUp = () => {
	const [userEmail, setUserEmail] = useState('')
	const [userPassword, setUserPassword] = useState('')
	const [userName, setUserName] = useState('')
	const state = useSelector((state) => state)
	const history = useHistory()
 console.log(state)
	useEffect(() => {
		localStorage.setItem('users', JSON.stringify(state))
	}, [state])
	useEffect(() => {
		if (userEmail && userName && userPassword) {
			history.push('/profile')
			dispatch(is_login())
		}
	}, [state])

	const dispatch = useDispatch()
	return (
		<div className='sign__main'>
			<div className='sign__block container'>
				<div className='sign__block1'>
					<h1 className='sign__title'>Sign up</h1>

					<div className='textfield'>
						<Label htmlFor='Your Name'>Your Name</Label>
						<CustomInput
							type='text'
							placeholder='Your Name'
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
						/>
					</div>
					<br />
					<div className='textfield'>
						<Label htmlFor='Email'>Email</Label>
						<CustomInput
							type='email'
							placeholder='Enter the Email'
							value={userEmail}
							onChange={(e) => setUserEmail(e.target.value)}
						/>
					</div>
					<br />
					<div className='textfield'>
						<Label htmlFor='Password'>
							At least 8 characters long
						</Label>
						<CustomInput
							type='password'
							placeholder='Password'
							value={userPassword}
							onChange={(e) => setUserPassword(e.target.value)}
						/>
					</div>
					<b className='sign__link__text'>
						By proceeding, I agree with the{' '}
						<a href='#'>Terms of Service</a> and{' '}
						<a href='#'>Privacy & Policy</a>
					</b>
					<CustomButton
						className='sign__btn'
						primary
						onClick={() =>
							dispatch(
								add_user({
									userName,
									userEmail,
									userPassword,
									photo: '',
									is_login: true,

								}),
							)
						}
					>
						Create account
					</CustomButton>
					<p>Sign up with</p>
					<div className='sign__img__btns'>
						<img src={imgGoogle} alt='' />
						<img src={imgFacebook} alt='' />
					</div>
					<p className='sign__end__text'>
						Already have an account?{' '}
						<a href='https:google.com'>Log in</a>
					</p>
				</div>
				<div className='sign__block2'></div>
			</div>
		</div>
	)
}
