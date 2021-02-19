import React from 'react';
import NoticeItem from '../../components/Notice/NoticeItem';

const noticeData = [];
for (let i = 0; i < 5; i++) {
  noticeData.push(
    {
      title: '[필독] 기말시험 관련 공지',
      section: '모든섹션',
      description: '기말고사 시험 관련 공지입니다. 기말시험은 1월 11일(월) 00:00부터 1월 17일 (일) 23:59까지 참여가 가능합니다....',
      date: new Date('2021-01-26 18:00')
    }
  );
}

const NoticeList = () => {
  return (
    <div className={'noticeContainer page'}>
      <h1 className={'page__title'}>
        공지사항
      </h1>
      <div className={'notice__filter'}>
        <div className={'notice__filter-form'}>
          <form action="">
            <div className="select">
              <select name="" id="">
                <option value="">전부</option>
              </select>
            </div>
            <div className="input">
              <input type="text" placeholder={'검색'}/>
            </div>
            <button>검색</button>
          </form>
        </div>
        <button className={'add-btn'}>새 공지사항 작성하기 +</button>
      </div>

      <div className={'notice__list'}>
        {noticeData.map(data => <NoticeItem key={data.id} data={data} />)}
      </div>
    </div>
  );
};

export default NoticeList;
