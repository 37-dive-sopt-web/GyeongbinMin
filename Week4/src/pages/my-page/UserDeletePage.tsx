import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../entities/user';
import { useUserDelete } from '../../features/user';
import { Button } from '../../shared/ui/button/Button';
import {
  deletePageStyle,
  deleteTitleStyle,
  deleteButtonStyle,
  modalOverlayStyle,
  modalStyle,
  modalTitleStyle,
  modalContentStyle,
  modalButtonGroupStyle,
  modalConfirmButtonStyle,
  modalCancelButtonStyle,
} from './MyPage.css.ts';

export const UserDeletePage = () => {
  const navigate = useNavigate();
  const { userId, setUserId } = useUserStore();
  const { deleteUserAccount, isLoading } = useUserDelete();
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleConfirm = async () => {
    if (!userId) return;

    const result = await deleteUserAccount(userId);

    if (result.success) {
      alert('회원 탈퇴가 완료되었습니다.');
      setUserId(null);
      localStorage.removeItem('userId');
      navigate('/login');
    } else {
      alert('회원 탈퇴에 실패했습니다.');
    }
  };

  return (
    <>
      <div className={deletePageStyle}>
        <h2 className={deleteTitleStyle}>회원 탈퇴</h2>
        <p style={{ marginBottom: '2rem', color: '#64748b' }}>
          회원 탈퇴를 진행하시겠습니까? 이 작업은 되돌릴 수 없습니다.
        </p>
        <Button
          onClick={handleDeleteClick}
          disabled={isLoading}
          className={deleteButtonStyle}
        >
          회원 탈퇴
        </Button>
      </div>

      {showModal && (
        <div className={modalOverlayStyle} onClick={handleCancel}>
          <div className={modalStyle} onClick={(e) => e.stopPropagation()}>
            <h3 className={modalTitleStyle}>회원 탈퇴 확인</h3>
            <div className={modalContentStyle}>
              정말로 회원 탈퇴를 진행하시겠습니까? 이 작업은 되돌릴 수 없습니다.
            </div>
            <div className={modalButtonGroupStyle}>
              <button
                type="button"
                onClick={handleCancel}
                className={modalCancelButtonStyle}
                disabled={isLoading}
              >
                취소
              </button>
              <button
                type="button"
                onClick={handleConfirm}
                className={modalConfirmButtonStyle}
                disabled={isLoading}
              >
                {isLoading ? '처리 중...' : '확인'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

