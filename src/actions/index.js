import * as types from './../constants/ActionType'

// thêm vào giỏ hàng
export const addToCart=(product,quantity)=>{
    return{
        type:types.ADD_TO_CART,
        product,
        quantity,
    }
}

//print message 
export const changeMessage=(message)=>{
    return {
        type:types.CHANGE_MESSAGE,
        message,
    }
}

// Xóa sản phẩm ra khỏi giỏ hàng
export const deleteProductToCart=(product)=>{
    return{
        type:types.DELETE_PRODUCT_TO_CART,
        product,
    }
}

//update sản phẩm trong giỏ hàng

export const updateProductToCart=(product,quantity)=>{
    return{
        type:types.UPDATE_PRODUCT_TO_CART,
        product,
        quantity,
    }
}