export const ADD_USER = 'ADD_USER'
export const IS_LOGIN = 'IS_LOGIN'
export const DELETE_USER = 'DELETE_USER'
export const EDIT_USER = 'EDIT_USER'

export const add_user = (user) => ({
    type: ADD_USER,
    user
})

export const is_login = () => ({
    type: IS_LOGIN
})

export const is_delete = (obj) => ({
    type: DELETE_USER,
    obj
})