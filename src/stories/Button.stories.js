import "../helpers/unfocus";

import React from "react";

import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "../components/Button";
import withContainer from "./helpers/withContainer";

export default { title: "Button" };

export const Primary = withContainer(() => (
  <PrimaryButton>click me!</PrimaryButton>
));

export const Secondary = withContainer(() => (
  <SecondaryButton>click me!</SecondaryButton>
));

export const Tertiary = withContainer(() => (
  <TertiaryButton>click me!</TertiaryButton>
));
