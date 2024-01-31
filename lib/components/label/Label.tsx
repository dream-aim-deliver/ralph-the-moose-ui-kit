import { twMerge } from "tailwind-merge";
import {
  primary as primaryStyles,
  secondary as secondaryStyles,
} from "./Label.styles";

export interface LabelProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * This ia a label component
 */
export const Label = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: LabelProps) => {
  const mode = primary ? primaryStyles : secondaryStyles;
  const classes = twMerge(mode);
  return (
    <button
      type="button"
      className={classes}
      style={{ backgroundColor }}
      {...props}
    >
      {label}: {size}
    </button>
  );
};
