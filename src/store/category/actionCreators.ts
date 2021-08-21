import {GET_CATEGORIES, SELECT_CATEGORY} from "./actionTypes"
import getData from "../Service"

export function getCategories() {
    return async (dispatch: DispatchType) => {
        getData('https://api.thecatapi.com/v1/categories')
            .then((data) => {
                dispatch({
                    payload: data,
                    type: GET_CATEGORIES
                });
        })
    }
}

export function selectCategory(category:category | undefined){
    return (dispatch:DispatchType) =>{
        dispatch({
            payload:category,
            type:SELECT_CATEGORY
        })
    }
}
