import React, { useState } from 'react'
import './index.less'
import {
	CheckCircleTwoTone,
	EyeOutlined,
	EyeInvisibleOutlined,
} from '@ant-design/icons'
import { Alert, Button, Space } from 'antd'
import { TextField } from '../../../components/TextField'
import { CustomButton } from '../../../components/CustomButton'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { edit_password } from '../../../store/actions'
export const ChangePassword = () => {
	const [oldPassword, setOldPassword] = useState('')
	const [newPassword, setNewPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')
	const currentUser = useSelector((state) => state.currentUser)
	const dispatch = useDispatch()

	const [visible, setVisible] = useState(false)
	const [onDown, setOnDown] = useState(false)

	const handleClose = () => {
		setTimeout(() => {
			setVisible(false)
		}, 3000)
	}

	return (
		<div className='ChabgeBlock'>
			<div className='inputs'>
				{visible ? (
					<Alert
						message='Successfully!'
						type='success'
						closable
						afterClose={handleClose()}
						style={{
							width: 250,
							textAlign: 'center',
							margin: '20px 0',
						}}
					/>
				) : null}

				<div className='input'>
					<TextField
						value={oldPassword}
						onChange={(e) => setOldPassword(e.target.value)}
						label='Old password'
						placeholder='Enter password'
						type={onDown ? 'text' : 'password'}
					/>
					{oldPassword ? (
						<div className='eyes__password'>
							{onDown ? (
								<EyeOutlined
									onMouseDown={() => {
										setOnDown(true)
									}}
									onMouseUp={() => {
										setOnDown(false)
									}}
								/>
							) : (
								<EyeInvisibleOutlined
									onMouseDown={() => {
										setOnDown(true)
									}}
									onMouseUp={() => {
										setOnDown(false)
									}}
								/>
							)}
						</div>
					) : null}
					{currentUser.userPassword === oldPassword && (
						<CheckCircleTwoTone
							twoToneColor='#52c41a'
							className='done'
						/>
					)}
				</div>
				<div className='input'>
					<TextField
						value={newPassword}
						onChange={(e) => setNewPassword(e.target.value)}
						label='New password'
						type='password'
						placeholder='Entre password'
						readonly={
							currentUser.userPassword === oldPassword
								? ''
								: 'readonly'
						}
					/>

					{newPassword.length >= 8 && (
						<CheckCircleTwoTone className='done1' />
					)}
				</div>
				<div className='input'>
					<TextField
						value={repeatPassword}
						onChange={(e) => setRepeatPassword(e.target.value)}
						label='Repeat password'
						placeholder='Entre password'
						type='password'
						readonly={
							currentUser.userPassword === oldPassword
								? ''
								: 'readonly'
						}
					/>
					{repeatPassword === newPassword &&
						repeatPassword.length >= 8 && (
							<CheckCircleTwoTone className='done2' />
						)}
				</div>
			</div>
			<div className='Change-buttons'>
				<div style={{ marginTop: 14 }}>
					<Link to='/'>
						<a href='#'>Back</a>
					</Link>
				</div>
				<CustomButton
					primary
					onClick={() => {
						repeatPassword === newPassword &&
							repeatPassword.length >= 8 &&
							dispatch(edit_password(newPassword)) &&
							setVisible(true)
						setRepeatPassword('')
						newPassword === repeatPassword && setOldPassword('')
						setNewPassword('')
					}}
				>
					Save
				</CustomButton>
			</div>
		</div>
	)
}
