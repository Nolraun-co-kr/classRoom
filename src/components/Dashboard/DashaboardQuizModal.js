import React, { useCallback, useState } from 'react';
import Editor from '../Editor';
import { GrClose } from 'react-icons/gr';

const DashaboardQuizModal = ({
  handleClickToggleOption,
  toggleOption
}) => {
  const [option, setOption] = useState([
    {
      id: 1
    }
  ]);

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
          <h2>퀴즈</h2>
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
              <Editor />
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
                            <GrClose />
                          </button>
                          <div className="flex">
                            <h3>보기 {index}</h3>
                            <Editor bodyHeight={100} />
                          </div>
                          <div className="flex">
                            <h3>피드백</h3>
                            <Editor bodyHeight={100} />
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
                <Editor bodyHeight={100} />
              </div>
              <div className="flex align-top">
                <div className={'quiz-false'}>오답인 경우</div>
                <Editor bodyHeight={100} />
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
    </div>
  );
};

export default DashaboardQuizModal;
