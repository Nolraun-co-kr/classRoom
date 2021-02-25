import React from 'react';
import { BiSearch, BsCircle } from 'react-icons/all';
import { Link } from 'react-router-dom';

const files = [
  {
    id: 1,
    title: '학습자료_week8',
    thumb: '/assets/images/learning-no-img.png',
    files: 'PDF',
    complete: true
  },
  {
    id: 2,
    title: '학습자료_week9',
    thumb: '/assets/images/learning-no-img.png',
    files: 'PDF',
    complete: false
  },
  {
    id: 3,
    title: '학습자료_week8',
    thumb: '/assets/images/learning-no-img.png',
    files: 'PDF',
    complete: true
  },
  {
    id: 4,
    title: '학습자료_week9',
    thumb: '/assets/images/learning-no-img.png',
    files: 'PDF',
    complete: false
  }
];

const Learning = () => {
  return (
    <div className={'learning'}>
      <div className="learning__top">
        <h3>총 <span>{files.length}</span>개</h3>

        <div className={'leaning__search'}>
          <div className="input">
            <input type="text"
              placeholder={'검색할 키워드 입력'}
            />
          </div>
          <button>
            <BiSearch />
          </button>
        </div>
        <div className="select">
          <select name="" id="">
            <option value="">전체</option>
          </select>
        </div>
      </div>

      <div className={'learning__content'}>
        {
          files.map(file => (
            <Link className="learning__item" to={'/'} key={file.id}>
              <div className="thumb">
                <img src={file.thumb} alt=""/>
              </div>
              <div className="info">
                <h3>{file.title}</h3>
                <div className={'file-type'}>
              <span className={'i-pdf'}>
                <img src="/assets/images/icon-pdf.png" alt=""/>
                {file.files}
              </span>
                </div>
              </div>
              <div className={`state ${file.complete ? 'complete' : ''}`}>
                <BsCircle />
                {file.complete ? '완료' : '미완료'}
              </div>
            </Link>
          ))
        }

      </div>
    </div>
  );
};

export default Learning;
