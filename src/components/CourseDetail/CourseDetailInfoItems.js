import React, { useState } from 'react';

const CourseDetailInfoItems = ({ theme, setOpenModal }) => {
  const [popover, setPopover] = useState(false);

  const handleClickShowPopover = (e) => {
    e.stopPropagation();
    setPopover(!popover);
  };

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
       <button className={'submit'} onClick={() => setOpenModal(true)} >신청하기</button>
       <button className={'share'} onClick={handleClickShowPopover}>
         <img src={`/assets/images/courseShare${theme === 'dark' ? '2' : ''}.png`} alt=""/>
       </button>
       {popover && (
         <div className={'share__popover'}>
           <h3>SNS에 교육과정을 공유해주세요.</h3>
           <div className={'share__items'}>
             <button>f</button>
             <button>t</button>
             <button>g</button>
           </div>
           <div className={'copy'}>
             <input type="text" value='https://kacademy.kist.co.kr' readOnly/>
             <button>Copy URL</button>
           </div>
         </div>
       )}
     </div>

   </>
  );
};

export default CourseDetailInfoItems;
