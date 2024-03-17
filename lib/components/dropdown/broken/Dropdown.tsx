import { twMerge } from "tailwind-merge";
import { IconCaretDown, IconCaretUp, IconNetworkBase } from "../..";
export interface DropdownProps {
  items: React.ReactNode[];
  trigger: React.ReactNode;
}
// trigger should contain icon and text. In small screen, it should be only icon
export interface DropdownTriggerProps {
  icon: React.ReactNode;
  title: string;
  selectedItemTitle: string;
  expanded: boolean;
  defaultColor?: string;
  onExpandedColor?: string;
  onHoverColor?: string;
}
export const DropdownTriggerExpanded = ({
  title,
  icon,
  expanded,
  selectedItemTitle = "Base",
  defaultColor = "base-colors/brand-600",
  onExpandedColor = "base-colors/brand-700",
  onHoverColor = "base-colors/brand-400",
}: DropdownTriggerProps) => {
  return (
    <div className="relative flex flex-row items-center text-sm text-left font-gluten">
      {/* The title is only shown on large screens in expanded view */}
      <div
        className={`text-${onExpandedColor} font-varela hidden xl:block xl:pr-2`}
      >
        {title}
      </div>
      {/* This is the rounded box that encapsulates the trigger */}
      <div
        className={twMerge(
          "relative rounded-[54px] h-8 w-8 xl:w-full xl:h-10",
          "flex flex-row items-center justify-between",
          "border-solid border-t-[1px]",
          "border-r-[1px] border-b-[3px] border-l-[1px]",
          "py-2.5 px-4",
          `border-${onExpandedColor}`,
          `text-${onExpandedColor}`,
          `hover:border-${onHoverColor}`,
          `hover:text-${onHoverColor}`,
          "transition-all",
        )}
      >
        {/* BOX: Icon + Title */}
        <div className="w-full relative flex flex-row items-center justify-center gap-[8px] text-left">
          <div className=" overflow-hidden shrink-0">{icon}</div>
          {/* The selectedItemTitle and carets are shown only in large screens */}
          <div className="flex flex-1 flex-row relative tracking-[-0.04em] leading-[16px]">
            {selectedItemTitle}
          </div>
        </div>
        <div
          className={twMerge(
            "flex flex-row items-center justify-between",
            "w-full",
            "text-left",
            "hidden xl:block",
          )}
        >
          <div className="ml-2">
            {expanded && <IconCaretUp size={4} />}

          </div>
        </div>
      </div>
    </div>
  );
};
export const DropdownTrigger = ({
  title,
  icon,
  selectedItemTitle = "Base",
  expanded,
  defaultColor = "base-colors/brand-600",
  onExpandedColor = "base-colors/brand-700",
  onHoverColor = "base-colors/brand-400",
}: DropdownTriggerProps) => {
  return (
    <div className="relative flex flex-row items-center text-sm text-left font-gluten">
      {/* The title is only shown on large screens */}
      <div
        className={`text-${defaultColor} font-varela hidden xl:block xl:pr-2`}
      >
        {title}
      </div>
      {/* This is the rounded box that encapsulates the trigger */}
      <div
        className={twMerge(
          "relative rounded-[54px] h-8 w-8 xl:w-full xl:h-10",
          "flex flex-row items-center justify-between",
          "border-solid border-t-[1px]",
          "border-r-[1px] border-b-[3px] border-l-[1px]",
          "py-2.5 px-4",
          expanded ? `border-${onExpandedColor}` : `border-${defaultColor}`, // TODO: hardcode the color
          `hover:border-${onHoverColor}`,
          expanded ? `text-${onExpandedColor}` : `text-${defaultColor}`,
          `hover:text-${onHoverColor}`,
          `active:text-${onExpandedColor}`,
          "transition-all",
        )}
      >
        {/* BOX: Icon + Title */}
        <div className="w-full relative flex flex-row items-center justify-center gap-[8px] text-left">
          <div className=" overflow-hidden shrink-0">{icon}</div>
          {/* The selectedItemTitle and carets are shown only in large screens */}
          <div className="hidden xl:block relative tracking-[-0.04em] leading-[16px]">
            {selectedItemTitle}
          </div>
        </div>
        <div
          className={twMerge(
            "flex flex-row items-center justify-between",
            "w-full",
            "text-left",
            "hidden xl:block",
          )}
        >
          <div className={twMerge(expanded ? "" : "hidden", "ml-2")}>
            <IconCaretUp size={4} />
          </div>
          <div className={twMerge(expanded ? "hidden" : "ml-2")}>
            <IconCaretDown size={4} />
          </div>
        </div>
      </div>
    </div>
  );
};

// items should be a list of title and onClick function
export interface DropdownItemProps {
  title: string;
  selected?: boolean;
  onClick: () => void;
}

export const DropdownItem = ({ title, onClick }: DropdownItemProps) => {
  const defaultClasses = twMerge(
    "self-stretch h-8 xl:-10 flex flex-row items-center justify-start py-1 xl:py-2 px-2 xl:px-4 box-border",
    "text-sm font-gluten",
    "cursor-pointer",
  );
  const hoverClasses = twMerge(
    "hover:box-border hover:border-[1px] hover:border-solid hover:rounded-[999px] ",
    "hover:bg-base-colors-neutral-100",
    "hover:text-base-colors-brand-700",
  );
  const selectedClasses = twMerge(
    "bg-base-colors-neutral-100",
    "text-base-colors-brand-700",
  );
  const activeClasses = twMerge(
    "active:bg-base-colors-neutral-200",
    "active:text-base-colors-brand-700",
  );
  return (
    <div className={twMerge(defaultClasses, hoverClasses)} onClick={onClick}>
      <b className="relative tracking-[-0.04em] leading-[16px]">{title}</b>
    </div>
  );
};

export interface DropdownContentProps {
  children: React.ReactNode[];
}

export const DropdownContent = ({ children }: DropdownContentProps) => {
  return (
    <div
      className={twMerge(
        "bg-base-colors/neutral-50",
        "rounded-3xl",
        "border-solid",
        "border-[1px]",
        "border-divide",
        "border-t-[1px]",
        "border-r-[1px]",
        "border-b-[3px]",
        "border-l-[1px]",
        "overflow-hidden",
        "z-10",
        "p-3",
        "transition-all",
        "h-auto",
      )}
    >
      {children}
    </div>
  );
};

const sampleItems = [
  <DropdownItem
    title="Arthera"
    onClick={() => console.log("Item 1 clicked")}
  />,
  <DropdownItem title="Base" onClick={() => console.log("Item 2 clicked")} />,
];
export const Dropdown = ({ expanded }: { expanded: boolean }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-end justify-end">
        {/* <DropdownTrigger
          title="Network"
          expanded={expanded}
          icon={<IconNetworkBase size={4} />}
          selectedItemTitle="Base"
        /> */}
        <DropdownTriggerExpanded
          title="Network"
          expanded={expanded}
          icon={<IconNetworkBase size={4} />}
          selectedItemTitle="Base"
        />
      </div>
      {expanded && (
        <div className={twMerge("flex flex-col w-full")}>
          <DropdownContent>{sampleItems}</DropdownContent>
        </div>
      )}
    </div>
  );
};

// Dropdown.Item = DropdownItem;
// Dropdown.Trigger = DropdownTrigger;
