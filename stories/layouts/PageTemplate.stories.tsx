import type { Meta, StoryObj } from "@storybook/react";

import { PageTemplate as Component } from "@/components/layouts";
import {
  BalanceCard,
  Button,
  MintCard,
  TChainConfig,
  TextButton,
  ToastProps,
  WalletCard,
} from "../../lib";
import { Signal, signal } from "@preact/signals-react";

const meta = {
  title: "Layouts/Page Template",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

const connectButton = <Button variant="primary" label="Connect Wallet" />;
const disconnectButton = (
  <TextButton text="Disconnect" size="medium" onClick={() => {}}></TextButton>
);
const walletCard = (
  <WalletCard
    walletName="My Wallet"
    status="disconnected"
    address="0x1234...5678"
    connectButton={connectButton}
    disconnectButton={disconnectButton}
  />
);

const mintCard = (
  <MintCard
    mintedPercentage={0.5}
    mintLimit={100000}
    totalSupply={100000}
    totalMinted={50000}
    mintingFee={10}
    mintingDisabled={false}
    tokenShortName="PR"
    isMinting={{ value: false } as unknown as Signal<boolean>}
    onMint={() => {}}
  />
);

const balanceCard = (
  <BalanceCard
    inscriptionBalance={80000}
    wrappedBalance={20000}
    tokenShortName="PR"
    icon={<div />}
    fee={2}
    onWrap={() => {}}
    onUnwrap={() => {}}
    claimableAmount={0} // Add missing prop
    networkCurrency="" // Add missing prop
    onClaim={() => {}} // Add missing prop
    amountToWrap={signal(100)} // Add missing prop
    amountToUnwrap={signal(100)} // Add missing prop
    SWrapStatusMessage={"Wrapping in progress..." as unknown as Signal<string>}
    SClaimStatusMessage={signal("Ready to claim!")}
    SWrapCardView={
      "wrapping" as unknown as Signal<"wrapping" | "claiming" | "default">
    }
    SUnwrapStatusMessage={
      "Unwrapping in progress..." as unknown as Signal<string>
    }
    SUnwrapCardView={
      "unwrapping" as unknown as Signal<
        "default" | "unwrapping" | "unwrapping-ended"
      >
    }
    SUnwrapEndedStatusFrame={
      (<div>Unwrapping ended</div>) as unknown as Signal<React.ReactNode>
    }
    supportedChains={[
      {
        name: "Base",
        chainId: 1,
      },
      {
        name: "Ethereum",
        chainId: 2,
      },
    ]}
    activeChain={
      signal({ name: "Base", chainId: 1 }) as unknown as Signal<TChainConfig>
    }
  />
);
export const Page: Story = {
  args: {
    children: (
      <div className="w-full space-y-16">
        {walletCard}
        <div className="w-full flex flex-row items-center justify-between gap-4">
          {mintCard}
        </div>
        {balanceCard}
      </div>
    ),
    toasts: signal([]) as unknown as Signal<ToastProps[]>,
    activeNetwork: signal({}) as unknown as Signal<TChainConfig>,
    supportedNetworks: [] as TChainConfig[],
  },
};
