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
  nextButtonStyle,
  linkStyle,
  linkAnchorStyle,
} from '../../../pages/signup/SignupPage.css';

type SignupUsernameStepProps = {
  username: string;
  validationError?: string;
  onUsernameChange: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
  canProceed: boolean;
};

export const SignupUsernameStep = ({
  username,
  validationError,
  onUsernameChange,
  onNext,
  onBack,
  canProceed,
}: SignupUsernameStepProps) => {
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
            <label className={labelStyle}>아이디</label>
            <Input
              type="text"
              placeholder="아이디를 입력해 주세요"
              value={username}
              onChange={(e) => onUsernameChange(e.target.value)}
            />
            {validationError && (
              <div style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                {validationError}
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

