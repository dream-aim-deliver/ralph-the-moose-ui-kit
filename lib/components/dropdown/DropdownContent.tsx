export interface DropdownContentProps {
  children: React.ReactNode[];
  defaultColor?: string;
  onHoverColor?: string;
  selectedItem: string;
}

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
        "border-base-colors/neutral-500",
      ].join(" ")}
    >
      <div className="self-stretch h-10 flex flex-row items-center justify-start py-2 px-4 box-border">
        <b className="relative tracking-[-0.04em] leading-[16px]">default</b>
      </div>
      <div className="self-stretch rounded-[999px] box-border h-10 flex flex-row items-center justify-start py-2 px-4 border-[1px] border-solid  border-base-colors/neutral-900">
        <b className="relative tracking-[-0.04em] leading-[16px]">hover</b>
      </div>
      <div className="self-stretch rounded-[54px] h-10 flex flex-row items-center justify-start pt-2.5 px-4 pb-2 box-border text-button-default text-base-colors/brand-600 ">
        <b className="relative tracking-[-0.04em] leading-[16px]">selected</b>
      </div>
    </div>
  );
};
