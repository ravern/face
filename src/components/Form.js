import "../helpers/unfocus";

import styled from "@emotion/styled";
import isNil from "lodash/isNil";
import {
  unstable_Form as ReakitForm,
  unstable_FormInput as ReakitFormInput,
  unstable_FormMessage as ReakitFormMessage,
  unstable_FormSubmitButton as ReakitFormSubmitButton,
} from "reakit/Form";
import withProps from "recompose/withProps";

export { unstable_useFormState as useFormState } from "reakit/Form";

export const Form = styled(ReakitForm)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > * + * {
    margin-top: 0.8rem;
  }
`;

export const FormInput = withProps({ autoComplete: "off" })(styled(
  ReakitFormInput
)`
  background-color: #f2f2f2;
  padding: 1.2rem;
  border: none;
  border-radius: 0.6rem;
`);

export const FormMessage = styled(ReakitFormMessage)`
  color: ${(props) =>
    !isNil(props.errors[props.name]) && props.theme.colors.error};
  color: ${(props) =>
    !isNil(props.messages[props.name]) && props.theme.colors.success};
`;

export const FormSubmitButton = styled(ReakitFormSubmitButton)`
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border: none;
  border-radius: 0.6rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};

  &:active {
    transform: scale(0.96);
  }
`;

