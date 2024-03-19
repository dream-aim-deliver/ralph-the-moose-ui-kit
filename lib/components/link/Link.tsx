import { twMerge } from "tailwind-merge";

/**
 * ViewModel for link component.
 * @typedef {Object} LinkProps
 */
export interface LinkProps {
  /**
   * The variant of the link. Accepts "small" or "medium".
   */
  variant: "small" | "medium";
  /**
   * The text of the link.
   */
  label: string;
  /**
   * Inverts the color of the link on dark backgrounds
   */
  onDark: boolean;
  /**
   * The onClick callback.
   * @returns {unknown} - The return value of the callback, defaults to unknown.
   */
  onClick?: () => unknown;
}

/**
 * Link component.
 * This is a link component that can be used to display text links.
 * @param {LinkProps} props - The properties of the link.
 */
export const Link = ({ variant, label, onDark, onClick }: LinkProps) => {
  const classes = twMerge([
    "cursor-pointer",
    "relative",
    "text-base",
    "tracking-[-0.04em]",
    "leading-[16px]",
    "font-gluten",
    "transform",
    "transition-all",
    "duration-200",
    "ease-in-out",
    variant === "small" ? "text-xs" : "",
    variant === "medium" ? "text-base" : "",
    onDark ? "text-text-inverted" : "text-text-primary",
    "text-left",
    "font-bold",
    "hover:scale-110",
    // "text-rose-900",
  ]);

  return (
    <div role="link" className={classes} onClick={onClick}>
      {label}
    </div>
  );
};
