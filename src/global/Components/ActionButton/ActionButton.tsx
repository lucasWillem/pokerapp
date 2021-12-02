import React, { memo } from "react";
import { Button } from "react-bootstrap";

type Props = {
  buttonText: string;
  action: () => void;
};

const ActionButton = function ({ buttonText, action }: Props) {
  return (
    <Button variant="outline-primary" onClick={action}>
      {buttonText}
    </Button>
  );
};

export default memo(ActionButton);
