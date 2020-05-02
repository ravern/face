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

import { PrimaryButton } from "./Button";
import { ColumnContainer, RowContainer } from "./Container";

export { unstable_useFormState as useFormState } from "reakit/Form";

export const ColumnForm = withProps({ as: ColumnContainer })(styled(ReakitForm)`
  align-items: flex-start;
`);

export const RowForm = withProps({ as: RowContainer })(styled(ReakitForm)`
  align-items: center;
`);

const FormInputStyles = (props) => css`
  padding: 1.2rem;
  border: none;
  border-radius: 0.6rem;

  &::placeholder {
    color: ${props.theme.colors.darkGray};
  }
`;

export const SecondaryFormInput = styled(ReakitFormInput)`
  background-color: ${(props) => props.theme.colors.lightGray};

  ${FormInputStyles}
`;

export const TertiaryFormInput = styled(ReakitFormInput)`
  background: none;

  ${FormInputStyles}
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
