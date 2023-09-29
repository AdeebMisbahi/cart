import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 1999,
                    title: 'Phone',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id: 2
                },
                {
                    price: 199,
                    title: 'Pen',
                    qty: 10,
                    img: '',
                    id: 3
                }
            ]
        }
    }

    handleIncreaseQuantity = (product) => {
        console.log('Heyy increase the qty of', product);
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty ++ ;
        this.setState({
            products: [...products], // Corrected to spread the array to trigger a state update
        });
    }
    handleDecreaseQuantity = (product) => {
        console.log('Heyy increase the qty of', product);
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty--;
        this.setState({
            products: [...products], // Corrected to spread the array to trigger a state update
        });
    }

    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map(product => {
                    return (
                        <CartItem
                            product={product}
                            key={product.id}
                            onIncreaseQuantity={this.handleIncreaseQuantity}
                            onDecreaseQuantity={this.handleDecreaseQuantity}

                        />
                    )
                })}
            </div>
        )
    }
}

export default Cart;
