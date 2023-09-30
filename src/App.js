import React from "react";
import Cart from "./Cart";
import Nav from "./Nav";

class App extends React.Component {
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
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty++;
    this.setState({
      products: [...products],
    });
  }

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty--;
    this.setState({
      products: [...products],
    });
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items,
    });
  }

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  }
  getCartTotal = ()=> {
    const{products} =this.state;
    let total=0;
    products.map(product=>{
      total+=product.qty*product.price;
    })
    return total
  }
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Nav count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div>Total:{this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
