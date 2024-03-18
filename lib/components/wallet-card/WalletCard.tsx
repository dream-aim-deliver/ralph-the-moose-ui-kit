import { Label, Modal } from "..";
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
}: WalletCardProps) => {
  return (
    <Modal>
      {status === "connected" ? (
        <WalletCard.Connected
          address={address}
          disconnectButton={disconnectButton}
        />
      ) : (
        <WalletCard.Disconnected connectButton={connectButton} />
      )}
    </Modal>
  );
};

WalletCard.Disconnected = ({
  connectButton,
}: {
  connectButton: React.ReactNode;
}) => {
  return (
    <div className="flex-1 w-full relative flex flex-col items-center justify-start gap-[30px] text-left text-base text-button-primary-text font-link-medium">
      <img
        className="w-[135.24px] relative h-[117.56px] object-cover"
        alt=""
        src={ralphConnectWallet}
      />
      {connectButton}
    </div>
  );
};

WalletCard.Connected = ({
  address,
  disconnectButton,
}: {
  address: string;
  disconnectButton: React.ReactNode;
}) => {
  return (
    <div className="self-stretch flex flex-row items-center justify-between gap-[16px]">
      {/** Wallet Addres div, pinned to the left of the parent */}
      <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch text-sm relative leading-[14px] text-base-colors/neutral-500 font-varela">
          Wallet
        </div>
        <Label variant="small" label={address} />
      </div>
      {/** Disconnect div, pinned to the right of parent */}
      <div className="">{disconnectButton}</div>
    </div>
  );
};
