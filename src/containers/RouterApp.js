import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../styles/style.scss';

import { MyCourse, MyCourseDetail } from './MyCourse';
import { MyLeaningActivityDetail, MyLeaningActivity } from './MyLeaningActivity';
import { MyLeaningModule, InteractiveLayout, PanelLayout, StackedLayout } from './MyLeaningModule';

import ScrollToTop from '../components/ScrollToTop';
import { ContentWrapper, VideoWrapper } from '../components/Wrapper';

import DashboardType1 from './dashboard/type1';
import DashboardType2 from './dashboard/type2';
import DashboardType3 from './dashboard/type3';

import Login from './Login';

import NoticeList from './Notice/list';
import LecturePlan from './LecturePlan';

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
    const body = document.body;
    if (theme === 'light') {
      setTheme('dark');
      body.classList.remove('theme-light');
      body.classList.add('theme-dark');
    } else {
      setTheme('light');
      body.classList.remove('theme-dark');
      body.classList.add('theme-light');
      // document.getElementsByTagName('body').classList.add('light');
    }
  }, [theme]);

  return (
    <div className={`wrapper ${gradient ? 'gradient' : ''}`}>
      <Router>
        <ScrollToTop />

        <Switch>
          {/* 로그인 */}
          <Route exact path="/login" component={Login} />

          {/* 강의계획서 */}
          <Route exact path="/lecturePlan" component={() => (
            <ContentWrapper
              openMobileNav={openMobileNav}
              handleChangeOpenMobileNav={handleChangeOpenMobileNav}
              openUserMenu={openUserMenu}
              handleChangeOpenUserMenu={handleChangeOpenUserMenu}
              handleChangeTheme={handleChangeTheme}
              theme={theme}
              gradient={gradient}
            >
              <LecturePlan />
            </ContentWrapper>
          )} />

          {/* 공지사항 */}
          <Route exact path="/notice" component={() => (
            <ContentWrapper
              openMobileNav={openMobileNav}
              handleChangeOpenMobileNav={handleChangeOpenMobileNav}
              openUserMenu={openUserMenu}
              handleChangeOpenUserMenu={handleChangeOpenUserMenu}
              handleChangeTheme={handleChangeTheme}
              theme={theme}
              gradient={gradient}
            >
              <NoticeList />
            </ContentWrapper>
          )} />

          {/* dashboard */}
          <Route exact path="/dashboard/1" component={() => (
            <ContentWrapper
              openMobileNav={openMobileNav}
              handleChangeOpenMobileNav={handleChangeOpenMobileNav}
              openUserMenu={openUserMenu}
              handleChangeOpenUserMenu={handleChangeOpenUserMenu}
              handleChangeTheme={handleChangeTheme}
              theme={theme}
              gradient={gradient}
            >
              <DashboardType1 />
            </ContentWrapper>
          )}/>

          <Route exact path="/dashboard/2" component={() => (
            <ContentWrapper
              openMobileNav={openMobileNav}
              handleChangeOpenMobileNav={handleChangeOpenMobileNav}
              openUserMenu={openUserMenu}
              handleChangeOpenUserMenu={handleChangeOpenUserMenu}
              handleChangeTheme={handleChangeTheme}
              theme={theme}
              gradient={gradient}
            >
              <DashboardType2 />
            </ContentWrapper>
          )}/>

          <Route exact path="/dashboard/3" component={() => (
            <ContentWrapper
              openMobileNav={openMobileNav}
              handleChangeOpenMobileNav={handleChangeOpenMobileNav}
              openUserMenu={openUserMenu}
              handleChangeOpenUserMenu={handleChangeOpenUserMenu}
              handleChangeTheme={handleChangeTheme}
              theme={theme}
              gradient={gradient}
            >
              <DashboardType3 />
            </ContentWrapper>
          )}/>

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
