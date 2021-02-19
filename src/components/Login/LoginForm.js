import React from 'react';

const LoginForm = ({
  username,
  password,
  handleChangeUsername,
  handleChangePassword,
  handleSubmitLoginForm
}) => {
  return (
    <>
      <form action="" onSubmit={handleSubmitLoginForm}>
        <div className={'loginForm'}>
          <div className={'loginForm__header'}>
            <h2>로그인</h2>
            <p>서영대학교 방문을 환영합니다.</p>
          </div>
          <h3>일반 로그인</h3>
          <div className="loginForm__forms">
            <div className="form__row">
              <div className="input">
                <input type="text" placeholder={'아이디(학번 또는 교번)'} value={username} onChange={(e) => handleChangeUsername(e)}/>
              </div>
              <p className={'input-helper warning'}>에러메세지</p>
            </div>
            <div className="form__row">
              <div className="input">
                <input type="password" placeholder={'비밀번호'} value={password} onChange={(e) => handleChangePassword(e)}/>
              </div>
              <p className={'input-helper warning'}>에러메세지</p>
            </div>
          </div>

          <div className="loginForm__btnbox">
            <button className={'btn'}>SSO 로그인</button>
            <button className={'btn'}>로그인</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
