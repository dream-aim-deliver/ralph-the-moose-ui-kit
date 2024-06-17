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
        <Heading
          title="Inscriptions"
          variant={HeadingVariant.H5}
          className="text-text-secondary"
        />
        <InscriptionBalance
          inscriptionBalance={inscriptionBalance}
          tokenShortName={tokenShortName}
          onClick={showWrapClaimVariant}
        />
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
        />
      </div>
    </Card>
  );
};
