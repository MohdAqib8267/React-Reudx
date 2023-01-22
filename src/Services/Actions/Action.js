import {ADD_TO_CART} from '../Contant'
export const addToCart = (data)=>{
    return{
        type:ADD_TO_CART,
        data:data
    }
}