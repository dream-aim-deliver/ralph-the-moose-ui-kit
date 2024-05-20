import { IconCaretDown, IconCaretUp } from "@/components/icons";

export interface DropdownTriggerProps {
  title: string;
  expanded: boolean;
  selectedOption?: string;
  className?: string;
}

export const DropdownTrigger = ({
  expanded,
  title,
  selectedOption,
  className,
}: DropdownTriggerProps) => {
  return (
    <div
      className={[
        "w-full",
        "h-full",
        "relative",
        "flex",
        "flex-col",
        "items-left",
        "justify-start",
        "gap-[6px]",
        "font-varela",
        `${className}`,
      ].join(" ")}
    >
      <div className={"relative h-full leading-[14px] text-text-secondary"}>
        {title}
      </div>
      <div
        className={[
          "cursor-pointer",
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
          "border-text-action text-text-action hover:border-text-actionHover hover:text-text-actionHover aria-pressed:border-text-actionPressed aria-pressed:text-text-actionPressed",
          "transition-all",
        ].join(" ")}
      >
        <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
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
};
