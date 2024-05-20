export interface DropdownItemProps {
  selected?: boolean;
  icon?: React.ReactNode;
  title: string;
}

export const DropdownItem = ({ selected, title }: DropdownItemProps) => {
  return (
    <div
      className={[
        "cursor-pointer",
        "w-full",
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
        "active:border-base-colors/neutral-900",
        selected ? "text-base-colors/brand-600" : "text-text-secondary",
        selected
          ? "hover:border-text-actionHover"
          : "hover:border-base-colors/neutral-600",
      ].join(" ")}
    >
      <b className="relative tracking-[-0.04em] leading-[16px]">{title}</b>
    </div>
  );
};
