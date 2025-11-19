import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../../pages/login';
import { SignupPage } from '../../pages/signup';
import { MyPage } from '../../pages/my-page';
import { useUserStore } from '../../entities/user';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { userId } = useUserStore();
  return userId ? <>{children}</> : <Navigate to="/login" replace />;
};

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/my-page"
          element={
            <PrivateRoute>
              <MyPage />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

