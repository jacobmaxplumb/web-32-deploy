import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { subTitleReducer } from "./sub-title.reducer";

const initialSharedState = {
    title: 'My App'
}

const sharedReducer = (state = initialSharedState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const reducers = combineReducers({
    shared: sharedReducer,
    subTitle: subTitleReducer
})

export const store = createStore(reducers, composeWithDevTools());