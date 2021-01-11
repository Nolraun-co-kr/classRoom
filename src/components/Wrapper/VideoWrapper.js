import React, { useState } from 'react';
import Header from '../VideoLayout/Header';
import { AiOutlineClose } from 'react-icons/all';
import Contents from '../Contents';

const VideoWrapper = ({
  children,
  theme,
  handleChangeTheme,
  onChangeOpenUserMenu
}) => {
  const [toggleContent, setToggleContent] = useState(false);
  return (
    <>
      <div className="content content--video">
        <Header
          handleChangeTheme={handleChangeTheme}
          theme={theme}
          onChangeOpenUserMenu={onChangeOpenUserMenu}
          setToggleContent={setToggleContent}
        />

        {toggleContent && (
          <div className={'ContentListPopup'}>
            <div className="ContentListPopup__header">
              <h2>실습으로 배우는 클립스튜디오</h2>
              <button onClick={() => setToggleContent(false)}>
                <AiOutlineClose />
              </button>
            </div>
            <Contents theme={theme} />
          </div>
        )}

        <div className="content__inner">
          {children}
        </div>

      </div>
    </>
  );
};

export default VideoWrapper; ;
