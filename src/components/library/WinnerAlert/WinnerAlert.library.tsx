import { FC, memo } from 'react';
import { StyledWinnerAlert } from './WinnerAlert.styles';

import ClickAwayListener from 'react-click-away-listener';
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
        <ClickAwayListener onClickAway={handleOnModalClose}>
          <StyledWinnerAlert
            className="winner-alert-modal"
            variant="primary"
            dismissible
          >
            {message}
          </StyledWinnerAlert>
        </ClickAwayListener>
      )}
    </>
  );
};

export default memo(WinnerAlert);
