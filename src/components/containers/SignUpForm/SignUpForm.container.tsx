import {
  AuthenticationForm,
  AuthenticationFormInputs,
} from '@components/library/AuthenticationForm';
import { FC, memo } from 'react';

const SignUpForm: FC = () => {
  const onSignUp = (data: AuthenticationFormInputs) => {
    console.log(data);
  };

  const title = 'Please Sign up to continue';

  return <AuthenticationForm title={title} onSubmit={onSignUp} />;
};

export default memo(SignUpForm);
