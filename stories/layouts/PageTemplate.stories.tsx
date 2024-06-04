import type { Meta, StoryObj } from "@storybook/react";

import { PageTemplate as Component, Menu } from "@/components/layouts";
import {
  Button,
  IconNetworkAvax,
  IconNetworkBase,
  IconTelegram,
  IconTwitter,
  NavLink,
  TextButton,
  WalletCard,
  useToast,
} from "../../lib";
import { NetworkSelector } from "@/components/network-selection";

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

const menu = (
  <Menu>
    <NavLink
      variant="medium"
      label="Website"
      url="https://ralphthemoose.com/"
      className="text-text-inverted"
    />
    <NavLink
      variant="medium"
      label="Twitter"
      url="https://twitter.com/RalphTheMoose"
      icon={<IconTwitter />}
      className="text-text-inverted"
    />
    <NavLink
      variant="medium"
      label="Telegram"
      url="https://t.me/RalphTheMoose"
      icon={<IconTelegram />}
      className="text-text-inverted"
    />
    <NavLink
      variant="medium"
      label="Farm"
      url="https://app.elk.finance/farms/all/"
      className="text-text-inverted"
    />
    <NavLink
      variant="medium"
      label="ElkDex"
      url="https://app.elk.finance/swap/8453/ETH/PR"
      // icon={<IconElk size={4} />}
      className="text-text-inverted"
    />
    <NavLink
      variant="medium"
      label="UniSwap"
      url="https://app.uniswap.org/swap"
      className="text-text-inverted"
    />
  </Menu>
);

const networks = [
  {
    name: "Base",
    chainId: 1,
    icon: <IconNetworkBase />,
  },
  {
    name: "AVAX",
    chainId: 56,
    icon: <IconNetworkAvax />,
  },
];

const networkSelector = (
  <NetworkSelector
    supportedNetworks={networks}
    activeNetwork={networks[0]}
    onNetworkChange={(network) => {
      console.log(`Network changed to ${network.name}`);
    }}
  />
);
const ToastTestButton = () => {
  const toastModel = useToast();
  return (
    <Button
      variant="primary"
      label="Test Toast"
      onClick={() => {
        if (!toastModel) {
          console.error("useToast returned null");
          return;
        }
        toastModel.openToast(
          {
            status: "error",
            id: "123",
            title: "Test Toast",
            message: "This is a test toast",
          },
          5000,
        );
      }}
    />
  );
};
export const Page: Story = {
  args: {
    menu: menu,
    networkSelector: networkSelector,
    footerContent:
      "Ralph's UI may take a few seconds to update balances due to relayer response delays (around 5-6 seconds). Rest assured, your funds are safe, just give it a moment to catch up. Thank you for your patience!",
    children: (
      <div className="w-full space-y-16 gap-4">
        {walletCard}
        <ToastTestButton />
      </div>
    ),
  },
};
