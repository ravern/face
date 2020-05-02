import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import React from "react";

import { LIGHT_THEME } from "../../constants";

const withContainer = (Component) => (props) => (
  <ThemeProvider theme={LIGHT_THEME}>
    <Container>
      <Component {...props} />
    </Container>
  </ThemeProvider>
);

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default withContainer;
