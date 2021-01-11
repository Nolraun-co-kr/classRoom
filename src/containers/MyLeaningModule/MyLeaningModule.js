import React from 'react';
import ListWrapper from '../../components/Layout/ListPage/Wrapper';
import { Link } from 'react-router-dom';
import Progress from '../../components/Home/Progress';
import CompleteCheck from '../../components/Home/CompleteCheck';

const MyLeaningModule = ({ theme }) => {
  return (
    <div className={'home'}>

      <ListWrapper title={'내 학습모듈'} options={[]}>
        <div className={'list2'}>
          <div className="_row">
            <div className="_col">
              <div className={'_col-header'}>
                <h3 className={'active'}>지난주</h3>
              </div>
              <ul className={'_col-list'}>
                <li className={'_col-list-item'}>
                  <Link to={'/'}>
                    <h3>베트남의 실생활</h3>
                    <div className={'mt-3'}>
                      <Progress percent={66} />
                    </div>
                  </Link>
                </li>
                <li className={'_col-list-item'}>
                  <Link to={'/'}>
                    <h3>베트남의 실생활</h3>
                    <div className={'mt-3'}>
                      <Progress percent={66} />
                    </div>
                  </Link>
                </li>
              </ul>
              <button className={'_col-more'}>+ 5개 더 불러오기</button>
            </div>
            <div className="_col">
              <div className={'_col-header'}>
                <h3 className={'active'}>이번주</h3>
              </div>
              <ul className={'_col-list'}>
                <li className={'_col-list-item'}>
                  <Link to={'/'}>
                    <h3>베트남의 실생활</h3>
                    <div className={'mt-3'}>
                      <Progress percent={66} />
                    </div>
                  </Link>
                </li>
                <li className={'_col-list-item'}>
                  <Link to={'/'}>
                    <h3>베트남의 실생활</h3>
                    <div className={'mt-3'}>
                      <CompleteCheck />
                    </div>
                  </Link>
                </li>
              </ul>
              <button className={'_col-more'}>+ 5개 더 불러오기</button>
            </div>
            <div className="_col">
              <div className={'_col-header'}>
                <h3 className={''}>3월 3째주</h3>
              </div>
              <ul className={'_col-list'}>
                <li className={'_col-list-item'}>
                  <Link to={'/'} className={''}>
                    <h3>베트남의 실생활</h3>
                    <div className={'mt-3'}>
                      <Progress percent={66} />
                    </div>
                  </Link>
                  <div className="disabled">
                    <span>4일 뒤부터 학습가능</span>
                  </div>
                </li>
                <li className={'_col-list-item'}>
                  <Link to={'/'}>
                    <h3>베트남의 실생활</h3>
                    <div className={'mt-3'}>
                      <CompleteCheck />
                    </div>
                  </Link>
                </li>
              </ul>
              <button className={'_col-more'}>+ 5개 더 불러오기</button>
            </div>
          </div>
          <div className="_row">
            <div className="_col">
              <div className={'_col-header'}>
                <h3 className={'warning'}>기간 정함 없음</h3>
              </div>
              <ul className={'_col-list'}>
                <li className={'_col-list-item'}>
                  <Link to={'/'} >
                    <h3>베트남의 실생활</h3>
                    <div className={'mt-3'}>
                      <Progress percent={66} />
                    </div>
                  </Link>
                </li>
                <li className={'_col-list-item'}>
                  <Link to={'/'}>
                    <h3>베트남의 실생활</h3>
                    <div className={'mt-3'}>
                      <CompleteCheck />
                    </div>
                  </Link>
                </li>
              </ul>
              <button className={'_col-more'}>+ 5개 더 불러오기</button>
            </div>
          </div>
        </div>
      </ListWrapper>

    </div>
  );
};

export default MyLeaningModule;
