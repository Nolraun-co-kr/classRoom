import React from 'react';
import BreadCrumb from './BreadCrumb';
import useWindowDimensions from '../../../hooks/useWindowDemensions';

const Header = ({ gradient, handleChangeTheme, theme, onChangeOpenUserMenu, onChangeOpenMobileNav }) => {
  const { width } = useWindowDimensions();

  return (
    <header className="header">

      <BreadCrumb gradient={gradient}/>

      <div className={'mobile-header-title'}>
        <button className={'menu'} onClick={onChangeOpenMobileNav} />
        <h2>Future Education</h2>
      </div>

      <div className={'haeder__right'}>
        <button onClick={handleChangeTheme}>
          {gradient
            ? <img src={'/assets/images/theme-icon2.png'} alt=""/>
            : <img src={`/assets/images/theme-icon${theme === 'light' ? '' : '2'}.png`} alt=""/>}
        </button>
        <button>
          {gradient
            ? <img src={'/assets/images/notification-icon2.png'} alt=""/>
            : <img src={`/assets/images/notification-icon${theme === 'light' ? '' : '2'}.png`} alt=""/>}

          <i className={'new'}>N</i>
        </button>
        <button>
          {gradient
            ? <img src={'/assets/images/info-icon2.png'} alt=""/>
            : <img src={`/assets/images/info-icon${theme === 'light' ? '' : '2'}.png`} alt=""/>}
        </button>

        {width > 768
          ? <button className={'drop-button'}>내 정보</button>
          : <button onClick={onChangeOpenUserMenu}>
            <img src={`/assets/images/user-icon${theme === 'light' ? '' : '2'}.png`} alt="" height={18}/>
          </button>
        }
      </div>
    </header>
  );
};

export default Header;
