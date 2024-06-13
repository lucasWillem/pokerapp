import { FC, memo } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button, Form } from 'react-bootstrap';

import {
  StyledAuthenticationForm,
  StyledHelperText,
  StyledInputTemplate,
} from './AuthenticationForm.styles';

import { emailPattern, passwordPattern } from '@global/constants';

export interface AuthenticationFormInputs {
  email: string;
  password: string;
}

interface AuthenticationFormProps {
  title: string;
  onSubmit: (data: AuthenticationFormInputs) => void;
}

const AuthenticationForm: FC<AuthenticationFormProps> = ({
  title,
  onSubmit,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm<AuthenticationFormInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const handleChange = (name: keyof AuthenticationFormInputs) => {
    trigger(name);
  };

  return (
    <StyledAuthenticationForm onSubmit={handleSubmit(onSubmit)}>
      <h6>{title}</h6>
      <StyledInputTemplate>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <>
              <Form.Label htmlFor="inputPassword5">Email</Form.Label>
              <Form.Control
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
              <Form.Label htmlFor="inputPassword5">Password</Form.Label>
              <Form.Control
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
      <Button
        data-testid="submit-login"
        disabled={!isValid}
        type="submit"
        variant="outlined"
      >
        Submit
      </Button>
    </StyledAuthenticationForm>
  );
};

export default memo(AuthenticationForm);
