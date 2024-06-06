import React, { useCallback, FC } from "react";
import { Alert as BootstrapAlert } from "react-bootstrap";

import { useStoreActions, useStoreState } from "../../../redux";
import "./Alert.css";

const Alert: FC = () => {
  const { isVisible, message } = useStoreState(
    (state) => state.alert.alertConfiguration
  );

  const setAlertConfiguration = useStoreActions(
    (actions) => actions.alert.setAlertConfiguration
  );

  const handleOnModalClose = useCallback(() => {
    setAlertConfiguration({ isVisible: false, message: "" });
  }, [setAlertConfiguration]);

  return (
    <>
      {isVisible && (
        <BootstrapAlert
          className="alert-modal"
          onClose={handleOnModalClose}
          variant="primary"
          dismissible
        >
          {message}
        </BootstrapAlert>
      )}
    </>
  );
}

export default React.memo(Alert);
