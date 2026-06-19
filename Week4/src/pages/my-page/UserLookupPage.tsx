import { useState } from 'react';
import { useUserLookup } from '../../features/user';
import { Input } from '../../shared/ui/input/Input';
import { Button } from '../../shared/ui/button/Button';
import {
  lookupPageStyle,
  lookupTitleStyle,
  formStyle,
  inputGroupStyle,
  labelStyle,
  inputFieldStyle,
  lookupButtonStyle,
  resultContainerStyle,
  resultTitleStyle,
  resultItemStyle,
  resultLabelStyle,
  resultValueStyle,
} from './MyPage.css.ts';

export const UserLookupPage = () => {
  const { lookupUser, isLoading, userData } = useUserLookup();
  const [userId, setUserId] = useState('');

  const handleLookup = async () => {
    if (!userId.trim()) return;
    await lookupUser(userId.trim());
  };

  return (
    <div className={lookupPageStyle}>
      <h2 className={lookupTitleStyle}>회원 조회</h2>

      <div className={formStyle}>
        <div className={inputGroupStyle}>
          <label className={labelStyle}>회원 ID</label>

          <Input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="회원 ID를 입력하세요"
            className={inputFieldStyle}
          />
        </div>

        <Button
          onClick={handleLookup}
          disabled={!userId.trim() || isLoading}
          className={lookupButtonStyle}
        >
          {isLoading ? '조회 중...' : '확인'}
        </Button>
      </div>

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
    </div>
  );
};
