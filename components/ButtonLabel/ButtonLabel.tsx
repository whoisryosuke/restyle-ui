import {
  createVariant,
  createRestyleComponent,
  VariantProps,
} from "@shopify/restyle";
import { Theme } from "../../themes/default";
import { Text } from "../Text/Text";

/**
 * Available props:
 * color, opacity, visible, typography, textShadow, spacing, variant (tied to textVariants)
 */
type Props = VariantProps<Theme, "textAppearanceVariants", "appearance"> &
  VariantProps<Theme, "textSizeVariants", "size"> &
  React.ComponentProps<typeof Text>;

const ButtonLabel = createRestyleComponent<Props, Theme>(
  [
    createVariant({
      property: "appearance",
      themeKey: "textAppearanceVariants",
    }),
    createVariant({
      property: "size",
      themeKey: "textSizeVariants",
    }),
  ],
  Text
);

export default ButtonLabel;
