import React from 'react';
import { BsTrash, CgCopy, FiMinus, FiPlus } from 'react-icons/all';

const SurveyItem = ({
  item,
  handleClickToggleSurveyItem,
  handleClickRemoveSurveyItem
}) => {
  return (
    <div className={'survey__content-item draggable'} >
      <div className="survey__content-item-header">
        <h2>객관식 단답형</h2>
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
      {item.show
        // eslint-disable-next-line multiline-ternary
        ? (
          <div className="survey__content-item-body">
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
          </div>) : (
          <div className={'survey__content-item-foot'}>
            <span>5점</span>
            <p>
              다음 글은 조선 후기 민중봉기에 대한  설명이다. 이 시기와 사회현상에 대한 설명으로 틀린 것을 고르시오.
            </p>
          </div>
          )}
    </div>
  );
};

export default SurveyItem;
