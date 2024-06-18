import { FC, memo } from "react";

import { SignUpForm } from "@components/containers/SignUpForm";
import { ScreenTemplate } from "@components/templates/ScreenTemplate";

const SignUpPage: FC = () => {
  return (
    <ScreenTemplate
      containerStyle={{
        height: "100vh",
        color: "white",
      }}
    >
      <SignUpForm />
    </ScreenTemplate>
  );
};

export default memo(SignUpPage);
