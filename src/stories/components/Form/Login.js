import styled from "@emotion/styled";
import React from "react";

import { ColumnContainer } from "../../../components/Container";
import {
  Form,
  PrimaryFormSubmitButton,
  SecondaryFormInput,
  useFormState,
} from "../../../components/Form";
import { Heading1 } from "../../../components/Text";

export default function LoginForm() {
  const form = useFormState({
    values: {
      email: "",
      password: "",
    },
    onSubmit: () => {},
  });

  return (
    <Form {...form}>
      <Container>
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
      </Container>
    </Form>
  );
}

const Container = styled(ColumnContainer)`
  align-items: flex-start;
`;

const Title = styled(Heading1)`
  font-size: 1.8rem;
  text-align: center;
`;

const Spacer = styled.div``;
