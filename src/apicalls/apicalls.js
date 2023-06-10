import axios from "axios"

export const getAllProductapi =async()=>{
    let res = await axios.get('https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts');
    return res.data.data;
}
export const getMobileapi =async()=>{
    let res = await axios.get('https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId',{params:{id:1}});
    return res.data.data;
}
export const getCameraapi =async()=>{
    let res = await axios.get('https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId',{params:{id:3}});
    return res.data.data;
}
export const getlaptopapi =async()=>{
    let res = await axios.get('https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId',{params:{id:2}});
    return res.data.data;
}
export const gettabletapi =async()=>{
    let res = await axios.get('https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId',{params:{id:4}});
    return res.data.data;
}


export const loginapi = async(obj)=>{
    let res  = await axios.post("https://onlinetestapi.gerasim.in/api/Ecomm/Login",obj);
    return res.data
}

export const getAllCategoryapi = async()=>{
    let res = await axios.get('https://onlinetestapi.gerasim.in/api/Ecomm/GetAllCategory');
    return res.data.data;
}


export const addProductApi = async(obj)=>{
    let res  = await axios.post("https://onlinetestapi.gerasim.in/api/Ecomm/CreateProduct",obj);
    return res.data
}