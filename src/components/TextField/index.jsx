import React from 'react'
import styled from 'styled-components'
import { Input } from 'antd'
import './TextField.less'

export const Label = styled.label`
	font-family: 'Open Sans';
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 120%;
	color: #565a65;
	margin-bottom: 8px;
`

export const CustomInput = styled(Input)`
	border-bottom: 1px solid #b6bfd9;
	padding: 6px 0;
	border-top: 0;
	border-right: 0;
	border-left: 0;
	width: 250px;
	border-radius: 0px;

	&:focus {
		box-shadow: none;
	}
	&::placeholder {
		font-family: 'Open Sans';
		font-size: 16px;
		line-height: 150%;
		color: #dadfeb;
	}
`
export const TextField = ({ label, type, placeholder, value, onChange,readonly,onFocus }) => {
	return (
		<div className='textfield'>
			<Label htmlFor='Your Name'>{label}</Label>
			<CustomInput type={type} name='' id='' placeholder={placeholder} value={value} onChange={onChange} readOnly={readonly} onFocus={onFocus}/>
		</div>
	)
}
