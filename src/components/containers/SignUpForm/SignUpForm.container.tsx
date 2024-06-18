import { FC, memo } from "react";

import {
  StyledSignUpForm,
  StyledSignUpFormControl,
  StyledInputTemplate,
  StyledHelperText,
  StyledButtonsContainer,
} from "./SignUpForm.styles";

import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { PASSWORD_PATTERN, EMAIL_PATTERN } from "@global/constants";

import { Button } from "@components/library/Button";
import { useRegisterUser } from "@networking/network-hooks/useRegisterUser";
import { useStoreActions } from "@redux/index";

import { RoutePaths } from "@routing/index";
import { ColorOptions } from "@global/theme";
import { AuthenticationEndPoints } from "@networking/constants";

export interface SignUpFormInputs {
  email: string;
  password: string;
}
const SignUpForm: FC = () => {
  const storeUser = useStoreActions((actions) => actions.user.storeUser);

  const navigate = useNavigate();

  const configureAlert = useStoreActions(
    (actions) => actions.alert.configureAlert,
  );

  const { mutate: registerUser } = useRegisterUser({
    url: AuthenticationEndPoints.Register,
    options: {
      onError: (error: Error) => {
        configureAlert({
          isVisible: true,
          message: error.message,
          color: ColorOptions.Danger,
        });
      },
      onSuccess: (userData) => {
        const { jwt, user } = userData;
        storeUser({
          jwt,
          username: user.username,
        });
        navigate(RoutePaths.Login);
      },
    },
  });

  const onSignUp = (data: SignUpFormInputs) => {
    const userData = {
      username: data.email,
      email: data.email,
      password: data.password,
    };
    registerUser(userData);
  };

  const title = "Please Sign up to continue";

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm<SignUpFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
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
              <StyledSignUpFormControl
                {...field}
                data-cy="signup-email"
                onChange={(e) => {
                  field.onChange(e);
                  handleChange("email");
                }}
                placeholder="Email"
              />
              {Boolean(errors.email) && (
                <StyledHelperText>{errors.email?.message}</StyledHelperText>
              )}
            </>
          )}
          rules={{
            required: "Email is required",
            pattern: {
              value: EMAIL_PATTERN,
              message: "Please provide a valid email address",
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
              <StyledSignUpFormControl
                {...field}
                data-cy="signup-password"
                onChange={(e) => {
                  field.onChange(e);
                  handleChange("password");
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
            required: "Password is required",
            pattern: {
              value: PASSWORD_PATTERN,
              message: "8+ chars, 1 uppercase, 1 special char, 1 number",
            },
          }}
        />
      </StyledInputTemplate>
      <StyledButtonsContainer
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Button style={{ width: 100 }} disabled={!isValid} type="submit">
          Sign Up
        </Button>
        <Button
          style={{ width: 300 }}
          onClick={() => navigate(RoutePaths.Login)}
          color={ColorOptions.Black}
        >
          I already have an account
        </Button>
      </StyledButtonsContainer>
    </StyledSignUpForm>
  );
};

export default memo(SignUpForm);
