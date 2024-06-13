import { FC, memo } from 'react';

import {
  StyledSignUpForm,
  StyledInputTemplate,
  StyledHelperText,
} from './SignUpForm.styles';

import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { passwordPattern, emailPattern } from '@global/constants';

import { Button } from '@components/library/Button';
import { Container } from 'react-bootstrap';
import { ButtonColors } from '@components/library/Button/Button.styles';

export interface SignUpFormInputs {
  email: string;
  password: string;
}
const SignUpForm: FC = () => {
  const navigate = useNavigate();

  const onSignUp = (data: SignUpFormInputs) => {
    console.log(data);
  };

  const title = 'Please Sign up to continue';

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm<SignUpFormInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const handleChange = (name: keyof SignUpFormInputs) => {
    trigger(name);
  };

  return (
    <StyledSignUpForm onSubmit={handleSubmit(onSignUp)}>
      <h6>{title}</h6>
      <StyledInputTemplate>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <>
              <StyledSignUpForm.Label htmlFor="inputPassword5">
                Email
              </StyledSignUpForm.Label>
              <StyledSignUpForm.Control
                {...field}
                data-testid="email"
                onChange={(e) => {
                  field.onChange(e);
                  handleChange('email');
                }}
                placeholder="Email"
              />
              {Boolean(errors.email) && (
                <StyledHelperText>{errors.email?.message}</StyledHelperText>
              )}
            </>
          )}
          rules={{
            required: 'Email is required',
            pattern: {
              value: emailPattern,
              message: 'Please provide a valid email address',
            },
          }}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <>
              <StyledSignUpForm.Label htmlFor="inputPassword5">
                Password
              </StyledSignUpForm.Label>
              <StyledSignUpForm.Control
                {...field}
                data-testid="password"
                onChange={(e) => {
                  field.onChange(e);
                  handleChange('password');
                }}
                placeholder="Password"
                type="password"
              />
              {Boolean(errors.password) && (
                <StyledHelperText>{errors.password?.message}</StyledHelperText>
              )}
            </>
          )}
          rules={{
            required: 'Password is required',
            pattern: {
              value: passwordPattern,
              message: '8+ chars, 1 uppercase, 1 special char, 1 number',
            },
          }}
        />
      </StyledInputTemplate>
      <Container>
        <Button
          style={{ width: 100 }}
          color={ButtonColors.Red}
          disabled={!isValid}
          type="submit"
        >
          Submit
        </Button>
        <Button
          borderColor={ButtonColors.Gold}
          style={{ width: 300 }}
          onClick={() => navigate('/login')}
        >
          I already have an account
        </Button>
      </Container>
    </StyledSignUpForm>
  );
};

export default memo(SignUpForm);
