import React from "react";

class CartItem extends React.Component {
      constructor(){
        super();
        this.state={
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
        // Bind 'this' to the increaseQuantity method
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    
      increaseQuantity = () => {
    /*  
        this.setState({
        qty: this.state.qty + 1,
        });
    */

// second setState while passing callback function instead of object
        this.setState((prevState) => ({
          qty: prevState.qty + 1,
        }), () => {
          // This callback function will be executed after the state is updated and the component is re-rendered
          console.log(this.state);
        });
      }
    decreaseQuantity=()=>{
        const {qty}=this.state;
        if(qty===0){
            return;
        }
        this.setState((prevState)=>({
            qty:prevState.qty-1
        }))
    }
    render(){
        console.log('render')
          const {price , title, qty,  }= this.state;
         return(
         <div className="cart-item">
            <div className="left-block">
               <img style={styles.image} alt=""/>
            </div>
         <div className="right-block">
            <div style={ {fontSize: 25} }> {title}</div>
            <div style={ {color :'#777'} }>Rs {price}</div>
            <div style={ {color :'#777'} }>Qty: {qty}</div>
            <div className="cart-item-actions">
                <img className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1828/1828926.png" onClick={this.increaseQuantity /* reference of increaseQuantity */} alt=""></img>
                <img className="action-icons" src="https://cdn-icons-png.flaticon.com/128/992/992683.png" onClick={this.decreaseQuantity} alt=""></img>
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