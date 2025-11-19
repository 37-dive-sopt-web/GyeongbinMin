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
  signupSubmitButtonStyle,
  linkStyle,
  linkAnchorStyle,
} from '../../../pages/signup/SignupPage.css';

type SignupInfoStepProps = {
  name: string;
  email: string;
  age: string;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onAgeChange: (value: string) => void;
  onSubmit: () => void;
  onBack: () => void;
  isLoading?: boolean;
};

export const SignupInfoStep = ({
  name,
  email,
  age,
  onNameChange,
  onEmailChange,
  onAgeChange,
  onSubmit,
  onBack,
  isLoading = false,
}: SignupInfoStepProps) => {
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
            <label className={labelStyle}>이름</label>
            <Input
              type="text"
              placeholder="이름을 입력해 주세요"
              value={name}
              onChange={(e) => onNameChange(e.target.value)}
            />
          </div>
          <div className={inputGroupStyle}>
            <label className={labelStyle}>이메일</label>
            <Input
              type="email"
              placeholder="이메일을 입력해 주세요"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
            />
          </div>
          <div className={inputGroupStyle}>
            <label className={labelStyle}>나이</label>
            <Input
              type="number"
              placeholder="숫자로 입력"
              value={age}
              onChange={(e) => onAgeChange(e.target.value)}
            />
          </div>
          <Button
            type="button"
            onClick={onSubmit}
            disabled={isLoading}
            className={signupSubmitButtonStyle}
          >
            회원가입
          </Button>
        </form>
        <div className={linkStyle}>
          이미 계정이 있나요? <Link to="/login" className={linkAnchorStyle}>로그인으로 돌아가기</Link>
        </div>
      </div>
    </div>
  );
};

