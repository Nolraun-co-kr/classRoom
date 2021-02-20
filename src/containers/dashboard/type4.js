import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import NoticeItem from '../../components/Dashboard/NoticeItem';

import ToggleSchedule from '../../components/Dashboard/ToggleSchedule';
import ScheduleInsert from '../../components/Dashboard/ScheduleInsert';
import DashboardModal from '../../components/Dashboard/DashboardModal';
import Editor from '../../components/Editor';

const lectureNoticeData = [
  {
    id: 1,
    title: '중간고사 관련 공지',
    lecture: '영어학개론',
    date: new Date('2021-02-01')
  },
  {
    id: 2,
    title: '2주차 강의 Q&A 참여 안내',
    lecture: '영어학개론',
    date: new Date('2021-02-01')
  },
  {
    id: 3,
    title: '과제연장안내',
    lecture: '영어학개론',
    date: new Date('2021-02-01')
  },
  {
    id: 4,
    title: '2주차는 COVID19로 인하여 온라인 수업전환',
    lecture: '영어학개론',
    date: new Date('2021-02-01')
  },
  {
    id: 5,
    title: '2주차는 COVID19로 인하여 온라인 수업전환',
    lecture: '시사영어',
    date: new Date('2021-02-01')
  }
];
const systemNoticeData = [
  {
    id: 1,
    title: '중간고사 관련 공지1',
    date: new Date()
  },
  {
    id: 2,
    title: '2주차 강의 Q&A 참여 안내',
    date: new Date()
  },
  {
    id: 3,
    title: '과제연장안내',
    date: new Date('2021-02-01')
  },
  {
    id: 4,
    title: '2주차는 COVID19로 인하여 온라인 수업전환',
    date: new Date('2021-02-01')
  },
  {
    id: 5,
    title: '2주차는 COVID19로 인하여 온라인 수업전환',
    date: new Date('2021-02-01')
  }
];
const propScheduleData = [
  {
    id: 1,
    week: 1,
    quick: true,
    achievement: 100,
    title: 'offline',
    type: 'offline',
    data1: '5/5',
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
    data7: null,
    data8: null,
    data9: null,
    data10: null,
    time: 35
  },
  {
    id: 2,
    week: 2,
    quick: true,
    achievement: 50,
    title: 'online',
    type: 'online',
    data1: '5/5',
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
    data7: null,
    data8: null,
    data9: null,
    data10: null,
    time: 35
  },
  {
    id: 3,
    week: 3,
    quick: true,
    achievement: 90,
    title: 'offline',
    type: 'offline',
    data1: '5/5',
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
    data7: null,
    data8: null,
    data9: null,
    data10: null,
    time: 35
  },
  {
    id: 4,
    week: 4,
    quick: true,
    achievement: 51,
    title: 'flip',
    type: 'online',
    data1: '5/5',
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
    data7: null,
    data8: null,
    data9: null,
    data10: null,
    time: 35
  },
  {
    id: 5,
    week: 5,
    quick: true,
    achievement: 49,
    title: 'offline',
    type: 'offline',
    data1: '5/5',
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
    data7: null,
    data8: null,
    data9: null,
    data10: null,
    time: 35
  },
  {
    id: 6,
    week: 6,
    quick: true,
    achievement: 99,
    title: 'offline',
    type: 'offline',
    data1: '5/5',
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
    data7: null,
    data8: null,
    data9: null,
    data10: null,
    time: 0
  },
  {
    id: 7,
    quick: true,
    week: 7,
    title: 'online',
    type: 'online',
    data1: '5/5',
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
    data7: null,
    data8: null,
    data9: null,
    data10: null,
    time: 0
  },
  {
    id: 8,
    quick: true,
    week: 8,
    title: 'test',
    type: 'test',
    data1: '5/5',
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
    data7: null,
    data8: null,
    data9: null,
    data10: null,
    time: 0
  }, {
    id: 9,
    quick: true,
    week: 9,
    title: 'offline',
    type: 'offline',
    data1: '5/5',
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
    data7: null,
    data8: null,
    data9: null,
    data10: null,
    time: 0
  },
  {
    id: 10,
    quick: true,
    week: 10,
    title: 'online',
    type: 'online',
    data1: '5/5',
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
    data7: null,
    data8: null,
    data9: null,
    data10: null,
    time: 0
  },
  {
    id: 11,
    quick: true,
    week: 11,
    title: 'offline',
    type: 'offline',
    data1: '5/5',
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
    data7: null,
    data8: null,
    data9: null,
    data10: null,
    time: 0
  },
  {
    id: 12,
    quick: true,
    week: 12,
    title: 'flip',
    type: 'online',
    data1: '5/5',
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
    data7: null,
    data8: null,
    data9: null,
    data10: null,
    time: 0
  },
  {
    id: 13,
    quick: true,
    week: 13,
    title: 'offline',
    type: 'offline',
    data1: '5/5',
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
    data7: null,
    data8: null,
    data9: null,
    data10: null,
    time: 0
  },
  {
    id: 14,
    quick: true,
    week: 14,
    title: 'offline',
    type: 'offline',
    data1: '5/5',
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
    data7: null,
    data8: null,
    data9: null,
    data10: null,
    time: 0
  },
  {
    id: 15,
    quick: true,
    week: 15,
    title: 'online',
    type: 'online',
    data1: '5/5',
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
    data7: null,
    data8: null,
    data9: null,
    data10: null,
    time: 0
  },
  {
    id: 16,
    quick: true,
    week: 16,
    title: 'test',
    type: 'test',
    data1: '5/5',
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
    data7: null,
    data8: null,
    data9: null,
    data10: null,
    time: 0
  }
];

