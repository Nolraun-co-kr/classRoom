import React from 'react';
import ContentsBlock from './ContentsBlock';

const Contents = ({ theme }) => {
  return (
    <div className={'contents'}>
      <ContentsBlock theme={theme}/>
      <ContentsBlock theme={theme}/>
    </div>
  );
};

export default Contents;
