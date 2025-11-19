import { useState, useEffect } from 'react';
import { useUserStore } from '../../entities/user';
import { useUserProfile, getUserById } from '../../features/user';
import { Input } from '../../shared/ui/input/Input';
import { Button } from '../../shared/ui/button/Button';
import {
  myInfoPageStyle,
  myInfoTitleStyle,
  formStyle,
  inputGroupStyle,
  labelStyle,
  inputFieldStyle,
  readOnlyFieldStyle,
  saveButtonStyle,
} from './MyPage.css.ts';

export const MyInfoPage = () => {
  const { userId } = useUserStore();
  const { updateProfile, isLoading } = useUserProfile();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (!userId) return;

    const fetchUserData = async () => {
      const response = await getUserById(userId);
      if (response.success && response.data) {
        setUsername(response.data.username);
        setName(response.data.name);
        setEmail(response.data.email);
        setAge(String(response.data.age));
      }
    };

    fetchUserData();
  }, [userId]);

  const handleSave = async () => {
    if (!userId) return;

    const result = await updateProfile(userId, {
      name: name.trim() || undefined,
      email: email.trim() || undefined,
      age: age ? Number(age) : undefined,
    });

    if (result.success && result.data) {
      alert('저장되었습니다.');
      setName(result.data.name);
      setEmail(result.data.email);
      setAge(String(result.data.age));
    } else {
      alert('저장에 실패했습니다.');
    }
  };

  return (
    <div className={myInfoPageStyle}>
      <h2 className={myInfoTitleStyle}>내 정보</h2>
      <div className={formStyle}>
        <div className={inputGroupStyle}>
          <label className={labelStyle}>아이디</label>
          <div className={readOnlyFieldStyle}>{username}</div>
        </div>
        <div className={inputGroupStyle}>
          <label className={labelStyle}>이름</label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputFieldStyle}
          />
        </div>
        <div className={inputGroupStyle}>
          <label className={labelStyle}>이메일</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputFieldStyle}
          />
        </div>
        <div className={inputGroupStyle}>
          <label className={labelStyle}>나이</label>
          <Input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className={inputFieldStyle}
          />
        </div>
        <Button
          onClick={handleSave}
          disabled={isLoading}
          className={saveButtonStyle}
        >
          {isLoading ? '저장 중...' : '저장'}
        </Button>
      </div>
    </div>
  );
};

