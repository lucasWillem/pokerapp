import { ScreenTemplate } from "@components/templates/ScreenTemplate";
import { FC, memo } from "react";

const UnauthorizedPage: FC = () => {
  return (
    <ScreenTemplate
      containerStyle={{
        height: "100vh",
        color: "white",
      }}
    >
      <p>Unauthorized</p>
    </ScreenTemplate>
  );
};

export default memo(UnauthorizedPage);
