import React from 'react';
import Homepage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop-page/shop.component';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/header/header.component';
import SignInAndSignUp from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/signin' component={SignInAndSignUp}/>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
