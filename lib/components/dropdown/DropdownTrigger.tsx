import { twMerge } from "tailwind-merge";
import { IconCaretDown, IconCaretUp } from "..";

export interface DropdownTriggerProps {
  title: string;
  variant: "small" | "large";
  expanded: boolean;
  selectedOption?: string;
  defaultColor?: string;
  onExpandedColor?: string;
  onHoverColor?: string;
  icon: React.ReactNode;
}

export const DropdownTrigger = ({
  variant,
  expanded,
  title,
  icon,
  selectedOption,
  defaultColor = "base-colors/brand-600",
  onExpandedColor = "base-colors/brand-700",
  onHoverColor = "base-colors/brand-400",
}: DropdownTriggerProps) => {
  const smallTrigger = (
    <div
      className={twMerge(
        "relative rounded-[54px]",
        "box-border",
        "w-full h-10",
        "flex flex-row items-center justify-start",
        "py-2.5 px-2",
        "border-t-[1px] border-solid border-r-[1px] border-b-[3px] border-l-[1px]",
        `border-${defaultColor}`,
        `text-${defaultColor}`,
        `hover:border-${onHoverColor}`,
        `hover:text-${onHoverColor}`,
        "transition-all",
      )}
    >
      <div className="flex flex-row items-center justify-start">
        <div className="w-[25px] relative h-[25px] overflow-hidden shrink-0">
          {icon}
        </div>
      </div>
    </div>
  );

  const largeTrigger = (
    <div
      className={twMerge(
        "relative",
        "w-full",
        "flex",
        "flex-row",
        "items-center",
        "justify-start",
        "gap-[6px]",
        "font-varela",
        `text-${defaultColor}`,

        `border-${defaultColor}`,
        `hover:border-${onHoverColor}`,
      )}
    >
      <div className={twMerge("relative leading-[14px]")}>{title}</div>
      <div
        className={twMerge(
          "w-full relative rounded-[54px]",
          "box-border",
          "h-10",
          "flex flex-row items-center justify-between",
          "py-2.5 px-4",
          "text-left",
          "font-gluten",
          "border-t-[1px]",
          "border-solid",
          "border-r-[1px]",
          "border-b-[3px]",
          "border-l-[1px]",
          `hover:text-${onHoverColor}`,
          "transition-all",
        )}
      >
        <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
          <div className="w-[25px] relative h-[25px] overflow-hidden shrink-0">
            {icon}
          </div>
          <b className="relative tracking-[-0.04em] leading-[16px]">
            {selectedOption}
          </b>
        </div>
        <div className="flex flex-row w-3 h-relative ml-2 items-center">
          {expanded && <IconCaretUp size={4} />}
          {!expanded && <IconCaretDown size={4} />}
        </div>
      </div>
    </div>
  );
  return (
    <div className={twMerge()}>
      {variant == "small" ? smallTrigger : largeTrigger}
    </div>
  );
};
