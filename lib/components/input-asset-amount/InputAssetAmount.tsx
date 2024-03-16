import { twMerge } from "tailwind-merge";

export interface InputAssetAmountProps {
  icon: React.ReactNode;
  amount: number;
  tokenShortName: string;
}

export const InputAssetAmount = ({
  icon,
  amount,
  tokenShortName,
}: InputAssetAmountProps) => {
  return (
    <div
      className={twMerge(
        "w-full relative rounded-[99px]",
        "bg-white",
        "box-border h-[45px]",
        "flex flex-row items-center justify-start py-0 px-3 gap-[0px_8px] text-left text-base text-base-colors/neutral-900 font-varela",
        "border-t-[1px] border-solid border-base-colors/neutral-200 border-r-[1px] border-b-[4px] border-l-[1px]",
      )}
    >
      <div className="w-6 relative h-6 object-cover">{icon}</div>
      <div className="flex-1 relative tracking-[0.02em] leading-[16px] min-w-[14rem]">
        {amount}
      </div>
      <div className="relative leading-[16px]">
        {tokenShortName.toUpperCase()}
      </div>
    </div>
  );
};
