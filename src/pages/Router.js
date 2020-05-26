import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { DLHOME } from "./index";
import { Navbar } from "../components";
import {Register, Login} from "../pages/users/index"


const Routes = () => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <Router>
      {/* 
        TODO: Login and register should conditionally display,
        depending on if a user is logged in or not
       */}
      <Navbar navArray={
        [
          { title: "Login", route: "login" },
          { title: "Register", route: "register" }
        ]    
      } />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />

        {/* ADD CUSTOMER ROUTES BELOW */}
        <Route
          exact
          path="/customers"
          render={(props) => <Customer {...props} />}
        />

        {/* ADD ORDER ROUTES BELOW */}
        <Route exact path="/orders" render={(props) => <Order {...props} />} />

        {/* ADD PAYMENT ROUTES BELOW */}
        <Route
          exact
          path="/payments"
          render={(props) => <Payment {...props} />}
        />

        {/* ADD PRODUCTS ROUTES BELOW */}
        <Route
          exact
          path="/products"
          render={(props) => <Product {...props} />}
        />

        <Route
          exact
          path="/login"
          render={(props) => 
            <Login
              setUserInfo={setUserInfo} 
              {...props} 
            />}
        />

        <Route
          exact
          path="/register"
          render={(props) => 
            <Register
              setUserInfo={setUserInfo} 
              {...props} 
            />}
        />

        {/* Will redirect to home page if page does not exist */}
        <Route
          path="/dl/:component_name"
          render={(props) => <DLHOME {...props} />}
        />

        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

const Home = () => "You are Home";
const Customer = () => "Customer page";
const Order = () => "Orders page";
const Payment = () => "Payment page";
const Product = () => "Product page";

export { Routes };
