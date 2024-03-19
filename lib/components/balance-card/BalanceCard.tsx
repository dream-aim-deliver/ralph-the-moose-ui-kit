import {
  Button,
  Heading,
  HeadingVariant,
  Label,
  Modal,
  Tooltip,
  UnwrapModal,
  WrapModal,
} from "..";
import { LightFrame } from "../layouts/LightFrame";
import { useSignal } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";

enum BalanceCardVariants {
  VARIANT_PRIMARY = "primary_variant",
  VARIANT_WRAP = "wrap_variant",
  VARIANT_UNWRAP = "unwrap_variant",
}
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
  wrappedBalance: number;
  /**
   * The short name of the token.
   */
  tokenShortName: string;
  /**
   * The icon for the token.
   */
  icon: React.ReactNode;
  /**
   * The transaction fee for wrapping and unwrapping.
   */
  fee: number;
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
 */
export const BalanceCard = (props: BalanceCardProps) => {
  useSignals();
  const activeVariant = useSignal<BalanceCardVariants>(
    BalanceCardVariants.VARIANT_PRIMARY,
  );
  const amountToWrap = useSignal<number>(0);
  const amountToUnwrap = useSignal<number>(0);
  const returnToPrimaryVariant = () => {
    activeVariant.value = BalanceCardVariants.VARIANT_PRIMARY;
  };
  const showWrapVariant = () => {
    activeVariant.value = BalanceCardVariants.VARIANT_WRAP;
  };
  const showUnwrapVariant = () => {
    activeVariant.value = BalanceCardVariants.VARIANT_UNWRAP;
  };
  return (
    <div>
      {activeVariant.value === BalanceCardVariants.VARIANT_PRIMARY && (
        <BalanceCard.PrimaryVariant
          showWrapVariant={showWrapVariant}
          showUnwrapVariant={showUnwrapVariant}
          {...props}
        ></BalanceCard.PrimaryVariant>
      )}
      {activeVariant.value === BalanceCardVariants.VARIANT_WRAP && (
        <WrapModal
          amountToWrap={amountToWrap}
          onClose={returnToPrimaryVariant}
          {...props}
        ></WrapModal>
      )}
      {activeVariant.value === BalanceCardVariants.VARIANT_UNWRAP && (
        <UnwrapModal
          amountToUnwrap={amountToUnwrap}
          onClose={returnToPrimaryVariant}
          {...props}
        ></UnwrapModal>
      )}
    </div>
  );
};

export interface BalanceCardPrimaryVariantProps {
  inscriptionBalance: number;
  wrappedBalance: number;
  tokenShortName: string;
  showWrapVariant: () => void;
  showUnwrapVariant: () => void;
}
/**
 * Renders a balance card component.
 */
export const BalanceCardPrimaryVariant = ({
  inscriptionBalance,
  wrappedBalance,
  tokenShortName,
  showWrapVariant,
  showUnwrapVariant,
}: BalanceCardPrimaryVariantProps) => {
  return (
    <Modal>
      <div className="flex flex-col items-start justify-center gap-4">
        <Heading title="Balance" variant={HeadingVariant.H4} />
        <div className="flex flex-row items-center justify-between gap-4">
          <BalanceCard.InscriptionBalanceSection
            inscriptionBalance={inscriptionBalance}
            tokenShortName={tokenShortName}
            onClick={showWrapVariant}
          />
          <BalanceCard.WrappedBalanceSection
            wrappedBalance={wrappedBalance}
            tokenShortName={tokenShortName}
            onClick={showUnwrapVariant}
          />
        </div>
      </div>
    </Modal>
  );
};

BalanceCard.InscriptionBalanceSection = ({
  inscriptionBalance,
  tokenShortName,
  onClick: onWrap,
}: {
  inscriptionBalance: number;
  tokenShortName: string;
  onClick: () => void;
}) => {
  const inscriptionBalanceString =
    Intl.NumberFormat(`en-US`).format(inscriptionBalance);
  return (
    <LightFrame className="w-1/2">
      <div className="w-full relative flex flex-col items-center justify-start gap-[8px]">
        <Tooltip
          title="Inscription"
          content={`The amount of ${tokenShortName} you have minted.`}
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

BalanceCard.WrappedBalanceSection = ({
  wrappedBalance: wrappedBalance,
  tokenShortName,
  onClick,
}: {
  wrappedBalance: number;
  tokenShortName: string;
  onClick: () => void;
}) => {
  const wrappedTokenName = `W${tokenShortName.toUpperCase()}`;
  const wrappedBalanceString =
    Intl.NumberFormat(`en-US`).format(wrappedBalance);
  return (
    <LightFrame className="w-1/2">
      <div className="w-full relative flex flex-col items-center justify-start gap-[8px]">
        <Tooltip
          title="Wrapped"
          content={`The ${wrappedTokenName} you have in your wallet.`}
        />
        <div className="flex flex-row items-center space-x-2">
          <Label label={wrappedBalanceString} variant="medium" />
          <Label label={wrappedTokenName} variant="medium" />
        </div>
      </div>
      <div className="w-full">
        <Button label="Unwrap" onClick={onClick} variant="secondary" />
      </div>
    </LightFrame>
  );
};

BalanceCard.PrimaryVariant = BalanceCardPrimaryVariant;
