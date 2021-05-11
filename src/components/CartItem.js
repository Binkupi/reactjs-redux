import React,{Component} from 'react';
import * as messages from './../constants/Message';

class CartItem extends Component {
    constructor(props){
        super(props);
        this.state= {
            quantity:1,
        }
    }
    DeleteProductToCart(product){
        this.props.onDeleteProductToCart(product);
        this.props.onChangeMessage(messages.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    onUpdateQuantity(product,quantity){
        if(quantity>0){
            this.props.onUpdateProductToCart(product,quantity);
            this.props.onChangeMessage(messages.MSG_UPDATE_CART_SUCCESS);
        }
       
    }
    render(){
        var {cartItem}=this.props;
        cartItem.quantity=cartItem.quantity>0?cartItem.quantity:this.state.quantity;
        return (
            <tr>
                <th scope="row">
                    <img src={cartItem.product.image}
                        alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{cartItem.product.name}</strong>
                    </h5>
                </td>
                <td>{cartItem.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{cartItem.quantity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
                            onClick={()=>this.onUpdateQuantity(cartItem.product, cartItem.quantity-1)}
                            >
                            <a href="/#">—</a>
                        </label>
                        <label className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
                            onClick={()=>this.onUpdateQuantity(cartItem.product, cartItem.quantity+1)}
                            >
                            <a href="/#">+</a>
                        </label>
                    </div>
                </td>
                <td>{cartItem.product.price*cartItem.quantity}$</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item"
                        onClick={()=>this.DeleteProductToCart(cartItem.product)}>
                        X
                    </button>
                </td>
            </tr>
        );
    }
}

export default CartItem;
