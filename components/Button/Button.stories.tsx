import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

// Stories

// Sizes
export const XL = () => (
  <Button
    label="What's up"
    onPress={action("clicked")}
    appearance="filled"
    size="xl"
  />
);
export const Large = () => (
  <Button
    label="What's up"
    onPress={action("clicked")}
    appearance="filled"
    size="lg"
  />
);
export const Medium = () => (
  <Button
    label="What's up"
    onPress={action("clicked")}
    appearance="filled"
    size="md"
  />
);
export const Small = () => (
  <Button
    label="What's up"
    onPress={action("clicked")}
    appearance="filled"
    size="sm"
  />
);
export const XS = () => (
  <Button
    label="What's up"
    onPress={action("clicked")}
    appearance="filled"
    size="xs"
  />
);

// Appearance
export const Filled = () => (
  <Button label="What's up" onPress={action("clicked")} appearance="filled" />
);
export const Outline = () => (
  <Button label="What's up" onPress={action("clicked")} appearance="outline" />
);
export const Ghost = () => (
  <Button label="What's up" onPress={action("clicked")} appearance="ghost" />
);

// Add all stories to RN/Expo storybook
storiesOf("Button", module)
  .add("Large", Large)
  .add("Filled", Filled)
  .add("Outline", Outline)
  .add("Ghost", Ghost);
