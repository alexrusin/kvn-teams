import { createStore, applyMiddleware } from 'redux'
import reducers from 'reducers'
import reduxThunk from 'redux-thunk'
import { createWrapper } from 'next-redux-wrapper'

function initStore() {
    return createStore(
        reducers,
        {
            auth: {}
        },
        applyMiddleware(reduxThunk)
    )
}

export default createWrapper(initStore)
