import * as actions from "../actions/constants.js"

export default function poapReducer(state = {}, { type, payload }) {
    switch (type) {
        case actions.UPDATE_POAP:
            const { poap } = payload
            const { data } = state
            return data.map(_poap => poap.id === _poap.id ? { ..._poap, ...poap } : _poap)
        case actions.INITIALIZE_POAP:
            return payload
        default:
            console.log("NO ACTION")
            return {
                data: [],
                page: 0,
                next: false,
                prev: false,
                total: 0
            }
    }
}