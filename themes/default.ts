import { createTheme } from "@shopify/restyle";

const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  black: "#171922",
  white: "#F0F2F3",
};

const colors = {
  blue100: "#e6f7ff",
  blue200: "#bae7ff",
  blue300: "#91d5ff",
  blue400: "#6bc1ff",
  blue500: "#42aaff",
  blue600: "#1890ff",
  blue700: "#096dd9",
  blue800: "#0050b3",
  blue900: "#003a8c",
  blue1000: "#002766",
  gray100: "#f7f9fb",
  gray200: "#eef2f7",
  gray300: "#e3e8ef",
  gray400: "#cdd5df",
  gray500: "#a3aebf",
  gray600: "#748094",
  gray700: "#4c5567",
  gray800: "#2f3747",
  gray900: "#1b202b",
  gray1000: "#171922",
  red100: "#fff1f0",
  red200: "#ffccc7",
  red300: "#ffa39e",
  red400: "#ff7875",
  red500: "#ff4d4f",
  red600: "#f5222d",
  red700: "#cf1322",
  red800: "#a8071a",
  red900: "#820014",
  red1000: "#5c0011",
  orange100: "#fff7e6",
  orange200: "#ffe7ba",
  orange300: "#ffd591",
  orange400: "#ffc069",
  orange500: "#ffa940",
  orange600: "#fa8c16",
  orange700: "#d46b08",
  orange800: "#ad4e00",
  orange900: "#873800",
  orange1000: "#612500",
  yellow100: "#feffe6",
  yellow200: "#ffffb8",
  yellow300: "#fffb8f",
  yellow400: "#fff566",
  yellow500: "#ffec3d",
  yellow600: "#fadb14",
  yellow700: "#d4b106",
  yellow800: "#ad8b00",
  yellow900: "#876800",
  yellow1000: "#614700",
  green100: "#f6ffed",
  green200: "#d9f7be",
  green300: "#b7eb8f",
  green400: "#95de64",
  green500: "#73d13d",
  green600: "#52c41a",
  green700: "#389e0d",
  green800: "#237804",
  green900: "#135200",
  green1000: "#092b00",
  teal100: "#e6fffb",
  teal200: "#b5f5ec",
  teal300: "#87e8de",
  teal400: "#5cdbd3",
  teal500: "#36cfc9",
  teal600: "#13c2c2",
  teal700: "#08979c",
  teal800: "#006d75",
  teal900: "#00474f",
  teal1000: "#002329",
  purple100: "#f9f0ff",
  purple200: "#efdbff",
  purple300: "#d3adf7",
  purple400: "#b37feb",
  purple500: "#9254de",
  purple600: "#722ed1",
  purple700: "#531dab",
  purple800: "#391085",
  purple900: "#22075e",
  purple1000: "#120338",
  magenta100: "#fff0f6",
  magenta200: "#ffd6e7",
  magenta300: "#ffadd2",
  magenta400: "#ff85c0",
  magenta500: "#f759ab",
  magenta600: "#eb2f96",
  magenta700: "#c41d7f",
  magenta800: "#9e1068",
  magenta900: "#780650",
  magenta1000: "#520339",
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
    primary: palette.purplePrimary,
    secondary: palette.greenPrimary,
    text: palette.black,
    textInverted: palette.white,
    transparent: "transparent",

    ...colors,
  },
  spacing: {
    0: 0,
    1: 4,
    2: 8,
    3: 16,
    4: 24,
    5: 32,
    6: 48,
    7: 64,
    8: 128,
    9: 256,
    10: 512,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    h1: {
      fontFamily: "Ramabhadra, Montserrat, Roboto, sans-serif",
      fontWeight: "700",
      fontSize: 72,
      lineHeight: 93.6,
      color: "text",
    },
    h2: {
      fontFamily: "Ramabhadra, Montserrat, Roboto, sans-serif",
      fontWeight: "700",
      fontSize: 64,
      lineHeight: 83.2,
      color: "text",
    },
    h3: {
      fontFamily: "Ramabhadra, Montserrat, Roboto, sans-serif",
      fontWeight: "700",
      fontSize: 56,
      lineHeight: 72.8,
      color: "text",
    },
    h4: {
      fontFamily: "Ramabhadra, Montserrat, Roboto, sans-serif",
      fontWeight: "700",
      fontSize: 36,
      lineHeight: 46.8,
      color: "text",
    },
    h5: {
      fontFamily: "Ramabhadra, Montserrat, Roboto, sans-serif",
      fontWeight: "700",
      fontSize: 24,
      lineHeight: 31.2,
      color: "text",
    },
    h6: {
      fontFamily: "Ramabhadra, Montserrat, Roboto, sans-serif",
      fontWeight: "700",
      fontSize: 20,
      lineHeight: 26,
      color: "text",
    },
    subH1: {
      fontFamily: "Ramabhadra, Montserrat, Roboto, sans-serif",
      fontSize: 36,
      lineHeight: 58.25,
      color: "text",
    },
    subH2: {
      fontFamily: "Ramabhadra, Montserrat, Roboto, sans-serif",
      fontSize: 32,
      lineHeight: 51.78,
      color: "text",
    },
    subH3: {
      fontFamily: "Ramabhadra, Montserrat, Roboto, sans-serif",
      fontSize: 28,
      lineHeight: 45.3,
      color: "text",
    },
    subH4: {
      fontFamily: "Ramabhadra, Montserrat, Roboto, sans-serif",
      fontSize: 24,
      lineHeight: 38.83,
      color: "text",
    },
    subH5: {
      fontFamily: "Ramabhadra, Montserrat, Roboto, sans-serif",
      fontSize: 20,
      lineHeight: 32.36,
      color: "text",
    },
    paragraph: {
      fontFamily: "Roboto, sans-serif",
      fontSize: 16,
      lineHeight: 24,
      color: "text",
    },
    paragraphBold: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: "700",
      fontSize: 16,
      lineHeight: 24,
      color: "text",
    },
    paragraphItalic: {
      fontFamily: "Roboto, sans-serif",
      fontStyle: "italic",
      fontSize: 16,
      lineHeight: 24,
      color: "text",
    },
    paragraphCaption: {
      fontFamily: "Roboto, sans-serif",
      fontSize: 12,
      lineHeight: 19.46,
      color: "text",
    },
    label: {
      fontFamily: "Roboto, sans-serif",
      fontSize: 12,
      lineHeight: 14,
      letterSpacing: "5%",
      color: "text",
    },
    labelBold: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: "700",
      fontSize: 12,
      lineHeight: 14,
      letterSpacing: "5%",
      color: "text",
    },
  },
  textAppearanceVariants: {
    filled: {
      color: "textInverted",
    },
    outline: {
      color: "primary",
    },
    ghost: {
      color: "primary",
    },
  },
  appearanceVariants: {
    filled: {
      backgroundColor: "primary",
    },
    outline: {
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "primary",
    },
    ghost: {
      backgroundColor: "transparent",
    },
  },
  textSizeVariants: {
    xl: {
      fontSize: 21,
      lineHeight: 24,
    },
    lg: {
      fontSize: 16,
      lineHeight: 18.75,
    },
    md: {
      fontSize: 14,
      lineHeight: 16.41,
    },
    sm: {
      fontSize: 12,
      lineHeight: 14.06,
    },
    xs: {
      fontSize: 12,
      lineHeight: 14.06,
    },
  },
  sizeVariants: {
    xl: {
      py: 4,
      px: 5,
    },
    lg: {
      py: 3,
      px: 4,
    },
    md: {
      py: 2,
      px: 3,
    },
    sm: {
      py: 1,
      px: 2,
    },
    xs: {
      py: 1,
      px: 1,
    },
  },
});

export type Theme = typeof theme;
export default theme;
