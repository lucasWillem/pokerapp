import { memo, FC } from "react";

import { StyledButton, StyledButtonProps } from "./Button.styles";

const Button: FC<StyledButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default memo(Button);
