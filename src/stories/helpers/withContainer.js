import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import React from "react";

import { LIGHT_THEME } from "../../constants";

const withContainer = (Component) => (props) => (
  <ThemeProvider theme={LIGHT_THEME}>
    <Container>
      <div>
        <Component {...props} />
      </div>
    </Container>
  </ThemeProvider>
);

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default withContainer;
