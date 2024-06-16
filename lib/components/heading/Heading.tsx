/**
 * Enum for heading variants.
 * @enum {string}
 */
// eslint-disable-next-line react-refresh/only-export-components
export enum HeadingVariant {
  H4 = "h4",
  H5 = "h5",
}

/**
 * Type for heading properties a.k.a ViewModel for Heading Component.
 * @typedef {Object} HeadingProps
 * @property {string} title - The title of the heading.
 * @property {HeadingVariant} variant - The variant of the heading.
 * @property {string} [className] - The class name of the heading.
 */
export interface HeadingProps {
  title: string;
  variant: HeadingVariant;
  className?: string;
}

/**
 * Type for heading properties a.k.a ViewModel for Heading Component.
 * @typedef {Object} HeadingProps
 * @property {string} title - The title of the heading.
 * @property {HeadingVariant} variant - The variant of the heading.
 */
export const Heading = ({ title, variant, className }: HeadingProps) => {
  const classes = [
    "w-full",
    "relative",
    "tracking-[-0.04em]",
    "leading-[24px]",
    "font-bold",
    "font-gluten",
    "font-bold",
    "inline-block",
    variant === HeadingVariant.H4 ? "text-2xl" : "",
    variant === HeadingVariant.H5 ? "text-xl" : "",
    "text-text-primary",
    "text-left",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label aria-level={1} role="heading" className={classes}>
      {title}
    </label>
  );
};
