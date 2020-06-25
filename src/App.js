import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MyLoginPage from './components/authentication/Login';
import MyRegisterPage from './components/authentication/Register';
import MyDashboard from './components/dashboard'
import Offers from './components/offers/Offers'
import OffersForm from './components/offers/Offersform'
import Offerslist from './components/offers/Offerslist'
import Profile from './components/users/Profile'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={MyDashboard} />
          <div className="container">
            <Route exact path="/register" component={MyRegisterPage} />
            <Route exact path="/login" component={MyLoginPage} />
            <Route exact path="/offers" component={Offers} />
            <Route exact path="/offers-form" component={OffersForm} />
            <Route exact path="/offers-list" component={Offerslist} />
             <Route exact path="/profile" component={Profile} />
          </div>
        </div>
      </Router>
    )
  }
}


export default App
