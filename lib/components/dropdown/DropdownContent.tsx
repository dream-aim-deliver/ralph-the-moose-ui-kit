export interface DropdownContentProps {
  children: React.ReactNode[];
  defaultColor?: string;
  onHoverColor?: string;
}

export const DropdownContent = ({ children }: DropdownContentProps) => {
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
      {/* <DropdownItem title="default" selected={false} onClick={() => {}} /> */}
      {/* <DropdownItem title="selected" selected={true} onClick={() => {}} /> */}
    </div>
  );
};
