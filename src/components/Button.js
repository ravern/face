import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Button as ReakitButton } from "reakit/Button";

const ButtonStyles = css`
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;

  &:active {
    transform: scale(0.96);
  }
`;

export const PrimaryButton = styled(ReakitButton)`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};

  ${ButtonStyles}
`;

export const SecondaryButton = styled(ReakitButton)`
  background-color: ${(props) => props.theme.colors.lightGray};
  color: ${(props) => props.theme.colors.black};

  ${ButtonStyles}
`;

export const TertiaryButton = styled(ReakitButton)`
  padding: none;
  background: none;
  color: ${(props) => props.theme.colors.black};

  ${ButtonStyles}
`;
