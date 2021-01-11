import React from 'react';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import VideoPlayer from '../../components/VideoPlayer';
import Chat from '../../components/Chat';
import CodeEditor from '../../components/CodeEditor';
import { IoIosRefresh } from 'react-icons/all';
import useWindowDimensions from '../../hooks/useWindowDemensions';

const InteractiveLayout = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      {/* eslint-disable-next-line multiline-ternary */}
      {width <= 1023 ? (
        // 모바일
        <div className={'interactiveLayout'}>
          <div className={'block block--video'}>
            <div className="block__tabs">
              <button className={'video active'}><span>동영상</span></button>
              <button className={'book'}><span>교안</span></button>
            </div>
            <div className={'videoLayout'}>
              <VideoPlayer/>
            </div>
          </div>

          <div className={'block'}>
            <div className="block__tabs">
              <button className={'comment active'}><span>댓글과 질문</span></button>
              <button className={'book'}><span>교안</span></button>
            </div>
            <Chat headerHidden={true}/>
          </div>

          <div className={'block'}>
            <div className="block__tabs">
              <button className={'training active'}><span>실습창</span></button>
              <button className={'video'}><span>동영상</span></button>
            </div>

            <div className={'editorbox'}>
              <div className="editorInfo">
                <h3>· 설명</h3>
                <p>
                  주어진 100개의 데이터셋 중에서 “거북이” 키워드를 포함하는 데이터만 추출해서 csv 파일로 저장해보세요
                </p>
              </div>

              <div className="editor__card">
                <div className={'editor__card-header'}>
                  <button className={'active'}>Query.sql</button>
                </div>
                <CodeEditor/>
                <div className={'codeEditor__action'}>
                  <button className={'refresh'}>
                    <IoIosRefresh/>
                  </button>
                  <button className={'play'}>코드 실행</button>
                  <button className={'submit'}>실습결과 제출</button>
                </div>
              </div>

              <div className="editor__card editor__card--result">
                <div className={'editor__card-header'}>
                  <button className={'active'}>query result</button>
                  <button className={''}>roles</button>
                  <button className={''}>flims</button>
                </div>
                <div className={'editor__result'}>
                  아직 아무것도 실행되지 않았습니다
                </div>
                <div className={'codeEditor__footer'}>
                  0개 행중에 0개행이 보여짐
                </div>
              </div>
            </div>
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
                    <button className={'book'}><span>교안</span></button>
                  </div>
                  <div className={'videoLayout'}>
                    <VideoPlayer/>
                  </div>
                </div>

                <div className={'block'}>
                  <div className="block__tabs">
                    <button className={'comment active'}><span>댓글과 질문</span></button>
                    <button className={'book'}><span>교안</span></button>
                  </div>
                  <Chat headerHidden={true}/>
                </div>
              </SplitterLayout>

            </SplitterLayout>
            <div className={'block'}>
              <div className="block__tabs">
                <button className={'training active'}><span>실습창</span></button>
                <button className={'video'}><span>동영상</span></button>
              </div>

              <div className={'editorbox'}>
                <div className="editorInfo">
                  <h3>· 설명</h3>
                  <p>
                    주어진 100개의 데이터셋 중에서 “거북이” 키워드를 포함하는 데이터만 추출해서 csv 파일로 저장해보세요
                  </p>
                </div>

                <div className="editor__card">
                  <div className={'editor__card-header'}>
                    <button className={'active'}>Query.sql</button>
                  </div>
                  <CodeEditor/>
                  <div className={'codeEditor__action'}>
                    <button className={'refresh'}>
                      <IoIosRefresh/>
                    </button>
                    <button className={'play'}>코드 실행</button>
                    <button className={'submit'}>실습결과 제출</button>
                  </div>
                </div>

                <div className="editor__card editor__card--result">
                  <div className={'editor__card-header'}>
                    <button className={'active'}>query result</button>
                    <button className={''}>roles</button>
                    <button className={''}>flims</button>
                  </div>
                  <div className={'editor__result'}>
                    아직 아무것도 실행되지 않았습니다
                  </div>
                  <div className={'codeEditor__footer'}>
                    0개 행중에 0개행이 보여짐
                  </div>
                </div>
              </div>
            </div>
          </SplitterLayout>
        </div>
      )}
    </>
  );
};

export default InteractiveLayout;
