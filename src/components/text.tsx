import React from "react";
import { ColorScheme, Size } from "../typings";
type TextProps = {
  size?: Size;
  fontWeight?: "regular" | "thin" | "light" | "medium" | "bold" | "extra-bold";
  color?: ColorScheme | "dark" | "light";
  textTransform?: "uppercase" | "lowercase" | "capitalize";
  underline?: boolean;
};
const Text = ({
  children,
  size = "md",
  fontWeight = "regular",
  textTransform,
  color = "dark",
  underline,
}: React.PropsWithChildren<TextProps>) => {
  return (
    <text
      className={`${fontSizeMap[size]} ${TextTranformations[textTransform]} ${
        colorMap[color]
      } ${fontWeightMap[fontWeight]} ${
        underline ? "underline" : null
      } text-center`}
    >
      {children}
    </text>
  );
};

export default Text;

const fontWeightMap = {
  regular: "font-normal",
  thin: "font-thin",
  light: "font-light",
  medium: "font-medium",
  bold: "font-bold",
  "extra-bold": "font-extrabold",
};

const colorMap = {
  primary: "text-primary-500",
  secondary: "text-secondary-500",
  accent: "text-accent-500",
  info: "text-info-500",
  warning: "text-warning-500",
  success: "text-success-500",
  danger: "text-danger-500",
  light: "text-white",
  dark: "text-dark",
};

const TextTranformations = {
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
};

const fontSizeMap = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
};
