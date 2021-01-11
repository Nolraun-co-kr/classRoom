import React from 'react';

const CourseDetailInfoItems = ({ theme }) => {
  return (
   <>
     <ul className={'info__items'}>
       <li>
         <strong>신청기간</strong>
         <p>
           2020.11.11(목) 10:00 - 2020.11.18(수) 17:00
         </p>
       </li>
       <li>
         <strong>교육기간</strong>
         <p>
           2020.11.11(목) 10:00 - 2020.11.18(수) 17:00
         </p>
       </li>
       <li>
         <strong>교육장소</strong>
         <p>
           전라남도 순천시 장평로 60 111동
         </p>
       </li>
       <li>
         <strong>신청유형</strong>
         <p>
                <span>
                  개인(20명)
                </span>
         </p>
       </li>
     </ul>
     <div className={'action'}>
       <button className={'submit'}>신청하기</button>
       <button className={'share'}>
         <img src={`/assets/images/courseShare${theme === 'dark' ? '2' : ''}.png`} alt=""/>
       </button>
     </div>
   </>
  );
};

export default CourseDetailInfoItems;
