import React, { memo, ReactNode, FC } from "react";
import { Container } from "react-bootstrap";
import "./ScreenWrapper.css";

interface ScreenWrapperProps {
  children: ReactNode;
};

const ScreenWrapper: FC<ScreenWrapperProps> = ({ children }) => {
  return (
    <Container className="screen-wrapper" fluid>
      {children}
    </Container>
  );
};

export default memo(ScreenWrapper);
