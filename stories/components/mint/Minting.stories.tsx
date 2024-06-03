import type { Meta, StoryObj } from "@storybook/react";

import { MintingModal as Component } from "@/components/minting-modal";

const meta = {
  title: "Components/Mint/Minting",
  component: Component,
  parameters: {
    layout: "centered",
    docs: {
      iframeHeight: 600,
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MintingSuccess: Story = {
  args: {
    status: "success",
    amount: 1000,
    mintTransaction: {
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
};

export const EstimatedGas: Story = {
  args: {
    status: "estimated-gas",
    amount: 1000,
    network: {
      chainId: 1,
      name: "Ethereum",
    },
    estimatedGas: 1000,
    gasLimit: 20000, // Add the gasLimit property
  },
};

export const AwaitingTransaction: Story = {
  args: {
    status: "in-progress",
    type: "awaiting-transaction",
    message: "Awaiting transaction",
    network: {
      chainId: 1,
      name: "Ethereum",
    },
    amount: 1000,
    transaction: {
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
    indexerBlockNumber: 123456,
    initialIndexerBlockNumber: 123456,
  },
};

export const AwaitingIndexer: Story = {
  args: {
    status: "in-progress",
    type: "awaiting-indexer",
    message: "Awaiting indexer",
    network: {
      chainId: 1,
      name: "Ethereum",
    },
    amount: 1000,
    transaction: {
      hash: "0x1234567890",
      blockNumber: 3000,
      status: "success",
      timestamp: 1234567890,
      from: "0x1234567890",
      explorerUrl: "https://etherscan.io/tx/0x1234567890",
      network: {
        chainId: 1,
        name: "Ethereum",
      },
    },
    indexerBlockNumber: 2500,
    initialIndexerBlockNumber: 2000,
  },
};

export const AwaitingVerification: Story = {
  args: {
    status: "in-progress",
    type: "awaiting-verification",
    message: "Awaiting verification",
    network: {
      chainId: 1,
      name: "Ethereum",
    },
    amount: 1000,
    transaction: {
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
    indexerBlockNumber: 123456,
    initialIndexerBlockNumber: 123456,
  },
};

export const IndexerError: Story = {
  args: {
    status: "error",
    type: "indexer-error",
    message:
      "Error getting inscription status for the transaction. Please try again later.",
    amount: 1000,
    indexerBlockNumber: 123456,
    initialIndexerBlockNumber: 123456,
    network: {
      chainId: 1,
      name: "Ethereum",
    },
  },
};

export const TransactionError: Story = {
  args: {
    status: "error",
    type: "transaction-error",
    message: "Insufficient funds",
    amount: 1000,
    transaction: {
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
    network: {
      chainId: 1,
      name: "Ethereum",
    },
    indexerBlockNumber: 123456,
    initialIndexerBlockNumber: 123456,
  },
};

export const VerificationError: Story = {
  args: {
    status: "error",
    type: "verification-error",
    message:
      "Could not verify that your balance was updated. Do not worry, your funds are safe. Just wait a moment to let the balance to auto-update. Or get in touch and we will happily resolve the matter.",
    amount: 1000,
    transaction: {
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
    network: {
      chainId: 1,
      name: "Ethereum",
    },
    indexerBlockNumber: 123456,
    initialIndexerBlockNumber: 123456,
  },
};
