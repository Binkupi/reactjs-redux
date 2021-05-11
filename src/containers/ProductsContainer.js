import React,{Component} from 'react';
import Products from './../components/Products';
import {connect} from 'react-redux'
import Product from './../components/Product';
import PropTypes from 'prop-types';
import * as actions from './../actions/index'

class ProductsContainer extends Component {
    render(){
        var {products}=this.props;
        return (
            <Products >{this.renderProducts(products) }</Products>
        );
    }
    renderProducts(products){
        var result=null;
        if(products.length>0){
            result=products.map((product,index)=>{
                return <Product key={index} 
                        product={product}
                        onAddToCart={this.props.onAddToCart}
                        onChangeMessage={this.props.onChangeMessage} />

            })
        }
        return result;
    }
}

//Proptypes
ProductsContainer.propTypes={
    products:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
            image:PropTypes.string.isRequired,
            description:PropTypes.string.isRequired,
            price:PropTypes.number.isRequired,
            inventory:PropTypes.number.isRequired,
            rating:PropTypes.number.isRequired,
        })
    ).isRequired,
    onAddToCart:PropTypes.func,
    onChangeMessage:PropTypes.func.isRequired,
}

const mapStateToProps=(state)=>{
    return{
        products:state.products,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onAddToCart:(product)=>{
            dispatch(actions.addToCart(product,1));
        },
        onChangeMessage:(message)=>{
            dispatch(actions.changeMessage(message));
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);
