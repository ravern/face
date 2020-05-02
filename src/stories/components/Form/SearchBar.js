import styled from "@emotion/styled";
import React from "react";

import {
  CardContainer,
  ColumnContainer,
  RowContainer,
} from "../../../components/Container";
import {
  Form,
  PrimaryFormSubmitButton,
  TertiaryFormInput,
  useFormState,
} from "../../../components/Form";
import { Heading1 } from "../../../components/Text";

export default function SearchBarForm() {
  const form = useFormState({
    values: {
      query: "",
    },
    onSubmit: () => {},
  });

  return (
    <Form {...form}>
      <ColumnContainer>
        <Title>find something interesting!</Title>
        <Spacer />
        <InputContainer>
          <RowContainer>
            <TertiaryFormInput {...form} name="query" placeholder="query" />
            <PrimaryFormSubmitButton {...form}>search</PrimaryFormSubmitButton>
          </RowContainer>
        </InputContainer>
      </ColumnContainer>
    </Form>
  );
}

const Title = styled(Heading1)`
  font-size: 1.8rem;
  text-align: center;
`;

const Spacer = styled.div``;

const InputContainer = styled(CardContainer)`
  padding: 0.8rem 1.2rem;
`;
