import React, { useCallback, useState } from 'react';
import Editor from '../Editor';
import { BsArrowDown, HiCheck } from 'react-icons/all';
import DashboardModal from './DashboardModal';
import CodeEditor from '../CodeEditor/Editor';

const DashboardTrainingModal = ({
  handleClickToggleOption,
  toggleOption
}) => {
  const [tab, setTab] = useState(1);
  const [evaluationOption, setEvaluationOption] = useState(false);
  const [showEvalModal, setShowEvalModal] = useState(true);

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
                <h2 className={'i-doc'}>실습</h2>
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
                    <div className="flex">
                      <div className="input"><input type="text"/></div>
                      <label htmlFor="file" className={'file-btn'}>
                        <input type="file" id={'file'}/>
                        <span className={'_btn small'}>파일 선택</span>
                      </label>
                      <button className={'_btn small _btn--uploader'} onClick={() => {}}>파일 업로더</button>

                    </div>
                    <div className={'help-text-block'}>
                      <p className={'help-text'}>허용된 확장자: pptx, words</p>
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
          <>
            <div className="_modal__block">
              <div className="_modal__block-header">
                <h2 className={'i-doc'}>퀴즈</h2>
              </div>
              <div className={'quiz'}>
                <div className={'quiz-title'}>
                  <span>
                    <BsArrowDown />
                  </span> 파이썬 실습
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
                <p>
                  <strong>마감까지 남은 기한</strong>: <span className={'green'}>8시간</span>
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
            <div className={'_modal__block _modal__block--evaluation'}>
              <div className={'_modal__block-body'}>
                <button className={'_btn small'} onClick={() => setEvaluationOption(!evaluationOption)}>
                  평가 옵션 {evaluationOption ? '닫기 -' : '열기 +'}
                </button>
                {
                  evaluationOption && (
                    <div className={'evaluation-options'}>
                      <div className={'evaluation-item'}>
                        <strong>채점 옵션</strong>
                        <label className={'custom-checkbox'} htmlFor={'ako1'}>
                          <input type="checkbox" id={'ako1'} />
                          <span className={'mr-0'} />
                        </label>
                      </div>
                      <div className={'evaluation-item'}>
                        <strong>제출한 과제물 전체 다운로드</strong>
                        <button className={'btn-underline'}>다운로드</button>
                      </div>
                      <div className={'evaluation-item'}>
                        <strong>공통 피드백 작성</strong>
                        <button className={'btn-underline'}>작성하기</button>
                      </div>
                      <div className={'evaluation-item'}>
                        <strong>작성된 사용자의</strong>
                        <div className={'evaluation-item-form'}>
                          <div className="select">
                            <select name="" id="">
                              <option value="">과제 다운로드</option>
                            </select>
                          </div>
                          <button>실행</button>
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
            <br/>
            <div className="_modal__block bg-none">
              <div className="_modal__block-header border-none">
                <h2 className={'i-doc2'}>제출 상태</h2>
                <div className="select">
                  <select name="" id="">
                    <option value="">전체</option>
                  </select>
                </div>
              </div>
              <div className={'_dataTable _dataTable--border'}>
                <table>
                  <colgroup>
                    <col width={'70px'}/>
                    <col width={'70px'}/>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                  </colgroup>
                  <thead>
                  <tr>
                    <th>
                      선택
                      <br/>
                      <label className={'custom-checkbox'} htmlFor={'ak1'}>
                        <input type="checkbox" id={'ak1'} />
                        <span className={'mr-0'} />
                      </label>
                    </th>
                    <th>번호</th>
                    <th>구분</th>
                    <th>이름</th>
                    <th>학번</th>
                    <th>제출상태</th>
                    <th>
                      빠른 채점
                      <span>|</span>
                      <button>변경사항 저장</button>
                    </th>
                    <th>채점하기</th>
                    <th>피드백</th>
                    <th>피드백 파일</th>
                    <th>채점 수정일시</th>
                    <th>최종 점수</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>
                      <label className={'custom-checkbox'} htmlFor={'ak1'}>
                        <input type="checkbox" id={'ak1'} />
                        <span className={'mr-0'} />
                      </label>
                    </td>
                    <td>1</td>
                    <td>수강생</td>
                    <td>김현수</td>
                    <td>20201246</td>
                    <td>
                      <span className={'complete'}>채출</span>
                    </td>
                    <td>
                      <div className={'scorebox'}>
                        <div className="input">
                          <input type="text"/>
                        </div>
                        <span>/ 100</span>
                        <button className={'btn'}><HiCheck />저장</button>
                      </div>
                    </td>
                    <td>
                      <button className={'btn btn--blue'}>채점</button>
                    </td>
                    <td><button className={'btn-underline'}>보기</button></td>
                    <td>
                      <button className={'btn-underline'}>보기</button>
                    </td>
                    <td className={'date'}>2021-02-01 13:12</td>
                    <td>
                      90
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className={'custom-checkbox'} htmlFor={'ak1'}>
                        <input type="checkbox" id={'ak1'} />
                        <span className={'mr-0'} />
                      </label>
                    </td>
                    <td>1</td>
                    <td>수강생</td>
                    <td>김현수</td>
                    <td>20201246</td>
                    <td>
                      <span className={'complete'}>채출</span>
                    </td>
                    <td>
                      <div className={'scorebox'}>
                        <div className="input">
                          <input type="text"/>
                        </div>
                        <span>/ 100</span>
                        <button className={'btn'}><HiCheck />저장</button>
                      </div>
                    </td>
                    <td>
                      <button className={'btn btn--blue'}>채점</button>
                    </td>
                    <td><button className={'btn-underline'}>보기</button></td>
                    <td>
                      <button className={'btn-underline'}>보기</button>
                    </td>
                    <td className={'date'}>2021-02-01 13:12</td>
                    <td>
                      90
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {

              showEvalModal && (
                <DashboardModal
                  title={'채점하기'}
                  maxWidth={'1024'}
                  onClickClose={() => setShowEvalModal(!showEvalModal)}
                  /* eslint-disable-next-line react/no-children-prop */
                  children={(
                    <>
                      <div className={'_modal__block'}>
                        <div className="_modal__block-body">
                          <div className="evaluation-info">
                            <div className="block">
                              <h2>
                                <HiCheck />
                                실습명 : 파이썬 실습
                              </h2>
                              <p>
                                제출기간 : <span>2021-01-01 09:00 ~ 2021-01-05 23:59</span>
                              </p>
                            </div>
                            <div className="block">
                              <div className="_flex">
                                <span className={'col-info'}>
                                <strong>이름 : </strong>김현수
                              </span>
                                <span className={'col-info'}>
                                <strong>학번 : </strong>20201246
                              </span>
                                <span className={'col-info'}>
                                <strong>제출일시 : </strong>2021-01-30 12:23
                              </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={'_modal__block'}>
                        <div className="_modal__block-body">
                          <div className="evaluation-score">
                            점수
                            <div className="input">
                              <input type="text"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={'_modal__block'}>
                        <div className="_modal__block-header">
                          <h2 className={'i-eval-m1'}>제출결과물</h2>
                        </div>
                        <div className="_modal__block-body">
                          <div className="block block--codeEditor">
                            <p className={'title'}>실행</p>

                            <div>
                              <div className={'editorTab'}>
                                <button>python_02_12.iptnb</button>
                              </div>
                              <CodeEditor theme={'blackboard'}/>
                            </div>
                          </div>
                          <div className="block block--codeEditor">
                            <p className={'title'}>결과</p>
                            <CodeEditor theme={'blackboard'}/>
                          </div>
                        </div>
                      </div>
                      <div className={'_modal__block'}>
                        <div className="_modal__block-header">
                          <h2 className={'i-eval-m2'}>피드백</h2>
                        </div>
                        <div className="_modal__block-body">
                          <div className={'evaluation-feedback'}>
                            <div className="row">
                              <h3 className={'insertForm__name'}> 피드백 내용</h3>
                              <div className={'insertForm__content'}>
                                <Editor />
                              </div>
                            </div>

                            <div className="row">
                              <h3 className={'insertForm__name'}> 첨부파일</h3>
                              <div className={'insertForm__content'}>
                                <div className="flex">
                                  <div className="input"><input type="text"/></div>
                                  <label htmlFor="file" className={'file-btn'}>
                                    <input type="file" id={'file'}/>
                                    <span className={'_btn small'}>파일 선택</span>
                                  </label>
                                  <button className={'_btn small _btn--uploader'} onClick={() => {}}>파일 업로더</button>

                                </div>
                                <div className={'help-text-block'}>
                                  <p className={'help-text'}>허용된 확장자: pptx, words</p>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </>
                  )}
                />
              )
            }
          </>
        )
      }
    </div>
  );
};

export default DashboardTrainingModal;
