export interface DropdownContentProps {
  children: React.ReactNode[];
  defaultColor?: string;
  onHoverColor?: string;
  selectedItem: string;
}
export interface DropdownItemProps {
  selected?: boolean;
  title: string;
  onClick: () => void;
}

export const DropdownItem = ({
  selected,
  title,
  onClick,
}: DropdownItemProps) => {
  return (
    <div
      className={[
        "self-stretch",
        "h-10",
        "flex",
        "flex-row",
        "items-center",
        "justify-start",
        "py-2",
        "px-4",
        "box-border",
        "border-solid",
        "hover:border-[1px]",
        "hover:rounded-[999px]",
        "hover:border-base-colors/neutral-500",
        "active:border-base-colors/neutral-900",
        selected
          ? "text-base-colors/brand-600"
          : "text-base-colors/neutral-500",
      ].join(" ")}
      onClick={onClick}
    >
      <b className="relative tracking-[-0.04em] leading-[16px]">{title}</b>
    </div>
  );
};
export const DropdownContent = ({
  children,
  selectedItem,
  defaultColor,
  onHoverColor,
}: DropdownContentProps) => {
  return (
    <div
      className={[
        "w-full",
        "relative",
        "rounded-3xl",
        "bg-base-colors/neutral-50",
        "box-border",
        "overflow-hidden",
        "flex",
        "flex-col",
        "items-start",
        "justify-start",
        "p-3",
        "text-left",
        "text-base",
        "font-gluten",
        "border-[1px]",
        "border-solid",
        "text-base-colors/neutral-500",
        "border-base-colors/neutral-200",
        "z-10",
      ].join(" ")}
    >
      {children}
      <DropdownItem title="default" selected={false} onClick={() => {}} />
      <DropdownItem title="selected" selected={true} onClick={() => {}} />
    </div>
  );
};
