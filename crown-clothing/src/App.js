import React, { Component } from 'react';
import Homepage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop-page/shop.component';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/header/header.component';
import { connect } from 'react-redux';
import SignInAndSignUp from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';
import { setCurrentUser } from './redux/user/user.actions';

class App extends Component {

    unsubscribeFromAuth= null;

  componentDidMount () {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
       const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => { 
        setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      }
        setCurrentUser(userAuth);
    });
  };

  componentWillUnmount () {
    this.unsubscribeFromAuth();
  };

  render(){
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
 
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(null, 
  mapDispatchToProps
  )(App);
