import { FC, memo, useMemo } from 'react';
import {
  AuthenticationForm,
  AuthenticationFormInputs,
} from '@components/library/AuthenticationForm';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SignUpForm: FC = () => {
  const navigate = useNavigate();

  const onSignUp = (data: AuthenticationFormInputs) => {
    console.log(data);
  };

  const title = 'Please Sign up to continue';

  const additionalButton = useMemo(
    () => (
      <Button
        style={{ display: 'block', margin: 'auto' }}
        onClick={() => navigate('/login')}
        variant="outlined"
      >
        I already have an account
      </Button>
    ),
    [navigate],
  );

  return (
    <AuthenticationForm
      title={title}
      onSubmit={onSignUp}
      additionalButton={additionalButton}
    />
  );
};

export default memo(SignUpForm);
