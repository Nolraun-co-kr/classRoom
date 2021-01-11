import React from 'react';
import Header from '../VideoLayout/Header';

const VideoWrapper = ({
  children,
  theme,
  handleChangeTheme,
  onChangeOpenUserMenu
}) => {
  return (
    <>
      <div className="content content--video">
        <Header
          handleChangeTheme={handleChangeTheme}
          theme={theme}
          onChangeOpenUserMenu={onChangeOpenUserMenu}
        />

        <div className="content__inner">
          {children}
        </div>

      </div>
    </>
  );
};

export default VideoWrapper; ;
