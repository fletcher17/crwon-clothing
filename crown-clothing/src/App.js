import React from 'react';
import Homepage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop-page/shop.component';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
