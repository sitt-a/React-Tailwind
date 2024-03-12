import Nav from './Nav'
import Body from './Body'
import About from './About'
import Platform from './Platform'
import Support from './Support'
import ActiveSlider from './ActiveSlider'
import ReviewPage from './ReviewPage'

import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import React from 'react';

import ProductsPage from './components/ProductsPage';
import ProductDetailPage from './components/ProductDetailPage';
import CartPage from './components/CartPage';
import { CartProvider } from './contexts/CartContext';
import  ContactPage  from './components/ContactPage';
import  Signin  from './components/Signin';
import  Signup from './components/Signup';




function App() {
  const title = "Sitra Mohammed";
  const likes = "3"
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Nav />

          <div className="content">

            <Switch>
              <Route exact path="/">
                <Home></Home>

              </Route>


              <Route exact path="/p" component={ProductsPage} />
              <Route path="/products/:id" component={ProductDetailPage} />
              <Route path="/cart" component={CartPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
            </Switch>

          </div>
        </div>
      </CartProvider>
    </Router>



  )
}

export default App


