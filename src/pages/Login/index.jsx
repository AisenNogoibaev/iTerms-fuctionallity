import React from 'react'
import { CustomInput, Label, TextField } from '../../components/TextField'
import './login.less'
import { CustomButton } from '../../components/CustomButton'
import imgGoogle from './images/google-login.png'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'
import { add_user, is_login } from '../../store/actions'

import imgFacebook from './images/facebook-login.png'
import { useDispatch, useSelector } from 'react-redux'
export const Login = () => {
	const dispatch = useDispatch()
	const state = useSelector((state) => state)
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
					<p style={{paddingLeft: "114px"}}>Or</p>

					{/* <div className='textfield'>
						<Label htmlFor='Your Name'>Your Name</Label>
						<CustomInput
							type='text'
							placeholder='Your Name'
						/>
					</div> */}
					<br />
					<div className='textfield'>
						<Label htmlFor='Email'>Email</Label>
						<CustomInput
							type='email'
							placeholder='Enter the Email'
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
						/>
					</div>
					<CustomButton
						className='sign__btn'
						primary
					>
						Sign in
					</CustomButton>

					<b className='sign__end__text'>
					Don't have an account? 
				<Link to={routes.sign_up}>
						<a 						
						onClick={() =>
							dispatch(
								add_user(state.localUsers[0]),
							)
						}>Sign up</a>
				</Link>
					</b>
				</div>
				<div className='sign__block2'></div>
			</div>
		</div>
	)
}
