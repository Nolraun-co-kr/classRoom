import React, { useCallback, useState } from 'react';
import Editor from '../Editor';
import {
  AiOutlineMinus,
  AiOutlinePlus, BsArrowLeft, BsArrowRight, BsEye,
  BsEyeSlash,
  BsPencilSquare, BsTrash, CgCopy,
  CgMenuGridR,
  FiCheck, FiMinus, FiPlus,
  GiPauseButton,
  HiMenuAlt2,
  IoCloseOutline

} from 'react-icons/all';

const DashaboardSurveyModal = ({
  handleClickToggleOption,
  toggleOption
}) => {
  const [tab, setTab] = useState(1);
  const [sectionId, setSectionId] = useState(3);
  const [showType, setShowType] = useState('all');
  const [showAnswer, setShowAnswer] = useState(true);
  const [surveyItem, setSurveyItem] = useState([
    {
      id: 1,
      show: true
    }
  ]);
  const [sectionState, setSectionState] = useState([
    {
      id: 1
    },
    {
      id: 2
    }
  ]);
  const [allShowSurvey, setAllShowSurvey] = useState(true);

  const [firstQuizAnswer, setFirstQuizAnswer] = useState(null);
  const [sixQuizAnswer, setSixQuizAnswer] = useState(null);

  const handleClickAddSection = useCallback(() => {
    setSectionState(prevState => ([
      ...sectionState,
      {
        id: sectionId,
        show: true
      }
    ]));
    setSectionId(sectionId + 1);
  }, [sectionState, sectionId]);

  const handleClickRemoveSection = useCallback((id) => {
    setSectionState(sectionState.filter(section => section.id !== id));
  }, [sectionState, sectionId]);

  const handleClickAddSurveyItem = useCallback(() => {
    setSurveyItem(prevState => ([
      ...surveyItem,
      {
        id: Math.random()
      }
    ]));
    setSectionId(sectionId + 1);
  }, [surveyItem]);

  const handleClickToggleSurveyItem = useCallback((id) => {
    setSurveyItem(prevState => prevState.map(survey => {
      if (survey.id === id) {
        return {
          ...survey,
          show: !survey.show
        };
      }
      return survey;
    }));
    setSectionId(sectionId + 1);
  }, [surveyItem]);

  const handleClickToggleAllSurvey = useCallback((bool) => {
    setSurveyItem(prevState => prevState.map(survey => {
      return {
        ...survey,
        show: bool
      };
    }));
    setAllShowSurvey(bool);
  }, [surveyItem]);

  const handleClickRemoveSurveyItem = useCallback((id) => {
    setSurveyItem(surveyItem.filter(survey => survey.id !== id));
  }, [surveyItem]);

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
        <button className={tab === 4 ? 'active' : ''} onClick={() => handleClickChangeTab(4)}>
          시험/설문 편집기
        </button>
      </div>
      {
        tab === 1 && (
          <>
            <div className="_modal__block">
              <div className="_modal__block-header">
                <h2 className={'i-survey'}>설문</h2>
              </div>
              <div className={'_modal__block-body'}>
                <div className="row">
                  <h3 className={'insertForm__name required'}> 제목</h3>
                  <div className={'insertForm__content'}>
                    <div className="input full"><input type="text"/></div>
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
                  <h3 className={'insertForm__name'}>설문 기간</h3>
                  <div className={'insertForm__content'}>
                    <div className="flex">
                      <label className={'custom-checkbox'} htmlFor={'ak1'}>
                        <input type="checkbox" id={'ak1'} />
                        <span />
                        <p>사용함</p>
                      </label>
                      <div className={'timeform'}>
                        <div className="flex">
                          <h4>시작 일시</h4>
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
                  <div className="_modal__block-body">
                    <div className="row">
                      <h3 className={'insertForm__name '}>설명</h3>
                      <div className={'insertForm__content'}>
                        <Editor />
                      </div>
                    </div>
                  </div>
                  <div className={'_modal__block-body'}>
                    <div className="row">
                      <h3 className={'insertForm__name'}>설문 응답자 이름</h3>
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
                      <h3 className={'insertForm__name'}>여러 번 제출 허용</h3>
                      <div className={'insertForm__content'}>
                        <div className="select ">
                          <select name="" id="">
                            <option value="">예</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <h3 className={'insertForm__name'}>중단 허용</h3>
                      <div className={'insertForm__content'}>
                        <div className="select ">
                          <select name="" id="">
                            <option value="">예</option>
                          </select>
                        </div>
                        <div className={'help-text-block'}>
                          <p className={'help-text'}>시험 또는 설문을 중단하고 중단한 시점부터 다시 시작할 수 있습니다.</p>
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
                <h2 className={'i-exam'}>시험</h2>
              </div>
              <div className={'survey'}>
                <div className={'survey__header'}>
                  <h2 className={'survey__title'}>
                    2021년 1학기 중간고사
                  </h2>
                  <div className={'survey__info'}>
                    <div className="block block--clock">
                      <strong>남은 시험시간</strong>
                      <div className={'clock'}>
                        <span>00</span> <i>:</i> <span>00</span> <i>:</i> <span>00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={'survey__state'}>
                  <div className={'left'}>
                    <button className={`btn all ${showType === 'all' ? 'active' : ''}`} onClick={() => setShowType('all')}><CgMenuGridR/>전체보기</button>
                    <button className={`btn ${showType === 'each' ? 'active' : ''}`} onClick={() => setShowType('each')}>
                      <HiMenuAlt2 />
                      문항별로 보기
                    </button>
                  </div>
                  <div className={'center'}>
                    <div className={'survey__progress'}>
                      <strong>
                        문항풀이 현황
                      </strong>
                      <div className={'state'}>
                        <span>8</span>/10
                      </div>
                      <div className={'bar'}>
                        <span style={{ width: '80%' }}></span>
                      </div>
                    </div>
                  </div>
                  <div className={'right'}>
                    <button className={'btn save'} onClick={() => setShowAnswer(!showAnswer)}>
                      {showAnswer ? <BsEyeSlash /> : <BsEye />}
                      {showAnswer ? '답안지 감추기' : '답안지 보기'}
                    </button>
                    <button className={'btn save'}>
                      <GiPauseButton/>
                      중단하기
                    </button>
                    <button className={'btn save'}>
                      <BsPencilSquare/>
                      제출하기
                    </button>
                  </div>
                </div>

                {showType === 'all'
                  // eslint-disable-next-line multiline-ternary
                  ? (
                    <div className={'survey__body'}>
                      <div className="survey__body-content">
                        <div className="survey__body-inner">
                          <div className="survey__nav">
                            <div className={'survey__nav-state-img'}>
                              <CgMenuGridR/>
                            </div>
                            <div className={'survey__nav-list'}>
                              {
                                sectionState?.map((section, index) => (
                                  <div className={'survey__nav-item'} key={section.id}>
                                    <button>
                                      <span>{section.id}</span>장
                                    </button>
                                  </div>
                                ))
                              }
                              <div className="survey__nav-item">
                                <button className={'more'} onClick={handleClickAddSection}>
                                  <span>+</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="survey__content">
                            <div className={'survey__content-block-list'}>
                              <div className='survey__content-block'>
                                <h2>1. 강의 내용을 이해하기 쉬웠다.</h2>
                                <div className={'survey__type1'}>
                                  <p className={'survey__type1-description'}>
                                    강의 이해도에 대한 주관적인 의견을 1~5점 중 선택해주세요.
                                  </p>
                                  <div className={'survey__type1-selector'}>
                                    <div className="flex">
                                      <label htmlFor="svy1" className={'custom-checkbox'} onClick={() => setFirstQuizAnswer(1)}>
                                        <input type="radio" name={'svy1'} checked={firstQuizAnswer === 1}/>
                                        <span />
                                        <p>1</p>
                                      </label>

                                      <label htmlFor="svy2" className={'custom-checkbox'} onClick={() => setFirstQuizAnswer(2)}>
                                        <input type="radio" name={'svy2'} checked={firstQuizAnswer === 2}/>
                                        <span />
                                        <p>2</p>
                                      </label>

                                      <label htmlFor="svy3" className={'custom-checkbox'} onClick={() => setFirstQuizAnswer(3)}>
                                        <input type="radio" name={'svy3'} checked={firstQuizAnswer === 3}/>
                                        <span />
                                        <p>3</p>
                                      </label>

                                      <label htmlFor="svy4" className={'custom-checkbox'} onClick={() => setFirstQuizAnswer(4)}>
                                        <input type="radio" name={'svy4'} checked={firstQuizAnswer === 4}/>
                                        <span />
                                        <p>4</p>
                                      </label>

                                      <label htmlFor="svy5" className={'custom-checkbox'} onClick={() => setFirstQuizAnswer(5)}>
                                        <input type="radio" name={'svy5'} checked={firstQuizAnswer === 5}/>
                                        <span />
                                        <p>5</p>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className='survey__content-block'>
                                <h2>2. 강의에 대해 제시된 항목별로 선택해주세요.</h2>
                                <div className={'survey__type2'}>
                                  <div className={'_dataTable'}>
                                    <table>
                                      <colgroup>
                                        <col/>
                                        <col/>
                                        <col/>
                                        <col/>
                                        <col/>
                                      </colgroup>
                                      <thead>
                                      <tr>
                                        <th></th>
                                        <th>매우 불만족</th>
                                        <th>다소 불만족</th>
                                        <th>어느정도 만족</th>
                                        <th>대단히 만족</th>
                                      </tr>
                                      </thead>
                                      <tbody>
                                      <tr>
                                        <td>수업 진도</td>
                                        <td>
                                          <label htmlFor="svy1" className={'custom-checkbox'}>
                                            <input type="radio" name={'svy1'}/>
                                            <span />
                                          </label>
                                        </td>
                                        <td>
                                          <label htmlFor="svy1" className={'custom-checkbox'}>
                                            <input type="radio" name={'svy1'}/>
                                            <span />
                                          </label>
                                        </td>
                                        <td>
                                          <label htmlFor="svy1" className={'custom-checkbox'}>
                                            <input type="radio" name={'svy1'}/>
                                            <span />
                                          </label>
                                        </td>
                                        <td>
                                          <label htmlFor="svy1" className={'custom-checkbox'}>
                                            <input type="radio" name={'svy1'}/>
                                            <span />
                                          </label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>수업 내용</td>
                                        <td>
                                          <label htmlFor="svy1" className={'custom-checkbox'}>
                                            <input type="radio" name={'svy1'}/>
                                            <span />
                                          </label>
                                        </td>
                                        <td>
                                          <label htmlFor="svy1" className={'custom-checkbox'}>
                                            <input type="radio" name={'svy1'}/>
                                            <span />
                                          </label>
                                        </td>
                                        <td>
                                          <label htmlFor="svy1" className={'custom-checkbox'}>
                                            <input type="radio" name={'svy1'}/>
                                            <span />
                                          </label>
                                        </td>
                                        <td>
                                          <label htmlFor="svy1" className={'custom-checkbox'}>
                                            <input type="radio" name={'svy1'}/>
                                            <span />
                                          </label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>과제 난이도</td>
                                        <td>
                                          <label htmlFor="svy1" className={'custom-checkbox'}>
                                            <input type="radio" name={'svy1'}/>
                                            <span />
                                          </label>
                                        </td>
                                        <td>
                                          <label htmlFor="svy1" className={'custom-checkbox'}>
                                            <input type="radio" name={'svy1'}/>
                                            <span />
                                          </label>
                                        </td>
                                        <td>
                                          <label htmlFor="svy1" className={'custom-checkbox'}>
                                            <input type="radio" name={'svy1'}/>
                                            <span />
                                          </label>
                                        </td>
                                        <td>
                                          <label htmlFor="svy1" className={'custom-checkbox'}>
                                            <input type="radio" name={'svy1'}/>
                                            <span />
                                          </label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>퀴즈 난이도</td>
                                        <td>
                                          <label htmlFor="svy1" className={'custom-checkbox'}>
                                            <input type="radio" name={'svy1'}/>
                                            <span />
                                          </label>
                                        </td>
                                        <td>
                                          <label htmlFor="svy1" className={'custom-checkbox'}>
                                            <input type="radio" name={'svy1'}/>
                                            <span />
                                          </label>
                                        </td>
                                        <td>
                                          <label htmlFor="svy1" className={'custom-checkbox'}>
                                            <input type="radio" name={'svy1'}/>
                                            <span />
                                          </label>
                                        </td>
                                        <td>
                                          <label htmlFor="svy1" className={'custom-checkbox'}>
                                            <input type="radio" name={'svy1'}/>
                                            <span />
                                          </label>
                                        </td>
                                      </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        { showAnswer && (
                          <div className={'survey__body-answer'}>
                            <div className={'_dataTable'}>
                              <table>
                                <colgroup>
                                  <col width={50}/>
                                  <col/>
                                </colgroup>
                                <thead>
                                <tr>
                                  <th>번호</th>
                                  <th>답변</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>
                                    <div className="flex">
                                      <label htmlFor="svys1" className={'custom-checkbox'} onClick={() => setFirstQuizAnswer(1)}>
                                        <input type="radio" name={'svys'} id={'svys1'} checked={firstQuizAnswer === 1}/>
                                        <span>1</span>
                                      </label>

                                      <label htmlFor="svys2" className={'custom-checkbox'} onClick={() => setFirstQuizAnswer(2)}>
                                        <input type="radio" name={'svys'} id={'svys2'} checked={firstQuizAnswer === 2}/>
                                        <span>2</span>
                                      </label>

                                      <label htmlFor="svys3" className={'custom-checkbox'} onClick={() => setFirstQuizAnswer(3)}>
                                        <input type="radio" name={'svys'} id={'svys3'} checked={firstQuizAnswer === 3}/>
                                        <span>3</span>
                                      </label>

                                      <label htmlFor="svys4" className={'custom-checkbox'} onClick={() => setFirstQuizAnswer(4)}>
                                        <input type="radio" name={'svys'} id={'svys4'} checked={firstQuizAnswer === 4}/>
                                        <span>4</span>
                                      </label>

                                      <label htmlFor="svys5" className={'custom-checkbox'} onClick={() => setFirstQuizAnswer(5)}>
                                        <input type="radio" name={'svys'} id={'svys5'} checked={firstQuizAnswer === 5}/>
                                        <span>5</span>
                                      </label>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>
                                  </td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>
                                    예
                                  </td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>
                                    없습니다.
                                  </td>
                                </tr>
                                <tr>
                                  <td>5</td>
                                  <td>

                                  </td>
                                </tr>
                                <tr>
                                  <td>6</td>
                                  <td>
                                    <div className="flex">
                                      <label htmlFor="svys61" className={'custom-checkbox'} onClick={() => setSixQuizAnswer(1)}>
                                        <input type="radio" id={'svys61'} checked={sixQuizAnswer === 1}/>
                                        <span>1</span>
                                      </label>

                                      <label htmlFor="svys62" className={'custom-checkbox'} onClick={() => setSixQuizAnswer(2)}>
                                        <input type="radio" id={'svys62'} checked={sixQuizAnswer === 2}/>
                                        <span>2</span>
                                      </label>

                                      <label htmlFor="svys63" className={'custom-checkbox'} onClick={() => setSixQuizAnswer(3)}>
                                        <input type="radio" id={'svys63'} checked={sixQuizAnswer === 3}/>
                                        <span>3</span>
                                      </label>

                                      <label htmlFor="svys64" className={'custom-checkbox'} onClick={() => setSixQuizAnswer(4)}>
                                        <input type="radio" id={'svys64'} checked={sixQuizAnswer === 4}/>
                                        <span>4</span>
                                      </label>

                                    </div>
                                  </td>
                                </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                      </div>
                    </div>
                    ) : (
                    <div className={'survey__body'}>
                      <div className="survey__body-content">
                        <div className="survey__body-inner">
                          <div className="survey__nav">
                            <div className={'survey__nav-state-img'}>
                              <HiMenuAlt2/>
                            </div>
                            <div className={'survey__nav-list'}>
                              {
                                sectionState?.map((section, index) => (
                                  <div className={'survey__nav-item'} key={section.id}>
                                    <button className={'number'} disabled={section.id === 2}>
                                      <span>{section.id}</span>
                                    </button>
                                  </div>
                                ))
                              }
                            </div>
                          </div>
                          <div className="survey__content">
                            <div className={'survey__content-block-list'}>
                              <div className='survey__content-block'>
                                <h2>6. 수강신청에 가장 중요하게 생각하는 것은 ?
                                </h2>
                                <div className={'survey__type1'}>
                                  <div className={'survey__type1-selector'}>
                                    <div className="block">
                                      <label htmlFor="svy1" className={'custom-checkbox'} onClick={() => setSixQuizAnswer(1)}>
                                        <input type="radio" name={'svy1'} checked={sixQuizAnswer === 1}/>
                                        <span />
                                        <p>①  강의 난이도</p>
                                      </label>

                                      <label htmlFor="svy2" className={'custom-checkbox'} onClick={() => setSixQuizAnswer(2)}>
                                        <input type="radio" name={'svy2'} checked={sixQuizAnswer === 2}/>
                                        <span />
                                        <p>②  교수님 성향</p>
                                      </label>

                                      <label htmlFor="svy3" className={'custom-checkbox'} onClick={() => setSixQuizAnswer(3)}>
                                        <input type="radio" name={'svy3'} checked={sixQuizAnswer === 3}/>
                                        <span />
                                        <p>③  학점 취득의 용이함</p>
                                      </label>

                                      <label htmlFor="svy4" className={'custom-checkbox'} onClick={() => setSixQuizAnswer(4)}>
                                        <input type="radio" name={'svy4'} checked={sixQuizAnswer === 4}/>
                                        <span />
                                        <p>④  취업 연계</p>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className={'survey__controller'}>
                                <button className={'control-btn'}>
                              <span>
                                <BsArrowLeft />
                              </span>
                                  <p>
                                    이전 문항
                                  </p>
                                </button>

                                <button className={'control-btn'}>
                                  <p>
                                    다음 문항
                                  </p>
                                  <span>
                                <BsArrowRight />
                              </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        { showAnswer && (
                          <div className={'survey__body-answer'}>
                            <div className={'_dataTable'}>
                              <table>
                                <colgroup>
                                  <col width={50}/>
                                  <col/>
                                </colgroup>
                                <thead>
                                <tr>
                                  <th>번호</th>
                                  <th>답변</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>
                                    <div className="flex">
                                      <label htmlFor="svys1" className={'custom-checkbox'} onClick={() => setFirstQuizAnswer(1)}>
                                        <input type="radio" name={'svys'} id={'svys1'} checked={firstQuizAnswer === 1}/>
                                        <span>1</span>
                                      </label>

                                      <label htmlFor="svys2" className={'custom-checkbox'} onClick={() => setFirstQuizAnswer(2)}>
                                        <input type="radio" name={'svys'} id={'svys2'} checked={firstQuizAnswer === 2}/>
                                        <span>2</span>
                                      </label>

                                      <label htmlFor="svys3" className={'custom-checkbox'} onClick={() => setFirstQuizAnswer(3)}>
                                        <input type="radio" name={'svys'} id={'svys3'} checked={firstQuizAnswer === 3}/>
                                        <span>3</span>
                                      </label>

                                      <label htmlFor="svys4" className={'custom-checkbox'} onClick={() => setFirstQuizAnswer(4)}>
                                        <input type="radio" name={'svys'} id={'svys4'} checked={firstQuizAnswer === 4}/>
                                        <span>4</span>
                                      </label>

                                      <label htmlFor="svys5" className={'custom-checkbox'} onClick={() => setFirstQuizAnswer(5)}>
                                        <input type="radio" name={'svys'} id={'svys5'} checked={firstQuizAnswer === 5}/>
                                        <span>5</span>
                                      </label>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>
                                  </td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>
                                    예
                                  </td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>
                                    없습니다.
                                  </td>
                                </tr>
                                <tr>
                                  <td>5</td>
                                  <td>

                                  </td>
                                </tr>
                                <tr>
                                  <td>6</td>
                                  <td>
                                    <div className="flex">
                                      <label htmlFor="svys61" className={'custom-checkbox'} onClick={() => setSixQuizAnswer(1)}>
                                        <input type="radio" id={'svys61'} checked={sixQuizAnswer === 1}/>
                                        <span>1</span>
                                      </label>

                                      <label htmlFor="svys62" className={'custom-checkbox'} onClick={() => setSixQuizAnswer(2)}>
                                        <input type="radio" id={'svys62'} checked={sixQuizAnswer === 2}/>
                                        <span>2</span>
                                      </label>

                                      <label htmlFor="svys63" className={'custom-checkbox'} onClick={() => setSixQuizAnswer(3)}>
                                        <input type="radio" id={'svys63'} checked={sixQuizAnswer === 3}/>
                                        <span>3</span>
                                      </label>

                                      <label htmlFor="svys64" className={'custom-checkbox'} onClick={() => setSixQuizAnswer(4)}>
                                        <input type="radio" id={'svys64'} checked={sixQuizAnswer === 4}/>
                                        <span>4</span>
                                      </label>

                                    </div>
                                  </td>
                                </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    )}
              </div>
            </div>

          </>
        )
      }
      {
        tab === 3 && (
          <div>평가</div>
        )
      }
      {
        tab === 4 && (
          <>
            <div className="_modal__block">
              <div className="_modal__block-header">
                <h2 className={'i-survey'}>설문</h2>
              </div>
              <div className={'survey'}>
                <div className={'survey__header'}>
                  <h2 className={'survey__title'}>
                    2021년 1학기 강의 만족도 조사
                  </h2>
                  <div className={'survey__info'}>
                    <div className="block">
                      <strong>시작시간</strong> 2021-01-04  09:20
                    </div>
                    <div className="block block--clock">
                      <strong>남은 시험시간</strong>
                      <div className={'clock'}>
                        <span>00</span> <i>:</i> <span>00</span> <i>:</i> <span>00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={'survey__state'}>
                  <div className={'left'}>
                    <button className={'btn all'}><CgMenuGridR/>전체보기</button>
                    <button className={'btn'}>
                      <HiMenuAlt2 />
                      문항별로 보기
                    </button>
                  </div>
                  <div className={'center'}>
                    <p>
                      <strong>배점</strong>
                      <span>-</span> / 100
                    </p>
                    <p>
                      <strong>전체 문항수</strong>
                      <span>-</span>
                    </p>
                  </div>
                  <div className={'right'}>
                    <button className={'btn save'}>
                      <FiCheck/>
                      저장하기
                    </button>
                  </div>
                </div>

                <div className={'survey__body'}>
                  <div className="survey__body-content">
                    <div className="survey__body-inner">
                      <div className="survey__nav">
                        <div className={'survey__nav-state-img'}>
                          <CgMenuGridR/>
                        </div>
                        <div className={'survey__nav-list'}>
                          {
                            sectionState?.map((section, index) => (
                              <div className={'survey__nav-item'} key={section.id}>
                                {section.id > 1 && (
                                  <i onClick={() => handleClickRemoveSection(section.id)}>
                                    <IoCloseOutline />
                                  </i>
                                )}
                                <button>
                                  <span>{section.id}</span>장
                                </button>
                              </div>
                            ))
                          }
                          <div className="survey__nav-item">
                            <button className={'more'} onClick={handleClickAddSection}>
                              <span>+</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="survey__content">
                        {false && <div className={'survey__init'}>
                          <div className="img">
                            <img src="/assets/images/i-survey-write.png" alt=""/>
                          </div>
                          <button className={'_btn'}>+ 문항 추가하기</button>
                        </div> }
                        {false && (
                          <div className={'survey__select-type-content'}>
                            <div className={'survey__select-tab'}>
                              <button>문제 유형</button>
                              <button className={'active'}>설문 유형</button>
                              <button>문제 은행</button>
                            </div>
                            <div className={'survey__select-type'}>
                              <label htmlFor="type1" className={'survey__select-type-item'}>
                              <span className="img">
                                <img src="/assets/images/survey-img-1.png" alt=""/>
                              </span>
                                <p>선호도형</p>
                                <div className={'custom-checkbox'}>
                                  <input type="radio" name={'types'} id={'type1'}/>
                                  <span />
                                </div>
                              </label>
                              <label htmlFor="type2" className={'survey__select-type-item'}>
                              <span className="img">
                                <img src="/assets/images/survey-img-2.png" alt=""/>
                              </span>
                                <p>단일 선택형</p>
                                <div className={'custom-checkbox'}>
                                  <input type="radio" name={'types'} id={'type2'}/>
                                  <span />
                                </div>
                              </label>
                              <label htmlFor="type3" className={'survey__select-type-item'}>
                              <span className="img">
                                <img src="/assets/images/survey-img-3.png" alt=""/>
                              </span>
                                <p>복수 선택형</p>
                                <div className={'custom-checkbox'}>
                                  <input type="radio" name={'types'} id={'type3'}/>
                                  <span />
                                </div>
                              </label>
                              <label htmlFor="type4" className={'survey__select-type-item'}>
                              <span className="img">
                                <img src="/assets/images/survey-img-4.png" alt=""/>
                              </span>
                                <p>표형</p>
                                <div className={'custom-checkbox'}>
                                  <input type="radio" name={'types'} id={'type4'}/>
                                  <span />
                                </div>
                              </label>
                              <label htmlFor="type5" className={'survey__select-type-item'}>
                              <span className="img">
                                <img src="/assets/images/survey-img-5.png" alt=""/>
                              </span>
                                <p>주관식 단답형</p>
                                <div className={'custom-checkbox'}>
                                  <input type="radio" name={'types'} id={'type5'}/>
                                  <span />
                                </div>
                              </label>
                              <label htmlFor="type6" className={'survey__select-type-item'}>
                              <span className="img">
                                <img src="/assets/images/survey-img-6.png" alt=""/>
                              </span>
                                <p>주관식 서술형</p>
                                <div className={'custom-checkbox'}>
                                  <input type="radio" name={'types'} id={'type6'}/>
                                  <span />
                                </div>
                              </label>
                            </div>
                            <div className={'answer-button-box end'}>
                              <button className={'btn'}>취소</button>
                              <button className={'btn submit'}>추가</button>
                            </div>
                          </div>
                        )}

                        <div className={'survey__content-form'}>
                          <div className={'survey__content-form-actions'}>
                            <button className={allShowSurvey ? '' : 'active'} onClick={() => handleClickToggleAllSurvey(false)}>
                              전체 접기
                              <AiOutlineMinus />
                            </button>
                            <button className={allShowSurvey ? 'active' : ''} onClick={() => handleClickToggleAllSurvey(true)}>
                              전체 펼치기
                              <AiOutlinePlus />
                            </button>
                          </div>
                          <div className={'survey__content-lists'}>
                            {surveyItem?.map(item => (
                              <div key={item.id} className={'survey__content-item'}>
                                <div className="survey__content-item-header">
                                  <button onClick={() => handleClickToggleSurveyItem(item.id)}>
                                    {item.show ? (<FiMinus />) : (<FiPlus />)}
                                  </button>
                                  <button>
                                    <CgCopy />
                                  </button>
                                  <button onClick={() => handleClickRemoveSurveyItem(item.id)}>
                                    <BsTrash />
                                  </button>
                                </div>
                                {item.show && (<div className="survey__content-item-body">
                                  <div className="_modal__block">
                                    <div className={'_modal__block-body'}>
                                      <div className="row">
                                        <h3 className={'insertForm__name required'}> 제목</h3>
                                        <div className={'insertForm__content'}>
                                          <div className="input full"><input type="text"/></div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <h3 className={'insertForm__name '}> 내용</h3>
                                        <div className={'insertForm__content'}>
                                          <div className="flex">
                                            <div className="input flex-1"><input type="text" placeholder={'항목에 대한 자세한 설명을 입력하세요.'} /></div>
                                            <button className={'_btn small _btn--img'}>이미지 업로드</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className={'_modal__block-body'}>
                                      <div className="row">
                                        <h3 className={'insertForm__name '}> 유형</h3>
                                        <div className={'insertForm__content'}>
                                          <div className="select long">
                                            <select name="" id="">
                                              <option value="">선호도형</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <h3 className={'insertForm__name required'}> 점수범위</h3>
                                        <div className={'insertForm__content'}>
                                          <div className="flex">
                                            <div className="select">
                                              <select name="" id="">
                                                <option value="">1</option>
                                              </select>
                                            </div>

                                            <span>~</span>

                                            <div className="select">
                                              <select name="" id="">
                                                <option value="">5</option>
                                              </select>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>)}
                              </div>
                            ))}
                            <button className={'_btn'} onClick={handleClickAddSurveyItem}>+ 문항 추가하기</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      }

    </div>
  );
};

export default DashaboardSurveyModal;
