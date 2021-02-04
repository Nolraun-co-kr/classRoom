import React, { useState, useRef } from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import Chat from '../../components/Chat';
import EditorWrap from '../../components/CodeEditor/EditorWrap';
import useWindowDimensions from '../../hooks/useWindowDemensions';
import videoData from '../../videodata';

import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow';

const StackedLayout = () => {
  // video, chat, editor
  const windowRef1 = useRef(null);
  const windowRef2 = useRef(null);
  const windowRef3 = useRef(null);
  const { width } = useWindowDimensions();
  const [vdata, setVdata] = useState(videoData);
  const [mobileTab, setMobileTab] = useState('video');
  const [tabState, setTabState] = useState('code');

  return (
    <div className={'detailLayout3'}>
      <div className={'detailLayout3__progress'}>
        <div className={'inner_progress'}>
          <div className={'_section-list'}>
            {
              vdata.section.map((data, index) => {
                const width = (data.endTime - data.startTime) / vdata.time * 100;

                return (
                  <span key={index} className={'_section'} style={{
                    width: `calc(${width}% - 3px)`
                  }}></span>
                );
              })
            }
          </div>
          <button className={'play-control'}></button>
          <span className={'inner_progress-bar'}>
          </span>
        </div>
        <div className={'timer'}>
          <span className={'current'}>0:00</span>
          <span className={'divider'}>/</span>
          <span className={'duration'}>0:00</span>
        </div>
      </div>

      <div className="detailLayout3__inner">
        <div className={'detailLayout3__tab'}>
          {vdata.section.map(section => {
            return section.active && (
              <>
                <div className={'block'}>
                  <button className={`tab1  ${section.window.video.active ? 'active' : ''}`} onClick={() => setMobileTab('video')}>
                    <i className={section.window.video.active ? '' : 'hidden'}>{section.window.video.count}</i>
                    <span>동영상</span>
                  </button>
                </div>

                <div className={'block'}>
                  <button className={`tab2  ${section.window.file.active ? 'active' : ''}`}>
                    <i className={section.window.file.active ? '' : 'hidden'}>{section.window.file.count}</i>
                    <span>교안</span>
                  </button>
                </div>

                <div className={'block'}>
                  <button className={`tab3  ${section.window.quiz.active ? 'active' : ''}`}>
                   <i className={section.window.quiz.active ? '' : 'hidden'}>{section.window.quiz.count}</i>
                    <span>퀴즈</span>
                  </button>
                </div>

                <div className={'block'}>
                  <button className={`tab4 ${section.window.comments.active ? 'active' : ''}`}>
                   <i className={section.window.comments.active ? '' : 'hidden'}>{section.window.comments.count}</i>
                    <span>댓글과 질문</span>
                  </button>
                </div>

                <div className={'block'}>
                  <button className={`tab5  ${section.window.documents.active ? 'active' : ''}`}>
                   <i className={section.window.documents.active ? '' : 'hidden'}>{section.window.documents.count}</i>
                    <span>자료</span>
                  </button>
                </div>

                <div className={'block'}>
                  <button className={`tab6 ${section.window.practice.active ? 'active' : ''}`}>
                   <i className={section.window.practice.active ? '' : 'hidden'}>{section.window.practice.count}</i>
                    <span>실습창</span>
                  </button>
                </div>
              </>
            );
          })}
        </div>

        <>
             <div className={'detailLayout3__mobile'}>
               <div className={`Video mobileView ${mobileTab === 'video' ? 'active' : ''}`}>
                 <div className="Video__header">
                   <strong>동영상</strong>
                   <div className="actions">
                     <button className={'action1'} />
                     <button className={'action2'} />
                   </div>
                 </div>
                 <VideoPlayer vdata={vdata} setVdata={setVdata} />
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
             </div>

            <div className={'detailLayout3__pc'}>
              <div className="detailLayout3__left">
                <JqxWindow
                  ref={windowRef1}
                  width={810}
                  height={450}
                  position={{ x: 130, y: 130 }}
                >
                  <div className="Video__header _wedget-header">
                    <strong>동영상</strong>
                  </div>
                  <div className={'Video'}>
                    <VideoPlayer vdata={vdata} setVdata={setVdata} />
                  </div>
                </JqxWindow>
                <JqxWindow
                  ref={windowRef2}
                  width={810}
                  height={335}
                  position={{ x: 130, y: 590 }}
                >
                  <div className={'chat__header _wedget-header'}>
                    <strong>댓글과 질문</strong>
                  </div>
                  <div className={'chatbox'}>
                    <Chat headerHidden={true} />
                  </div>
                </JqxWindow>
              </div>
              <div className={'detailLayout3__right'}>

                <JqxWindow
                  ref={windowRef3}
                  width={810}
                  height={795}
                  position={{ x: 960, y: 130 }}
                >
                  <div className="Video__header _wedget-header">
                    <strong>실습창</strong>
                    {/* <div className="actions"> */}
                    {/*  <button className={'action1'} /> */}
                    {/*  <button className={'action2'} /> */}
                    {/* </div> */}
                  </div>
                  <div className={'Codebox'}>
                    <EditorWrap />
                  </div>
                </JqxWindow>
              </div>
            </div>
          </>
      </div>
    </div>
  );
};

export default StackedLayout;
