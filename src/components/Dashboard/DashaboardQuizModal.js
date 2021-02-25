import React, { useCallback, useState } from 'react';
import Editor from '../Editor';
import { IoClose } from 'react-icons/all';
import EvaluationChart from './EvaluationChart';

const DashaboardQuizModal = ({
  handleClickToggleOption,
  toggleOption
}) => {
  const [tab, setTab] = useState(1);
  const [option, setOption] = useState([
    {
      id: 1
    }
  ]);

  const handleClickChangeTab = useCallback((value) => {
    setTab(value);
  }, [tab]);

  const handleClickAddOptions = useCallback(() => {
    setOption(prevState => ([
      ...prevState,
      {
        id: Math.random()
      }
    ]));
  }, [option]);

  const handleClickRemoveOption = useCallback((id) => {
    setOption(option.filter(option => option.id !== id));
  }, [option]);

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
                <h2 className={'i-quiz'}>퀴즈</h2>
              </div>
              <div className={'_modal__block-body'}>
                <div className="row">
                  <h3 className={'insertForm__name '}>문제 유형</h3>
                  <div className={'insertForm__content'}>
                    <div className="select">
                      <select name="" id="">
                        <option value="">객관식</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <h3 className={'insertForm__name required'}> 제목</h3>
                  <div className={'insertForm__content'}>
                    <div className="input full"><input type="text"/></div>
                  </div>
                </div>

              </div>
              <div className={'_modal__block-body'}>
                <div className="row">
                  <h3 className={'insertForm__name required'}>설명</h3>
                  <div className={'insertForm__content'}>
                    <Editor editorId={'editor1'} />
                  </div>
                </div>

              </div>
              <div className={'_modal__block-body'}>
                <div className="row">
                  <h3 className={'insertForm__name'}>성적인증기간</h3>
                  <div className={'insertForm__content'}>
                    <div className="flex">
                      <label className={'custom-checkbox'} htmlFor={'ak1'}>
                        <input type="checkbox" id={'ak1'} />
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
                  <h3 className={'insertForm__name'}>보기</h3>
                  <div className={'insertForm__content'}>
                    <div className={'quiz-options'}>
                      {
                        option?.map((item, index) => {
                          return (
                            <div className="quiz-option-item" key={item.id}>
                              <div className={'quiz-option-label'}>
                                <label htmlFor={'quiz' + item.id} className={'custom-checkbox'}>
                                  <p>정답</p>
                                  <input type="radio" id={'quiz' + item.id} name={'quiz'}/>
                                  <span />
                                </label>
                              </div>
                              <div className={'quiz-option-body'}>
                                <button className={'quiz-remove'} onClick={() => handleClickRemoveOption(item.id)}>
                                  <IoClose />
                                </button>
                                <div className="flex">
                                  <h3>보기 {index}</h3>
                                  <Editor editorId={'editorv'} bodyHeight={100} />
                                </div>
                                <div className="flex">
                                  <h3>피드백</h3>
                                  <Editor editorId={'editorf'} bodyHeight={100} />
                                </div>
                              </div>
                            </div>
                          );
                        })
                      }
                    </div>
                    <div className={'quiz-buttons'}>
                      <button className={'_btn bg-none'} onClick={handleClickAddOptions}>보기 추가하기 +</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={'_modal__block-body'}>
                <div className="row">
                  <h3 className={'insertForm__name'}>전체 피드백</h3>
                  <div className={'insertForm__content'}>
                    <div className="flex align-top">
                      <div className={'quiz-true'}>정답인 경우</div>
                      <Editor editorId={'correctEditor'} bodyHeight={100} />
                    </div>
                    <div className="flex align-top">
                      <div className={'quiz-false'}>오답인 경우</div>
                      <Editor editorId={'inCorrectEditor'} bodyHeight={100} />
                    </div>
                  </div>
                </div>

              </div>
              <div className={'_modal__block-body'}>
                <div className="row">
                  <h3 className={'insertForm__name'}>점수</h3>
                  <div className={'insertForm__content'}>
                    <div className="input short"><input type="number"/></div>
                  </div>
                </div>
              </div>
              <div className={'_modal__block-body'}>
                <div className="row">
                  <h3 className={'insertForm__name'}>횟수 제한</h3>
                  <div className={'insertForm__content'}>
                    <div className="input short"><input type="number"/></div>
                    <div className={'help-text-block'}>
                      <p className={'help-text'}>횟수를 입력하지 않으면 무제한으로 풀이할 수 있습니다.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={'_modal__block-body'}>
                <div className="row">
                  <h3 className={'insertForm__name'}>
                    응시 1회당 <br />
                    감점비율(%)
                  </h3>
                  <div className={'insertForm__content'}>
                    <div className="input short"><input type="number"/></div>
                    <div className={'help-text-block'}>
                      <p className={'help-text'}>0~100까지 입력 할 수 있습니다. 입력된 비율만큼 풀이 횟수마다 점수에서 차감됩니다.</p>
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
                      <h3 className={'insertForm__name'}>답안 뒤섞기</h3>
                      <div className={'insertForm__content'}>
                        <div className="select ">
                          <select name="" id="">
                            <option value="">예</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={'_modal__block-body'}>
                    <div className="row">
                      <h3 className={'insertForm__name'}>피드백 표시</h3>
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
          <>
            <div className="_modal__block">
            <div className="_modal__block-header">
              <h2 className={'i-quiz'}>퀴즈</h2>
            </div>
            <div className={'quiz'}>
              <div className={'quiz-title'}>
                <span>Q.</span> 다음 글은 조선 후기 민중봉기에 대한  설명이다. 이 시기와 사회현상에 대한 설명으로 틀린 것을 고르시오.
              </div>
              <div className={'quiz-content'}>
                <p>
                  삼정의 가혹한 수탈에 맞서 많은 농민들이 반란을 일으키고 진주성을 점령한 사건이다.
                  이 민란은 곧 진압되었지만 전국적으로 민란이 급속도로 퍼지게된 계기가 되었으며, 이를 임술민란이라 한다.
                  또한 동학 농민 운동의 기초가 되었다.
                </p>
              </div>
              {/* submitted 클래스가 붙으면 좌측에 패딩이 생기면서 정답 표시 */}
              <div className={'quiz-answer submitted'}>
                <div className={'quiz-answer-item'}>

                  {/* correct 클래스가 붙으면 정답 표시 */}
                  <label htmlFor="answer1" className={'custom-checkbox correct'}>
                    <input type="radio" name={'answer'} id={'answer1'} />
                    <span />
                    <div>
                      <p>
                        고종은 정관헌에서 커피를 자주 즐겼다고 한다.
                      </p>
                      <div className="quiz-answer-hint true">
                        1880년 이후의 모습이다.
                      </div>
                    </div>
                  </label>
                </div>
                <div className={'quiz-answer-item'}>
                  <label htmlFor="answer2" className={'custom-checkbox'}>
                    <input type="radio" name={'answer'} id={'answer2'} />
                    <span />
                    <div>
                      <p>
                        특정 가문에 의한 권력의 세습과 독과점이 이루어지고 있었다.
                      </p>
                      <div className="quiz-answer-hint false">
                        1880년대에는 특정 가문에 의한 권력의 세습과 독과점이 횡행하고 있었다.
                      </div>
                    </div>
                  </label>
                </div>
                <div className={'quiz-answer-item'}>
                  <label htmlFor="answer3" className={'custom-checkbox'}>
                    <input type="radio" name={'answer'} id={'answer3'} />
                    <span />
                    <div>
                      <p>
                        흥선대원군에 의한 천주교 탄압이 이루어지고 있었다.
                      </p>
                      <div className="quiz-answer-hint false">
                        병인박해는 4866년부터 1871년까지 계속되었던 천주교 탄압이다.
                      </div>
                    </div>
                  </label>
                </div>
                <div className={'quiz-answer-item'}>
                  <label htmlFor="answer4" className={'custom-checkbox'}>
                    <input type="radio" name={'answer'} id={'answer4'} />
                    <span />
                    <div>
                      <p>
                        공명첩과 노비면첩 등의 발행이 크게 증가하기 시작했다.
                      </p>
                      <div className="quiz-answer-hint false">
                        1860년대에는 신분제가 동요하며 공명첩과 노비면첩 등의 발행이 크게 증가하였다.
                      </div>
                    </div>
                  </label>
                </div>
                <div className={'quiz-answer-item'}>
                  <label htmlFor="answer5" className={'custom-checkbox'}>
                    <input type="radio" name={'answer'} id={'answer5'} />
                    <span />
                    <div>
                      <p>
                        민란의 원인과 피해상황을 조사하기 위해 안핵사를 파견하였다.
                      </p>
                      <div className="quiz-answer-hint false">
                        진주 민란의 원인과 피해상황을 조사하기 위해 박규수가 안핵사로 파견되었다.
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className={'quiz-result'}>
                <strong className={'quiz-result-text'}>정답입니다.</strong>
                <p>
                  지문의 핵심 키워드를 근거로 1860년대의 사회상에 대해 잘 이해했습니다.
                </p>
              </div>
            </div>
          </div>

            <div className="_modal__block">
              <div className="_modal__block-header">
                <h2 className={'i-quiz'}>퀴즈</h2>
              </div>
              <div className={'quiz'}>
                <div className={'quiz-title'}>
                  <span>Q.</span> 다음 글은 조선 후기 민중봉기에 대한  설명이다. 이 시기와 사회현상에 대한 설명으로 틀린 것을 고르시오.
                </div>
                <div className={'quiz-content'}>
                  <p>
                    삼정의 가혹한 수탈에 맞서 많은 농민들이 반란을 일으키고 진주성을 점령한 사건이다.
                    이 민란은 곧 진압되었지만 전국적으로 민란이 급속도로 퍼지게된 계기가 되었으며, 이를 임술민란이라 한다.
                    또한 동학 농민 운동의 기초가 되었다.
                  </p>
                </div>
                <div className={'quiz-answer'}>
                  <div className={'quiz-answer-item'}>
                    <label htmlFor="answer1" className={'custom-checkbox'}>
                      <input type="radio" name={'answer'} id={'answer1'} />
                      <span />
                      <div>
                        <p>
                          고종은 정관헌에서 커피를 자주 즐겼다고 한다.
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className={'quiz-answer-item'}>
                    <label htmlFor="answer2" className={'custom-checkbox'}>
                      <input type="radio" name={'answer'} id={'answer2'} />
                      <span />
                      <div>
                        <p>
                          특정 가문에 의한 권력의 세습과 독과점이 이루어지고 있었다.
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className={'quiz-answer-item'}>
                    <label htmlFor="answer3" className={'custom-checkbox'}>
                      <input type="radio" name={'answer'} id={'answer3'} />
                      <span />
                      <div>
                        <p>
                          흥선대원군에 의한 천주교 탄압이 이루어지고 있었다.
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className={'quiz-answer-item'}>
                    <label htmlFor="answer4" className={'custom-checkbox'}>
                      <input type="radio" name={'answer'} id={'answer4'} />
                      <span />
                      <div>
                        <p>
                          공명첩과 노비면첩 등의 발행이 크게 증가하기 시작했다.
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className={'quiz-answer-item'}>
                    <label htmlFor="answer5" className={'custom-checkbox'}>
                      <input type="radio" name={'answer'} id={'answer5'} />
                      <span />
                      <div>
                        <p>
                          민란의 원인과 피해상황을 조사하기 위해 안핵사를 파견하였다.
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
                <div className={'quiz-result'}>
                  <strong className={'quiz-result-text incorrect'}>오답입니다. 풀이 가능한 횟수가 1회 남았습니다.</strong>
                </div>
              </div>
            </div>
            <div className={'answer-button-box'}>
              <button className={'btn submit'}>제출하기</button>
            </div>
          </>
        )
      }
      {
        tab === 3 && (
          <>
            <div className="_modal__block">
              <div className="_modal__block-header">
                <h2 className={'i-quiz'}>퀴즈</h2>
              </div>
              <div className={'quiz'}>
                <div className={'quiz-title'}>
                  <span>Q.</span> 다음 글은 조선 후기 민중봉기에 대한  설명이다. 이 시기와 사회현상에 대한 설명으로 틀린 것을 고르시오.
                </div>
              </div>
            </div>

            <div className="_modal__block">
              <div className="learning-state">
                <p>
                  <strong>학습 대상자 수</strong>: 9
                </p>
                <p>
                  <strong>학습 완료 수</strong>: 7
                </p>
              </div>
              <div className="learning-state-search">
                <div className="select">
                  <select>
                    <option value="">이름</option>
                  </select>
                </div>
                <div className="input">
                  <input type="text"/>
                </div>
                <button>검색</button>
              </div>
            </div>
            <br/>
            <div className="_modal__block bg-none">
              <div className="_modal__block-header border-none">
                <h2 className={'i-eval1'}>학습 상태</h2>
                <div className="select">
                  <select name="" id="">
                    <option value="">전체</option>
                  </select>
                </div>

                <button className={'_btn small _btn--uploader'}>Excel 다운로드</button>
              </div>
              <div className={'_dataTable _dataTable--border'}>
                <table>
                  <colgroup>
                    <col width={'70px'}/>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                  </colgroup>
                  <thead>
                  <tr>
                    <th>번호</th>
                    <th>구분</th>
                    <th>이름</th>
                    <th>학번</th>
                    <th>학습 상태</th>
                    <th>제출 일시</th>
                    <th>점수</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>수강생</td>
                    <td>김현수</td>
                    <td>20201246</td>
                    <td>
                      <span className={'complete'}>완료</span>
                    </td>
                    <td className={'date'}>2021-01-30 12:23</td>
                    <td><span className={'green'}>3.5</span> / 5</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>수강생</td>
                    <td>김현수</td>
                    <td>20201246</td>
                    <td>
                      <span className={'complete'}>완료</span>
                    </td>
                    <td className={'date'}>2021-01-30 12:23</td>
                    <td><span className={''}>-</span> / 5</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>수강생</td>
                    <td>김현수</td>
                    <td>20201246</td>
                    <td>
                      <span className={''}>미완료</span>
                    </td>
                    <td className={'date'}>2021-01-30 12:23</td>
                    <td><span className={'blue'}>5</span> / 5</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>수강생</td>
                    <td>김현수</td>
                    <td>20201246</td>
                    <td>
                      <span className={''}>미완료</span>
                    </td>
                    <td className={'date'}>2021-01-30 12:23</td>
                    <td><span className={'blue'}>5</span> / 5</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <br/>
            <div className="_modal__block bg-none">
              <div className="_modal__block-header border-none">
                <h2 className={'i-eval2'}>보기별 응답 비율</h2>

                <button className={'_btn small _btn--uploader'}>Excel 다운로드</button>
              </div>
              <div className={'_dataTable _dataTable--border'}>
                <table>
                  <colgroup>
                    <col width={'70px'}/>
                    <col/>
                    <col/>
                    <col/>
                  </colgroup>
                  <thead>
                  <tr>
                    <th>번호</th>
                    <th>보기</th>
                    <th>1차(응답률/응답자 수)</th>
                    <th>2차(응답률/응답자 수)</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td className={'text-left'}>고종은 정관헌에서 커피를 자주 즐겼다고 한다.</td>
                    <td>
                      <span className={'orange'}>50%</span> (5명)
                    </td>
                    <td>
                      <span className={'red'}>66.6%</span> (2명)
                    </td>
                  </tr>
                  </tbody>
                  <tfoot>
                  <tr>
                    <td colSpan={2}><strong>총계</strong></td>
                    <td>
                      <span className={'orange'}>100%</span> (5명)
                    </td>
                    <td>
                      <span className={'red'}>100%</span> (2명)
                    </td>
                  </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <br/>
            <div className="_modal__block _modal__block--chart">
              <div className="_modal__block-header">
                <h2 className={'i-eval3'}>성적 분포도</h2>

                <button className={'_btn small _btn--uploader'}>Excel 다운로드</button>
              </div>
              <div className="_modal__block-body">
                {
                  false && (
                    <EvaluationChart />
                  )
                }
              </div>
            </div>
          </>
        )
      }

    </div>
  );
};

export default DashaboardQuizModal;
