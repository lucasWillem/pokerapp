import { memo, ReactNode, FC, CSSProperties, useCallback } from "react";
import { StyledScreenTemplate } from "./ScreenTemplate.styles";
import { Alert } from "@components/library/Alert";
import { useStoreState, useStoreActions } from "@redux/index";

interface ScreenWrapperProps {
  children: ReactNode;
  containerStyle?: CSSProperties;
}

const ScreenTemplate: FC<ScreenWrapperProps> = ({
  children,
  containerStyle,
}) => {
  const { isVisible, message, color } = useStoreState(
    (state) => state.alert.alertConfig,
  );

  const configureAlert = useStoreActions(
    (actions) => actions.alert.configureAlert,
  );

  const handleOnModalClose = useCallback(() => {
    configureAlert({ isVisible: false, message: "" });
  }, [configureAlert]);

  return (
    <StyledScreenTemplate style={containerStyle} fluid>
      <Alert
        isVisible={isVisible}
        handleOnModalClose={handleOnModalClose}
        message={message}
        color={color}
      />
      {children}
    </StyledScreenTemplate>
  );
};

export default memo(ScreenTemplate);
