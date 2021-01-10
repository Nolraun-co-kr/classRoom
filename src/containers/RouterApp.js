import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../styles/style.scss';

import {
  Header, MobileNav, MobileUserMenu, Lnb
} from '../components/Layout';

import Home from './Home';

import ScrollToTop from '../components/ScrollToTop';
import useWindowPosition from '../hooks/useWindowPosition';

const RouterApp = () => {
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [theme, setTheme] = useState('light');

  const handleChangeOpenUserMenu = useCallback((bool) => {
    setOpenUserMenu(bool);
  }, [openUserMenu]);

  const handleChangeOpenMobileNav = useCallback((bool) => {
    setOpenMobileNav(bool);
  }, [openMobileNav]);

  const handleChangeTheme = useCallback(() => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [theme]);

  return (
    <div className={`theme-${theme} wrapper ${useWindowPosition() > 10 ? 'fixed' : ''}`}>
      <Router>
        <ScrollToTop />

        <MobileNav openMobileNav={openMobileNav} onChangeOpenMobileNav={handleChangeOpenMobileNav} />
        <MobileUserMenu openUserMenu={openUserMenu} onChangeOpenUserMenu={handleChangeOpenUserMenu}/>

        <Lnb />
        <div className="content">
          <Header
            onChangeOpenUserMenu={handleChangeOpenUserMenu}
            onChangeOpenMobileNav={handleChangeOpenMobileNav}
            handleChangeTheme={handleChangeTheme}
            theme={theme}
          />
          <div className="content__inner">
            <Switch>
              <Route exact path="/" component={() => <Home theme={theme} />}/>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default RouterApp;
