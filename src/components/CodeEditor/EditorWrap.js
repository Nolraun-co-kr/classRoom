import React from 'react';
import CodeEditor from './Editor';
import { IoIosRefresh } from 'react-icons/all';

const EditorWrap = ({ isMobile = false, tabState, onChangeTab }) => {
  return (
    <div className={'editorbox'}>
      {
        isMobile && (
          <div className={'editor__tab'}>
            <button className={`${tabState === 'code' ? 'active' : ''}`} onClick={() => onChangeTab('code')}>코드</button>
            <button className={`${tabState === 'result' ? 'active' : ''}`} onClick={() => onChangeTab('result')}>실행결과</button>
          </div>
        )
      }

      <div className="editorInfo">
        <h3>· 설명</h3>
        <p>
          주어진 100개의 데이터셋 중에서 “거북이” 키워드를 포함하는 데이터만 추출해서 csv 파일로 저장해보세요
        </p>
      </div>

      <div className={`editor__card ${isMobile && tabState !== 'code' ? 'hidden' : ''}`}>
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

      <div className={`editor__card editor__card--result  ${isMobile && tabState !== 'result' ? 'hidden' : ''}`}>
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
  );
};

export default EditorWrap;
