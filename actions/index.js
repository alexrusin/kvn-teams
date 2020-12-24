import { SET_AUTH_USER, SET_GUEST_USER } from 'actions/types'
import axios from 'axios'

export const getAuthUser = (token) => async (dispatch) => {
    try {
        const response = await axios.get('/api/auth/me', {
            headers: {
                'Authorization' : `Bearer ${token}`
            }
        })
        response.data.user.token = token
        dispatch({type: SET_AUTH_USER, payload: response.data.user})
    } catch (error) {
        dispatch(signOut())
    }
}

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