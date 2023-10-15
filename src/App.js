import React from "react";
import Cart from "./Cart";
import Nav from "./Nav";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }
  async componentDidMount() {
    const db = getFirestore();

    const querySnapshot = await getDocs(collection(db, 'products'));

    const products = querySnapshot.docs.map(doc => doc.data());

    this.setState({
      products: products
    });
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
      return ''
    })
    return total;
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
