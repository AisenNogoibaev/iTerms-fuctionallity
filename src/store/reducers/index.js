import { act } from 'react-dom/cjs/react-dom-test-utils.production.min'
import {
	ADD_USER,
	DELETE_USER,
	LOGIN_USER,
	EDIT_USER,
	DELETE_ACCOUNT,
	EDIT_PASSWORD,
} from '../actions'

const local = JSON.parse(localStorage.getItem('users'))

const initialState = {
	localUsers: local ? local.localUsers : [],
	currentUser: local
		? local.currentUser
		: {
				lastName: '',
				firstName: '',
				userEmail: '',
				userPassword: '',
				id: '',
				photo: '',
		  },
	succes: false,
}

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			let isLogin = state.localUsers.findIndex(
				(el) => el.userEmail === action.user.userEmail,
			)
			if (isLogin === -1) {
				return {
					...state,
					localUsers: [...state.localUsers, action.user],
					currentUser: action.user,
				}
			} else {
				return state
			}
		case DELETE_USER:
			return {
				...state,
				currentUser: {
					userName: '',
					userEmail: '',
					userPassword: '',
					id: '',
				},
				succes: false,
			}
		case LOGIN_USER:
			let getUser = state.localUsers.find(
				(el) =>
					el.userEmail === action.obj.inEmail &&
					el.userPassword === action.obj.inPassword,
			)
			if (getUser) {
				return {
					...state,
					currentUser: getUser,
					succes: true,
				}
			} else {
				return state
			}
		case EDIT_USER:
			return {
				...state,
				currentUser: action.obj,
				localUsers: state.localUsers.map((el, id) => {
					return el.userEmail === state.currentUser.userEmail
						? action.obj
						: el
				}),
			}
		case DELETE_ACCOUNT:
			if (action.password === state.currentUser.userPassword) {
				return {
					...state,
					currentUser: action.obj,
					localUsers: state.localUsers.filter(
						(el) => el.userEmail !== action.email,
					),
				}
			}
		case EDIT_PASSWORD:
			return {
				...state,
				currentUser: {...state.currentUser, userPassword: action.password},
				localUsers: state.localUsers.map((el) => {
					return el.userEmail === state.currentUser.userEmail
					? {...el, userPassword: action.password}
					: el
				})
			}
		default:
			return state
	}
}
