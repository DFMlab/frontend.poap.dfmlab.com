import poapReducer from './poap'

import { combineReducers } from 'redux'

const reducers = combineReducers({
    poaps:poapReducer
})

export default reducers