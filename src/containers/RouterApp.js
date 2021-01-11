import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../styles/style.scss';

import {
  Header, MobileNav, MobileUserMenu, Lnb
} from '../components/Layout';

import { MyCourse, MyCourseDetail } from './MyCourse';
import { MyLeaningActivityDetail, MyLeaningActivity } from './MyLeaningActivity';
import { MyLeaningModule, InteractiveLayout, PanelLayout, StackedLayout } from './MyLeaningModule';

import ScrollToTop from '../components/ScrollToTop';
import MobileHomeNav from '../components/Home/MobileHomeNav';
import MobileHomeBottomNav from '../components/Home/MobileHomeBottomNav';

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
    <div className={`theme-${theme} wrapper }`}>
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
            <MobileHomeNav />
            <Switch>
              <Route exact path="/" component={() => <MyCourse theme={theme} />}/>
              <Route exact path="/course/detail" component={() => <MyCourseDetail theme={theme} />}/>

              <Route exact path="/module" component={() => <MyLeaningModule theme={theme} />}/>
              <Route exact path="/module/detail1" component={() => <InteractiveLayout theme={theme} />}/>
              <Route exact path="/module/detail2" component={() => <PanelLayout theme={theme} />}/>
              <Route exact path="/module/detail3" component={() => <StackedLayout theme={theme} />}/>

              <Route exact path="/activity" component={() => <MyLeaningActivity theme={theme} />}/>
              <Route exact path="/activity/detail" component={() => <MyLeaningActivityDetail theme={theme} />}/>
            </Switch>
            <MobileHomeBottomNav />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default RouterApp;
