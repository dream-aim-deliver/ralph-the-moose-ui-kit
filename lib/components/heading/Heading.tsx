import { twMerge } from "tailwind-merge";

// eslint-disable-next-line react-refresh/only-export-components
export enum HeadingVariant {
  H4 = "h4",
  H5 = "h5",
}

export interface HeadingProps {
  title: string;
  variant: HeadingVariant;
}

export const Heading = ({ title, variant }: HeadingProps) => {
  const classes = twMerge([
    "w-[324.33px]",
    "relative",
    "tracking-[-0.04em]",
    "leading-[24px]",
    "font-bold",
    "font-gluten",
    "inline-block",
    variant === HeadingVariant.H4 ? "text-xxl" : "",
    variant === HeadingVariant.H5 ? "text-xl" : "",
    "text-text-primary",
    "text-left",
  ]);

  return <label className={classes}>{title}</label>;
};
