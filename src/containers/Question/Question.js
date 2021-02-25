import React from 'react';
import { AiOutlineMail, FiSettings, GrNotes, HiOutlineMenuAlt2 } from 'react-icons/all';
import { Link } from 'react-router-dom';

const Question = () => {
  return (
    <div className={'question'}>
      <div className="question__top">
        <div className="left">
          <div className="input">
            <input type="text" placeholder={'제목, 내용, 작성자 검색'}/>
          </div>
          <button>
            <AiOutlineMail />
            읽지않은 메세지
          </button>
          <button>
            <GrNotes />
            과제
          </button>
        </div>
        <div className="right">
          <button className={'active'}>토론 +</button>
          <button className={'setting'}>
            <FiSettings />
          </button>
        </div>
      </div>

      <div className="question__content">
        <div className="question__block ">
          <h2 className={'feature'}>고정된 토론</h2>
          <div className={'question__list'}>
            <Link to={'/'} className="question__item question__item-feature">
              <div className="row">
                <h3>
                  <span>[반대의견]</span> 디지털 혁명에 따라 멀티미디어 자료의 고도화가 야기하는 교육 환경 및 학습결과 등에 대한 부정적인 요인을 서술하시오.
                </h3>
              </div>
              <div className="row">
                <div className="block">
                  <span>최근의견</span>
                  <span className={'date'}>2021-02-21</span>
                </div>
                <div className="block">
                  <span className={'red'}>
                    <img src="/assets/images/icon-star-red.png" alt=""/> 마감일
                  </span>
                  <span className={'date'}>2021-02-21 20:20</span>
                </div>

                <div className={'state'}>
                  <img src="/assets/images/icon-talk.png" alt=""/>
                  <div className={'state__user'}>
                    <span className={'current active'}>230</span> / <span>230</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link to={'/'} className="question__item question__item-feature">
              <div className="row">
                <h3>
                  <span>[반대의견]</span> 디지털 혁명에 따라 멀티미디어 자료의 고도화가 야기하는 교육 환경 및 학습결과 등에 대한 부정적인 요인을 서술하시오.
                </h3>
              </div>
              <div className="row">
                <div className="block">
                  <span>최근의견</span>
                  <span className={'date'}>2021-02-21</span>
                </div>
                <div className="block">
                  <span className={'red'}>
                    <img src="/assets/images/icon-star-red.png" alt=""/> 마감일
                  </span>
                  <span className={'date'}>2021-02-21 20:20</span>
                </div>

                <div className={'state'}>
                  <img src="/assets/images/icon-talk.png" alt=""/>
                  <div className={'state__user'}>
                    <span className={'current '}>230</span> / <span>230</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="question__block">
          <div className={'question__block-header'}>
            <h2 className={''}>토론</h2>
            <button>
              <HiOutlineMenuAlt2 />
              최근 활동 순으로 정렬
            </button>
          </div>
          <div className={'question__list'}>
            <Link to={'/'} className="question__item ">
              <div className="row">
                <h3>
                  13주차 강의 Q&A
                </h3>
                <div className="block">
                  <span>최근의견</span>
                  <span className={'date'}>2021-02-21</span>
                </div>
                <div className="block">
                  <span className={'red'}>
                    <img src="/assets/images/icon-star-red.png" alt=""/> 마감일
                  </span>
                  <span className={'date'}>2021-02-21 20:20</span>
                </div>

                <div className={'state'}>
                  <img src="/assets/images/icon-talk.png" alt=""/>
                  <div className={'state__user'}>
                    <span className={'current active'}>230</span> / <span>230</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={'/'} className="question__item ">
              <div className="row">
                <h3>
                  13주차 강의 Q&A
                </h3>
                <div className="block">
                  <span>최근의견</span>
                  <span className={'date'}>2021-02-21</span>
                </div>
                <div className="block">
                  <span className={'red'}>
                    <img src="/assets/images/icon-star-red.png" alt=""/> 마감일
                  </span>
                  <span className={'date'}>2021-02-21 20:20</span>
                </div>

                <div className={'state'}>
                  <img src="/assets/images/icon-talk.png" alt=""/>
                  <div className={'state__user'}>
                    <span className={'current active'}>230</span> / <span>230</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
