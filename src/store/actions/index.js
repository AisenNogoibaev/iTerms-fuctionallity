export const ADD_USER = 'ADD_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const DELETE_USER = 'DELETE_USER'
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT'
export const EDIT_USER = 'EDIT_USER'
export const EDIT_PASSWORD = "EDIT_PASSWORD"

export const add_user = (user) => ({
    type: ADD_USER,
    user
})
export const edit_password = (password) => ({
    type: EDIT_PASSWORD,
    password
})

export const login_user = (obj) => ({
    type: LOGIN_USER,
    obj
})

export const is_delete = (obj) => ({
    type: DELETE_USER,
    obj,
})
export const delete_account = (password,email,obj) => ({
    type: DELETE_ACCOUNT,
    password,
    email,
    obj,
})
export const edit_user = (obj) => ({
    type: EDIT_USER,
    obj
})
