import { twMerge } from "tailwind-merge";

export interface LabelProps {
  variant: "small" | "medium";
  label: string;
}

/**
 * This ia a label component
 */
export const Label = ({ variant, label }: LabelProps) => {
  const classes = twMerge([
    "relative",
    "text-sm",
    "leading-[14px]",
    "font-label-small",
    variant === "small" ? "text-text-secondary" : "text-text-primary",
    "text-text-primary",
    "text-left",
  ]);
  return <div className={classes}>{label}</div>;
};
