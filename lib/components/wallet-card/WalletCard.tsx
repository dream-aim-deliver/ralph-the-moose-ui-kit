import { Label, Card } from "..";
import ralphConnectWallet from "@/assets/ralph-connect-wallet.svg";
/**
 * Represents the props for the WalletCard component.
 */
export interface WalletCardProps {
  /**
   * The status of the wallet connection.
   * Possible values are "connected" or "disconnected".
   */
  status: "connected" | "disconnected";

  /**
   * The address of the wallet.
   */
  address: string;
  /**
   * The name of the wallet.
   */
  walletName: string;
  /**
   * The React node for the wallet icon.
   */
  walletIcon?: React.ReactNode;
  /**
   * The React node for the connect button.
   */
  connectButton: React.ReactNode;

  /**
   * The React node for the disconnect button.
   */
  disconnectButton: React.ReactNode;
}

/**
 * The WalletCard component displays the status and address of the wallet.
 */
export const WalletCard = ({
  status,
  address,
  connectButton,
  disconnectButton,
  walletName: walletName,
  walletIcon: walletIcon = null,
}: WalletCardProps) => {
  return (
    <Card>
      {status === "connected" ? (
        <WalletCard.Connected
          address={address}
          walletName={walletName}
          walletIcon={walletIcon}
          disconnectButton={disconnectButton}
        />
      ) : (
        <WalletCard.Disconnected connectButton={connectButton} />
      )}
    </Card>
  );
};

WalletCard.Disconnected = ({
  connectButton,
}: {
  connectButton: React.ReactNode;
}) => {
  return (
    <div className="text-button-primary-text font-link-medium relative flex w-full flex-1 flex-col items-center justify-start gap-[30px] text-left text-base">
      <img
        className="relative h-[117.56px] w-[135.24px] object-cover"
        alt=""
        src={ralphConnectWallet}
      />
      {connectButton}
    </div>
  );
};

WalletCard.Connected = ({
  address,
  walletName,
  walletIcon = null,
  disconnectButton,
}: {
  address: string;
  walletName: string;
  walletIcon?: React.ReactNode;
  disconnectButton: React.ReactNode;
}) => {
  return (
    <div className="w-full flex flex-row items-center gap-4">
      {/* Wallet Icon the left of the Wallet Name */}
      {walletIcon && (
        <div className="flex items-center justify-center">{walletIcon}</div>
      )}
      {/* Wallet Name and Address with added right padding */}
      <div className="flex flex-col pr-2">
        <div className="relative font-varela text-sm leading-3 text-text-secondary">
          {walletName}
        </div>
        <Label variant="small" label={address} />
      </div>
      {/** Disconnect div, pinned to the right of parent */}
      <div className="">{disconnectButton}</div>
    </div>
  );
};
