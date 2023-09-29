import React from "react";

class CartItem extends React.Component {
    render(){
        console.log('render')
          const {price , title, qty,  }= this.props.product;
         return(
         <div className="cart-item">
            {this.props.jsx}
            <div className="left-block">
               <img style={styles.image} alt=""/>
            </div>
         <div className="right-block">
            <div style={ {fontSize: 25} }> {title}</div>
            <div style={ {color :'#777'} }>Rs {price}</div>
            <div style={ {color :'#777'} }>Qty: {qty}</div>
            <div className="cart-item-actions">
                <img className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1828/1828926.png" onClick={() => this.props.onIncreaseQuantity(this.props.product)} alt=""></img>
                <img className="action-icons" src="https://cdn-icons-png.flaticon.com/128/992/992683.png" onClick={() => this.props.onDecreaseQuantity(this.props.product)} alt=""></img>
                <img className="action-icons" src="https://cdn-icons-png.flaticon.com/128/484/484662.png" onClick={this.handleClick} alt=""></img>
            </div>
         </div>
         </div>
         )
      }
}
const styles={
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;