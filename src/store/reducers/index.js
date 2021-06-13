import { ADD_USER, IS_LOGIN, DELETE_USER } from '../actions'

const localUsers = JSON.parse(localStorage.getItem('users'))

const initialState = {
	localUsers: [],
	is_login: false,
}

export const rootReducer = (state = localUsers ? localUsers : initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			return {
				...state,
				localUsers: [action.user],
				is_login: true,
			}

		case IS_LOGIN:
			return {
				...state,
				localUsers: [action.user],
				is_login: true
			}
		case DELETE_USER:
			return action.obj

		default:
			return state
	}
}
