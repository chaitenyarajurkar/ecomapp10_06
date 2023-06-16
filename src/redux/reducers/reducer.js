import { GET_ALL_PRODUCT, GET_MOBILE_PRODUCT, GET_CAMERA_PRODUCT, GET_TABLET_PRODUCT, GET_LAPTOP_PRODUCT, GET_ALL_CATEGORY } from "../constants/actionTypes"


const initialState = {
    allProduct: [],
    mobiledata: [],
    cameradata: [],
    laptopdata: [],
    tabletdata: [],
    categorydata:[]
}


export default function datacall(state = initialState, action) {

    //action.type
    // action.payload

    switch (action.type) {
        case GET_ALL_PRODUCT:
            console.log(state.allProduct)
            return {
                ...state,
                allProduct: action.payload

            }
        case GET_MOBILE_PRODUCT:
            return {
                ...state,
                mobiledata: action.payload

            }
        case GET_CAMERA_PRODUCT:
            return {
                ...state,
                cameradata: action.payload

            }
        case GET_TABLET_PRODUCT:
            return {
                ...state,
                tabletdata: action.payload

            }
        case GET_LAPTOP_PRODUCT:
            return {
                ...state,
                laptopdata: action.payload

            }
        case GET_ALL_CATEGORY:
            return {
                ...state,
                categorydata:action.payload

            }

        default:
            return {
                ...state
            }
    }

}