import React from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/all';
import { Link } from 'react-router-dom';

const PanelContentList = ({ toggle, setToggle }) => {
  return (
    <div className={`PanelContentList ${toggle ? 'active' : ''}`}>
      <div className="top">
        강좌목차
        <button onClick={() => setToggle(!toggle)}>
          { toggle ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}

        </button>
      </div>

      <div className="sectionBlock">
        <h3>샘플주차</h3>
        <div className={'section'}>
          <h4>섹션 1</h4>
          <ul>
            <li>
              <Link to={'/'} className={'active'}>페이지1: 동영상</Link>
            </li>
            <li>
              <Link to={'/'}>페이지2: 주피터노트북 예제</Link>
            </li>
            <li>
              <Link to={'/'}>페이지3: 동영상 + 주피터노트북 예제</Link>
            </li>
          </ul>
        </div>
        <div className={'section'}>
          <h4>섹션 2</h4>
          <ul>
            <li>
              <Link to={'/'} className={''}>페이지1: 동영상</Link>
            </li>
            <li>
              <Link to={'/'}>페이지2: 주피터노트북 예제</Link>
            </li>
            <li>
              <Link to={'/'}>페이지3: 동영상 + 주피터노트북 예제</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={'info'}>
        <h4>교수님 주차</h4>
        <ul>
          <li>
            <Link to={'/'} className={''}>Please enter your content</Link>
          </li>
          <li>
            <Link to={'/'}>Please enter your content</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PanelContentList;
