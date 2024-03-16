import React from "react";
import { InputAssetAmount, InputAssetAmountProps } from "../input-asset-amount";
import { twMerge } from "tailwind-merge";

/**
 * Props for the InputAssetAmountWithLabel component.
 */
export interface InputAssetAmountWithLabelProps extends InputAssetAmountProps {
  /**
   * The maximum amount allowed for the input.
   */
  maxAmount: number;

  /**
   * The error message to display when the input value is invalid.
   */
  errorMessage?: string;

  /**
   * The label to display for the input.
   */
  label?: string;
}

/**
 * Renders an input field with a label and a maximum amount display.
 * Shows an error message if passed in the props.
 * @component
 * @example
 * ```tsx
 * <InputAssetAmountWithLabel
 *   label="Amount to bridge"
 *   errorMessage="Invalid amount"
 *   maxAmount={100}
 *   tokenShortName="ETH"
 *   // other props
 * />
 * ```
 */
export const InputAssetAmountWithLabel: React.FC<
  InputAssetAmountWithLabelProps
> = ({ label, maxAmount, errorMessage, ...props }) => {
  const labelFinal = label ? label : "Amount to bridge";
  const maxAmountFinal = maxAmount ? maxAmount : 0;
  const maxAmountString = `${maxAmountFinal} ${props.tokenShortName}`;
  return (
    <div className="w-full relative flex flex-col items-start justify-start text-left text-sm text-text-secondary font-varela">
      <div className="self-stretch flex flex-row items-center justify-between">
        <div className="flex-1 relative leading-[14px] text-base-colors/neutral-200">
          {labelFinal}
        </div>
        <div className="h-4 flex flex-row items-center justify-start text-right text-xs text-base-colors/brand-600 font-gluten">
          <b className="relative tracking-[-0.04em] leading-[12px]">
            Max: {maxAmountString}
          </b>
        </div>
      </div>
      <InputAssetAmount {...props} />
      <div
        className={twMerge(
          "w-[250px] overflow-hidden flex-row items-center justify-start gap-[4px] text-xs text-text-error font-varela",
          errorMessage ? "flex" : "hidden",
        )}
      >
        <img className="w-4 relative h-4" alt="" src="error.svg" />
        {errorMessage && (
          <div className="flex-1 relative tracking-[0.02em] leading-[12px] font-medium">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};