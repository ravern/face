import { css } from "@emotion/core";
import styled from "@emotion/styled";
import isNil from "lodash/isNil";
import {
  unstable_Form as ReakitForm,
  unstable_FormInput as ReakitFormInput,
  unstable_FormMessage as ReakitFormMessage,
  unstable_FormSubmitButton as ReakitFormSubmitButton,
} from "reakit/Form";
import withProps from "recompose/withProps";

import { PrimaryButton, SecondaryButton, TertiaryButton } from "./Button";

export { unstable_useFormState as useFormState } from "reakit/Form";

export const Form = styled(ReakitForm)``;

const FormInputStyles = (props) => css`
  padding: 1.2rem;
  border: none;
  border-radius: 0.6rem;

  &::placeholder {
    color: ${props.theme.colors.darkGray};
  }
`;

export const SecondaryFormInput = styled(ReakitFormInput)`
  ${FormInputStyles}

  background-color: ${(props) => props.theme.colors.lightGray};
`;

export const TertiaryFormInput = styled(ReakitFormInput)`
  ${FormInputStyles}

  padding: 0;
  background: none;
`;

export const FormMessage = styled(ReakitFormMessage)`
  color: ${(props) =>
    !isNil(props.errors[props.name]) && props.theme.colors.error};
  color: ${(props) =>
    !isNil(props.messages[props.name]) && props.theme.colors.success};
`;

export const PrimaryFormSubmitButton = withProps({
  as: ReakitFormSubmitButton,
})(PrimaryButton);

export const SecondaryFormSubmitButton = withProps({
  as: ReakitFormSubmitButton,
})(SecondaryButton);

export const TertiaryFormSubmitButton = withProps({
  as: ReakitFormSubmitButton,
})(TertiaryButton);
