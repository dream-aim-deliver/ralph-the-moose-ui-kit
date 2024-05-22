import { type Signal } from "@preact/signals-react";
import { BalanceCardPrimaryVariant } from "./BalanceCardPrimary";
import { WrapCard } from "./WrapCard";
import { UnwrapCard } from "./UnwrapCard";
import { BridgeCard } from "../bridge-card";
import { TChainViewModel } from "../../core";
import { useState } from "react";

enum BalanceCardVariants {
  VARIANT_PRIMARY = "primary_variant",
  VARIANT_WRAP = "wrap_variant",
  VARIANT_UNWRAP = "unwrap_variant",
  VARIANT_BRIDGE = "bridge_variant",
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
   * The claimable amount.
   */
  claimableAmount: number;
  /**
   * The short name of the token.
   */
  tokenShortName: string;
  /**
   * Supported Networks
   */
  supportedChains: TChainViewModel[];
  /**
   * Active Network
   */
  activeChain: Signal<TChainViewModel>;
  /**
   * The icon for the token.
   */
  icon: React.ReactNode;
  /**
   * The transaction fee for wrapping and unwrapping.
   */
  fee: number;
  /**
   * The network currency.
   */
  networkCurrency: string;
  /**
   * Callback function when wrapping is triggered. It should open the wrapping modal.
   */
  onWrap: () => void;
  /**
   * Callback function when unwrapping is triggered. It should open the unwrapping modal.
   */
  onUnwrap: () => void;

  /**
   * Callback function when claiming is triggered. It should open the claiming modal.
   */
  onClaim: () => void;
  /**
   * The amount to wrap, populated by the wrap modal.
   */
  amountToWrap: Signal<number>;
  /**
   * The amount to unwrap, populated by the unwrap modal.
   */
  amountToUnwrap: Signal<number>;
  /**
   * SWrapStatusMessage: The status message populated during the wrapping process.
   */
  SWrapStatusMessage: Signal<string>;
  /**
   * SClaimStatusMessage: The status message populated during the claiming process.
   */
  SClaimStatusMessage: Signal<string>;
  /**
   * SWrapCardView: The view of the wrap card.
   */
  SWrapCardView: Signal<"wrapping" | "claiming" | "default">;
  /**
   * SUnwrapStatusMessage: The status message populated during the unwrapping process.
   */
  SUnwrapStatusMessage: Signal<string>;
  /**
   * SunwrapCardView: The view of the unwrap card.
   */
  SUnwrapCardView: Signal<"unwrapping" | "default" | "unwrapping-ended">;
  /**
   * SUnwrapEndedStatusFrame: The status frame displayed after unwrapping is completed.
   */
  SUnwrapEndedStatusFrame: Signal<React.ReactNode>;
}

/**
 * Renders a balance card component.
 */
export const BalanceCard = (props: BalanceCardProps) => {
  const [activeVariant, setActiveVariant ] = useState<BalanceCardVariants>(
    BalanceCardVariants.VARIANT_PRIMARY,
  );
  // const [activeVariant, setActiveVariant] = useState(
  //   BalanceCardVariants.VARIANT_PRIMARY,
  // );
  const returnToPrimaryVariant = () => {
    setActiveVariant(BalanceCardVariants.VARIANT_PRIMARY);
  };
  const showWrapVariant = () => {
    setActiveVariant(BalanceCardVariants.VARIANT_WRAP);
  };
  const showUnwrapVariant = () => {
    setActiveVariant(BalanceCardVariants.VARIANT_UNWRAP);
  };
  const showBridgeVariant = () => {
    console.log("showBridgeVariant");
    setActiveVariant(BalanceCardVariants.VARIANT_BRIDGE);
  };
  return (
    <div className="w-full border-none">
      <BalanceCardPrimaryVariant
        showWrapVariant={showWrapVariant}
        showUnwrapVariant={showUnwrapVariant}
        showBridgeVariant={showBridgeVariant}
        {...props}
      ></BalanceCardPrimaryVariant>

      {activeVariant === BalanceCardVariants.VARIANT_WRAP && (
        <WrapCard onClose={returnToPrimaryVariant} {...props}></WrapCard>
      )}

      {activeVariant === BalanceCardVariants.VARIANT_UNWRAP && (
        <UnwrapCard onClose={returnToPrimaryVariant} {...props}></UnwrapCard>
      )}
      {activeVariant === BalanceCardVariants.VARIANT_BRIDGE && (
        <BridgeCard
          onClose={returnToPrimaryVariant}
          supportedChains={props.supportedChains}
          activeChain={props.activeChain}
          icon={props.icon}
          maxBridgeAmount={props.wrappedBalance}
          onBridge={showBridgeVariant}
          tokenShortName={props.tokenShortName}
        ></BridgeCard>
      )}
    </div>
  );
};
