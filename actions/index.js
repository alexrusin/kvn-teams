import { SET_AUTH_USER, SET_GUEST_USER } from 'actions/types'

export function signIn(user) {
    localStorage.setItem('token', user.token)
    return {
        type: SET_AUTH_USER,
        payload: user
    }
}

export function signOut()  {
    localStorage.removeItem('token')
    return {
        type: SET_GUEST_USER
    }
}