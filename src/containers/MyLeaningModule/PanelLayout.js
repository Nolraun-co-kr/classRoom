import React, { useState } from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import Chat from '../../components/Chat';
import Pagination from '../../components/VideoLayout/Pagination';
import PanelContentList from '../../components/VideoLayout/PanelContentList';
import { FaAngleDoubleLeft } from 'react-icons/all';

const PanelLayout = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className={'panelLayout'}>
      <div className="panelLayout__content">

        <div
          className={`dim ${toggle ? 'active' : ''}`}
          onClick={() => setToggle(false)}
        ></div>

        <PanelContentList toggle={toggle} setToggle={setToggle} />

        <button className={'mobileShowContentList'} onClick={() => setToggle(true)}>
          <FaAngleDoubleLeft /> 강좌목차
        </button>

        <div className={'Video'}>
          <div className="Video__header">
            <strong>동영상</strong>
            <div className="actions">
              <button className={'action1'} />
              <button className={'action2'} />
            </div>
          </div>
          <VideoPlayer />
        </div>

        <div className={'chatbox'}>
          <Chat />
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default PanelLayout;
