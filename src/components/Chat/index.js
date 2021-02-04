import React from 'react';

const Chat = ({ headerHidden }) => {
  return (
    <div className={'chat'}>
      {!headerHidden && (
        <div className="chat__header">
          <strong>댓글과 질문</strong>
          {/* <div className="actions"> */}
          {/*  <button className={'action1'} /> */}
          {/*  <button className={'action2'} /> */}
          {/* </div> */}
        </div>
      )}

      <div className={'chat__body'}>
        <div className="chat__item">
          <div className={'chat__item-header'}>
            <div className="chat__author">20200984 유현성</div>
            <span>오후 3:44</span>
          </div>
          <div className={'chat__item-content'}>
            실행창에 입력한 예제는 어떻게 실행할 수 있나요 ?
          </div>
        </div>

        <div className="chat__item">
          <div className={'chat__item-header'}>
            <div className="chat__author teach">교수자</div>
            <span>오후 3:44</span>
          </div>
          <div className={'chat__item-content'}>
            실행창 우측 하단의 Run Code 버튼을 클릭하면 하단의 결과 창에서 확인 할 수 있습니다.감사합니다.
          </div>
        </div>

        <div className="chat__item">
          <div className={'chat__item-header'}>
            <div className="chat__author">20200984 최명률</div>
            <span>오후 7:02</span>
          </div>
          <div className={'chat__item-content'}>
            위 학습영상은 끝까지 보면 자동으로 학습완료 처리가 되나요 ?
          </div>
        </div>
      </div>
      <div className={'chat__footer'}>
        <div className={'chat__form'}>
          <textarea name="" id="" placeholder={'질문을 입력하세요.'}></textarea>
          <button>전송</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
