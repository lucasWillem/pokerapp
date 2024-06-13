import {
  AuthenticationForm,
  AuthenticationFormInputs,
} from '@components/library/AuthenticationForm';
import { FC, memo } from 'react';

const LoginForm: FC = () => {
  const onLogin = (data: AuthenticationFormInputs) => {
    console.log(data);
  };

  const title = 'Please Log in to continue';

  return <AuthenticationForm title={title} onSubmit={onLogin} />;
};

export default memo(LoginForm);
