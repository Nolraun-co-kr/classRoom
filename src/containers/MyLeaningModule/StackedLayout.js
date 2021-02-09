import React, { useState, useRef, useEffect, useCallback } from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import Chat from '../../components/Chat';
import EditorWrap from '../../components/CodeEditor/EditorWrap';
import useWindowDimensions from '../../hooks/useWindowDemensions';
import videoData from '../../videodata';

import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow';

const StackedLayout = () => {
  // video, chat, editor
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(true);
  const [postionVideo, setPositionVideo] = useState({ x: 130, y: 130 });
  const fileRef = useRef(null);
  const [showFile, setShowFile] = useState(true);
  const [positionFile, setPositionFile] = useState({ x: 960, y: 130 });
  const quizRef = useRef(null);
  const [showQuiz, setShowQuiz] = useState(true);
  const [positionQuiz, setPositionQuiz] = useState({ x: 130, y: 130 });
  const commentsRef = useRef(null);
  const [showComment, setShowComment] = useState(true);
  const [positionComment, setPositionComment] = useState({ x: 130, y: 590 });
  const documentsRef = useRef(null);
  const [showDocument, setShowDocument] = useState(true);
  const [positionDocument, setPositionDocument] = useState({ x: 960, y: 130 });
  const practiceRef = useRef(null);
  const [showPractice, setShowPractice] = useState(true);
  const [positionPractice, setPositionPractice] = useState({ x: 960, y: 130 });
  const { width } = useWindowDimensions();
  const [vdata, setVdata] = useState(videoData);
  const [mobileTab, setMobileTab] = useState('video');
  const [tabState, setTabState] = useState('code');

  const handleClickVideoTab = (active) => {
    setShowVideo(true);
    document.querySelector('.detailLayout3__tab .tab1').classList.remove('hidden-tab');
    if (active) {
      width > 769 && videoRef.current.open();
      setMobileTab('video');
    }
  };

  const handleClickFileTab = (active) => {
    setShowFile(true);
    document.querySelector('.detailLayout3__tab .tab2').classList.remove('hidden-tab');
    if (active) {
      width > 769 && fileRef.current.open();
      setMobileTab('file');
    }
  };

  const handleClickQuizTab = (active) => {
    setShowQuiz(true);
    document.querySelector('.detailLayout3__tab .tab3').classList.remove('hidden-tab');
    if (active) {
      width > 769 && quizRef.current.open();
      setMobileTab('quiz');
    }
  };

  const handleClickCommentTab = (active) => {
    setShowComment(true);
    document.querySelector('.detailLayout3__tab .tab4').classList.remove('hidden-tab');
    if (active) {
      width > 769 && commentsRef.current.open();
      setMobileTab('chat');
    }
  };

  const handleClickDocumentTab = (active) => {
    setShowDocument(true);
    document.querySelector('.detailLayout3__tab .tab5').classList.remove('hidden-tab');
    if (active) {
      width > 769 && documentsRef.current.open();
      setMobileTab('document');
    }
  };

  const handleClickPracticeTab = (active) => {
    setShowPractice(true);
    document.querySelector('.detailLayout3__tab .tab6').classList.remove('hidden-tab');
    if (active) {
      width > 769 && practiceRef.current.open();
      setMobileTab('editor');
    }
  };

  const handleMovdeVideoWidget = useCallback((e) => {
    setPositionVideo({ x: e.args.x, y: e.args.y });
  }, []);

  const handleMovdeVFileWidget = useCallback((e) => {
    setPositionFile({ x: e.args.x, y: e.args.y });
  }, []);
  const handleMovdeQuizWidget = useCallback((e) => {
    setPositionQuiz({ x: e.args.x, y: e.args.y });
  }, []);
  const handleMovdeCommentWidget = useCallback((e) => {
    setPositionComment({ x: e.args.x, y: e.args.y });
  }, []);
  const handleMovdeDocumentWidget = useCallback((e) => {
    setPositionDocument({ x: e.args.x, y: e.args.y });
  }, []);
  const handleMovdePracticeWidget = useCallback((e) => {
    setPositionPractice({ x: e.args.x, y: e.args.y });
  }, []);

  useEffect(() => {
    document.querySelector('.video--action1').addEventListener('click', () => {
      setShowVideo(false);
      document.querySelector('.detailLayout3__tab .tab1').classList.add('hidden-tab');
      videoRef.current.close();
    });
    document.querySelector('.file--action1').addEventListener('click', () => {
      setShowFile(false);
      document.querySelector('.detailLayout3__tab .tab2').classList.add('hidden-tab');
      fileRef.current.close();
    });
    document.querySelector('.quiz--action1').addEventListener('click', () => {
      setShowQuiz(false);
      document.querySelector('.detailLayout3__tab .tab3').classList.add('hidden-tab');
      quizRef.current.close();
    });
    document.querySelector('.comment--action1').addEventListener('click', () => {
      setShowComment(false);
      document.querySelector('.detailLayout3__tab .tab4').classList.add('hidden-tab');
      commentsRef.current.close();
    });
    document.querySelector('.document--action1').addEventListener('click', () => {
      setShowDocument(false);
      document.querySelector('.detailLayout3__tab .tab5').classList.add('hidden-tab');
      documentsRef.current.close();
    });
    document.querySelector('.practice--action1').addEventListener('click', () => {
      setShowPractice(false);
      document.querySelector('.detailLayout3__tab .tab6').classList.add('hidden-tab');
      practiceRef.current.close();
    });
    vdata.section.forEach(section => {
      if (section.active) {
        if (section.window.video.active) {
          videoRef.current.open();
        } else {
          videoRef.current.close();
        }

        if (section.window.file.active) {
          fileRef.current.open();
        } else {
          fileRef.current.close();
        }

        if (section.window.quiz.active) {
          quizRef.current.open();
        } else {
          quizRef.current.close();
        }

        if (section.window.comments.active) {
          commentsRef.current.open();
        } else {
          commentsRef.current.close();
        }

        if (section.window.documents.active) {
          documentsRef.current.open();
        } else {
          documentsRef.current.close();
        }

        if (section.window.practice.active) {
          practiceRef.current.open();
        } else {
          practiceRef.current.close();
        }
      }
    });
  }, [vdata]);

  useEffect(() => {
    if (width < 769) {
      videoRef.current.hide();
      fileRef.current.hide();
      quizRef.current.hide();
      commentsRef.current.hide();
      documentsRef.current.hide();
      practiceRef.current.hide();
    }
  }, [width]);

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
          {vdata.section.map((section, index) => {
            return section.active && (
              <div key={index}>
                <div className={`block ${section.window.video.active ? 'active' : ''}`}>
                  <button className={`tab1 ${section.window.video.active ? 'active' : ''}`} onClick={() => handleClickVideoTab(section.window.video.active)}>
                    <i className={section.window.video.active ? '' : 'hidden'}>{section.window.video.count}</i>
                    <span>동영상</span>
                  </button>
                </div>

                <div className={`block ${section.window.file.active ? 'active' : ''}`}>
                  <button className={`tab2 ${section.window.file.active ? 'active' : ''}`} onClick={() => handleClickFileTab(section.window.file.active)}>
                    <i className={section.window.file.active ? '' : 'hidden'}>{section.window.file.count}</i>
                    <span>교안</span>
                  </button>
                </div>

                <div className={`block ${section.window.quiz.active ? 'active' : ''}`}>
                  <button className={`tab3 ${section.window.quiz.active ? 'active' : ''}`} onClick={() => handleClickQuizTab(section.window.quiz.active)}>
                   <i className={section.window.quiz.active ? '' : 'hidden'}>{section.window.quiz.count}</i>
                    <span>퀴즈</span>
                  </button>
                </div>

                <div className={`block ${section.window.comments.active ? 'active' : ''}`}>
                  <button className={`tab4 ${section.window.comments.active ? 'active' : ''}`} onClick={() => handleClickCommentTab(section.window.comments.active)}>
                   <i className={section.window.comments.active ? '' : 'hidden'}>{section.window.comments.count}</i>
                    <span>댓글과 질문</span>
                  </button>
                </div>

                <div className={`block ${section.window.documents.active ? 'active' : ''}`}>
                  <button className={`tab5 ${section.window.documents.active ? 'active' : ''}`} onClick={() => handleClickDocumentTab(section.window.documents.active)}>
                   <i className={section.window.documents.active ? '' : 'hidden'}>{section.window.documents.count}</i>
                    <span>자료</span>
                  </button>
                </div>

                <div className={`block ${section.window.practice.active ? 'active' : ''}`}>
                  <button className={`tab6 ${section.window.practice.active ? 'active' : ''}`} onClick={() => handleClickPracticeTab(section.window.practice.active)}>
                   <i className={section.window.practice.active ? '' : 'hidden'}>{section.window.practice.count}</i>
                    <span>실습창</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <>
             <div className={'detailLayout3__mobile'}>
               <div className={`Video mobileView ${mobileTab === 'video' ? 'active' : ''}`}>
                 <div className="Video__header">
                   <strong>동영상</strong>
                 </div>
                 {
                   width < 769 && (
                     <VideoPlayer vdata={vdata} setVdata={setVdata} />
                   )
                 }
               </div>

               <div className={`Video mobileView ${mobileTab === 'file' ? 'active' : ''}`}>
                 <div className="Video__header">
                   <strong>교안</strong>
                 </div>
                 <div className={'pdfLayout'}>
                   <iframe src="http://www.africau.edu/images/default/sample.pdf" frameBorder="0"></iframe>
                 </div>
               </div>

               <div className={`Video mobileView ${mobileTab === 'quiz' ? 'active' : ''}`}>
                 <div className="Video__header">
                   <strong>퀴즈</strong>
                 </div>
                 <div className={'pdfLayout'}>
                   퀴즈
                 </div>
               </div>

               <div className={`chatbox mobileView ${mobileTab === 'chat' ? 'active' : ''}`}>
                 <Chat />
               </div>

               <div className={`Video mobileView ${mobileTab === 'document' ? 'active' : ''}`}>
                 <div className="Video__header">
                   <strong>자료</strong>
                 </div>
                 <div className={'pdfLayout'}>
                   자료
                 </div>
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
              <JqxWindow
                ref={videoRef}
                width={810}
                height={450}
                position={postionVideo}
                showCloseButton={false}
                onMoved={handleMovdeVideoWidget}
                className={showVideo ? 'jqx-rc-all jqx-window jqx-popup jqx-widget jqx-widget-content' : 'hidden'}
              >
                <div className="Video__header _wedget-header">
                  <strong>동영상</strong>
                  <div className="actions">
                    <button className={'action1 video--action1'}/>
                    <button className={'action2'} />
                  </div>
                </div>
                <div className={'Video'}>
                  {
                    width > 768 && (
                      <div>
                        <VideoPlayer vdata={vdata} setVdata={setVdata} />
                      </div>
                    )
                  }

                </div>
              </JqxWindow>
              <JqxWindow
                ref={fileRef}
                width={810}
                height={795}
                position={positionFile}
                showCloseButton={false}
                onMoved={handleMovdeVFileWidget}
                className={showFile ? 'jqx-rc-all jqx-window jqx-popup jqx-widget jqx-widget-content' : 'hidden'}
              >
                <div className="Video__header _wedget-header">
                  <strong>교안</strong>
                  <div className="actions">
                    <button className={'action1 file--action1'}/>
                    <button className={'action2'} />
                  </div>
                </div>
                <div className={'pdfLayout'}>
                  <iframe src="http://www.africau.edu/images/default/sample.pdf" frameBorder="0"></iframe>
                </div>
              </JqxWindow>
              <JqxWindow
                ref={quizRef}
                width={810}
                height={450}
                position={positionQuiz}
                showCloseButton={false}
                onMoved={handleMovdeQuizWidget}
                className={showQuiz ? 'jqx-rc-all jqx-window jqx-popup jqx-widget jqx-widget-content' : 'hidden'}
              >
                <div className="Video__header _wedget-header">
                  <strong>퀴즈</strong>
                  <div className="actions">
                    <button className={'action1 quiz--action1'}/>
                    <button className={'action2'} />
                  </div>
                </div>
              </JqxWindow>
              <JqxWindow
                ref={commentsRef}
                width={810}
                height={335}
                position={positionComment}
                showCloseButton={false}
                onMoved={handleMovdeCommentWidget}
                className={showComment ? 'jqx-rc-all jqx-window jqx-popup jqx-widget jqx-widget-content' : 'hidden'}
              >
                <div className={'chat__header _wedget-header'}>
                  <strong>댓글과 질문</strong>
                  <div className="actions">
                    <button className={'action1 comment--action1'}/>
                    <button className={'action2'} />
                  </div>
                </div>
                <div className={'chatbox'}>
                  <Chat headerHidden={true} />
                </div>
              </JqxWindow>
              <JqxWindow
                ref={documentsRef}
                width={810}
                height={795}
                position={positionDocument}
                showCloseButton={false}
                onMoved={handleMovdeDocumentWidget}
                className={showDocument ? 'jqx-rc-all jqx-window jqx-popup jqx-widget jqx-widget-content' : 'hidden'}
              >
                <div className="Video__header _wedget-header">
                  <strong>자료</strong>
                  <div className="actions">
                    <button className={'action1 document--action1'}/>
                    <button className={'action2'} />
                  </div>
                </div>
                <div>
                  자료
                </div>

              </JqxWindow>

              <JqxWindow
                ref={practiceRef}
                width={810}
                height={795}
                position={positionPractice}
                showCloseButton={false}
                onMoved={handleMovdePracticeWidget}
                className={showPractice ? 'jqx-rc-all jqx-window jqx-popup jqx-widget jqx-widget-content' : 'hidden'}
              >
                <div className="Video__header _wedget-header">
                  <strong>실습창</strong>
                  <div className="actions">
                    <button className={'action1 practice--action1'}/>
                    <button className={'action2'} />
                  </div>
                </div>
                <div className={'Codebox'}>
                  <EditorWrap />
                </div>
              </JqxWindow>

            </div>
          </>
      </div>
    </div>
  );
};

export default StackedLayout;
