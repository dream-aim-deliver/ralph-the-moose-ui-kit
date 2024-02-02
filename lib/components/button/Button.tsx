import { twMerge } from "tailwind-merge";
import { primaryStyles, secondaryStyles } from "./Button.styles";

/**
 * Enum representing the variants of a button.
 */
// eslint-disable-next-line react-refresh/only-export-components
export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

/**
 * Props for the button component or the ButtonViewModel
 */
export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant: ButtonVariant;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional disabled state
   */
  disabled?: boolean;
}

/**
 * This is the button component
 */
export const Button = ({
  variant = ButtonVariant.PRIMARY,
  label,
  disabled = false,
  ...props
}: ButtonProps) => {
  let containerClasses = "";
  let buttonClasses = "";
  if (variant === ButtonVariant.PRIMARY) {
    containerClasses = twMerge(primaryStyles);
  }
  if (variant === ButtonVariant.SECONDARY) {
    containerClasses = twMerge(secondaryStyles);
    // Add padding to secondary buttons
    buttonClasses = twMerge(buttonClasses, "px-12");
  }

  return (
    <div className={containerClasses} aria-disabled={disabled}>
      <button
        type="button"
        disabled={disabled}
        aria-disabled={disabled}
        className={buttonClasses}
        {...props}
      >
        {label}
      </button>
    </div>
  );
};
