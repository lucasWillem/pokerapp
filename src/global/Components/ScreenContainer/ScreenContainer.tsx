import React, { memo, ReactNode } from "react";
import { Container } from "react-bootstrap";
import "./ScreenContainer.css";

type Props = {
  children: ReactNode;
};

const ScreenContainer = function ({ children }: Props) {
  return (
    <Container className="ScreenContainer" fluid>
      {children}
    </Container>
  );
};

export default memo(ScreenContainer);
