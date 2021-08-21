import { createStore, applyMiddleware, combineReducers,  Store } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';
import articleReducer from "./category/reducer"
import imageReducer from "./image/reducer"

const store: Store<StoreType> & {
    dispatch: DispatchType
} = createStore(combineReducers({category:articleReducer, image:imageReducer}), composeWithDevTools(applyMiddleware(thunk)) )
export default store