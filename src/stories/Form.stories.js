import "../helpers/unfocus";

import styled from "@emotion/styled";
import React from "react";

import { ColumnContainer } from "../components/Container";
import {
  ColumnForm,
  PrimaryFormSubmitButton,
  RowForm,
  SecondaryFormInput,
  TertiaryFormInput,
  useFormState,
} from "../components/Form";
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
    <ColumnForm {...form}>
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
    </ColumnForm>
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
      <SearchBarForm {...form}>
        <TertiaryFormInput {...form} name="query" placeholder="query" />
        <PrimaryFormSubmitButton {...form}>search</PrimaryFormSubmitButton>
      </SearchBarForm>
    </ColumnContainer>
  );
});

const SearchBarForm = styled(RowForm)`
  background-color: ${(props) => props.theme.colors.lightGray};
  padding-right: 1.2rem;
  border-radius: 0.6rem;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 1.8rem;
  text-align: center;
`;

const Spacer = styled.div`
  height: ${(props) => (props.multiplier || 1) * 0.4}rem;
`;
