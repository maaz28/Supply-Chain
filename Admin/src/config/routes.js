import React from 'react';
import {
  Router,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../history';
import Showroom from '../components/Accounts/showroom';
import Mechanic from '../components/Accounts/mechanic';
import Department from '../components/Accounts/department';
import Insurance from '../components/Accounts/insurance';
import Users from '../components/Users';
import LoginComponent from '../components/login/loginComponent';

const BasicRouting = (props) => {
  return (
    <Router history={history}>
    <div>
      {((props.isLogin)) ? (
          <div>
            <Route exact path="/showroom" component={Showroom} />
            <Route exact path="/insurance" component={Insurance} />
            <Route exact path="/department" component={Department} />
            <Route exact path="/mechanic" component={Mechanic} />
            <Route exact path="/users" component={Users} />
          </div>          
      ) : (
        <Route exact path="/" component={LoginComponent} />
      )}
  
    </div>
    </Router>
  )
}


function mapStateToProp(state) {
  return ({
    isLogin : state.root.isLogin
  })
}

export default connect(mapStateToProp, null)(BasicRouting);