import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from '../../shared/ui';
import { useAuth } from '../../features/auth';
import { loginPageStyle, formStyle, titleStyle, formContainerStyle, inputGroupStyle, labelStyle, passwordWrapperStyle, passwordToggleButtonStyle, submitButtonStyle, signupButtonStyle, errorStyle } from './LoginPage.css.ts';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin, isLoading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleLogin(username, password);
  };

  return (
    <div className={loginPageStyle}>
      <div className={formStyle}>
        <h1 className={titleStyle}>로그인</h1>
        <form onSubmit={handleSubmit} className={formContainerStyle}>
          {error && <div className={errorStyle}>{error}</div>}
          <div className={inputGroupStyle}>
            <label className={labelStyle}>아이디</label>
            <Input
              type="text"
              placeholder="아이디를 입력해 주세요"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={inputGroupStyle}>
            <label className={labelStyle}>비밀번호</label>
            <div className={passwordWrapperStyle}>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="비밀번호를 입력해 주세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={passwordToggleButtonStyle}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>
          <Button type="submit" className={submitButtonStyle} disabled={isLoading}>
            {isLoading ? '로그인 중...' : '로그인'}
          </Button>
        </form>
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <Button type="button" className={signupButtonStyle}>
            회원가입
          </Button>
        </Link>
      </div>
    </div>
  );
};
