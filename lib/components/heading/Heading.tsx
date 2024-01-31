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
  const mode = variant;
  const classes = twMerge("text-2xl");
  return (
    <h1 className={classes}>
      {title} {mode}
    </h1>
  );
};
