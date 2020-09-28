import { createBox } from "@shopify/restyle";
import { Theme } from "../../themes/default";

/**
 * Available props:
 * backgroundColor, opacity, visible, layout, spacing, border, shadow, position.
 */
const Box = createBox<Theme>();

export default Box;
