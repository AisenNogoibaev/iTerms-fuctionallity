import { Button } from 'antd'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { TextField } from '../../../components/TextField'
import { routes } from '../../../routes'
import { delete_account, is_delete } from '../../../store/actions'
import './index.less'

export const DeleteAccount = () => {
	const [thePassword, setThePassword] = useState('')
	const dispatch = useDispatch()
	const currentEmail = useSelector((state) => state.currentUser.userEmail)
	console.log(currentEmail)
	const history = useHistory()

	return (
		<div className='edit__password'>
			<h3>Are You Positive You wish to delete Your iTerms Account?</h3>
			<p>
				Please note that should you delete your account, all policies
				will be permanently removed from our database. You will be
				unable to retrieve your documents should you wish in the future.{' '}
				<br />
				<br />
				Before you go, please do not hesitate to contact our support
				team with any questions or concerns you may have with our
				services.{' '}
			</p>
			<div>
				<TextField
					label='Password'
					placeholder='Entre password'
					value={thePassword}
					onChange={(e) => setThePassword(e.target.value)}
				/>
				<Link to='/'>
					<a href='#'>Back</a>
				</Link>
				<Button
					className='button__edit'
					type='primary'
					danger
					onClick={() => {
						dispatch(
							delete_account(thePassword, currentEmail, {
								lastName: '',
								firstName: '',
								userEmail: '',
								userPassword: '',
								id: '',
								photo: '',
							}),
						)
						// setTimeout(() => {
						// 	history.push('/sign-up')
						// }, 2000)
					}}
				>
					Delete
				</Button>
			</div>
		</div>
	)
}
