import React from "react";
import { twMerge } from "tailwind-merge";
/**
 * The props for the IconButton component.
 * @interface IconButtonProps
 */
export interface IconButtonProps {
  /**
   * The icon to be displayed in the button.
   */
  icon: React.ReactNode;
  /**
   * The TailwindCSS height and width of the button */
  size: number;
  /**
   * The disabled state of the button.
   */
  disabled?: boolean;
  /**
   * The default background color of the button. Use TailwindCSS color classes.
   */
  defaultBackgroundColor?: string;
  /**
   * The background color of the button on hover. Use TailwindCSS color classes.
   */
  onHoverBackgroundColor?: string;
  /**
   * The background color of the button on press. Use TailwindCSS color classes.
   */
  onPressBackgroundColor?: string;
  /**
   * The onClick event handler for the button.
   */
  onClick: () => void;
}

/**
 * The IconButton component.
 */
export const IconButton = ({
  icon,
  size,
  disabled,
  defaultBackgroundColor = "fill-base-colors/brand-600",
  onHoverBackgroundColor = "bg-base-colors/brand-400",
  onPressBackgroundColor = "bg-base-colors/brand-700",
  onClick,
}: IconButtonProps) => {
  const finalSize = size ? `h-${size} w-${size}` : "h-6";
  return (
    <div
      className={twMerge(
        "h-full relative w-full",
        `${finalSize}`,
        "flex flex-row items-center justify-start",
        `${defaultBackgroundColor}`,
        `hover:${onHoverBackgroundColor}`,
        `active:${onPressBackgroundColor}`,
        "cursor-default",
        "aria-disabled:opacity-40",
        "aria-disabled:pointer-events-none",
        "transition-all",
      )}
      role="button"
      aria-disabled={disabled}
    >
      <div
        className="relative tracking-[-0.04em] leading-[12px]"
        aria-disabled={disabled}
        onClick={onClick}
      >
        {icon}
      </div>
    </div>
  );
};
