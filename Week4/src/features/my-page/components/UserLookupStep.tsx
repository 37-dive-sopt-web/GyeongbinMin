import { useState } from 'react';
import { useUserLookup } from '../../user';
import { Button, Input } from '../../../shared/ui';
import {
  myPageStyle,
  formStyle,
  headerStyle,
  backButtonStyle,
  titleStyle,
  formContainerStyle,
  inputGroupStyle,
  labelStyle,
  nextButtonStyle,
  resultContainerStyle,
  resultTitleStyle,
  resultItemStyle,
  resultLabelStyle,
  resultValueStyle,
} from '../../../pages/my-page/MyPage.css';

type UserLookupStepProps = {
  onNext: () => void;
  onBack: () => void;
};

export const UserLookupStep = ({ onNext, onBack }: UserLookupStepProps) => {
  const { lookupUser, isLoading, userData } = useUserLookup();
  const [userId, setUserId] = useState('');

  const handleLookup = async () => {
    if (!userId.trim()) return;
    await lookupUser(userId.trim());
  };

  return (
    <div className={myPageStyle}>
      <div className={formStyle}>
        <div className={headerStyle}>
          <button type="button" onClick={onBack} className={backButtonStyle}>
            ←
          </button>
          <h1 className={titleStyle}>회원 조회</h1>
        </div>
        <form className={formContainerStyle}>
          <div className={inputGroupStyle}>
            <label className={labelStyle}>회원 ID</label>
            <Input
              type="number"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="회원 ID를 입력하세요"
            />
          </div>
          <Button
            type="button"
            onClick={handleLookup}
            disabled={!userId.trim() || isLoading}
            className={nextButtonStyle}
          >
            {isLoading ? '조회 중...' : '확인'}
          </Button>
          {userData && (
            <div className={resultContainerStyle}>
              <h3 className={resultTitleStyle}>회원 정보</h3>
              <div className={resultItemStyle}>
                <span className={resultLabelStyle}>ID:</span>
                <span className={resultValueStyle}>{userData.id}</span>
              </div>
              <div className={resultItemStyle}>
                <span className={resultLabelStyle}>아이디:</span>
                <span className={resultValueStyle}>{userData.username}</span>
              </div>
              <div className={resultItemStyle}>
                <span className={resultLabelStyle}>이름:</span>
                <span className={resultValueStyle}>{userData.name}</span>
              </div>
              <div className={resultItemStyle}>
                <span className={resultLabelStyle}>이메일:</span>
                <span className={resultValueStyle}>{userData.email}</span>
              </div>
              <div className={resultItemStyle}>
                <span className={resultLabelStyle}>나이:</span>
                <span className={resultValueStyle}>{userData.age}</span>
              </div>
              <div className={resultItemStyle}>
                <span className={resultLabelStyle}>상태:</span>
                <span className={resultValueStyle}>{userData.status}</span>
              </div>
            </div>
          )}
          <Button
            type="button"
            onClick={onNext}
            className={nextButtonStyle}
            style={{ marginTop: '1rem' }}
          >
            내 정보로 이동
          </Button>
        </form>
      </div>
    </div>
  );
};

