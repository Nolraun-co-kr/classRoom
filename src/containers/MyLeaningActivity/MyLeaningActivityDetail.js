import React, { useState } from 'react';
import DetailInfo from '../../components/Activity/DetailInfo';
import Preview from '../../components/Activity/Preview';
import { AiFillStar } from 'react-icons/ai';
import Modal from '../../components/Modal/Modal';

const MyLeaningActivityDetail = ({ theme }) => {
  const [tab, setTab] = useState(1);
  const [star, setStar] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
    <div className={'ActivityDetail'}>
      <div className={'ActivityDetail__header'}>
        <div className="info">
          <div className={'type'}>
            <img src={`/assets/images/video-icon${theme === 'dark' ? '2' : ''}.png`} alt=""/>
            <span>동영상</span>
          </div>
          <h2>미적분을 풀어보세요</h2>
        </div>

        <div className="actions">
          <button className={'star'} onClick={() => setStar(!star)}>
            {star && <i><AiFillStar /></i>}
            즐겨찾기
          </button>
          <button onClick={() => setOpenModal(true)}>
            내 저장소로 가져가기
          </button>
          <button>
            다운로드
          </button>
        </div>
      </div>
      <div className="_tabs">
        <button onClick={() => setTab(1)} className={tab === 1 && 'active'}>미리보기</button>
        <button onClick={() => setTab(2)} className={tab === 2 && 'active'}>상세한 정보</button>
      </div>

      <div className={'ActivityDetail__view'}>
        {
          tab === 1 && (
            <Preview theme={theme}/>
          )
        }

        {
          tab === 2 && (
            <DetailInfo theme={theme} />
          )
        }
      </div>
    </div>
      {openModal && (
        <Modal
          title={'실행확인'}
          onClickClose={() => setOpenModal(false)}
        >
          <p className={'_modal__description'}>
            내 저장소로 가져가기를
            정말로 실행 하시겠습니까?
          </p>

          <div className={'_modal__actions'}>
            <button className={'submit'}>생성하기</button>
            <button>취소하기</button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default MyLeaningActivityDetail;
