import { FC, memo } from "react";

import { LoginForm } from "@/components/containers/LoginForm";
import { ScreenTemplate } from "@/components/templates/ScreenTemplate";

const LoginPage: FC = () => {
  return (
    <ScreenTemplate
      containerStyle={{
        height: "100vh",
        color: "white",
      }}
    >
      <LoginForm />
    </ScreenTemplate>
  );
};

export default memo(LoginPage);
