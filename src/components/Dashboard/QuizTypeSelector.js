import React from 'react';

const QuizTypeSelector = ({
  onClickAddQuiz,
  setAddQuizState
}) => {
  return (
    <>
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
        <button className={'btn'} onClick={() => setAddQuizState(false)}>취소</button>
        <button className={'btn submit'} onClick={onClickAddQuiz}>추가</button>
      </div>
    </>
  );
};

export default QuizTypeSelector;
