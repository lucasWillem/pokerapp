import { FC, memo } from "react";
import { StyledAlert } from "./Alert.styles";

import ClickAwayListener from "react-click-away-listener";
import { AlertProps as BootstrapAlertProps } from "react-bootstrap";
import { ColorOptions } from "@global/theme";

export interface AlertProps extends BootstrapAlertProps {
  isVisible: boolean;
  handleOnModalClose: () => void;
  message: string;
  color?: ColorOptions;
}

const Alert: FC<AlertProps> = ({
  isVisible,
  handleOnModalClose,
  message,
  color,
}) => {
  return (
    <>
      {isVisible && (
        <ClickAwayListener onClickAway={handleOnModalClose}>
          <StyledAlert
            className="winner-alert-modal"
            variant="primary"
            dismissible
            color={color}
            data-cy="alert"
          >
            {message}
          </StyledAlert>
        </ClickAwayListener>
      )}
    </>
  );
};

export default memo(Alert);
