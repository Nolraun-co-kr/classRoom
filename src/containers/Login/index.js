import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import LoginForm from '../../components/Login/LoginForm';
import LoginBoard from '../../components/Login/LoginBoard';

const noticeData = [
  {
    id: 1,
    title: '신규 LMS 오픈'
  },
  {
    id: 2,
    title: '신규 LMS 오픈2'
  },
  {
    id: 3,
    title: '신규 LMS 오픈3'
  },
  {
    id: 4,
    title: '신규 LMS 오픈4'
  }
];

const newsData = [
  {
    id: 1,
    title: '언론보도1'
  },
  {
    id: 2,
    title: '언론보도'
  },
  {
    id: 3,
    title: '신규 LMS '
  },
  {
    id: 4,
    title: '신규 LMS '
  }
];

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUsername = useCallback(({ target: { value } }) => {
    setUsername(value);
  }, [username]);
  const handleChangePassword = useCallback(({ target: { value } }) => {
    setPassword(value);
  }, [password]);
  const handleSubmitLoginForm = useCallback((e) => {
    e.preventDefault();
    console.log(username, password);
  }, [username, password]);

  return (
    <div className={'userlogin'}>
      <div className="userlogin__box">
        <header className={'userlogin__header'}>
          <a href=""><img src="/assets/images/sy-logo.png" alt=""/></a>
        </header>
        <div className={'userlogin__content'}>
          <div className={'userlogin__block userlogin__block--form'}>
            <LoginForm
              username={username}
              password={password}
              handleChangeUsername={handleChangeUsername}
              handleChangePassword={handleChangePassword}
              handleSubmitLoginForm={handleSubmitLoginForm}
            />
            <div className={'userlogin__links'}>
              <Link to={''}>회원가입</Link>
              <Link to={''}>비밀번호 찾기</Link>
            </div>
          </div>
          <div className={'userlogin__block userlogin__block--board'}>
            <LoginBoard
              noticeData={noticeData}
              newsData={newsData}
            />
            <div className={'links'}>
              <div className="col ">
                <a href="https://www.seoyeong.ac.kr/" target={'_blank'} rel="noreferrer" className={'link1'}>서영대학교</a>
                <a href="" target={'_blank'} rel="noreferrer" className={'link2'}>서영대 E-class</a>
                <a href="" target={'_blank'} rel="noreferrer" className={'link3'}>도서관</a>
                <a href="" target={'_blank'} rel="noreferrer" className={'link4'}>교수 학습지원센터</a>
              </div>
              <div className="col">
                <Link to={''} className={'link5'}>Q&amp;a</Link>
                <Link to={''} className={'link6'}>공지사항</Link>
                <Link to={''} className={'link7'}>매뉴얼</Link>
                <Link to={''} className={'link8'}>FAQ</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
