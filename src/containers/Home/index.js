import React from 'react';
import ListWrapper from '../../components/Layout/ListPage/Wrapper';
import { Link } from 'react-router-dom';
import MobileHomeNav from '../../components/Home/MobileHomeNav';
import MobileHomeBottomNav from '../../components/Home/MobileHomeBottomNav';

const Index = ({ theme }) => {
  return (
    <div className={'home'}>
      <MobileHomeNav />

      <ListWrapper title={'내 강좌'} options={[]}>
        <div className={'list1'}>
          <div className="_row">
            <div className="_col">
              <div className={'_col-header'}>
                <h3 className={'active'}>정규 강좌(5)</h3>
                <button>
                  <img src={`/assets/images/setting-icon${theme === 'light' ? '' : '2'}.png`} alt=""/>
                </button>
              </div>
              <ul className={'_col-list'}>
                <li className={'_col-list-item'}>
                  <Link to={'/'}>
                    <div className="tags">
                      <span className={'tag1'}>3학점</span>
                    </div>
                    <h3>베트남어 배우기(1분반)</h3>
                    <p>
                      배수양 외 1명 | 2021년 1학기
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="_col">
              <div className={'_col-header'}>
                <h3>비정규 강좌 (1)</h3>
              </div>
              <ul className={'_col-list'}>
                <li className={'_col-list-item'}>
                  <Link to={'/'}>
                    <div className="tags">
                      <span className={'tag1'}>수료증</span>
                      <span className={'tag2'}>기초소양</span>
                      <span className={'tag3'}>AI추천</span>
                    </div>
                    <h3>2021 성희롱 예방교육</h3>
                    <p>
                      임식심 | #성희롱예방필수교육
                    </p>
                  </Link>
                </li>
                <li className={'_col-list-item'}>
                  <Link to={'/'}>
                    <div className="tags">
                      <span className={'tag1'}>수료증</span>
                    </div>
                    <h3>2021 성희롱 예방교육</h3>
                    <p>
                      임식심 | #성희롱예방필수교육
                    </p>
                  </Link>
                </li>
              </ul>
              <button className={'_col-more'}>+ 더보기</button>
            </div>
            <div className="_col">
              <div className={'_col-header'}>
                <h3>MOOC 강좌 (2)</h3>
              </div>
              <ul className={'_col-list'}>
                <li className={'_col-list-item'}>
                  <Link to={'/'}>
                    <div className="tags">
                      <span className={'tag1'}>수료증</span>
                    </div>
                    <h3>2021 성희롱 예방교육</h3>
                    <p>
                      임식심 | #성희롱예방필수교육
                    </p>
                  </Link>
                </li>
                <li className={'_col-list-item'}>
                  <Link to={'/'}>
                    <div className="tags">
                      <span className={'tag1'}>수료증</span>
                    </div>
                    <h3>2021 성희롱 예방교육</h3>
                    <p>
                      임식심 | #성희롱예방필수교육
                    </p>
                  </Link>
                </li>
              </ul>
              <button className={'_col-more'}>- 접기</button>
            </div>
          </div>
          <div className="_row">
            <div className="_col">
              <div className={'_col-header'}>
                <h3 className={'warning'}>Private 강좌 (1)*</h3>
              </div>
              <ul className={'_col-list'}>
                <li className={'_col-list-item'}>
                  <Link to={'/'}>
                    <div className="tags">
                      <span className={'tag1'}>3학점</span>
                    </div>
                    <h3>베트남어 배우기(1분반)</h3>
                    <p>
                      배수양 외 1명 | 2021년 1학기
                    </p>
                  </Link>
                </li>
              </ul>
              <button className={'_col-create'}>+ 새 강좌 생성하기</button>
              <div className={'_col-info'}>
                <h4>* Private 강좌 </h4>
                <p>
                  Private 강좌는 나와 내가 초대한
                  사용자에게만 보이는 폐쇄형
                  강좌입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ListWrapper>

      <MobileHomeBottomNav />
    </div>
  );
};

export default Index;
