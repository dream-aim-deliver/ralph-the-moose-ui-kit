export interface ModalProps {
  children: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  return (
    <div
      className={[
        "w-full",
        "h-full",
        "relative",
        "rounded-tl-none",
        "rounded-tr-2xl",
        "rounded-b-2xl",
        "bg-base-colors/neutral-100",
        "[backdrop-filter:blur(24px)]",
        "flex",
        "flex-col",
        "items-start",
        "justify-start",
        "box-border",
        "p-6",
        "gap-[8px]",
      ].join(" ")}
    >
      <div className="flex flex-col items-start w-full p-2 z-[1]">
        {children}
      </div>
    </div>
  );
};
