import React, { Component } from 'react';
import Homepage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop-page/shop.component';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/header/header.component';
import SignInAndSignUp from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

    unsubscribeFromAuth= null;

  componentDidMount () {
    this.unsubscribeFromAuth = auth.onAuthStateChanged (user => 
      { this.setState({ currentUser: user })
    })
  };

  componentWillUnmount () {
    this.unsubscribeFromAuth();
  };

  render(){
     return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route path='/signin' component={SignInAndSignUp}/>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
  }
 
}

export default App;
