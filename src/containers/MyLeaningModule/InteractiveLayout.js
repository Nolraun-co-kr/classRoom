import React, { useState } from 'react';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import VideoPlayer from '../../components/VideoPlayer';
import Chat from '../../components/Chat';
import useWindowDimensions from '../../hooks/useWindowDemensions';
import EditorWrap from '../../components/CodeEditor/EditorWrap';

const InteractiveLayout = () => {
  const { width } = useWindowDimensions();
  const [practiceTab, setPracticeTab] = useState(1);
  const handleClickShowPdf = () => {
    window.open('http://www.africau.edu/images/default/sample.pdf');
  };
  return (
    <>
      {/* eslint-disable-next-line multiline-ternary */}
      {width <= 1023 ? (
        // 모바일
        <div className={'interactiveLayout'}>
          <div className={'block block--video'}>
            <div className="block__tabs">
              <button className={'video active'}><span>동영상</span></button>
              <button className={'book'} onClick={handleClickShowPdf}><span>교안</span></button>
            </div>
            <div className={'videoLayout'}>
              <VideoPlayer/>
            </div>
          </div>

          <div className={'block'}>
            <div className="block__tabs">
              <button className={'comment active'}><span>댓글과 질문</span></button>
              <button className={'book'} onClick={handleClickShowPdf}><span>교안</span></button>
            </div>
            <Chat headerHidden={true}/>
          </div>

          <div className={'block'}>
            <div className="block__tabs">
              <button className={`training ${practiceTab === 1 ? 'active' : ''}`} onClick={() => setPracticeTab(1)}><span>실습창</span></button>
              <button className={`video ${practiceTab === 2 ? 'active' : ''}`} onClick={() => setPracticeTab(2)}><span>동영상</span></button>
            </div>

            {/* eslint-disable-next-line multiline-ternary */}
            {practiceTab === 1 ? (
              <EditorWrap />
            ) : (
              <div className={'videoLayout'}>
                <VideoPlayer/>
              </div>
            )}

          </div>
        </div>
      ) : (
        // pc
        <div className={'interactiveLayout'}>
          <SplitterLayout primaryIndex={1}>
            <SplitterLayout>
              <SplitterLayout vertical>
                <div className={'block block--video'}>
                  <div className="block__tabs">
                    <button className={'video active'}><span>동영상</span></button>
                    <button className={'book'} onClick={handleClickShowPdf}><span>교안</span></button>
                  </div>
                  <div className={'videoLayout'}>
                    <VideoPlayer/>
                  </div>
                </div>

                <div className={'block'}>
                  <div className="block__tabs">
                    <button className={'comment active'}><span>댓글과 질문</span></button>
                    <button className={'book'} onClick={handleClickShowPdf}><span>교안</span></button>
                  </div>
                  <Chat headerHidden={true}/>
                </div>
              </SplitterLayout>

            </SplitterLayout>
            <div className={'block'}>
              <div className="block__tabs">
                <button className={`training ${practiceTab === 1 ? 'active' : ''}`} onClick={() => setPracticeTab(1)}><span>실습창</span></button>
                <button className={`video ${practiceTab === 2 ? 'active' : ''}`} onClick={() => setPracticeTab(2)}><span>동영상</span></button>
              </div>

              {/* eslint-disable-next-line multiline-ternary */}
              {practiceTab === 1 ? (
                <EditorWrap />
              ) : (
                <div className={'videoLayout'}>
                  <VideoPlayer/>
                </div>
              )}

            </div>
          </SplitterLayout>
        </div>
      )}
    </>
  );
};

export default InteractiveLayout;
