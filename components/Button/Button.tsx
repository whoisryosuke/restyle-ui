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

import ButtonLabel from "../ButtonLabel/ButtonLabel";
import { Theme } from "../../themes/default";

const restyleFunctions = [
  spacing,
  border,
  backgroundColor,
  createVariant({ property: "appearance", themeKey: "appearanceVariants" }),
  createVariant({ property: "size", themeKey: "sizeVariants" }),
];
type Props = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  VariantProps<Theme, "appearanceVariants", "appearance"> &
  VariantProps<Theme, "sizeVariants", "size"> & {
    color?: keyof Theme["colors"];
    label: string;
    onPress: () => void;
  };

const Button = ({
  appearance,
  color,
  onPress,
  label,
  size,
  ...rest
}: Props) => {
  const props = useRestyle(restyleFunctions, { appearance, size, ...rest });

  return (
    <TouchableOpacity onPress={onPress}>
      <View {...props}>
        <ButtonLabel appearance={appearance} color={color} size={size}>
          {label}
        </ButtonLabel>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
