import React from 'react';
import DashboardModal from './DashboardModal';

const LectureDetailState = ({ onClose }) => {
  return (
    <DashboardModal
      title={'진도율&성취율 세부 현황'}
      onClickClose={onClose}
      maxWidth={700}
    >
      <div className={'_modal__block LectureDetailState'}>
        <div className={'LectureDetailState__title'}>
          <h2>
            미완료한 학생 목록
          </h2>
        </div>
        <div className="_dataTable">
          <table>
            <colgroup>
              <col width={'120px'}/>
              <col/>
            </colgroup>
            <thead>
            <tr>
              <th>선택</th>
              <th>번호</th>
              <th>이름</th>
              <th>학번</th>
              <th>대학</th>
              <th>학과(전공)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <label className={'custom-checkbox'} htmlFor={'c1'}>
                  <input type="checkbox" id={'c1'} />
                  <span />
                </label>
              </td>
              <td>1</td>
              <td>강성민</td>
              <td>51240</td>
              <td>부속시설</td>
              <td>기초교육원</td>
            </tr>
            <tr>
              <td>
                <label className={'custom-checkbox'} htmlFor={'c2'}>
                  <input type="checkbox" id={'c2'} />
                  <span />
                </label>
              </td>
              <td>1</td>
              <td>강성민</td>
              <td>51240</td>
              <td>부속시설</td>
              <td>기초교육원</td>
            </tr>
            <tr>
              <td>
                <label className={'custom-checkbox'} htmlFor={'c3'}>
                  <input type="checkbox" id={'c3'} />
                  <span />
                </label>
              </td>
              <td>1</td>
              <td>강성민</td>
              <td>51240</td>
              <td>부속시설</td>
              <td>기초교육원</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className={'lectureDetailState__action'}>
          <p className={'help-text'}>선택된 사용자에게</p>
          <div className="select">
            <select name="" id="">
              <option value="">선택</option>
            </select>
          </div>
        </div>
      </div>
    </DashboardModal>
  );
};

export default LectureDetailState;
