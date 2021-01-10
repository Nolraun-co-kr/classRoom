import React from 'react';
import { Link } from 'react-router-dom';

const snsList = [
  {
    name: '페이스북',
    image: '/assets/images/sns1.png',
    url: ''
  },
  {
    name: '트위터',
    image: '/assets/images/sns2.png',
    url: ''
  },
  {
    name: '구글',
    image: '/assets/images/sns3.png',
    url: ''
  },
  {
    name: '카카오스토리',
    image: '/assets/images/sns4.png',
    url: ''
  },
  {
    name: '카카',
    image: '/assets/images/sns5.png',
    url: ''
  },
  {
    name: '네이버',
    image: '/assets/images/sns6.png',
    url: ''
  },
  {
    name: '밴드',
    image: '/assets/images/sns7.png',
    url: ''
  }
];
const Index = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="wrap">
          <Link to="">개인정보처리방침</Link>
          <Link to="">저작권보호</Link>
          <Link to="">이메일무단수집거부</Link>
          <Link to="">RSS</Link>
        </div>
      </div>
      <div className="footer__middle">
        <div className="wrap">
          <Link to="/">
            <img src="/assets/images/foot-logo.png" className="footlogo" alt="전남콘텐츠코리아랩"/>
          </Link>
          <p>
            전라남도 순천시 장평로 60 (풍덕동) 111동 1, 2층 고객센터: 061-)755-9522~6 사업자등록번호: 411-82-10121<br/>
            Copyright (재)전남정보문화산업진흥원. All rights reserved.
          </p>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="wrap">
          {snsList.map(sns => (
            <a href={sns.url} target="_blank" rel="noreferrer" key={sns.name}><img src={sns.image} alt={sns.name}/></a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Index;
