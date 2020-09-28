import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

// Stories
export const Primary = () => (
  <Button label="What's up" onPress={action("clicked")} appearance="primary" />
);
export const Secondary = () => (
  <Button
    label="What's up"
    onPress={action("clicked")}
    appearance="secondary"
  />
);

// Add all stories to RN/Expo storybook
storiesOf("Button", module).add("Primary", Primary).add("Secondary", Secondary);
