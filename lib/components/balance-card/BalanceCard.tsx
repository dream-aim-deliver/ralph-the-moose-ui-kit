import { useSignal } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";
import { BalanceCardPrimaryVariant } from "./BalanceCardPrimary";
import { WrapCard } from "./WrapCard";
import { UnwrapCard } from "./UnwrapCard";

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
    <div className="flex flex-row w-full">
      {activeVariant.value === BalanceCardVariants.VARIANT_PRIMARY && (
        <BalanceCardPrimaryVariant
          showWrapVariant={showWrapVariant}
          showUnwrapVariant={showUnwrapVariant}
          {...props}
        ></BalanceCardPrimaryVariant>
      )}
      {activeVariant.value === BalanceCardVariants.VARIANT_WRAP && (
        <WrapCard
          amountToWrap={amountToWrap}
          onClose={returnToPrimaryVariant}
          {...props}
        ></WrapCard>
      )}
      {activeVariant.value === BalanceCardVariants.VARIANT_UNWRAP && (
        <UnwrapCard
          amountToUnwrap={amountToUnwrap}
          onClose={returnToPrimaryVariant}
          {...props}
        ></UnwrapCard>
      )}
    </div>
  );
};
