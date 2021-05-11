import * as types from './../constants/ActionType' 
 var data=JSON.parse(localStorage.getItem('Products'));

var initialstate=data?data:[];
    

    var findProductInCart=(cart,product)=>{
        var index=-1;
        cart.map((cartItem,i)=>{
            if(product.id===cartItem.product.id){
                index=i;
            }
            return cartItem;
        });
        return index;
    }
const cart=(state=initialstate,action)=>{
    var index;
    switch(action.type){   
        case types.ADD_TO_CART:
            var {product,quantity}=action;
            index=findProductInCart(state,product);
            if(index!==-1){
                state[index].quantity+=1;
            }else{
                state.push(action);
            }

        localStorage.setItem("Products",JSON.stringify(state));
            return [...state];
        case types.DELETE_PRODUCT_TO_CART:
            index=findProductInCart(state,action.product);
            if(index!==-1){
                state.splice(index,1);
            }
            localStorage.setItem("Products",JSON.stringify(state));
            return [...state];
        case types.UPDATE_PRODUCT_TO_CART:
            index=findProductInCart(state,action.product);
            if(index!==-1){
                state[index].quantity=action.quantity;
            }
            localStorage.setItem("Products",JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }

}

export default cart;