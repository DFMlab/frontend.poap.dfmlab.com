import * as actions from "../actions.js"

export default function poapReducer(state = [], { type, payload }) {
    switch (type) {
        case actions.UPDATE_POAP:
            const { poap } = payload
            return state.map(_poap => poap.id === _poap.id ? { ..._poap, ...poap } : _poap)
        default:
            console.log("NO ACTION")
    }
}