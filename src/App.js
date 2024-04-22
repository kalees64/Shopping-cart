import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import data from './assets/data';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {

  const [products , setProducts] = useState(data)
  const [cartProducts , setCartProducts] = useState([])
  const cartCount = cartProducts.length
  // console.log(products)
  const handleClick = (id)=>{
    let newProduct = products.filter((product)=>product.id === id)
    // console.log(newProduct)
    // console.log(cartProducts)
    const newCart = [...cartProducts,newProduct[0]]
    // console.log(newCart)
    setCartProducts(newCart)
  }

  const [cart , setCart] = useState(false)
  const handleCart = ()=>[
    setCart(!cart)
  ]

  const handleDelete = (id)=>{
    const newCart = cartProducts.filter((product)=>product.id !== id)
    // console.log(newCart)
    setCartProducts(newCart)
  }
  let total = 0
  const cartProductsAmount = cartProducts.map((product)=>{
    total += product.mrp
    return Number(total)
  })


  return (
    <div className='d-flex flex-column cart position-relative '>
      <Nav 
      cartCount={cartCount}
      handleCart={handleCart}
      />
      <Header />
      <Products
      data={products}
      handleClick={handleClick}
      />
      <Footer />

      {
        cart &&
        <Cart 
        handleCart={handleCart}
        cartProduuts={cartProducts}
        handleDelete={handleDelete}
        amount={total}
        />
      }

    </div>
  );
}

export default App;
