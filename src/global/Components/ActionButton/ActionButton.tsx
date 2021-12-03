import React, { memo } from "react";
import { Button } from "react-bootstrap";

type Props = {
  buttonText: string;
  action: () => void;
  disabled?: boolean;
  variant: string;
  style?: object;
};

const ActionButton = function ({
  buttonText,
  action,
  disabled,
  variant,
  style,
}: Props) {
  return (
    <Button
      style={style}
      disabled={disabled}
      variant={variant}
      onClick={action}
    >
      {buttonText}
    </Button>
  );
};

export default memo(ActionButton);
