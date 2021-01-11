import React from 'react';
import { Header, Lnb, MobileNav, MobileUserMenu } from '../Layout';
import MobileHomeNav from '../Home/MobileHomeNav';
import MobileHomeBottomNav from '../Home/MobileHomeBottomNav';

const ContentWrapper = ({
  children,
  openMobileNav,
  handleChangeOpenMobileNav,
  openUserMenu,
  handleChangeOpenUserMenu,
  handleChangeTheme,
  theme,
  gradient
}) => {
  return (
    <>
      <MobileNav openMobileNav={openMobileNav} onChangeOpenMobileNav={handleChangeOpenMobileNav} />
      <MobileUserMenu openUserMenu={openUserMenu} onChangeOpenUserMenu={handleChangeOpenUserMenu}/>

      <Lnb />
      <div className="content">
        <Header
          onChangeOpenUserMenu={handleChangeOpenUserMenu}
          onChangeOpenMobileNav={handleChangeOpenMobileNav}
          handleChangeTheme={handleChangeTheme}
          theme={theme}
          gradient={gradient}
        />
        <div className="content__inner">
          <MobileHomeNav />
          {children}
          <MobileHomeBottomNav />
        </div>
      </div>
    </>
  );
};

export default ContentWrapper;
