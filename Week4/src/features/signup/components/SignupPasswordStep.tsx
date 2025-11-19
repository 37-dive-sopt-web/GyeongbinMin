import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from '../../../shared/ui';
import {
  signupPageStyle,
  formStyle,
  headerStyle,
  backButtonStyle,
  titleStyle,
  formContainerStyle,
  inputGroupStyle,
  labelStyle,
  passwordWrapperStyle,
  passwordToggleButtonStyle,
  nextButtonStyle,
  linkStyle,
  linkAnchorStyle,
} from '../../../pages/signup/SignupPage.css';

type SignupPasswordStepProps = {
  password: string;
  passwordConfirm: string;
  passwordError?: string;
  passwordConfirmError?: string;
  onPasswordChange: (value: string) => void;
  onPasswordConfirmChange: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
  canProceed: boolean;
};

export const SignupPasswordStep = ({
  password,
  passwordConfirm,
  passwordError,
  passwordConfirmError,
  onPasswordChange,
  onPasswordConfirmChange,
  onNext,
  onBack,
  canProceed,
}: SignupPasswordStepProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  return (
    <div className={signupPageStyle}>
      <div className={formStyle}>
        <div className={headerStyle}>
          <button type="button" onClick={onBack} className={backButtonStyle}>
            ←
          </button>
          <h1 className={titleStyle}>회원가입</h1>
        </div>
        <form className={formContainerStyle}>
          <div className={inputGroupStyle}>
            <label className={labelStyle}>비밀번호</label>
            <div className={passwordWrapperStyle}>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="비밀번호를 입력해 주세요"
                value={password}
                onChange={(e) => onPasswordChange(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={passwordToggleButtonStyle}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {passwordError && (
              <div style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                {passwordError}
              </div>
            )}
          </div>
          <div className={inputGroupStyle}>
            <label className={labelStyle}>비밀번호 확인</label>
            <div className={passwordWrapperStyle}>
              <Input
                type={showPasswordConfirm ? 'text' : 'password'}
                placeholder="비밀번호를 다시 입력해 주세요"
                value={passwordConfirm}
                onChange={(e) => onPasswordConfirmChange(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                className={passwordToggleButtonStyle}
              >
                {showPasswordConfirm ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {passwordConfirmError && (
              <div style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                {passwordConfirmError}
              </div>
            )}
          </div>
          <Button type="button" onClick={onNext} disabled={!canProceed} className={nextButtonStyle}>
            다음
          </Button>
        </form>
        <div className={linkStyle}>
          이미 계정이 있나요? <Link to="/login" className={linkAnchorStyle}>로그인으로 돌아가기</Link>
        </div>
      </div>
    </div>
  );
};

