import { FC, memo } from "react";

import { ScreenTemplate } from "@components/templates/ScreenTemplate";

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
