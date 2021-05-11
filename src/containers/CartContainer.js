import React,{Component} from 'react';
import {connect} from 'react-redux'
import CartItem from '../components/CartItem';
import Cart from '../components/Cart';
import CartResult from '../components/CartResult';
import PropTypes from 'prop-types';
import * as Message from './../constants/Message'
import * as actions from './../actions/index'

class CartContainer extends Component {
    render(){
        var {cart}=this.props;
        return (
            <Cart >
                {this.renderCart(cart) }
                {this.renderTotalMount(cart)}
            </Cart>
            
        );
    }
    renderCart(cart){
        var result=<tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
        if(cart.length>0){
            result=cart.map((cartItem,index)=>{
                return <CartItem key={index}
                         cartItem={cartItem}
                         onDeleteProductToCart={this.props.onDeleteProductToCart}
                         onChangeMessage={this.props.onChangeMessage}
                         onUpdateProductToCart={this.props.onUpdateProductToCart} />
            })
        }
        return result;
    }
    renderTotalMount(cart){
        var result=null;
        var total=0;
        if(cart.length>0){
            for(var i=0;i<cart.length;i++){
                total+=cart[i].product.price*cart[i].quantity;
            }
            result =<CartResult total={total}/>
        }
        return result;
    }
}

//Proptypes
CartContainer.propTypes={
    cart:PropTypes.arrayOf(
        PropTypes.shape({
            product:PropTypes.shape({
                id:PropTypes.number.isRequired,
                name:PropTypes.string.isRequired,
                image:PropTypes.string.isRequired,
                description:PropTypes.string.isRequired,
                price:PropTypes.number.isRequired,
                inventory:PropTypes.number.isRequired,
                rating:PropTypes.number.isRequired,
            }).isRequired,
        quantity:PropTypes.number.isRequired
        })
        )
        
}

const mapStateToProps=(state)=>{
    return{
        cart:state.cart,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onDeleteProductToCart:(product)=>{
            dispatch(actions.deleteProductToCart(product));
        },
        onChangeMessage:(message)=>{
            dispatch(actions.changeMessage(message));
        },
        onUpdateProductToCart:(product,quantity)=>{
            dispatch(actions.updateProductToCart(product,quantity));
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
