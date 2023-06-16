import { GET_ALL_PRODUCT,GET_MOBILE_PRODUCT,GET_CAMERA_PRODUCT,GET_TABLET_PRODUCT,GET_LAPTOP_PRODUCT, GET_ALL_CATEGORY, GET_CART_DETAILS } from "../constants/actionTypes"


const getAllProduct =(data)=>async(dispatch)=>{

    console.log("action call",data)
    //  api call
   dispatch({
    type:GET_ALL_PRODUCT,
    payload:data
   })

}
const getMobileProduct =(data)=>async(dispatch)=>{

    console.log("action call",data)
    //  api call
   dispatch({
    type:GET_MOBILE_PRODUCT,
    payload:data
   })

}

const getTabletProduct =(data)=>async(dispatch)=>{

    console.log("action call",data)
    //  api call
   dispatch({
    type:GET_TABLET_PRODUCT,
    payload:data
   })

}

const getCameraProduct =(data)=>async(dispatch)=>{

    console.log("action call",data)
    //  api call
   dispatch({
    type:GET_CAMERA_PRODUCT,
    payload:data
   })

}

const getLaptopProduct =(data)=>async(dispatch)=>{

    console.log("action call",data)
    //  api call
   dispatch({
    type:GET_LAPTOP_PRODUCT,
    payload:data
   })

}

const getallcategory =(data)=>async(dispatch)=>{

    console.log("action call",data)
    //  api call
   dispatch({
    type:GET_ALL_CATEGORY,
    payload:data
   })

}

const getCartData = (data)=>async(dispatch)=>{
    dispatch({
        type:GET_CART_DETAILS,
        payload:data
    })
}


export {
    getCartData,
    getAllProduct,
    getMobileProduct,
    getLaptopProduct,
    getCameraProduct,
    getTabletProduct,
    getallcategory
}