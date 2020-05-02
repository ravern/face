import "../helpers/unfocus";

import styled from "@emotion/styled";
import React from "react";

import {
  CardContainer,
  ColumnContainer,
  RowContainer,
} from "../components/Container";
import {
  Form,
  PrimaryFormSubmitButton,
  SecondaryFormInput,
  TertiaryFormInput,
  useFormState,
} from "../components/Form";
import { Heading1 } from "../components/Text";
import withContainer from "./helpers/withContainer";

export default { title: "Form" };

export const Login = withContainer(() => {
  const form = useFormState({
    values: {
      email: "",
      password: "",
    },
    onSubmit: () => {},
  });

  return (
    <Form {...form}>
      <LoginContainer>
        <Title>welcome back!</Title>
        <Spacer />
        <SecondaryFormInput {...form} name="email" placeholder="email" />
        <SecondaryFormInput
          {...form}
          name="password"
          type="password"
          placeholder="password"
        />
        <Spacer />
        <PrimaryFormSubmitButton {...form}>login</PrimaryFormSubmitButton>
      </LoginContainer>
    </Form>
  );
});

export const SearchBar = withContainer(() => {
  const form = useFormState({
    values: {
      email: "",
      password: "",
    },
    onSubmit: () => {},
  });

  return (
    <ColumnContainer>
      <Title>find something interesting!</Title>
      <Spacer />
      <CardContainer>
        <Form {...form}>
          <RowContainer>
            <TertiaryFormInput {...form} name="query" placeholder="query" />
            <PrimaryFormSubmitButton {...form}>search</PrimaryFormSubmitButton>
          </RowContainer>
        </Form>
      </CardContainer>
    </ColumnContainer>
  );
});

const Title = styled(Heading1)`
  font-size: 1.8rem;
  text-align: center;
`;

const LoginContainer = styled(ColumnContainer)`
  align-items: flex-start;
`;

const Spacer = styled.div`
  height: ${(props) => (props.multiplier || 1) * 0.4}rem;
`;
