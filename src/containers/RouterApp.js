import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../styles/style.scss';

import { MyCourse, MyCourseDetail } from './MyCourse';
import { MyLeaningActivityDetail, MyLeaningActivity } from './MyLeaningActivity';
import { MyLeaningModule, InteractiveLayout, PanelLayout, StackedLayout } from './MyLeaningModule';

import ScrollToTop from '../components/ScrollToTop';
import { ContentWrapper, VideoWrapper } from '../components/Wrapper';

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

        <Switch>
          <Route exact path="/" component={() => (
            <ContentWrapper
              openMobileNav={openMobileNav}
              handleChangeOpenMobileNav={handleChangeOpenMobileNav}
              openUserMenu={openUserMenu}
              handleChangeOpenUserMenu={handleChangeOpenUserMenu}
              handleChangeTheme={handleChangeTheme}
              theme={theme}
            >
              <MyCourse theme={theme} />
            </ContentWrapper>
          )}/>
          <Route exact path="/course/detail" component={() => (
            <ContentWrapper
              openMobileNav={openMobileNav}
              handleChangeOpenMobileNav={handleChangeOpenMobileNav}
              openUserMenu={openUserMenu}
              handleChangeOpenUserMenu={handleChangeOpenUserMenu}
              handleChangeTheme={handleChangeTheme}
              theme={theme}
            >
              <MyCourseDetail theme={theme} />
            </ContentWrapper>
          )}/>

          <Route exact path="/module" component={() => (
            <ContentWrapper
              openMobileNav={openMobileNav}
              handleChangeOpenMobileNav={handleChangeOpenMobileNav}
              openUserMenu={openUserMenu}
              handleChangeOpenUserMenu={handleChangeOpenUserMenu}
              handleChangeTheme={handleChangeTheme}
              theme={theme}
            >
              <MyLeaningModule theme={theme} />
            </ContentWrapper>
          )}/>

          <Route exact path="/module/detail1" component={() => <InteractiveLayout theme={theme} />}/>
          <Route exact path="/module/detail2" component={() => (
            <VideoWrapper
              theme={theme}
              handleChangeTheme={handleChangeTheme}
              onChangeOpenUserMenu={handleChangeOpenUserMenu}
            >
              <PanelLayout theme={theme} />
            </VideoWrapper>
          )}/>
          <Route exact path="/module/detail3" component={() => <StackedLayout theme={theme} />}/>

          <Route exact path="/activity" component={() => (
            <ContentWrapper
              openMobileNav={openMobileNav}
              handleChangeOpenMobileNav={handleChangeOpenMobileNav}
              openUserMenu={openUserMenu}
              handleChangeOpenUserMenu={handleChangeOpenUserMenu}
              handleChangeTheme={handleChangeTheme}
              theme={theme}
            >
              <MyLeaningActivity theme={theme} />
            </ContentWrapper>
          )}/>
          <Route exact path="/activity/detail" component={() => (
            <ContentWrapper
              openMobileNav={openMobileNav}
              handleChangeOpenMobileNav={handleChangeOpenMobileNav}
              openUserMenu={openUserMenu}
              handleChangeOpenUserMenu={handleChangeOpenUserMenu}
              handleChangeTheme={handleChangeTheme}
              theme={theme}
            >
              <MyLeaningActivityDetail theme={theme} />
            </ContentWrapper>
          )}/>
        </Switch>
      </Router>
    </div>
  );
};

export default RouterApp;
