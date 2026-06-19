import { Routes, Route } from 'react-router-dom';
import { Header } from '../../widgets/header';
import { MyInfoPage } from './MyInfoPage';
import { UserLookupPage } from './UserLookupPage';
import { UserDeletePage } from './UserDeletePage';
import { myPageContainerStyle } from './MyPage.css.ts';

export const MyPage = () => {
  return (
    <div className={myPageContainerStyle}>
      <Header />
      <Routes>
        <Route index element={<MyInfoPage />} />
        <Route path="lookup" element={<UserLookupPage />} />
        <Route path="delete" element={<UserDeletePage />} />
      </Routes>
    </div>
  );
};
