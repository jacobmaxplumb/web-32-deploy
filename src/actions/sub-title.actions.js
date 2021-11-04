export const SET_EDITING = '[SubTitle] Set Editing';
export const SET_SUBTEXT = '[SubTitle] Set SubText';
export const SET_SUBTITLE = '[SubTitle] Set SubTitle';

export const setEditing = () => {
    return {type: SET_EDITING}
}

export const setSubText = (text) => {
    return {type: SET_SUBTEXT, text}
}

export const setSubTitle = () => {
    return {type: SET_SUBTITLE}
}