import { Button, Heading, HeadingVariant, Label, Modal, Tooltip } from "..";
import { LightFrame } from "../layouts/LightFrame";

/**
 * Props for the BalanceCard component.
 */
export interface BalanceCardProps {
  /**
   * The balance of the inscription.
   */
  inscriptionBalance: number;
  /**
   * The wrapped amount.
   */
  wrappedAmount: number;
  /**
   * The short name of the token.
   */
  tokenShortName: string;
  /**
   * Callback function when wrapping is triggered. It should open the wrapping modal.
   */
  onWrap: () => void;
  /**
   * Callback function when unwrapping is triggered. It should open the unwrapping modal.
   */
  onUnwrap: () => void;
}

/**
 * Renders a balance card component.
 *
 * @param {object} props - The component props.
 * @param {number} props.inscriptionBalance - The balance of the inscription.
 * @param {number} props.wrappedAmount - The wrapped amount.
 * @param {string} props.tokenShortName - The short name of the token.
 * @returns {JSX.Element} The rendered balance card component.
 */
export const BalanceCard = ({
  inscriptionBalance,
  wrappedAmount,
  tokenShortName,
}: BalanceCardProps) => {
  return (
    <Modal>
      <div className="flex flex-col items-start justify-center gap-4">
        <Heading title="Balance" variant={HeadingVariant.H4} />
        <div className="flex flex-row items-center justify-between gap-4">
          <BalanceCard.InscriptionSection
            inscriptionBalance={inscriptionBalance}
            tokenShortName={tokenShortName}
            onWrap={() => {}}
          />
          <BalanceCard.WrappedSection
            inscriptionBalance={wrappedAmount}
            tokenShortName={tokenShortName}
            onUnwrap={() => {}}
          />
        </div>
      </div>
    </Modal>
  );
};

BalanceCard.InscriptionSection = ({
  inscriptionBalance,
  tokenShortName,
  onWrap,
}: {
  inscriptionBalance: number;
  tokenShortName: string;
  onWrap: () => void;
}) => {
  const inscriptionBalanceString =
    Intl.NumberFormat(`en-US`).format(inscriptionBalance);
  return (
    <LightFrame className="w-1/2">
      <div className="w-full relative flex flex-col items-center justify-start gap-[8px]">
        <Tooltip
          title="Inscription"
          content={`The amount of ${tokenShortName} inscriptions you have in your wallet.`}
        />
        <div className="flex flex-row items-center space-x-2">
          <Label label={inscriptionBalanceString} variant="medium" />
          <Label label={tokenShortName} variant="medium" />
        </div>
      </div>
      <Button label="Wrap" variant="secondary" onClick={onWrap} />
    </LightFrame>
  );
};

BalanceCard.WrappedSection = ({
  inscriptionBalance: inscriptionBalance,
  tokenShortName,
  onUnwrap,
}: {
  inscriptionBalance: number;
  tokenShortName: string;
  onUnwrap: () => void;
}) => {
  const inscriptionBalanceString =
    Intl.NumberFormat(`en-US`).format(inscriptionBalance);
  return (
    <LightFrame className="w-1/2">
      <div className="w-full relative flex flex-col items-center justify-start gap-[8px]">
        <Tooltip
          title="Inscription"
          content={`The amount of ${tokenShortName} inscriptions you have in your wallet.`}
        />
        <div className="flex flex-row items-center space-x-2">
          <Label label={inscriptionBalanceString} variant="medium" />
          <Label label={tokenShortName} variant="medium" />
        </div>
      </div>
      <div className="w-full">
        <Button label="Unwrap" onClick={onUnwrap} variant="secondary" />
      </div>
    </LightFrame>
  );
};
