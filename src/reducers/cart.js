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
    var replaceState;
    switch(action.type){   
        case types.ADD_TO_CART:
            replaceState=[...state];
            var {product}=action;

            index=findProductInCart(replaceState,product);
            if(index!==-1){
                replaceState[index].quantity+=1;
            }else{
                replaceState.push(action);
            }

        localStorage.setItem("Products",JSON.stringify(replaceState));
            return replaceState;
        case types.DELETE_PRODUCT_TO_CART:
            replaceState=[...state];
            index=findProductInCart(replaceState,action.product);
            if(index!==-1){
                replaceState.splice(index,1);
            }
            localStorage.setItem("Products",JSON.stringify(replaceState));
            return replaceState;
        case types.UPDATE_PRODUCT_TO_CART:
            replaceState=[...state];
            index=findProductInCart(replaceState,action.product);
            if(index!==-1){
                replaceState[index].quantity=action.quantity;
            }
            localStorage.setItem("Products",JSON.stringify(replaceState));
            return replaceState;
        default:
            return [...state];
    }

}

export default cart;