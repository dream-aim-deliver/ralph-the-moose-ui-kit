import { Tooltip, Label, Button } from "..";
import { LightFrame } from "../layouts/LightFrame";

/**
 * Renders a Wrapped Balance section of Balance Card Primary Variant.
 */
export const WrappedBalance = ({
  wrappedBalance: wrappedBalance,
  tokenShortName,
  onWrap: onWrap,
  onBridge: onBridge,
}: {
  wrappedBalance: number;
  tokenShortName: string;
  onWrap: () => void;
  onBridge: () => void;
}) => {
  const wrappedTokenName = `W${tokenShortName.toUpperCase()}`;
  const wrappedBalanceString =
    Intl.NumberFormat(`en-US`).format(wrappedBalance);
  return (
    <LightFrame className="flex flex-col items-center justify-between gap-4">
      <div className="w-full relative flex flex-col items-center justify-between">
        <Tooltip
          title="Wrapped"
          content={`The ${wrappedTokenName} you have in your wallet.`}
        />
        <div className="flex flex-row items-center space-x-2">
          <Label label={wrappedBalanceString} variant="medium" />
          <Label label={wrappedTokenName} variant="medium" />
        </div>
      </div>
      <div className="flex flex-row">
        <Button label="Unwrap" onClick={onWrap} variant="secondary" />
        <Button label="Bridge" onClick={onBridge} variant="secondary" />
      </div>
    </LightFrame>
  );
};
