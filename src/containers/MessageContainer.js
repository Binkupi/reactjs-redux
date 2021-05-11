import React,{Component} from 'react';
import Message from '../components/Message';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';


class MessageContainer extends Component {
    render(){
        var {message}=this.props;
        return (
            <Message message={message}/>
        );
    }
}

//Proptypes
MessageContainer.propTypes={
    message:PropTypes.array.isRequired,
}

const mapStateToProps=(state)=>{
    return{
        message:state.message,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MessageContainer);
