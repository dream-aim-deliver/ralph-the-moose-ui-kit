import { twMerge } from "tailwind-merge";
import { primaryStyles, secondaryStyles } from "./Button.styles";

/**
 * Props for the button component or the ButtonViewModel
 */
export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant: "primary" | "secondary";
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
  variant = "primary",
  label,
  disabled = false,
  ...props
}: ButtonProps) => {
  let containerClasses = "";
  let buttonClasses = "";
  if (variant === "primary") {
    containerClasses = twMerge(primaryStyles);
  }
  if (variant === "secondary") {
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
