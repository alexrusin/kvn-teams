import { SET_AUTH_USER, SET_GUEST_USER } from 'actions/types'

export default function auth(state = {}, action) {
    switch (action.type) {
        case SET_AUTH_USER:
            return action.payload
        case SET_GUEST_USER:
            return {membership: 'guest'}
        default:
            return state
    }
}