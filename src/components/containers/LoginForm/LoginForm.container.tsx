import { FC, memo, useMemo } from 'react';
import {
  AuthenticationForm,
  AuthenticationFormInputs,
} from '@components/library/AuthenticationForm';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginForm: FC = () => {
  const navigate = useNavigate();

  const onLogin = (data: AuthenticationFormInputs) => {
    console.log(data);
  };

  const additionalButton = useMemo(
    () => (
      <Button
        style={{ display: 'block', margin: 'auto' }}
        onClick={() => navigate('/signup')}
        variant="outlined"
      >
        {`I don't have an account`}
      </Button>
    ),
    [navigate],
  );

  const title = 'Please Log in to continue';

  return (
    <AuthenticationForm
      title={title}
      onSubmit={onLogin}
      additionalButton={additionalButton}
    />
  );
};

export default memo(LoginForm);
