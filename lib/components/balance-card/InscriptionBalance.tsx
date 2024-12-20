import { Button } from "../button/Button";
import { Label } from "../label/Label";
import { LightFrame } from "../layouts/LightFrame";
import { Tooltip } from "../tooltip/Tooltip";

/**
 * Renders a Inscription Balance section of Balance Card Primary Variant.
 */
export const InscriptionBalance = ({
  inscriptionBalance,
  tokenShortName,
  features: { wrap } = { wrap: false },
  onClick,
}: {
  inscriptionBalance: number;
  tokenShortName: string;
  features: {
    wrap: boolean;
  };
  onClick: () => void;
}) => {
  const wrapEnabled = wrap;
  const inscriptionBalanceString =
    Intl.NumberFormat(`en-US`).format(inscriptionBalance);
  return (
    <LightFrame className="relative overflow-visible">
      <div className="w-full relative flex flex-col items-center justify-start">
        <Tooltip
          title="Inscription"
          content={`The amount of ${tokenShortName} you have minted.`}
        />
        <div className="flex flex-row items-center space-x-2">
          <Label label={inscriptionBalanceString} variant="medium" />
          <Label label={tokenShortName} variant="medium" />
        </div>
      </div>
      <div className="flex flex-row space-x-4">
        <Button
          label="Wrap"
          variant="secondary"
          onClick={onClick}
          disabled={!wrapEnabled}
        />
        <Button label="Send" variant="secondary" disabled={true} />
      </div>
    </LightFrame>
  );
};
