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
  features: { unwrap, bridge } = { unwrap: false, bridge: false },
}: {
  wrappedBalance: number;
  tokenShortName: string;
  features: {
    unwrap: boolean;
    bridge: boolean;
  };
  onWrap: () => void;
  onBridge: () => void;
}) => {
  const unwrapEnabled = unwrap;
  const bridgeEnabled = bridge;
  const wrappedTokenName = `W${tokenShortName.toUpperCase()}`;
  const wrappedBalanceString =
    Intl.NumberFormat(`en-US`).format(wrappedBalance);
  return (
    <LightFrame className="flex flex-col items-center justify-between gap-4 overflow-visible">
      <div className="w-full relative flex flex-col items-center justify-between">
        <Tooltip
          title="Wrapped"
          content={`The ${wrappedTokenName} you have in your wallet.`}
        />
        <div className="flex flex-row items-center justify-center space-x-2 w-full">
          <Label label={wrappedBalanceString} variant="medium" />
          <Label label={wrappedTokenName} variant="medium" />
        </div>
      </div>
      <div className="flex flex-row space-x-2 w-full">
        <Button
          label="Unwrap"
          onClick={onWrap}
          variant="secondary"
          fullWidth={true}
          disabled={!unwrapEnabled}
        />
        <Button
          label="Bridge"
          onClick={onBridge}
          variant="secondary"
          fullWidth
          disabled={!bridgeEnabled}
        />
      </div>
    </LightFrame>
  );
};
