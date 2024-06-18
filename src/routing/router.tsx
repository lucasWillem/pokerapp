import { FC, Suspense, lazy, ReactNode } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

import { ColorOptions } from "@global/theme";
import { useCheckIfUser } from "@authentication/useCheckIfUser";

const LoginPage = lazy(() =>
  import("@pages/index").then((module) => ({
    default: module.LoginPage,
  })),
);

const SignUpPage = lazy(() =>
  import("@pages/index").then((module) => ({
    default: module.SignUpPage,
  })),
);

const UnauthorizedPage = lazy(() =>
  import("@pages/index").then((module) => ({
    default: module.UnauthorizedPage,
  })),
);

const GamePage = lazy(() =>
  import("@pages/index").then((module) => ({
    default: module.GamePage,
  })),
);

interface RouterProps {
  children: ReactNode;
}

export enum RoutePaths {
  Game = "/game",
  Login = "/login",
  Signup = "/signup",
  Unauthorized = "/unauthorized",
}

export const Router: FC<RouterProps> = ({ children }) => {
  const isAuthenticated = useCheckIfUser();

  return (
    <BrowserRouter>
      {children}
      <Suspense
        fallback={<p style={{ color: ColorOptions.Gold }}>Loading...</p>}
      >
        <Routes>
          <Route element={<PrivateRoutes isAuthenticated={isAuthenticated} />}>
            <Route path={RoutePaths.Game} element={<GamePage />} />
          </Route>
          <Route element={<PublicRoutes isAuthenticated={isAuthenticated} />}>
            <Route path={RoutePaths.Login} element={<LoginPage />} />
            <Route path={RoutePaths.Signup} element={<SignUpPage />} />
            <Route
              path="/*"
              element={<Navigate to={RoutePaths.Signup} replace />}
            />
          </Route>
          <Route
            path={RoutePaths.Unauthorized}
            element={<UnauthorizedPage />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
