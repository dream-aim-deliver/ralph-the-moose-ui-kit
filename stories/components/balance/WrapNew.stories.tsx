import type { Meta, StoryObj } from "@storybook/react";

import { WrapCardNew as Component } from "@/components/balance-card";
import { RalphLogo } from "@/components/ralph-logo";

const meta = {
  title: "Components/Balance/WrapNew",
  component: Component,
  parameters: {
    layout: "centered",
    docs: {
      iframeHeight: 600,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["wrap", "wrapping"],
      description: "The variant of the wrap card.",
    },
  },
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Wrap: Story = {
  args: {
    variant: "wrap",
    inscriptionBalance: 100000,
    fee: {
      amount: 0.00123,
      currency: "ETH",
    },
    token: {
      shortName: "PR",
      icon: <RalphLogo variant="icon" />,
    },
    onWrap: (amount: number) => {
      console.log(`Wrapping ${amount}`);
    },
  },
};

export const AwaitingTransaction: Story = {
  args: {
    variant: "wrapping",
    amountToWrap: 10,
    fee: {
      amount: 0.00123,
      currency: "ETH",
    },
    network: {
      chainId: 1,
      name: "Ethereum",
    },
    token: {
      shortName: "PR",
      icon: <RalphLogo variant="icon" />,
    },
    status: {
      type: "awaiting-transaction",
      message: "Please confirm the transaction in your wallet.",
    },
  },
};

export const AwaitingIndexer: Story = {
  args: {
    variant: "wrapping",
    amountToWrap: 10,
    fee: {
      amount: 0.00123,
      currency: "ETH",
    },
    network: {
      chainId: 1,
      name: "Ethereum",
    },
    token: {
      shortName: "PR",
      icon: <RalphLogo variant="icon" />,
    },
    status: {
      type: "awaiting-indexer",
      message:
        "Please be patient, the indexer and the relayer are doing their thing. If you close the modal, you'll still be able to claim your WPR as soon as the are available",
      transactionBlockNumber: 2000,
      indexerBlockNumber: 1200,
      initialIndexerBlockNumber: 1000,
    },
  },
};

export const WrappingSuccess: Story = {
  args: {
    variant: "wrapping",
    amountToWrap: 10,
    fee: {
      amount: 0.00123,
      currency: "ETH",
    },
    network: {
      chainId: 1,
      name: "Ethereum",
    },
    token: {
      shortName: "PR",
      icon: <RalphLogo variant="icon" />,
    },
    status: {
      type: "success",
    },
  },
};

export const WrappingError: Story = {
  args: {
    variant: "wrapping",
    amountToWrap: 10,
    fee: {
      amount: 0.00123,
      currency: "ETH",
    },
    network: {
      chainId: 1,
      name: "Ethereum",
    },
    token: {
      shortName: "PR",
      icon: <RalphLogo variant="icon" />,
    },
    status: {
      type: "error",
      message: "Indexer found the wrap, but reported it to be invalid.",
    },
  },
};
