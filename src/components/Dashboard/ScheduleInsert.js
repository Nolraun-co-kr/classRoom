import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/all';

const ScheduleInsert = ({
  propScheduleData,
  handleClickToggleUploadModal,
  handleClickToggleQuizModal,
  handleClickToggleDebateModal,
  handleClickToggleExamModal,
  handleClickToggleSurveyModal,
  handleClickToggleHomeworkModal,
  handleClickToggleDocModal,
  handleClickToggleClassModal,
  handleClickToggleFileModal,
  handleClickToggleCommentModal,
  handleClickToggleTrainingModal
}) => {
  const schedule = propScheduleData;

  const [open, setOpen] = useState(false);
  return (
    <div className={`schedule ${open ? '' : 'schedule--close'}`}>
      <div className="schedule__header">
        <h3>문화관광론</h3>
        <div>
          <span>2분반</span>
          <span>3학점</span>
        </div>
        <p>하미영 교수</p>

        <label className="switch-box">
          <p>다시 분할하기</p>
          <label htmlFor="" className={'switch'}>
            <input type="checkbox"/>
            <span>
              <i />
            </span>
          </label>
        </label>
        <button className={'toggle'} onClick={() => setOpen(!open)}>
          {!open
            // eslint-disable-next-line multiline-ternary
            ? (
              <>
                열기 <IoIosArrowDown />
              </>
              ) : (
              <>
                닫기 <IoIosArrowUp />
              </>
              )}

        </button>
      </div>
      <div className="schedule__content">
        <div className="schedule__col">
          <div className={'cell col__title'}>
              <span className={'name'}>
                강의<br/>목차
              </span>
          </div>
          <div className={'cell'}>
            <span className={'state'}>동영상</span>
          </div>
          <div className={'cell'}>
            <span className={'state'}>실시간수업</span>
          </div>
          <div className={'cell'}>
            <span className={'state'}>교안</span>
          </div>
          <div className={'cell'}>
            <span className={'state'}>자료</span>
          </div>
          <div className={'cell'}>
            <span className={'state'}>댓글과 질문</span>
          </div>
          <div className={'cell'}>
            <span className={'state'}>실습</span>
          </div>
          <div className={'cell'}>
            <span className={'state'}>퀴즈</span>
          </div>
          <div className={'cell'}>
            <span className={'state'}>과제</span>
          </div>
          <div className={'cell'}>
            <span className={'state'}>토론</span>
          </div>
          <div className={'cell'}>
            <span className={'state'}>시험</span>
          </div>
          <div className={'cell'}>
            <span className={'state'}>설문</span>
          </div>
          <div className={'cell'}>
            <span className={'state'}>
              <strong>
                온라인 학습시간
              </strong>
            </span>
          </div>
        </div>
        {
          schedule.map(data => {
            let achieve = '_warning';
            if (data.achievement > 99) {
              achieve = '_complete';
            } else if (data.achievement > 50) {
              achieve = '_obey';
            }

            return (
              <div className="schedule__col" key={data.id}>
                <div className={'cell col__title'}>
                  <div className={`schedule__type ${data.quick ? 'is-quick' : ''} ${data.achievement ? achieve : ''}`}>
                    {
                      data.quick
                        // eslint-disable-next-line multiline-ternary
                        ? (
                          <>
                            <div>
                              <img src={`/assets/images/schedule-${data.type}.png`} alt=""/>
                              <p>{data.week}주차</p>
                            </div>
                          </>
                          ) : (
                          <>
                            <span>{data.title}</span>
                            <div>
                              <img src={`/assets/images/schedule-${data.type}.png`} alt=""/>
                              <p>{data.week}주차</p>
                            </div>
                            {
                              data.achievement && (
                                <div className={'achievement'}>
                                  <div className={'achievement__bg'} style={{ height: `${data.achievement}%` }} />
                                  <p>{data.achievement}%</p>
                                </div>
                              )
                            }
                          </>
                          )
                    }

                  </div>
                </div>
                <div className={'cell'}>
                  {data.data1
                    // eslint-disable-next-line multiline-ternary
                    ? (
                      <span className={'state text-center'}>{data.data1}</span>
                      ) : (
                      <button className={'insert-btn'} type={'button'} onClick={handleClickToggleUploadModal}>입력</button>
                      )}
                </div>
                <div className={'cell'}>
                  {data.data2
                    // eslint-disable-next-line multiline-ternary
                    ? (
                      <span className={'state text-center'}>{data.data2}</span>
                      ) : (
                      <button className={'insert-btn'} type={'button'} onClick={handleClickToggleClassModal}>입력</button>
                      )}
                </div>

                <div className={'cell'}>
                  {data.data3
                    // eslint-disable-next-line multiline-ternary
                    ? (
                      <span className={'state text-center'}>{data.data3}</span>
                      ) : (
                      <button className={'insert-btn'} type={'button'} onClick={handleClickToggleDocModal}>입력</button>
                      )}
                </div>
                <div className={'cell'}>
                  {data.data4
                    // eslint-disable-next-line multiline-ternary
                    ? (
                      <span className={'state text-center'}>{data.data4}</span>
                      ) : (
                      <button className={'insert-btn'} type={'button'} onClick={handleClickToggleFileModal}>입력</button>
                      )}
                </div>
                <div className={'cell'}>
                  {data.data5
                    // eslint-disable-next-line multiline-ternary
                    ? (
                      <span className={'state text-center'}>{data.data5}</span>
                      ) : (
                      <button className={'insert-btn'} type={'button'} onClick={handleClickToggleCommentModal}>입력</button>
                      )}
                </div>

                <div className={'cell'}>
                  {data.data6
                    // eslint-disable-next-line multiline-ternary
                    ? (
                      <span className={'state text-center'}>{data.data6}</span>
                      ) : (
                      <button className={'insert-btn'} type={'button'} onClick={handleClickToggleTrainingModal}>입력</button>
                      )}
                </div>
                <div className={'cell'}>
                  {data.data7
                    // eslint-disable-next-line multiline-ternary
                    ? (
                      <span className={'state text-center'}>{data.data7}</span>
                      ) : (

                      <button className={'insert-btn'} type={'button'} onClick={handleClickToggleQuizModal}>입력</button>
                      )}
                </div>
                <div className={'cell'}>
                  {data.data8
                    // eslint-disable-next-line multiline-ternary
                    ? (
                      <span className={'state text-center'}>{data.data8}</span>
                      ) : (
                      <button className={'insert-btn'} type={'button'} onClick={handleClickToggleHomeworkModal}>입력</button>
                      )}
                </div>
                <div className={'cell'}>
                  {data.data9
                    // eslint-disable-next-line multiline-ternary
                    ? (
                      <span className={'state text-center'}>{data.data9}</span>
                      ) : (
                      <button className={'insert-btn'} type={'button'} onClick={handleClickToggleDebateModal}>입력</button>
                      )}
                </div>
                <div className={'cell'}>
                  {data.data10
                    // eslint-disable-next-line multiline-ternary
                    ? (
                      <span className={'state text-center'}>{data.data10}</span>
                      ) : (
                      <button className={'insert-btn'} type={'button'} onClick={handleClickToggleExamModal}>입력</button>
                      )}
                </div>

                <div className={'cell'}>
                  {data.data10
                    // eslint-disable-next-line multiline-ternary
                    ? (
                      <span className={'state text-center'}>{data.data11}</span>
                      ) : (
                      <button className={'insert-btn'} type={'button'} onClick={handleClickToggleSurveyModal}>입력</button>
                      )}
                </div>

                <div className={'cell'}>
                  <span className={'state text-center'}><strong>{data.time}분</strong></span>
                </div>

              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default ScheduleInsert;
