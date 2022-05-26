import { INITIALIZE_POAP } from './constants'

const POAPAdded = (payload) => {
    return {
        type: INITIALIZE_POAP,
        payload: payload
    }
}

export default POAPAdded