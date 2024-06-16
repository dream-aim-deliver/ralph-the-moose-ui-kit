export interface DropdownContentProps {
  children: React.ReactNode;
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
        "z-100", // TODO: does not do anything even though it should
        "inset-0", // TODO: does not do anything even though it should
      ].join(" ")}
    >
      {children}
    </div>
  );
};
