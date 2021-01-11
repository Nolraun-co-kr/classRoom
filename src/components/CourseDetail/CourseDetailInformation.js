import React from 'react';
import { BsCheck } from 'react-icons/all';

const CourseDetailInformation = () => {
  return (
    <div className={'courseDetailInformation'}>
      <div className="block">
        <h3>● 강의개요</h3>
        <p>
          한국자동차기자협회 산하 올해의 차 선정위원회는 제네시스 GV70이 25점 만점 기준 20.3점을 얻어 함께 후보에 오른 메르세데스-벤츠 AMG GT C 로드스터, 메르세데스-벤츠 E-클래스 쿠페를 누르고 1월의 차로 뽑혔다고 5일 밝혔다.
          함께 후보에 오른 메르세데스-벤츠 AMG GT C 로드스터, 메르세데스-벤츠 E-클래스 쿠페를 누르고 1월의 차로 뽑혔다고 5일 밝혔다.
        </p>
      </div>

      <div className="block">
        <h3>● 강의목표</h3>
        <p>
          한국자동차기자협회 산하 올해의 차 선정위원회는 제네시스 GV70이 25점 만점 기준 20.3점을 얻어 함께 후보에 오른
          메르세데스-벤츠 AMG GT C 로드스터, 메르세데스-벤츠 E-클래스 쿠페를 누르고 1월의 차로 뽑혔다고 5일 밝혔다.
        </p>
      </div>

      <div className="block">
        <h3>● 강사소개</h3>
        <div className="courseDetailInformation__author">
          <div className="thumb">
            <img src="/assets/images/dummy-thumb.png" alt=""/>
          </div>
          <div className="info">
            <h4>
              강사 <span>김시원</span>
            </h4>
            <p>
              서울대학교 전자공학과 박사<br/>
              현 숙명여자대학교 겸임교수
            </p>
            <ul>
              <li>
                <BsCheck /> 2020년 벤처기업 최우수상 수상
              </li>
              <li>
                <BsCheck /> 2014년 최고의 기술인 100명 선정
              </li>
              <li>
                <BsCheck /> 2020년 벤처기업 최우수상 수상
              </li>
              <li>
                <BsCheck /> 2014년 최고의 기술인 100명 선정
              </li>
              <li>
                <BsCheck /> 2020년 벤처기업 최우수상 수상
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="block">
        <h3>● 강의내용</h3>
        <p>
          - 실습으로 배우는 클립 스튜디오
        </p>
      </div>
    </div>
  );
};

export default CourseDetailInformation;
