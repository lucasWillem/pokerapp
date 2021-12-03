import React, { memo } from "react";
import { Button } from "react-bootstrap";

type Props = {
  buttonText: string;
  action: () => void;
  disabled: boolean;
};

const ActionButton = function ({ buttonText, action, disabled }: Props) {
  return (
    <Button disabled={disabled} variant="outline-primary" onClick={action}>
      {buttonText}
    </Button>
  );
};

export default memo(ActionButton);
