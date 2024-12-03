import { Card, Heading, HeadingVariant, Spinner } from "..";
import { InscriptionBalance } from "./InscriptionBalance";
import { WrappedBalance } from "./WrappedBalance";

/**
 * Props for the BalanceCard component.
 */
export interface BalanceCardProps {
  /**
   * Indicates that the balance information is being loaded.
   */
  isLoading: boolean;
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
   * Callback function when wrapping is triggered. It should open the wrapping modal.
   */
  showWrapClaimVariant: () => void;
  /**
   * Callback function when unwrapping is triggered. It should open the unwrapping modal.
   */
  showUnwrapVariant: () => void;
  /**
   * Callback function when bridging is triggered. It should open the bridging modal.
   */
  showBridgeVariant: () => void;
  /**
   * Features available for the balance card.
   */
  features: {
    wrap: boolean;
    unwrap: boolean;
    bridge: boolean;
  };
}

/**
 * Renders a Primary Variant of the balance card component.
 * This is composed of the Inscription Balance and Wrapped Balance components.
 */
export const BalanceCard = ({
  isLoading,
  inscriptionBalance,
  wrappedBalance,
  tokenShortName,
  features,
  showWrapClaimVariant,
  showUnwrapVariant,
  showBridgeVariant,
}: BalanceCardProps) => {
  return (
    <Card>
      <div className="flex flex-col w-full items-left justify-center gap-4">
        <div className="flex flex-row items-left justify-center">
          <Heading title="Balance" variant={HeadingVariant.H4} />
          {isLoading && <Spinner />}
        </div>
        <div id="inscription-balance-card" className="">
          <Heading
            title="Inscriptions"
            variant={HeadingVariant.H5}
            className="text-text-secondary"
          />
          <InscriptionBalance
            inscriptionBalance={inscriptionBalance}
            tokenShortName={tokenShortName}
            onClick={showWrapClaimVariant}
            features={{
              wrap: features.wrap,
            }}
          />
        </div>
        <div id="wrapped-balance-card" className="">
          <Heading
            title="Wrapped"
            variant={HeadingVariant.H5}
            className="text-text-secondary"
          />
          <WrappedBalance
            wrappedBalance={wrappedBalance}
            tokenShortName={tokenShortName}
            onWrap={showUnwrapVariant}
            onBridge={showBridgeVariant}
            features={{
              unwrap: features.unwrap,
              bridge: features.bridge,
            }}
          />
        </div>
      </div>
    </Card>
  );
};
