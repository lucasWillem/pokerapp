import { FC, memo } from "react";

import {
  StyledLoginForm,
  StyledInputTemplate,
  StyledHelperText,
} from "./LoginForm.styles";

import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { passwordPattern, emailPattern } from "@global/constants";
import { Button } from "@components/library/Button";
import { Container } from "react-bootstrap";
import { RoutePaths } from "@routing/router";
import { useLoginUser } from "@networking/network-hooks/useLoginUser";
import { UserEndpoints } from "@features/authentication/user.constants";
import { useStoreActions } from "@redux/typed-hooks";
import { ColorOptions } from "@global/theme";

export interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const storeUser = useStoreActions((actions) => actions.user.storeUser);

  const configureAlert = useStoreActions(
    (actions) => actions.alert.configureAlert,
  );

  const navigate = useNavigate();

  const onLogin = ({ email, password }: LoginFormInputs) => {
    loginUser({ identifier: email, password });
  };

  const title = "Please Log in to continue";

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm<LoginFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const handleChange = (name: keyof LoginFormInputs) => {
    trigger(name);
  };

  const { mutate: loginUser } = useLoginUser({
    url: UserEndpoints.Login,
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

  return (
    <StyledLoginForm onSubmit={handleSubmit(onLogin)}>
      <h6>{title}</h6>
      <StyledInputTemplate>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <>
              <StyledLoginForm.Label htmlFor="inputPassword5">
                Email
              </StyledLoginForm.Label>
              <StyledLoginForm.Control
                {...field}
                data-testid="email"
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
              value: emailPattern,
              message: "Please provide a valid email address",
            },
          }}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <>
              <StyledLoginForm.Label htmlFor="inputPassword5">
                Password
              </StyledLoginForm.Label>
              <StyledLoginForm.Control
                {...field}
                data-testid="password"
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
              value: passwordPattern,
              message: "8+ chars, 1 uppercase, 1 special char, 1 number",
            },
          }}
        />
      </StyledInputTemplate>

      <Container>
        <Button style={{ width: 100 }} disabled={!isValid} type="submit">
          Log In
        </Button>
        <Button
          style={{ width: 300 }}
          onClick={() => navigate(RoutePaths.Signup)}
          color={ColorOptions.Black}
        >
          {`I don't have an account`}
        </Button>
      </Container>
    </StyledLoginForm>
  );
};

export default memo(LoginForm);
