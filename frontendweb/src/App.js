import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';

function App() {

  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              ☰
            </button>
            <Link to="/">JDShoes</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            {
              userInfo ? <Link  to="/profile">{userInfo.name}</Link> :
              <Link to="/signin">Sign-In</Link>
              // {/* <a href="signin.html">Signin</a> */}
            }
            
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>☓</button>
          <ul>
            <li>
              <a href="index.html">Men</a>
            </li>
            <li>
              <a href="index.html">Women</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
          </div>
        </main>
        <footer className="footer">
          All right reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
