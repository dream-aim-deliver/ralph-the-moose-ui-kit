import type { Meta, StoryObj } from "@storybook/react";

import { WrapClaimModal as Component } from "@/components/wrap-claim-modal";
import { RalphLogo } from "@/components/ralph-logo";

const meta = {
  title: "Components/Wrap",
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

export const WrappingRequest: Story = {
  args: {
    variant: "wrapping",
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
      status: "request",
      message: "Preparing to wrap PR",
    },
  },
};

export const EstimatingGas: Story = {
  args: {
    variant: "wrapping",
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
      status: "estimating-gas",
      amount: 10,
      estimatedGas: 100,
      gasLimit: 1000,
    },
  },
};
export const AwaitingTransaction: Story = {
  args: {
    variant: "wrapping",
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
      status: "awaiting-transaction",
      amount: 10,
    },
  },
};

export const Verifying: Story = {
  args: {
    variant: "wrapping",
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
      status: "verifying",
      amount: 10,
      wrapTransaction: {
        hash: "0x1234567890",
        blockNumber: 123456,
        status: "error",
        timestamp: 1234567890,
        from: "0x1234567890",
        explorerUrl: "https://etherscan.io/tx/0x1234567890",
        network: {
          chainId: 1,
          name: "Ethereum",
        },
      },
      attempt: 100,
    },
  },
};

export const WrappingSuccess: Story = {
  args: {
    variant: "wrapping",
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
      status: "success",
      amount: 10,
      message: "Wrap transaction successful.",
      wrapTransaction: {
        hash: "0x1234567890",
        blockNumber: 123456,
        status: "success",
        timestamp: 1234567890,
        from: "0x1234567890",
        explorerUrl: "https://etherscan.io/tx/0x1234567890",
        network: {
          chainId: 1,
          name: "Ethereum",
        },
      },
    },
  },
};

export const WrappingError: Story = {
  args: {
    variant: "wrapping",
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
      status: "error",
      message: "Indexer found the wrap, but reported it to be invalid.",
      amount: 10,
    },
  },
};
