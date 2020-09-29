import { createText } from "@shopify/restyle";
import { Theme } from "../../themes/default";

/**
 * Available props:
 * color, opacity, visible, typography, textShadow, spacing, variant (tied to textVariants)
 */
export const Text = createText<Theme>();

export default Text;
