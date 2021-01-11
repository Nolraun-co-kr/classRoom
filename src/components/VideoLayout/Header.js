import React from 'react';
import useWindowDimensions from '../../hooks/useWindowDemensions';
import { BsArrowLeft, BsArrowRight, GiHamburgerMenu } from 'react-icons/all';

const Header = ({ handleChangeTheme, theme, onChangeOpenUserMenu }) => {
  const { width } = useWindowDimensions();

  return (
    <div className={'videoWrapper__header'}>
      <header className="header">
        <div className={'header__left'}>
          <button>
            <span>학습 종료하기</span>
          </button>
        </div>

        <div className={'header__controller'}>
          <span>이전 학습</span>
          <div className={'cntl'}>
            <button className={'cntl__prev'}>
              <BsArrowLeft />
            </button>
            <button className={'cntl__current'}>
              <GiHamburgerMenu />
              <span>변수와 함수</span>
            </button>
            <button className={'cntl__next'}>
              <BsArrowRight />
            </button>
          </div>
          <span>다음 학습</span>
        </div>

        <div className={'haeder__right'}>
          <button onClick={handleChangeTheme}>
            <img src={`/assets/images/theme-icon${theme === 'light' ? '' : '2'}.png`} alt=""/>
          </button>
          <button>
            <img src={`/assets/images/info-icon${theme === 'light' ? '' : '2'}.png`} alt=""/>
          </button>
          {width > 768
            ? <button className={'drop-button'}>로그인</button>
            : null
          }
        </div>
      </header>
    </div>
  );
};

export default Header;
