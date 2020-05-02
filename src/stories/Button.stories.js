import "../helpers/unfocus";

import styled from "@emotion/styled";
import React from "react";

import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "../components/Button";

export default { title: "Button" };

export function Primary() {
  return (
    <Container>
      <PrimaryButton>click me!</PrimaryButton>
    </Container>
  );
}

export function Secondary() {
  return (
    <Container>
      <SecondaryButton>click me!</SecondaryButton>
    </Container>
  );
}

export function Tertiary() {
  return (
    <Container>
      <TertiaryButton>click me!</TertiaryButton>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
