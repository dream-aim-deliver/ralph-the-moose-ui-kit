import { twMerge } from "tailwind-merge";
import { IconCaretDown, IconCaretUp, IconNetworkBase } from "..";
import { BaseColors } from "../../theme/colors";
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
          "w-full relative rounded-[54px] h-10",
          "flex flex-row items-center justify-between",
          "border-solid border-t-[1px]",
          "border-r-[1px] border-b-[3px] border-l-[1px]",
          "py-2.5 px-4",
          `border-text-${defaultColor}`, // TODO: fix border color
          `text-${defaultColor}`,
          `hover:text-${onHoverColor}`,
          `focus-within:text-${onExpandedColor}`,
          "transition-all",
        )}
      >
        {/* BOX: Icon + Title */}
        <div className="w-full relative flex flex-row items-center justify-start gap-[8px] text-left">
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
  onClick: () => void;
}

export const DropdownItem = ({ title, onClick }: DropdownItemProps) => {
  return (
    <div
      className={twMerge(
        "px-4 py-2 hover:bg-gray-100 cursor-pointer w-full text-left",
      )}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

const sampleItems = [
  <DropdownItem title="Item 1" onClick={() => console.log("Item 1 clicked")} />,
  <DropdownItem title="Item 2" onClick={() => console.log("Item 2 clicked")} />,
];
export const Dropdown = ({ expanded }: { expanded: boolean }) => {
  return (
    <div className="">
      <DropdownTrigger
        title="Network"
        expanded={expanded}
        icon={<IconNetworkBase size={4} />}
        selectedItemTitle="Base"
      />
      <div className={twMerge("flex flex-col items-start")}>{sampleItems}</div>
    </div>
  );
};

// Dropdown.Item = DropdownItem;
// Dropdown.Trigger = DropdownTrigger;
