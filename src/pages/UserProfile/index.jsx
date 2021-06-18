import React from 'react'

import doc from './img/file_copy_24px.png'
import sub from './img/Subscriptions.png'
import './UserProfile.less'
import set from './img/setting.png'
import { SettingBody } from './SettingBody'
import { useSelector } from 'react-redux'
import { DeleteAccount } from './DeleteAccount'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import { SignUp } from '../SignUp'
import { ChangePassword } from './ChangePassword'

export const UserProfile = () => {
	const history = useHistory()
	const currentUser = useSelector((state) => state.currentUser)

	return (
		<div className='profile__background'>
			<div className='container'>
				<div className='navbar'>
					{/* navbar */}
					<div className='user'>
						<img
							style={{ width: '100px', height: '100px' }}
							src='https://www.pngkey.com/png/full/178-1787134_png-file-svg-github-icon-png.png'
							alt=''
						/>
						<p>
							{currentUser.firstName}{" "}
							{currentUser.lastName
								? currentUser.lastName[0]
								: ''}
						</p>
					</div>
					<div className='side-bar'>
						<img src={doc} alt='' />
						<p>Documents</p>
					</div>
					<div className='side-bar'>
						<img src={sub} alt='' />
						<p>Subscriptions</p>
					</div>
					<div className='side-bar'>
						<img src={set} alt='' />
						<p>Settings</p>
					</div>
					<div className='shadow'></div>
					{/* settings */}
					{/* <SettingBody /> */}
					<BrowserRouter>
						<Switch>
							<Route
								path='/edit_password'
								component={DeleteAccount}
							/>
							<Route path='sign-up' component={SignUp}/>
							<Route path='/changePassword' component={ChangePassword}/>
							<Route path='/' component={SettingBody} />
						</Switch>
					</BrowserRouter>
					{/* <EditPassword></EditPassword> */}
				</div>
			</div>
		</div>
	)
}
