/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React, { lazy, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Sidenav from './Sidenav';
import Topnav from './Topnav';

import { FooterLogo } from '../../assets/images';
import Login from '../Auth/Login/Login';
import Register from '../Auth/Register/Register';

const Error404 = lazy(()=>import('../Error/Error404'));

const AuthLayout = () => {
  const history = useHistory();
  const { location } = history;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section className="flex px-2 py-5 w-full">
        <div className="w-full overflow-x-hidden flex justify-center items-center flex-col h-full">
          <Switch>
            
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/*">
              <Error404 />
            </Route>
          </Switch>
      </div>
    </section>
  );
};
export default AuthLayout;
