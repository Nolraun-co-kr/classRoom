import React, { useState } from 'react';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import VideoPlayer from '../../components/VideoPlayer';
import Chat from '../../components/Chat';
import useWindowDimensions from '../../hooks/useWindowDemensions';
import EditorWrap from '../../components/CodeEditor/EditorWrap';

const InteractiveLayout = () => {
  const [videoTab, setVideoTab] = useState(1);
  const [chatTab, setChatTab] = useState(1);
  const { width } = useWindowDimensions();
  const [practiceTab, setPracticeTab] = useState(1);

  return (
    <>
      {/* eslint-disable-next-line multiline-ternary */}
      {width <= 1023 ? (
        // 모바일
        <div className={'interactiveLayout'}>
          <div className={'block block--video'}>
            <div className="block__tabs">
              <button className={`video ${videoTab === 1 ? 'active' : ''}`} onClick={() => setVideoTab(1)}><span>동영상</span></button>
              <button className={`book ${videoTab === 2 ? 'active' : ''}`} onClick={() => setVideoTab(2)}><span>교안</span></button>
            </div>
            <div className={'videoLayout'}>
              <VideoPlayer/>
            </div>
          </div>

          <div className={'block'}>
            <div className="block__tabs">

              <button className={`comment ${chatTab === 1 ? 'active' : ''}`} onClick={() => setChatTab(1)}><span>댓글과 질문</span></button>
              <button className={`book ${chatTab === 2 ? 'active' : ''}`} onClick={() => setChatTab(2)}><span>교안</span></button>
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
            <SplitterLayout vertical={true}>
                  <div className={'block block--video'}>
                    <div className="block__tabs">
                      <button className={`video ${videoTab === 1 ? 'active' : ''}`} onClick={() => setVideoTab(1)}><span>동영상</span></button>
                      <button className={`book ${videoTab === 2 ? 'active' : ''}`} onClick={() => setVideoTab(2)}><span>교안</span></button>
                    </div>
                    {/* eslint-disable-next-line multiline-ternary */}
                    {videoTab === 1 ? (
                      <div className={'videoLayout'}>
                        <VideoPlayer/>
                      </div>
                    ) : (
                      <div className={'pdfLayout'}>
                        <iframe src="http://www.africau.edu/images/default/sample.pdf" frameBorder="0"></iframe>
                      </div>
                    )}

                  </div>
                  <div className={'block'}>
                    <div className="block__tabs">
                      <button className={`comment ${chatTab === 1 ? 'active' : ''}`} onClick={() => setChatTab(1)}><span>댓글과 질문</span></button>
                      <button className={`book ${chatTab === 2 ? 'active' : ''}`} onClick={() => setChatTab(2)}><span>교안</span></button>
                    </div>
                    {/* eslint-disable-next-line multiline-ternary */}
                    {chatTab === 1 ? (
                      <Chat headerHidden={true}/>
                    ) : (
                      <div className={'pdfLayout'}>
                        <iframe src="http://www.africau.edu/images/default/sample.pdf" frameBorder="0"></iframe>
                      </div>
                    )}
                  </div>
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
