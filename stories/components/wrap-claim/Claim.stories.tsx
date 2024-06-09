import type { Meta, StoryObj } from "@storybook/react";

import { WrapClaimModal as Component } from "@/components/wrap-claim-modal";
import { RalphLogo } from "@/components/ralph-logo";

const meta = {
  title: "Components/Claim",
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
      options: ["claim", "claiming"],
      description: "The variant of the wrap card.",
    },
  },
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Claim: Story = {
  args: {
    variant: "claim",
    claimableAmount: 100000,
    network: {
      chainId: 1,
      name: "Ethereum",
    },

    token: {
      shortName: "PR",
      icon: <RalphLogo variant="icon" />,
    },
    onClaim: (amount: number) => {
      console.log(`Wrapping ${amount}`);
    },
  },
};

export const AwaitingContractCall: Story = {
  args: {
    variant: "claiming",
    claimableAmount: 1000,
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
      message: "Please confirm the transaction in your wallet.",
    },
  },
};

export const Verifying: Story = {
  args: {
    variant: "claiming",
    claimableAmount: 1000,
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
      attempt: 20,
    },
  },
};

export const ClaimingSuccess: Story = {
  args: {
    variant: "claiming",
    claimableAmount: 10,
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
    },
  },
};

export const ClaimingError: Story = {
  args: {
    variant: "claiming",
    claimableAmount: 10,
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
      message: "The reservoir was not able to release the kraken.",
    },
  },
};
