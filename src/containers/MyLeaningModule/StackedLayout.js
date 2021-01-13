import React, { useState } from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import Chat from '../../components/Chat';
import EditorWrap from '../../components/CodeEditor/EditorWrap';
import useWindowDimensions from '../../hooks/useWindowDemensions';

const StackedLayout = () => {
  // video, chat, editor
  const { width } = useWindowDimensions();
  const [mobileTab, setMobileTab] = useState('video');
  const [tabState, setTabState] = useState('code');
  return (
    <div className={'detailLayout3'}>
      <div className={'detailLayout3__progress'}>
        <div className={'inner_progress'}>
          <button className={'play-control'}></button>
          <span className={'inner_progress-bar'}></span>
        </div>
        <div className={'timer'}>
          <span className={'current'}>0:00</span>
          <span className={'divider'}>/</span>
          <span className={'duration'}>25:13</span>
        </div>
      </div>

      <div className="detailLayout3__inner">
        <div className={'detailLayout3__tab'}>
          <div className={'block'}>
            <button className={`tab1 ${mobileTab === 'video' ? 'active' : ''}`} onClick={() => setMobileTab('video')}>
              <i>1</i>
              <span>동영상</span>
            </button>
          </div>
          <div className={'block'}>
            <button className={`tab2 ${mobileTab === '' ? 'active' : ''}`}>
              <i>1</i>
              <span>교안</span>
            </button>
          </div>
          <div className={'block'}>
            <button className={`tab3 ${mobileTab === '' ? 'active' : ''}`}>
              <i className={'hidden'}>0</i>
              <span>퀴즈</span>
            </button>
          </div>
          <div className={'block'}>
            <button className={`tab4 ${mobileTab === 'chat' ? 'active' : ''}`} onClick={() => setMobileTab('chat')}>
              <i className={'hidden'}>0</i>
              <span>댓글과 질문</span>
            </button>
          </div>
          <div className={'block'}>
            <button className={`tab5 ${mobileTab === '' ? 'active' : ''}`}>
              <i className={'hidden'}>0</i>
              <span>자료</span>
            </button>
          </div>
          <div className={'block'}>
            <button className={`tab6 ${mobileTab === 'editor' ? 'active' : ''}`} onClick={() => setMobileTab('editor')}>
              <i className={'hidden'}>0</i>
              <span>실습창</span>
            </button>
          </div>
        </div>

        { width <= 768
          // mobile
          ? <>
              <div className={`Video mobileView ${mobileTab === 'video' ? 'active' : ''}`}>
                <div className="Video__header">
                  <strong>동영상</strong>
                  <div className="actions">
                    <button className={'action1'} />
                    <button className={'action2'} />
                  </div>
                </div>
                <VideoPlayer />
              </div>
              <div className={`chatbox mobileView ${mobileTab === 'chat' ? 'active' : ''}`}>
                <Chat />
              </div>

            <div className={` mobileView ${mobileTab === 'editor' ? 'active' : ''}`}>
              <div className="Video__header">
                <strong>실습창</strong>
                <div className="actions">
                  <button className={'action1'} />
                  <button className={'action2'} />
                </div>
              </div>
              <div className={'Codebox'}>
                <EditorWrap
                  isMobile={width <= 768}
                  tabState={tabState}
                  onChangeTab={setTabState}
                />
              </div>
            </div>
          </>
          : <>
            <div className="detailLayout3__left">
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
            </div>
            <div className={'detailLayout3__right'}>
              <div className="Video__header">
                <strong>실습창</strong>
                <div className="actions">
                  <button className={'action1'} />
                  <button className={'action2'} />
                </div>
              </div>
              <div className={'Codebox'}>
                <EditorWrap />
              </div>
            </div>
          </>
        }

      </div>
    </div>
  );
};

export default StackedLayout;
