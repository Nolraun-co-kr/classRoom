import React from 'react';

const CompleteCheck = ({ state, theme }) => {
  return (
    <div className={'completeCheck'}>
      {state
        ? <img src={'/assets/images/complete-check.png'} alt={'완료'}/>
        : <img src={`/assets/images/not-complete-check${theme === 'dark' ? '2' : ''}.png`} alt={'미완료'}/>
      }
    </div>
  );
};

export default CompleteCheck;
