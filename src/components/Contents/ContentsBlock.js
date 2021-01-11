import React, { useState } from 'react';
import Progress from '../Home/Progress';
import { RiArrowDropDownLine } from 'react-icons/all';
import { RiArrowDropUpLine } from 'react-icons/ri';

const ContentsBlock = ({ theme }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="contents__block">
      <div className="contents__header">
        <h2>4. 변수와 함수</h2>
        <Progress percent={66} />
      </div>
      <div className="contents__body">
        <p>
          추상화의 개요를 알고 자료형에 대해 이해하고 정리하며 실제로 활용할 수 있다.
        </p>

        {toggle && (
          <div className={'contents__detail'}>
            <div className="contents__detail-block">
              <h3>들어가기</h3>
              <ul>
                <li>
                  <h4>Intro</h4>
                  <div className={'icons'}>
                    <span><img src={`/assets/images/activity1-icon${theme === 'dark' ? '2' : ''}.png`} alt=""/></span>
                    <span><img src={`/assets/images/activity2-icon${theme === 'dark' ? '2' : ''}.png`} alt=""/></span>
                    <span><img src={`/assets/images/activity3-icon${theme === 'dark' ? '2' : ''}.png`} alt=""/></span>
                  </div>
                  <p>
                    <img src="/assets/images/content-check.png" alt=""/> 91%
                  </p>
                </li>
                <li>
                  <h4>오리엔테이션</h4>
                  <div className={'icons'}>
                    <span><img src={`/assets/images/activity1-icon${theme === 'dark' ? '2' : ''}.png`} alt=""/></span>
                  </div>
                  <p>
                    <img src="/assets/images/content-check.png" alt=""/> 91%
                  </p>
                </li>
                <li>
                  <h4>학습목표</h4>
                  <div className={'icons'}>
                    <span><img src={`/assets/images/activity1-icon${theme === 'dark' ? '2' : ''}.png`} alt=""/></span>
                  </div>
                  <p>
                    <img src="/assets/images/content-check.png" alt=""/> 91%
                  </p>
                </li>
              </ul>
            </div>

            <div className="contents__detail-block">
              <h3>학습하기</h3>
              <ul>
                <li>
                  <h4> 추상화의 개요</h4>
                  <div className={'icons'}>
                    <span><img src={`/assets/images/activity1-icon${theme === 'dark' ? '2' : ''}.png`} alt=""/></span>
                    <span><img src={`/assets/images/activity2-icon${theme === 'dark' ? '2' : ''}.png`} alt=""/></span>
                    <span><img src={`/assets/images/activity3-icon${theme === 'dark' ? '2' : ''}.png`} alt=""/></span>
                  </div>
                  <p>
                    <img src="/assets/images/content-check.png" alt=""/> 91%
                  </p>
                </li>
                <li>
                  <h4>변수와 함수</h4>
                  <div className={'icons'}>
                    <span><img src={`/assets/images/activity1-icon${theme === 'dark' ? '2' : ''}.png`} alt=""/></span>
                  </div>
                  <p>
                    <img src="/assets/images/content-check.png" alt=""/> 91%
                  </p>
                </li>
                <li>
                  <h4>다양한 매써드 활용</h4>
                  <div className={'icons'}>
                    <span><img src={`/assets/images/activity1-icon${theme === 'dark' ? '2' : ''}.png`} alt=""/></span>
                  </div>
                  <p>
                    <img src="/assets/images/content-check.png" alt=""/> 91%
                  </p>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="contents__footer">
        <button onClick={() => setToggle(!toggle)}>
          자세히 보기
          {toggle ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
        </button>
      </div>
    </div>
  );
};

export default ContentsBlock;
