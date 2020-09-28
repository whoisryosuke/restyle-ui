import React from "react";
import { storiesOf } from "@storybook/react-native";
import Text from "./Text";

export default {
  title: "Text",
  component: Text,
};

// Stories
export const Default = () => <Text>What's up</Text>;
export const H1 = () => <Text variant="h1">What's up</Text>;
export const H2 = () => <Text variant="h2">What's up</Text>;
export const H3 = () => <Text variant="h3">What's up</Text>;
export const H4 = () => <Text variant="h4">What's up</Text>;
export const H5 = () => <Text variant="h5">What's up</Text>;
export const H6 = () => <Text variant="h6">What's up</Text>;
export const SubheaderH1 = () => <Text variant="subH1">What's up</Text>;
export const SubheaderH2 = () => <Text variant="subH2">What's up</Text>;
export const SubheaderH3 = () => <Text variant="subH3">What's up</Text>;
export const SubheaderH4 = () => <Text variant="subH4">What's up</Text>;
export const SubheaderH5 = () => <Text variant="subH5">What's up</Text>;
export const Paragraph = () => <Text variant="paragraph">What's up</Text>;
export const ParagraphBold = () => (
  <Text variant="paragraphBold">What's up</Text>
);
export const ParagraphItalic = () => (
  <Text variant="paragraphItalic">What's up</Text>
);
export const ParagraphCaption = () => (
  <Text variant="paragraphCaption">What's up</Text>
);
export const Label = () => <Text variant="label">What's up</Text>;
export const LabelBold = () => <Text variant="labelBold">What's up</Text>;
export const Colored = () => (
  <Text variant="h1" color="blue500">
    What's up
  </Text>
);

// Add all stories to RN/Expo storybook
storiesOf("Text", module)
  .add("Default", Default)
  .add("H1", H1)
  .add("H2", H2)
  .add("H3", H3)
  .add("H4", H4)
  .add("H5", H5)
  .add("SubheaderH1", SubheaderH1)
  .add("SubheaderH2", SubheaderH2)
  .add("SubheaderH3", SubheaderH3)
  .add("SubheaderH4", SubheaderH4)
  .add("SubheaderH5", SubheaderH5)
  .add("Paragraph", Paragraph)
  .add("ParagraphBold", ParagraphBold)
  .add("ParagraphItalic", ParagraphItalic)
  .add("ParagraphCaption", ParagraphCaption)
  .add("Label", Label)
  .add("LabelBold", LabelBold)
  .add("Colored", Colored);
