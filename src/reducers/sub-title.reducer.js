import { SET_EDITING, SET_SUBTEXT, SET_SUBTITLE } from "../actions/sub-title.actions"

const initialState = {
    subTitle: 'temp',
    editing: false,
    subText: ''
}

export const subTitleReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_EDITING:
            return {...state, editing: true}
        case SET_SUBTEXT:
            return {...state, subText: action.text}
        case SET_SUBTITLE:
            return {...state, subTitle: state.subText, editing: false, subText: ''}
        default:
            return state
    }
}