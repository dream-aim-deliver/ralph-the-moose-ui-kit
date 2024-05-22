import { type IconProps } from "./Icon";

export const IconStep = (
  props: IconProps & {
    variant: "current" | "todo" | "done";
    index: number;
  },
) => {
  return (
    <div className="w-full relative h-[22px] text-left text-base text-text-inverted font-gluten">
      <svg
        width="22"
        height="23"
        viewBox="0 0 22 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="shape"
          d="M22 8.35714C22 14.143 18.6001 22.5 13.2 22.5C7.79988 22.5 0 17.2858 0 11.5C0 5.71416 2.91099 0.5 8.31111 0.5C13.7112 0.5 22 2.5713 22 8.35714Z"
          fill={
            props.variant === "done"
              ? "#009F55"
              : props.variant === "current"
                ? "#8E5A45"
                : "#D1AD99"
          }
        />
      </svg>
      <b className="absolute top-[4px] left-[7px] tracking-[-0.04em] leading-[16px]">
        {props.index}
      </b>
    </div>
  );
};
