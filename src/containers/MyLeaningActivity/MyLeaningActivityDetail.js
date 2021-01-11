import React, { useState } from 'react';

const MyLeaningActivityDetail = ({ theme }) => {
  const [tab, setTab] = useState(1);
  return (
    <div className={'ActivityDetail'}>
      <div className={'ActivityDetail__header'}>
        <div className="info">
          <div className={'type'}>
            <img src={'/assets/images/video-icon.png'} alt=""/>
            <span>동영상</span>
          </div>
          <h2>미적분을 풀어보세요</h2>
        </div>

        <div className="actions">
          <button>
            즐겨찾기
          </button>
          <button>
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

    </div>
  );
};

export default MyLeaningActivityDetail;
