import { addDecorator } from '@storybook/react';
import { ThemeProvider } from "emotion-theming";
import React from "react";

import { LIGHT_THEME } from "../src/constants";

addDecorator(children => (
  <ThemeProvider theme={LIGHT_THEME}>{children()}</ThemeProvider>
));
