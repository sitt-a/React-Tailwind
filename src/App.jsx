import Nav from './Nav'
import Body from './Body'
import About from './components/About'
import Contact from './components/Contact'
import Platform from './Platform'
import Support from './Support'
import ActiveSlider from './ActiveSlider'
import ReviewPage from './ReviewPage'
import Footer from './components/Footer'
import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import React from 'react';

import ProductsPage from './components/ProductsPage';
import ProductDetailPage from './components/ProductDetailPage';
import CartPage from './components/CartPage';

import { CartProvider } from './contexts/CartContext';






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
              <Route exact path="/A" component={About} />
              <Route exact path="/R" component={ReviewPage} />
              <Route exact path="/C" component={Contact} />
              <Route path="/products/:id" component={ProductDetailPage} />
              <Route path="/cart" component={CartPage} />
            
              
            </Switch>
            
          </div>
          <Footer></Footer>
        </div>
      </CartProvider>
    </Router>



  )
}

export default App


