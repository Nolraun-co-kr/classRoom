import React, { useState } from 'react';
import CourseDetailHeader from '../../components/CourseDetail/CourseDetailHeader';
import Contents from '../../components/Contents';
import useWindowDimensions from '../../hooks/useWindowDemensions';
import CourseDetailInfoItems from '../../components/CourseDetail/CourseDetailInfoItems';
import CourseDetailInformation from '../../components/CourseDetail/CourseDetailInformation';
import Communication from '../../components/Communication';
import Modal from '../../components/Modal/Modal';

const MyCourseDetail = ({ theme }) => {
  const [openModal, setOpenModal] = useState(false);
  const [tab, setTab] = useState(1);
  const { width } = useWindowDimensions();
  return (
    <div className={'courseDetail'}>
      <CourseDetailHeader setOpenModal={setOpenModal} theme={theme} />
      {width < 768 && (
        <CourseDetailInfoItems setOpenModal={setOpenModal}/>
      )}

      <div className={'courseDetail__body'}>
        <div className="_tabs">
          <button onClick={() => setTab(1)} className={tab === 1 ? 'active' : ''}>상세정보</button>
          <button onClick={() => setTab(2)} className={tab === 2 ? 'active' : ''}>강의목차</button>
          <button onClick={() => setTab(3)} className={tab === 3 ? 'active' : ''}>커뮤니케이션</button>
        </div>

        <div className="courseDetail__views">
          {
            tab === 1 && <CourseDetailInformation />
          }
          {
            tab === 2 && <Contents theme={theme}/>
          }
          {
            tab === 3 && <Communication />
          }
        </div>
      </div>

      {openModal && (
        <Modal
          title={'수강 신청하기'}
          onClickClose={() => setOpenModal(false)}
        >
          <div className="_modal__row">
            <label htmlFor="">신청내용</label>
            <div className="input">
              <textarea name="" id=""></textarea>
            </div>
          </div>

          <div className="_modal__row mt-10">
            <label htmlFor="">첨부파일</label>
            <input type="file"/>
          </div>

          <div className={'_modal__actions'}>
            <button className={'submit'}>신청하기</button>
            <button>취소하기</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default MyCourseDetail;
