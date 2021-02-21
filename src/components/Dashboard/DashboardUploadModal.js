import React, { useCallback, useState } from 'react';
import Editor from '../Editor';
import DashboardModal from './DashboardModal';

const DashboardUploadModal = ({
  handleClickToggleOption,
  toggleOption
}) => {
  const [tab, setTab] = useState(1);
  const [showVideoUploader, setShowVideoUploader] = useState(false);

  const handleClickToggleVideoUploader = useCallback(() => {
    setShowVideoUploader(!showVideoUploader);
  }, [showVideoUploader]);

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
                <h2>동영상</h2>
              </div>
              <div className={'_modal__block-body'}>
                <div className="row">
                  <h3 className={'insertForm__name required'}>제목</h3>
                  <div className={'insertForm__content'}>
                    <div className="input"><input type="text"/></div>
                  </div>
                </div>

                <div className="row">
                  <h3 className={'insertForm__name required'}>동영상 업로드</h3>
                  <div className={'insertForm__content'}>
                    <div className="flex">
                      <div className="input"><input type="text"/></div>
                      <label htmlFor="file" className={'file-btn'}>
                        <input type="file" id={'file'}/>
                        <span className={'_btn small'}>동영상 선택</span>
                      </label>
                      <button className={'_btn small _btn--uploader'} onClick={handleClickToggleVideoUploader}>동영상 업로드
                      </button>
                    </div>
                    <div className={'help-text-block'}>
                      <p className={'help-text'}>동영상 선택 : 저장된 라이브러리에서 동영상을 선택할 수 있습니다.</p>
                      <p className={'help-text'}>동영상 업로드 : 동영상 파일을 직접 업로드 할 수 있습니다.</p>
                    </div>
                  </div>
                </div>

                {
                  showVideoUploader && (
                    <DashboardModal
                      title={'동영상 업로드'}
                      maxWidth={'700'}
                      onClickClose={handleClickToggleVideoUploader}
                      /* eslint-disable-next-line react/no-children-prop */
                      children={(
                        <div className={'insertForm insertForm--inner'}>
                          <div className="_modal__block">
                            <div className="_modal__block-header">
                              <label className={'custom-checkbox'} htmlFor={'url1'}>
                                <input type="radio" id={'url1'} name={'urltype'}/>
                                <span/>
                                <p>URL 직접 입력</p>
                              </label>

                              <label className={'custom-checkbox'} htmlFor={'url2'}>
                                <input type="radio" id={'url2'} name={'urltype'}/>
                                <span/>
                                <p>상대 경로 입력</p>
                              </label>
                            </div>
                            <div className={'_modal__block-body'}>
                              <div className="row">
                                <h3 className={'insertForm__name '}>영상 제목</h3>
                                <div className={'insertForm__content'}>
                                  <div className="input full"><input type="text"/></div>
                                </div>
                              </div>
                              <div className="row">
                                <h3 className={'insertForm__name '}>URL</h3>
                                <div className={'insertForm__content'}>
                                  <div className="input full"><input type="url"
                                                                     placeholder={'예) http://www.html5videoplayer.net/videos/toystory.mp4'}/>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <h3 className={'insertForm__name '}>영상 길이(초)</h3>
                                <div className={'insertForm__content'}>
                                  <div className="input full"><input type="number"/></div>
                                </div>
                              </div>
                              <div className="row">
                                <h3 className={'insertForm__name '}>썸네일</h3>
                                <div className={'insertForm__content'}>
                                  <div className="input full"><input type="url"
                                                                     placeholder={'예) http://gesturecloud.co.kr/videos/sketchup/01/sketchup_01_01.png'}/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    />
                  )
                }

              </div>
              <div className={'_modal__block-body'}>
                <div className="row">
                  <h3 className={'insertForm__name'}>출석인정기간</h3>
                  <div className={'insertForm__content'}>
                    <div className="flex">
                      <label className={'custom-checkbox'} htmlFor={'ak1'}>
                        <input type="checkbox" id={'ak1'}/>
                        <span/>
                        <p>사용함</p>
                      </label>
                      <div className={'timeform'}>
                        <div className="flex">
                          <h4>종료 일시</h4>
                          <div className="select">
                            <select name="" id="">
                              <option value="">2021년</option>
                            </select>
                          </div>
                          <div className="select">
                            <select name="" id="">
                              <option value="">1월</option>
                            </select>
                          </div>
                          <div className="select">
                            <select name="" id="">
                              <option value="">31일</option>
                            </select>
                          </div>
                          <div className="select">
                            <select name="" id="">
                              <option value="">23</option>
                            </select>
                          </div>
                          <div className="select">
                            <select name="" id="">
                              <option value="">00</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      <label className={'custom-checkbox'} htmlFor={'ak2'}>
                        <input type="checkbox" id={'ak2'}/>
                        <span/>
                        <p>사용함</p>
                      </label>
                      <div className={'timeform'}>
                        <div className="flex">
                          <h4>종료 일시</h4>
                          <div className="select">
                            <select name="" id="">
                              <option value="">2021년</option>
                            </select>
                          </div>
                          <div className="select">
                            <select name="" id="">
                              <option value="">1월</option>
                            </select>
                          </div>
                          <div className="select">
                            <select name="" id="">
                              <option value="">31일</option>
                            </select>
                          </div>
                          <div className="select">
                            <select name="" id="">
                              <option value="">23</option>
                            </select>
                          </div>
                          <div className="select">
                            <select name="" id="">
                              <option value="">00</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={'help-text-block'}>
                      <p className={'help-text'}>동영상 시청은 언제든지 가능하지만 출석은 설정된 기한내 학습한 경우만 인정됩니다.</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className={'_modal__block-body'}>
                <div className="row">
                  <h3 className={'insertForm__name'}>학습인정 진도율(%)</h3>
                  <div className={'insertForm__content'}>
                    <div className="flex">
                      <div className="input short"><input type="number"/></div>
                    </div>
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
                      <h3 className={'insertForm__name required'}>설명</h3>
                      <div className={'insertForm__content'}>
                        <Editor />
                      </div>
                    </div>

                  </div>
                  <div className={'_modal__block-body'}>
                    <div className="row">
                      <h3 className={'insertForm__name'}>출석인정기간</h3>
                      <div className={'insertForm__content'}>
                        <div className={'window-cofing'}>
                          <div className="flex">
                            <h4>다운로드 허용</h4>
                            <div className="select">
                              <select name="" id="">
                                <option value="">아니오</option>
                              </select>
                            </div>
                          </div>
                          <div className="flex">
                            <h4>동영상 너비(픽셀)</h4>
                            <div className="input short"><input type="number"/></div>
                          </div>
                          <div className="flex">
                            <h4>동영상 높이(픽셀)</h4>
                            <div className="input short"><input type="number"/></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={'_modal__block-body'}>
                    <div className="row">
                      <h3 className={'insertForm__name'}>보기</h3>
                      <div className={'insertForm__content'}>
                        <div className="select long">
                          <select name="" id="">
                            <option value="">숨기기</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={'_modal__block-body'}>
                    <div className="row">
                      <h3 className={'insertForm__name'}>접근제한</h3>
                      <div className={'insertForm__content'}>
                        <div className="flex">
                          <p>접근 제한이 설정되어 있지 않습니다.</p>
                        </div>
                        <button className={'_btn small bg-none'}>접근 제한 추가하기 +</button>
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
          <>
            학습자 화면
          </>
        )
      }
      {
        tab === 3 && (
          <>
            평가
          </>
        )
      }
    </div>
  );
};

export default DashboardUploadModal;
