import { INCREASE_COUNTER, DECREASE_COUNTER } from '../actionTypes';

const initialState = {
    count: 10
}

export default function (state = initialState, action) {
    switch (action.type) {
        case INCREASE_COUNTER:
            return {
                count: state.count + 1
            }
        case DECREASE_COUNTER:
            return {
                count: state.count - 1
            }
        default:
            return initialState;
    }
}