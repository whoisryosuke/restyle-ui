import {
  createRestyleComponent,
  createVariant,
  spacing,
  color,
  opacity,
  textShadow,
  typography,
  visible,
  ColorProps,
  OpacityProps,
  TextShadowProps,
  TypographyProps,
  SpacingProps,
  VariantProps,
  VisibleProps,
} from "@shopify/restyle";
import { H1 as HtmlH1 } from "@expo/html-elements";
import { Theme } from "../../themes/default";

/**
 * Available props:
 * color, opacity, visible, typography, textShadow, spacing, variant (tied to textVariants)
 */
type Props = SpacingProps<Theme> &
  ColorProps<Theme> &
  OpacityProps<Theme> &
  TextShadowProps<Theme> &
  TypographyProps<Theme> &
  VisibleProps<Theme> &
  VariantProps<Theme, "textVariants"> &
  React.ComponentProps<typeof HtmlH1>;
export const H1 = createRestyleComponent<Props, Theme>(
  [
    color,
    opacity,
    textShadow,
    typography,
    spacing,
    visible,
    createVariant({ themeKey: "textVariants" }),
  ],
  HtmlH1
);

export default H1;
