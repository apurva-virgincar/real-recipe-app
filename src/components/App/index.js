/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';

import Navigation from '../Navigation';

import Application from '../Application';
import ShopList from '../ShopList';

import * as ROUTES from '../../constants/routes';
import UserProvider from '../../providers/userprovider';

/*function App() {
  const user = null;
  return (
        user ?
        <ProfilePage />
      :
        <Router>
          <SignUp path="signUp" />
          <SignIn path="/" />
          <PasswordReset path = "passwordReset" />
        </Router>

  );
}*/

const App=()=>(
    <Router>
        <div>
            <Navigation/>
            <hr/>
            <UserProvider><Application/></UserProvider>
      

       
        <hr/>
      <Route path={ROUTES.ShopList} component={ShopList}/>

    </div>
    </Router>
);

export default App;