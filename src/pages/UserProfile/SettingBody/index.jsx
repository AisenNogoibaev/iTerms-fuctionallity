import React from 'react'
import iconImg from '../img/img icon.png'
import './SettingBody.less'
import { TextField } from '../../../components/TextField'
// import ellipse from '../img/Ellipse 82.png'
import { CustomButton } from '../../../components/CustomButton'
import downIcon from '../../../images/chevron_right_24px.png'
import checkIcon from '../../../images/check_circle_24px.png'


export const SettingBody = () => {
  return (
    <div className="settings-block ">
      <div>
        <h1>Settings</h1>
        <div className='setting-header'>
          <div className='setting-img' >
            {/* <img src={ellipse} alt="" /> */}
            <img src={iconImg} alt="" />
          </div>
          <div>
            <p>Choose File</p>
            <span>JPG, JPEG, PNG max file size 5MB</span>
          </div>

        </div>
        <p className='browse'> <a href="#">Browse</a></p>
      </div>
      {/* inputs */}
      {/* inp stoke-1 */}
      <div className="inputs">
        <div className='inpStoke-1 '>
          <div className='TextField'>
            <TextField
              label='First Name'
              placeholder='Albert '
              type='text'

            />
          </div>
          <TextField
            label='Last Name'
            placeholder='Cortis '
            type='text'
          />
        </div>
        {/* inp stoke-2 */}
        <div className='inpStroke-2'>

          <TextField
            label='Languege'
            placeholder='English - United States '
            type='text'
          />
          <img src={downIcon} alt="downIcon" />

        </div>
        {/* inp stoke-3 */}
        <div className='inpStroke-3'>
          <TextField
            label='Email'
            placeholder='albert.cortis '
            type='text'
          />
          <img src={checkIcon} alt="checkIcon" />
          <div className='link'>
            <a href="#">Change Password</a>
          </div>
        </div>
        {/* inp last-stoke-4 */}
        <div className='inpLastStroke'>
          <div>
            <a href="#">Delete my Account</a>
          </div>
          <div >
            <CustomButton primary className='CustomButton'>Save</CustomButton>
          </div>
        </div>
      </div>

    </div>
  )
}
