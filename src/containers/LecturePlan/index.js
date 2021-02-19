import React from 'react';
import LecturePlanCalendar from '../../components/LecturePlan/Calendar';

const 성적비중 = [
  {
    id: 1,
    title: '주차학습',
    value: 10
  },
  {
    id: 2,
    title: '과제',
    value: 10
  },
  {
    id: 3,
    title: '질의응답',
    value: 10
  },
  {
    id: 4,
    title: '퀴즈',
    value: 10
  },
  {

    id: 5,
    title: '토론',
    value: 10
  },
  {
    id: 6,
    title: '중간시험',
    value: 10
  },
  {
    id: 7,
    title: '기말시험',
    value: 10
  },
  {
    id: 8,
    title: '비평가그룹',
    value: 10
  },
  {
    id: 9,
    title: '강의자료실',
    value: 10
  }
];

const LecturePlan = () => {
  return (
    <div className={'lecturePlan page'}>
      <h1 className={'page__title'}>
        강의계획서
      </h1>

      <div className={'lecturePlan__body'}>
        <div className="lecturePlan__col left">
          <div className={'lecturePlan__col-header'}>
            <h2>강의소개</h2>
            <button className={'btn'}>수정하기 +</button>
          </div>
          <div className="lecturePlan__content">
            <div className="block">
              <h3 className={'block__title'}>수업내용/목표</h3>
              <div className="block__content">
                <div className="border-box">
                  <div className="desc">
                    [멀티미디어 개론] 이 강좌는 멀티미디어,특히가상 현실에 관심이 있는 학습자가 수강 할 수 있도록 구성되었습니다. 대학생 혹은
                    대학원생은 이 강좌를 기반으로 가상현실과 인지부하이론, 멀티미디어 설계이론의 관계를 더 깊이 이해할 수 있을 것 입니다.
                    [멀티미디어 개론] 이 강좌는 멀티미디어,특히가상 현실에 관심이 있는 학습자가 수강 할 수 있도록 구성되었습니다. 대학생 혹은
                    대학원생은 이 강좌를 기반으로 가상현실과 인지부하이론, 멀티미디어 설계이론의 관계를 더 깊이 이해할 수 있을 것 입니다.
                    [멀티미디어 개론] 이 강좌는 멀티미디어,특히가상 현실에 관심이 있는 학습자가 수강 할 수 있도록 구성되었습니다. 대학생 혹은
                    대학원생은 이 강좌를 기반으로 가상현실과 인지부하이론, 멀티미디어 설계이론의 관계를 더 깊이 이해할 수 있을 것 입니다.
                  </div>
                </div>
              </div>
            </div>
            <div className="block">
              <h3 className={'block__title'}>학습목표</h3>
              <div className="block__content">
                <div className="border-box">
                  <ul className={'list'}>
                    <li>멀티미디어 설계원리를 인지부하 이론에 근거하여 설명할 수 있다.</li>
                    <li>멀티미디어 설계원리를 적용하여 가상현실 학습환경을 이해할 수 있다.</li>
                    <li> 가상현실 학습환경에 적합한 사용자 인터페이스의 설계원리를 설명할 수 있다.</li>
                    <li>가상현실 개발 사례를 분석할 수 있다.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="block">
              <h3 className={'block__title'}>교수자</h3>
              <div className="block__content">
                <div className="intro">
                  <div className="thumb">
                    <img src="//via.placeholder.com/170x200" alt=""/>
                  </div>
                  <div className="info">
                    <h3 className={'block__title'}>류지현 <span>교수</span></h3>
                    <ul className={'list'}>
                      <li>현) 전남대학교 교육학과 교수</li>
                      <li>현) 전남대학교 교육문제연구소(대학중점연구소)장</li>
                      <li>현) 인지와 학습공학 센터장</li>
                      <li>
                        <strong>학력</strong>  :  Florida State University 교육공학 박사
                      </li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lecturePlan__col right">
          <div className="lecturePlan__content">
            <div className="block">
              <LecturePlanCalendar />
            </div>
            <div className="block">
              <h3 className={'block__title'}>과제 그룹별 성적 비중</h3>
              <div className="block__content">
                <div className="_dataTable">
                  <table>
                    <colgroup>
                      <col width={'120px'}/>
                      <col/>
                    </colgroup>
                    <thead>
                    <tr>
                      <th>그룹</th>
                      <th>비중</th>
                    </tr>
                    </thead>
                    <tfoot>
                    <tr>
                      <th>합계</th>
                      <th>100%</th>
                    </tr>
                    </tfoot>
                    <tbody>
                    {
                      성적비중.map(data => (
                        <tr key={data.id}>
                          <th>{data.title}</th>
                          <td>{`${data.value}%`}</td>
                        </tr>
                      ))
                    }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LecturePlan;
