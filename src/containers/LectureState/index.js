import React from 'react';
import { AiOutlineCheckCircle, AiOutlineStop, BsEye } from 'react-icons/all';

const Index = () => {
  return (
    <div className={'lectureState page'}>
      <h1 className={'page__title'}>
        출력/학습현황
      </h1>
      <div className={'lectureState__body'}>
        <div className={'state'}>
          <div className="left">
            <div className="row">
              <div className="col">
                <strong>출석</strong>
                <span className={'blue'}>0</span>
              </div>
              <div className="col">
                <strong>지각</strong>
                <span className={'orange'}>0</span>
              </div>
              <div className="col">
                <strong>결석</strong>
                <span className={'red'}>0</span>
              </div>
              <div className="col">
                <strong>미결</strong>
                <span className={'gray'}>0</span>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <strong>학습완료상태: 완료</strong>
                <span className={'blue'}>0</span>
              </div>
              <div className="col">
                <strong>미완료</strong>
                <span className={'gray'}>0</span>
              </div>
            </div>
          </div>
          <div className="right">
            <button className="_btn">
              전체학생 보기
            </button>
          </div>
        </div>

        <div className="_dataTable">
          <table>
            <colgroup>
              <col/>
              <col/>
              <col/>
              <col/>
              <col/>
              <col/>
              <col/>
            </colgroup>
            <thead>
            <tr>
              <th>주차</th>
              <th>차시</th>
              <th>학습 제목</th>
              <th>학습 유형</th>
              <th>학습 현황</th>
              <th>출결 현황</th>
              <th>상세 이력</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td rowSpan={2}>
                01 [1주] 증강현실<br/>
                및 가상현실의 개요
              </td>
              <td>
                1. 증강현실 및<br/>
                가상 현실의 개요
                <br/>
                <span className={'crt state-false'}>
                  <AiOutlineStop /> 결석
                </span>
              </td>
              <td>
                학습자료_week1
              </td>
              <td>PDF</td>
              <td className={'state-column complete'}>
                <span className={'crt state-true'}>
                  <AiOutlineCheckCircle /> 완료
                </span>
              </td>

              {/* 기본은 회색배경, warning: 레드 */}
              <td className={'attendance-column'}>
                출석 대상 아님
              </td>
              <td>
                <button className={'show-detail'}><BsEye />보기</button>
              </td>
            </tr>
            <tr>
              <td>
                1. 증강현실 및<br/>
                가상 현실의 개요
                <br/>
                <span className={'crt'}>
                  <AiOutlineStop /> 출결 대상 아님
                </span>
              </td>
              <td>
                학습자료_week1
              </td>
              <td>PDF</td>
              <td className={'state-column'}>
                -
              </td>

              {/* 기본은 회색배경, warning: 레드 */}
              <td className={'attendance-column warning'}>
                <span className={'crt state-false'}>
                  <AiOutlineStop /> 결석
                </span>
              </td>
              <td>
                <button className={'show-detail'}><BsEye />보기</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Index;
