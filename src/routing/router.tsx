import { FC, Suspense, lazy, ReactNode } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { useCheckIfUser } from '@features/authentication/useCheckIfUser';

const LoginPage = lazy(() =>
  import('@pages/index').then((module) => ({
    default: module.LoginPage,
  })),
);

const SignUpPage = lazy(() =>
  import('@pages/index').then((module) => ({
    default: module.SignUpPage,
  })),
);

const UnauthorizedPage = lazy(() =>
  import('@pages/index').then((module) => ({
    default: module.UnauthorizedPage,
  })),
);

const GamePage = lazy(() =>
  import('@pages/index').then((module) => ({
    default: module.GamePage,
  })),
);

interface RouterProps {
  children: ReactNode;
}

export const Router: FC<RouterProps> = ({ children }) => {
  const isAuthenticated = useCheckIfUser();

  return (
    <BrowserRouter>
      {children}
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route element={<PrivateRoutes isAuthenticated={isAuthenticated} />}>
            <Route path="/game" element={<GamePage />} />
          </Route>
          <Route element={<PublicRoutes isAuthenticated={isAuthenticated} />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/*" element={<Navigate to="/signup" replace />} />
          </Route>
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
