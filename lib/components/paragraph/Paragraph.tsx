import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

/**
 * ViewModel for paragraph component.
 */
export interface ParagraphProps {
  /**
   * The variant of the paragraph. Accepts "medium".
   */
  variant?: "primary" | "secondary";
  /**
   * The content of the Paragraph. Can be text or other components.
   */
  children: ReactNode;
}

/**
 * This is a paragraph component that accepts text or other components as its children.
 * @param {ParagraphProps} props - The properties of the paragraph.
 */
export const Paragraph = ({ variant, children }: ParagraphProps) => {
  const classes = twMerge([
    "relative",
    "text-base",
    "leading-[160%]",
    "font-varela",
    variant === "primary" ? "text-text-primary" : "text-text-secondary",
    "text-left",
  ]);
  return <p className={classes}>{children}</p>;
};
