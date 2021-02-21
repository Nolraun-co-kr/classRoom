import React, { useCallback, useState } from 'react';

const DashaboardHomeworkModal = ({
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
                <h2 className={'i-homework'}>과제</h2>
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
                  <h3 className={'insertForm__name '}> 점수</h3>
                  <div className={'insertForm__content'}>
                    <div className="input short"><input type="number"/></div>
                  </div>
                </div>
              </div>
              <div className={'_modal__block-body'}>
                <div className="row">
                  <h3 className={'insertForm__name'}>제출 기간</h3>
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
                  <h3 className={'insertForm__name required'}>제출 유형</h3>
                  <div className={'insertForm__content'}>
                    <div className="_modal__block-body">
                      <div className="row">
                        <h3 className={'insertForm__name'}>제출 유형</h3>
                        <div className={'insertForm__content'}>
                          <div className="flex">
                            <label className={'custom-checkbox'} htmlFor={'ak3'}>
                              <input type="checkbox" id={'ak3'} />
                              <span />
                              <p>직접 작성</p>
                            </label>

                            <label className={'custom-checkbox'} htmlFor={'ak4'}>
                              <input type="checkbox" id={'ak4'} />
                              <span />
                              <p>첨부파일</p>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="_modal__block-body">
                      <div className="row">
                        <h3 className={'insertForm__name'}>단어 수 제한</h3>
                        <div className={'insertForm__content'}>
                          <div className="input short"><input type="text"/></div>
                          <div className="help-text-block">
                            <p className={'help-text'}>입력하지 않은 경우 단어 수 제한 없이 제출 할 수 있습니다.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="_modal__block-body">
                      <div className="row">
                        <h3 className={'insertForm__name'}>첨부 가능한 파일 수</h3>
                        <div className={'insertForm__content'}>
                          <div className="select">
                            <select name="" id="">
                              <option value="">2</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="_modal__block-body">
                      <div className="row">
                        <h3 className={'insertForm__name'}>파일 최대 용량(MB)</h3>
                        <div className={'insertForm__content'}>
                          <div className="input short"><input type="number" min={1} max={500}/></div>
                          <div className="help-text-block">
                            <p className={'help-text'}>1~500까지 입력 할 수 있습니다.</p>
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
                <h2 className={'i-homework'}>과제</h2>
              </div>
              <div className={'quiz'}>
                <div className={'quiz-title'}>
                  <span>Q.</span> 경영혁신을 실제 기업을 선정하여 사례를 들어 설명하시오.
                </div>
                <div className="quiz-help">
                  <div className={'help-text-block'}>
                    <p className={'help-text'}>첨부된 A4양식의 작성 규칙을 참고하세요.</p>
                    <p className={'help-text'}>텍스트 편집기에 1000자 이하로 직접 작성하여 제출하세요.</p>
                    <p className={'help-text'}>제출 기간을 준수하여 늦지 않게 제출하시기 바랍니다.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="_modal__block">
              <div className="homework-info">
                <div className="row">
                  <strong>제출 기간: </strong>
                  <p>직접 작성</p>
                </div>
                <div className="row">
                  <strong>제출 유형: </strong>
                  <p className={'date'}>2021-01-20 09:00 ~ 2021-01-23 23:59</p>
                </div>
                <div className="row">
                  <strong>첨부 파일: </strong>
                  <button className={'_btn small _btn--uploader'}>다운로드</button>
                </div>

                <div className={'block'}>
                  <strong>과제 제출</strong>
                  <div className={'textarea'}>
                    <textarea name="" id="">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut blanditiis consectetur, consequatur deleniti dicta, dignissimos doloribus ea earum est harum itaque maxime molestias natus non pariatur perferendis placeat quidem reiciendis rerum tempore ut vel. Aperiam distinctio doloremque, esse exercitationem id magnam, similique temporibus, ullam ut vel velit vitae voluptate. Ad earum eos facilis inventore nulla obcaecati officia praesentium quibusdam quos reprehenderit! Atque est explicabo minima neque numquam porro quibusdam! Consequuntur inventore numquam odit pariatur, perspiciatis quaerat! Corporis doloribus harum illum maxime molestiae mollitia necessitatibus numquam placeat quae recusandae! Ab ad at atque cupiditate ducimus eius eos fuga harum magni maiores modi nesciunt nihil, nisi numquam optio quis repellendus vel veniam vero, voluptatem! Ad alias aperiam asperiores blanditiis cum eaque eos excepturi exercitationem explicabo fuga in laboriosam molestiae neque nisi non officia, officiis provident rem ullam voluptatibus! Ab, aliquid assumenda beatae consequatur consequuntur cumque delectus dolorum est et excepturi explicabo facere facilis, in, inventore iusto labore magni minus mollitia necessitatibus nostrum odit omnis possimus quaerat repellat sunt tempore temporibus voluptates. Beatae deleniti, eum eveniet fugit, illum ipsum, nisi optio quia quo similique tempore voluptates? Accusamus ad aliquid, delectus dolores eveniet harum inventore labore laborum laudantium minus obcaecati praesentium quis sapiente.
                    </textarea>
                  </div>
                </div>
              </div>

            </div>
            <div className={'answer-button-box end'}>
              <button className={'btn'}>다시 제출하기</button>
              <button className={'btn submit'}>제출하기</button>
            </div>

            <div className={'homework-feedback'}>
              <div className={'homework-feedback-header'}>
                <h3>과제 피드백</h3>
              </div>
              <div className={'homework-feedback-body'}>
                <ul>
                  <li className={'feedback-item'}>
                    <div className={'top'}>
                      <strong>임성규</strong>
                      <span>2021-01-30 09:45</span>
                    </div>
                    <p>
                      실제 사례에 대한 조사를 구체적으로 잘 했습니다.
                    </p>
                  </li>

                  <li className={'feedback-item'}>
                    <div className={'top'}>
                      <strong>임성규</strong>
                      <span>2021-01-30 09:45</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto aspernatur commodi consequatur debitis earum excepturi, maxime nihil non numquam, quidem sequi, unde voluptatum! Animi atque beatae deleniti dolorum, eius eligendi esse eum explicabo facere fuga id magni, modi necessitatibus nulla possimus, qui quisquam quo reprehenderit temporibus ut. Facilis, reiciendis.
                    </p>
                  </li>
                </ul>
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

    </div>
  );
};

export default DashaboardHomeworkModal;
