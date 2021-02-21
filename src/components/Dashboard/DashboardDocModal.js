import React, { useCallback, useState } from 'react';
import Editor from '../Editor';

const DashboardDocModal = ({
  handleClickToggleOption,
  toggleOption
}) => {
  const [tab, setTab] = useState(1);

  const handleClickChangeTab = useCallback((value) => {
    setTab(value);
  }, [tab]);

  return (
    <div className={'insertForm'}>
      <div className="schedule__tabs">
        <button className={tab === 1 ? 'active' : ''} onClick={() => handleClickChangeTab(1)}>수정</button>
        <button className={tab === 2 ? 'active' : ''} onClick={() => handleClickChangeTab(2)}>
          학습자 화면
        </button>
        <button className={tab === 3 ? 'active' : ''} onClick={() => handleClickChangeTab(3)}>
          평가
        </button>
      </div>
      {
        tab === 1 && (
          <>
            <div className="_modal__block">
              <div className="_modal__block-header">
                <h2 className={'i-doc'}>교안자료</h2>
              </div>
              <div className={'_modal__block-body'}>

                <div className="row">
                  <h3 className={'insertForm__name required'}> 제목</h3>
                  <div className={'insertForm__content'}>
                    <div className="input full"><input type="text"/></div>
                  </div>
                </div>

                <div className="row">
                  <h3 className={'insertForm__name required'}> 첨부파일</h3>
                  <div className={'insertForm__content'}>
                    첨파부일
                  </div>
                </div>

              </div>

              <div className={'_modal__block-body'}>
                <button className={'_btn small'} onClick={handleClickToggleOption}>
                  고급옵션 {toggleOption ? '닫기 -' : '열기 +'}
                </button>
              </div>
            </div>
            {
              toggleOption && (
                <div className="_modal__block">
                  <div className="_modal__block-header">
                    <h2>고급옵션</h2>
                  </div>
                  <div className={'_modal__block-body'}>
                    <div className="row">
                      <h3 className={'insertForm__name'}>설명</h3>
                      <div className={'insertForm__content'}>
                        <Editor bodyHeight={300} />
                      </div>
                    </div>
                  </div>
                  <div className={'_modal__block-body'}>
                    <div className="row">
                      <h3 className={'insertForm__name'}>파일 표시형식</h3>
                      <div className={'insertForm__content'}>
                        <div className="flex">
                          <label className={'custom-checkbox'} htmlFor={'ak1'}>
                            <input type="checkbox" id={'ak1'} />
                            <span />
                            <p>자동 다운로드</p>
                          </label>
                        </div>
                        <div className="flex">
                          <label className={'custom-checkbox'} htmlFor={'ak1'}>
                            <input type="checkbox" id={'ak1'} />
                            <span />
                            <p>
                              문서 형식 전용 뷰어
                              <em className={'gray'}>(전용 뷰어 지원 형식 : pdf, hwp, pptx, ppt)</em>
                            </p>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={'_modal__block-body'}>
                    <div className="row">
                      <h3 className={'insertForm__name'}>파일 다운로드 허용</h3>
                      <div className={'insertForm__content'}>
                        <div className="select ">
                          <select name="" id="">
                            <option value="">예</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          </>
        )
      }
      {
        tab === 2 && (
          <div>
            사용자 화면
          </div>
        )
      }
      {
        tab === 3 && (
          <div>평가</div>
        )
      }

    </div>
  );
};

export default DashboardDocModal;
