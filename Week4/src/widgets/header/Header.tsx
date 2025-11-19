import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUserStore } from '../../entities/user';
import { getUserById } from '../../features/user';
import {
  headerStyle,
  headerContentStyle,
  headerLeftStyle,
  headerTitleStyle,
  headerGreetingStyle,
  headerRightStyle,
  navLinkStyle,
  navLinkActiveStyle,
  menuButtonStyle,
  mobileMenuStyle,
  mobileMenuOpenStyle
} from './Header.css.ts';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userId, setUserId } = useUserStore();
  const [userName, setUserName] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!userId) return;

    const fetchUserName = async () => {
      const response = await getUserById(userId);
      if (response.success && response.data) {
        setUserName(response.data.name);
      }
    };

    fetchUserName();
  }, [userId]);

  const handleLogout = () => {
    setUserId(null);
    localStorage.removeItem('userId');
    navigate('/login');
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={headerStyle}>
      <div className={headerContentStyle}>
        
        {/* 왼쪽 영역 */}
        <div className={headerLeftStyle}>
          <h1 className={headerTitleStyle}>마이페이지</h1>
          {userName && (
            <p className={headerGreetingStyle}>안녕하세요, {userName}님</p>
          )}
        </div>

        {/* 오른쪽 영역 */}
        <div className={headerRightStyle}>
          {isMobile ? (
            <>
              {/* 모바일 메뉴 버튼 */}
              <button
                className={menuButtonStyle}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                ☰
              </button>

              {/* 모바일 메뉴 */}
              <nav
                className={
                  isMenuOpen
                    ? `${mobileMenuStyle} ${mobileMenuOpenStyle}`
                    : mobileMenuStyle
                }
              >
                <button
                  className={isActive('/my-page') ? navLinkActiveStyle : navLinkStyle}
                  onClick={() => handleNavigate('/my-page')}
                >
                  내 정보
                </button>

                <button
                  className={isActive('/my-page/lookup') ? navLinkActiveStyle : navLinkStyle}
                  onClick={() => handleNavigate('/my-page/lookup')}
                >
                  회원 조회
                </button>

                <button className={navLinkStyle} onClick={handleLogout}>
                  로그아웃
                </button>

                <button
                  className={isActive('/my-page/delete') ? navLinkActiveStyle : navLinkStyle}
                  onClick={() => handleNavigate('/my-page/delete')}
                >
                  회원탈퇴
                </button>
              </nav>
            </>
          ) : (
            <nav style={{ display: 'flex', gap: '2.5rem' }}>
              <button
                className={isActive('/my-page') ? navLinkActiveStyle : navLinkStyle}
                onClick={() => handleNavigate('/my-page')}
              >
                내 정보
              </button>

              <button
                className={isActive('/my-page/lookup') ? navLinkActiveStyle : navLinkStyle}
                onClick={() => handleNavigate('/my-page/lookup')}
              >
                회원 조회
              </button>

              <button className={navLinkStyle} onClick={handleLogout}>
                로그아웃
              </button>

              <button
                className={isActive('/my-page/delete') ? navLinkActiveStyle : navLinkStyle}
                onClick={() => handleNavigate('/my-page/delete')}
              >
                회원탈퇴
              </button>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};
