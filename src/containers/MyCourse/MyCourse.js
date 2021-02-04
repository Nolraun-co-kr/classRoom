import React, { useState } from 'react';
import ListWrapper from '../../components/Layout/ListPage/Wrapper';
import { Link } from 'react-router-dom';
import MyCourseItem from '../../components/MyCourse/MyCourseItem';
import Modal from '../../components/Modal/Modal';

const MyCourse = ({ theme }) => {
  const [openModal, setOpenModal] = useState(false);
  const [col1, setCol1] = useState({
    counts: 7,
    datas: ['', '', '', '', '']
  });
  const handleClickAddCol1 = () => {
    setCol1({
      counts: 7,
      datas: ['', '', '', '', '', '', '']
    });
  };
  const handleClickRemoveCol1 = () => {
    setCol1({
      counts: 7,
      datas: ['', '', '', '', '']
    });
  };

  const [col2, setCol2] = useState({
    counts: 10,
    datas: ['', '', '', '', '']
  });
  const handleClickAddCol2 = () => {
    setCol2({
      counts: 10,
      datas: ['', '', '', '', '', '', '', '', '', '']
    });
  };
  const handleClickRemoveCol2 = () => {
    setCol2({
      counts: 10,
      datas: ['', '', '', '', '']
    });
  };

  return (
    <div className={'home'}>
      <ListWrapper title={'내 강좌'} options={[]}>
        <div className={'list1'}>
          <div className="_row">
            <div className="_col">
              <div className={'_col-header'}>
                <h3 className={'active'}>정규 강좌({col1.counts})</h3>
                <button>
                  <img src={`/assets/images/setting-icon${theme === 'light' ? '' : '2'}.png`} alt=""/>
                </button>
              </div>
              <ul className={'_col-list'}>
                {col1.datas.map((data, index) => {
                  return (
                    <MyCourseItem
                      key={index}
                      tags={[{ class: 'tag1', name: '3학년' }]}
                      ai={false}
                      title={'베트남어 배우기(1분반)'}
                      description={'배수양 외 1명 | 2021년 1학기'}
                    />
                  );
                })}
              </ul>
              {
                (col1.datas.length < col1.counts)
                  // eslint-disable-next-line multiline-ternary
                  ? (
                  <button className={'_col-more'} onClick={handleClickAddCol1}>+ 더보기</button>
                    ) : (
                  <button className={'_col-more'} onClick={handleClickRemoveCol1}>- 접기</button>
                    )
              }
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
                <div className={'_divide'} />
                <MyCourseItem
                  tags={[]}
                  ai={true}
                  title={'2021 성희롱 예방교육'}
                  description={'임식심 | #성희롱예방필수교육'}
                />

              </ul>
            </div>
            <div className="_col">
              <div className={'_col-header'}>
                <h3>MOOC 강좌 (2)</h3>
              </div>
              <ul className={'_col-list'}>
                {col2.datas.map((data, index) => {
                  return (
                    <MyCourseItem
                      key={index}
                      tags={[{ class: 'tag1', name: '3학년' }, { class: 'tag2', name: '수료증' }]}
                      ai={false}
                      title={'베트남어 배우기(1분반)'}
                      description={'배수양 외 1명 | 2021년 1학기'}
                    />
                  );
                })}
              </ul>
              {
                (col2.datas.length < col2.counts)
                  // eslint-disable-next-line multiline-ternary
                  ? (
                    <button className={'_col-more'} onClick={handleClickAddCol2}>+ 더보기</button>
                    ) : (
                    <button className={'_col-more'} onClick={handleClickRemoveCol2}>- 접기</button>
                    )
              }
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
              <button className={'_col-create'} onClick={() => setOpenModal(true)}>+ 새 강좌 생성하기</button>
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

      {openModal && (
        <Modal
          title={'새 강좌 생성하기'}
          onClickClose={() => setOpenModal(false)}
        >
          <div className="_modal__row">
            <label htmlFor="">강좌명</label>
            <div className="input">
              <input type="text"/>
            </div>
          </div>

          <div className="_modal__row mt-10">
            <label htmlFor="">분반수</label>
            <div className="select">
              <select name="" id="">
                <option value="1">1</option>
              </select>
            </div>
          </div>

          <div className="_modal__row mt-10">
            <label htmlFor="">회차수</label>
            <div className="select">
              <select name="" id="">
                <option value="1">1</option>
              </select>
            </div>
          </div>

          <div className={'_modal__actions'}>
            <button className={'submit'}>생성하기</button>
            <button>취소하기</button>
          </div>
        </Modal>
      )}

    </div>
  );
};

export default MyCourse;
