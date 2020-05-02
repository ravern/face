import React from 'react';
import styled from "@emotion/styled";
import {
  Form,
  FormInput,
  FormSubmitButton,
  useFormState,
} from "../components/Form";
import { ThemeProvider } from "emotion-theming";
import { LIGHT_THEME } from '../constants';

export default { title: 'Form' };

const withContainer = (Component) => (props) => (
  <ThemeProvider theme={LIGHT_THEME}>
    <Container>
      <Component {...props} />
    </Container>
  </ThemeProvider>
);

export const Login = withContainer(() => {
  const form = useFormState({
    values: {
      email: "",
      password: "",
    },
    onSubmit: console.log,
  });

  return <ThemeProvider theme={LIGHT_THEME}>
    <Form {...form}>
    <Title>welcome back!</Title>
    <Spacer />
    <FormInput {...form} name="email" placeholder="email" />
    <FormInput
      {...form}
      name="password"
      type="password"
      placeholder="password"
    />
    <Spacer />
    <FormSubmitButton {...form}>login</FormSubmitButton>
  </Form>
    </ThemeProvider>
});

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 1.8rem;
`;

const Spacer = styled.div`
  height: ${(props) => (props.multiplier || 1) * 0.4}rem;
`;
