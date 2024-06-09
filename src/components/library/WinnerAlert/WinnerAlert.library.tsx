import { FC, memo } from "react";
import {StyledWinnerAlert} from './WinnerAlert.styles'

interface WinnerAlertProps {
  isVisible: boolean;
  handleOnModalClose: () => void;
  message: string;
}

const WinnerAlert: FC<WinnerAlertProps> = ({
  isVisible,
  handleOnModalClose,
  message,
}) => {
  return (
    <>
      {isVisible && (
        <StyledWinnerAlert
          className="winner-alert-modal"
          onClose={handleOnModalClose}
          variant="primary"
          dismissible
        >
          {message}
        </StyledWinnerAlert>
      )}
    </>
  );
};

export default memo(WinnerAlert);
