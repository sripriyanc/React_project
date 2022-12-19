import logo from './logo.svg';
import React , {useState} from "react"
import './App.css';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom"
import Header from "./components/Header/Header"
import Pages from './page/Pages'
import Data from "./components/flashDeals/Data"
import Cart from "./components/cart/Cart"
import Sdata from "./components/shop/Sdata"
import FlashDeals from './components/flashDeals/FlashDeals';


function App() {

  const { productItems } = Data
  const { shopItems } = Sdata

 
  const [CartItem, setCartItem] = useState([])


  const addToCart = (product) => {
  
    const productExit = CartItem.find((item) => item.id === product.id)
   
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
     
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  
  const decreaseQty = (product) => {
    
    const productExit = CartItem.find((item) => item.id === product.id)

   
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Switch>
          <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
        </Switch>
        {/* <FlashDeals/> */}
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App
