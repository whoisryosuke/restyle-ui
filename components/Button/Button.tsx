import React from "react";
import { TouchableOpacity, View } from "react-native";
import {
  useRestyle,
  createVariant,
  spacing,
  border,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
  VariantProps,
} from "@shopify/restyle";

import Text from "../Text/Text";
import { Theme } from "../../themes/default";

const restyleFunctions = [
  spacing,
  border,
  backgroundColor,
  createVariant({ property: "appearance", themeKey: "brandVariants" }),
];
type Props = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  VariantProps<Theme, "brandVariants", "appearance"> & {
    label: string;
    onPress: () => void;
  };

const Button = ({ onPress, label, ...rest }: Props) => {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <TouchableOpacity onPress={onPress}>
      <View {...props}>
        <Text color="mainBackground" fontSize={32}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
