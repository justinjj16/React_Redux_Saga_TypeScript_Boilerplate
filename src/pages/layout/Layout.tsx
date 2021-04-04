/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React, { lazy, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Sidenav from './Sidenav';
import Topnav from './Topnav';

import { FooterLogo } from '../../assets/images';

const Dashboard = lazy(()=>import('../Dashboard/Dashboard'));
const Error404 = lazy(()=>import('../Error/Error404'));

const Layout = () => {
  const history = useHistory();
  const { location } = history;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section className="flex px-2 py-5 w-full">
      <Sidenav />
      <div className="w-full md:w-4/5 flex flex-col h-screen overflow-y-hidden">
        <Topnav />
        <div className="w-full overflow-x-hidden flex flex-col h-full">
          <Switch>
            
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>

            <Route exact path="*">
              <Error404 />
            </Route>
            
          </Switch>
          <footer className="w-full text-right py-3 px-4 flex items-center justify-end mb-4 text-gray-700">
            Powered by Justin
            
          </footer>
        </div>
      </div>
    </section>
  );
};
export default Layout;