const Dashboard = () => {
  const [showMaster, setShowMaster] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showVideoUploader, setShowVideoUploader] = useState(false);
  const [toggleOption, setToggleOption] = useState(false);
  const [scheduleData] = useState([
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    }
  ]);

  const handleClickToggleMaster = useCallback(() => {
    setShowMaster(!showMaster);
  }, [showMaster]);

  const handleClickToggleUploadModal = useCallback(() => {
    setShowUploadModal(!showUploadModal);
  }, [showUploadModal]);

  const handleClickToggleVideoUploader = useCallback(() => {
    setShowVideoUploader(!showVideoUploader);
  }, [showVideoUploader]);

  const handleClickToggleOption = useCallback(() => {
    setToggleOption(!toggleOption);
  }, [toggleOption]);

  return (
    <>
      <div className={'dashboard'}>
      <div className={'dashboard__block'}>
        <div className={'dashboard__block-header'}>
          <h2>운영중인 강좌</h2>
          <button onClick={handleClickToggleMaster}>+ 새 마스터 피스 강좌운영 규칙 추가하기</button>
        </div>
        <div className={'dashboard__schedule has-header'}>
          <div className="schedule__tabs">
            <button className={'active'}>퀵 수정</button>
            <button>
              주차별<br/>
              세부구성 보기
            </button>
          </div>
          <div className={'allSchedule'}>
            {
              scheduleData.map((schedule, index) => {
                return <ScheduleInsert key={schedule.id} index={index} id={schedule.id} handleClickToggleUploadModal={handleClickToggleUploadModal} propScheduleData={propScheduleData} />;
              })
            }
          </div>
        </div>
      </div>

      <div className={'dashboard__block'}>
        <div className={'dashboard__block-header'}>
          <h2>학습중인 강좌</h2>
        </div>
        <div className={'dashboard__schedule has-header'}>
          <div className="schedule__tabs">
            <button className={'active'}>정규강좌</button>
            <button>
              비정규강좌
              <span>(기간 유)</span>
            </button>
            <button>
              비정규강좌
              <span>(기간 무)</span>
            </button>
            <button>Private</button>
          </div>
          <div className={'schedule__term'}>
            <h3>2021년 1학기 수강기간</h3>
            <p>2021. 01. 27 ~ 2021. 05. 11</p>
          </div>
          <div className={'allSchedule'}>
            {
              scheduleData.map((schedule, index) => {
                return <ToggleSchedule key={schedule.id} index={index} id={schedule.id} />;
              })
            }
          </div>
        </div>
      </div>

      <div className="dashboard__block">
        <div className={'dashboard__notice mt-30'}>
        <div className="box">
          <div className="box__header">
            <h2 className={'i-notice'}>강좌 공지사항</h2>
            <Link to={''}>더보기 +</Link>
          </div>
          <div className={'box__body'}>
            <div className="box__noticeList">
              {lectureNoticeData.map(data => <NoticeItem key={data.id} data={data} />)}
            </div>
          </div>
        </div>
        <div className="box">
          <div className="box__header">
            <h2 className={'i-system'}>시스템 공지사항</h2>
            <Link to={''}>더보기 +</Link>
          </div>
          <div className={'box__body'}>
            <div className="box__taskList">
              {systemNoticeData.map(data => <NoticeItem key={data.id} data={data} />)}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
      {
        showUploadModal && (
          <DashboardModal
            title={'입력'}
            maxWidth={'1440'}
            onClickClose={handleClickToggleUploadModal}
            /* eslint-disable-next-line react/no-children-prop */
            children={(
              <div className={'insertForm'}>
                <div className="_modal__block">
                  <div className="schedule__tabs">
                    <button className={'active'}>수정</button>
                    <button>
                      학습자 화면
                    </button>
                    <button>
                      평가
                    </button>
                  </div>
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
                          <button className={'_btn small _btn--uploader'} onClick={handleClickToggleVideoUploader}>동영상 업로드</button>
                        </div>
                        <div className={'help-text-block'}>
                          <p className={'help-text'}>동영상 선택 : 저장된 라이브러리에서 동영상을 선택할 수 있습니다.</p>
                          <p className={'help-text'}>동영상 업로드 : 동영상 파일을 직접 업로드 할 수 있습니다.</p>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className={'_modal__block-body'}>
                    <div className="row">
                      <h3 className={'insertForm__name'}>출석인정기간</h3>
                      <div className={'insertForm__content'}>
                        <div className="flex">
                          <label className={'custom-checkbox'} htmlFor={'ak1'}>
                            <input type="checkbox" id={'ak1'} />
                            <span />
                            <p>사용함</p>
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
                          </label>
                        </div>
                        <div className="flex">
                          <label className={'custom-checkbox'} htmlFor={'ak2'}>
                            <input type="checkbox" id={'ak2'} />
                            <span />
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
                          <div className="input short"><input type="number" /></div>
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
              </div>
            )}
          />
        )
      }

      {
        showVideoUploader && (

          <DashboardModal
            title={'동영상 업로드'}
            maxWidth={'700'}
            onClickClose={handleClickToggleVideoUploader}
            /* eslint-disable-next-line react/no-children-prop */
            children={(
              <div className={'insertForm'}>
                <div className="_modal__block">
                  <div className="_modal__block-header">
                    <label className={'custom-checkbox'} htmlFor={'url1'}>
                      <input type="radio" id={'url1'} name={'urltype'} />
                      <span />
                      <p>URL 직접 입력</p>
                    </label>

                    <label className={'custom-checkbox'} htmlFor={'url2'}>
                      <input type="radio" id={'url2'} name={'urltype'} />
                      <span />
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
                        <div className="input full"><input type="url" placeholder={'예) http://www.html5videoplayer.net/videos/toystory.mp4'}/></div>
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
                        <div className="input full"><input type="url" placeholder={'예) http://gesturecloud.co.kr/videos/sketchup/01/sketchup_01_01.png'}/></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          />
        )
      }

      {
        showMaster && (
          <DashboardModal
            title={'새 마스터피스 강좌운영 규칙 추가하기'}
            maxWidth={'750'}
            onClickClose={handleClickToggleMaster}
            /* eslint-disable-next-line react/no-children-prop */
            children={(
              <>
                <div className="_modal__block">
                  <div className="_modal__block-body">
                    <div className="flex">
                      <div className="input">
                        <input type="text" placeholder={'새로운 마스터 피스 명을 입력하세요.'}/>
                      </div>
                      <button className={'_btn'}>불러오기</button>
                    </div>
                  </div>
                </div>

                <div className="_modal__block _modal__block--has-header">
                  <div className="_modal__block-header">
                    <h2>묶을 강좌를 선택해주세요.</h2>
                  </div>
                  <div className="_modal__block-body">
                    <label className={'custom-checkbox'} htmlFor={'ck1'}>
                      <input type="checkbox" id={'ck1'} />
                      <span />
                      <p>문화관광론 2분반</p>
                    </label>
                    <label className={'custom-checkbox'} htmlFor={'ck2'}>
                      <input type="checkbox" id={'ck2'} />
                      <span />
                      <p>관광론 1분반</p>
                    </label>
                    <label className={'custom-checkbox'} htmlFor={'ck3'}>
                      <input type="checkbox" id={'ck3'} />
                      <span />
                      <p>관광학 2분반</p>
                    </label>
                  </div>
                </div>
              </>
            )}
          />
        )
      }

    </>
  );
};

export default Dashboard;
