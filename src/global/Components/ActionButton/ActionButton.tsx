import { Button } from "react-bootstrap";

type Props = {
  buttonText: string;
};

const ActionButton = function ({ buttonText }: Props) {
  return <Button variant="outline-primary">{buttonText}</Button>;
};

export default ActionButton;
