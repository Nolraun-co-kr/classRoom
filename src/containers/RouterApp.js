import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../styles/style.scss';

import { MyCourse, MyCourseDetail } from './MyCourse';
import { MyLeaningActivityDetail, MyLeaningActivity } from './MyLeaningActivity';
import { MyLeaningModule, InteractiveLayout, PanelLayout, StackedLayout } from './MyLeaningModule';

import ScrollToTop from '../components/ScrollToTop';
import { ContentWrapper, VideoWrapper } from '../components/Wrapper';

const RouterApp = () => {
  const [gradient] = useState(false);
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
    <div className={`theme-${theme} wrapper ${gradient ? 'gradient' : ''}`}>
      <Router>
        <ScrollToTop />

        <Switch>
          <Route exact path="/mycourseware" component={() => (
            <ContentWrapper
              openMobileNav={openMobileNav}
              handleChangeOpenMobileNav={handleChangeOpenMobileNav}
              openUserMenu={openUserMenu}
              handleChangeOpenUserMenu={handleChangeOpenUserMenu}
              handleChangeTheme={handleChangeTheme}
              theme={theme}
              gradient={gradient}
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
              gradient={gradient}
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
              gradient={gradient}
            >
              <MyLeaningModule theme={theme} />
            </ContentWrapper>
          )}/>

          <Route exact path="/module/detail1" component={() => (
            <VideoWrapper
              theme={theme}
              handleChangeTheme={handleChangeTheme}
              onChangeOpenUserMenu={handleChangeOpenUserMenu}
            >
              <InteractiveLayout theme={theme} />
            </VideoWrapper>
          )}/>
          <Route exact path="/module/detail2" component={() => (
            <VideoWrapper
              theme={theme}
              handleChangeTheme={handleChangeTheme}
              onChangeOpenUserMenu={handleChangeOpenUserMenu}
            >
              <PanelLayout theme={theme} />
            </VideoWrapper>
          )}/>
          <Route exact path="/module/detail3" component={() => (
            <VideoWrapper
              theme={theme}
              handleChangeTheme={handleChangeTheme}
              onChangeOpenUserMenu={handleChangeOpenUserMenu}
            >
              <StackedLayout theme={theme} />
            </VideoWrapper>
          )}/>

          <Route exact path="/activity" component={() => (
            <ContentWrapper
              openMobileNav={openMobileNav}
              handleChangeOpenMobileNav={handleChangeOpenMobileNav}
              openUserMenu={openUserMenu}
              handleChangeOpenUserMenu={handleChangeOpenUserMenu}
              handleChangeTheme={handleChangeTheme}
              theme={theme}
              gradient={gradient}
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
              gradient={gradient}
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
