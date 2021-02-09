import React from 'react';
import Communication from '../Communication';

const DetailInfo = ({ theme }) => {
  return (
    <div className={'courseDetailInformation'}>
      <div className="block">
        <h3>●  설명</h3>
        <p>
          미적분에 대한 기초를 배울 수 있는 동영상 콘텐츠 입니다.
          자유롭게 사용하세요~
        </p>
      </div>

      <div className="block">
        <h3>●  저작권</h3>
        <p>
          <img src={'/assets/images/privacy-img.png'} alt=""/>
        </p>
      </div>

      <div className="block">
        <h3>●  메타정보</h3>

        <div className={'Activity__metaInfo'}>
          <div className="_form-row">
            <h4>수준</h4>
            <input type="text" value={'고등(대학 1학년)'} readOnly={true}/>
          </div>
          <div className="_form-row">
            <h4>데이터종류</h4>
            <input type="text" value={'mp4 파일'} readOnly={true}/>
          </div>
        </div>
      </div>

      <div className="block">
        <h3>●  댓글</h3>
        <Communication />
      </div>
    </div>
  );
};

export default DetailInfo;
