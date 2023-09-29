import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    constructor(){
        super();
        this.state= {
            products: [
             {
                price: 1999,
                title: 'Phone',
                qty: 1,
                img: '',
                id:1
                },
            {
                price: 999,
                title: 'Watch',
                qty: 1,
                img: '',
                id:2
                },
            {
                price: 199,
                title: 'Pen',
                qty: 10,
                img: '',
                id:3
                }
            ]
        }
    }

   render(){
    const {products} =this.state;
    return(
    <div className="cart">
     {products.map(product=>{
        return (
        <CartItem 
        product={product}
        key={product.id}
        func={()=>console.log('sdssa')}
        jsx={<h1>jsx</h1>}
        comp={<CartItem/>}
        />
        )
     })}
    </div>
    )
   }

}
export default Cart;