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
}

/**
 * Link component.
 * This is a link component that can be used to display text links.
 * @param {LinkProps} props - The properties of the link.
 */
export const Link = ({ variant, label }: LinkProps) => {
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
    "text-text-primary",
    "text-left",
    "hover:scale-110",
  ]);
  return <div className={classes}>{label}</div>;
};
