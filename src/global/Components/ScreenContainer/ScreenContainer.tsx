import React, { memo, ReactNode } from "react";
import { Container } from "react-bootstrap";

type Props = {
  children: ReactNode;
};

const ScreenContainer = function ({ children }: Props) {
  return <Container>{children}</Container>;
};

export default memo(ScreenContainer);
