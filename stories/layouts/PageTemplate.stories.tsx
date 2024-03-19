import type { Meta, StoryObj } from "@storybook/react";

import { PageTemplate as Component } from "@/components/layouts";
import {
  BalanceCard,
  Button,
  MintCard,
  MintCompletedStatusFrame,
  TextButton,
  WalletCard,
} from "../../lib";
import { Signal } from "@preact/signals-react";

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
    children={
      <MintCompletedStatusFrame
        tokenShortName="PR"
        amountMinted={10000}
        timestamp="2024-02-14 @ 16:03"
        explorerLink="nowhere"
      />
    }
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
  />
);
export const Page: Story = {
  args: {
    children: (
      <div className="w-full space-y-4">
        {walletCard}
        <div className="w-full flex flex-row items-center justify-between gap-4">
          {mintCard}
        </div>
        {balanceCard}
      </div>
    ),
  },
};
