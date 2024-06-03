import { twMerge } from "tailwind-merge";

export interface InputAssetAmountProps {
  icon: React.ReactNode;
  initialAmount: number;
  tokenShortName: string;
  onChange: (value: number) => void;
}
/**
 * A component that allows the user to input an amount of an asset.
 */
export const InputAssetAmount = ({
  icon,
  initialAmount,
  tokenShortName,
  onChange,
}: InputAssetAmountProps) => {
  /**
   *
   * @param value The new value for the Amount signal
   * @returns undefined, but updates the amount signal if there were no errors during input validation
   */
  const handleChange = (value: string) => {
    // if value is not a number, do nothing
    if (value === "" || isNaN(parseInt(value, 10))) {
      if (onChange) {
        onChange(0);
        return;
      }
      return;
    }
    try {
      if (onChange) {
        onChange(parseInt(value, 10));
      }
    } catch (e) {
      console.log(
        `[ERROR:: InputAssetAmountComponent]: Error parsing ${value} to number. ${(e as Error).message}`,
      );
      return;
    }
  };

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
      <input
        type="number"
        defaultValue={initialAmount}
        placeholder="Enter a Value"
        className={[
          "flex-1 relative tracking-[0.02em] leading-[16px] min-w-[10rem] border-none",
          "bg-white text-left appearance-none",
          "focus:outline-none",
          "focus:ring-0",
          "text-right",
        ].join(" ")}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
      <div className="relative leading-[16px]">
        {tokenShortName.toUpperCase()}
      </div>
    </div>
  );
};
