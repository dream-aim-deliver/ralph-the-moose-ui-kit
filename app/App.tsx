import {
  BalanceCard,
  // BridgeModalDefaultVariant,
  Button,
  IconNetworkAvax,
  IconNetworkBase,
  IconTelegram,
  IconTwitter,
  Menu,
  NavLink,
  NetworkSelector,
  PageTemplate,
  TextButton,
  WalletCard,
} from "../lib";
import "./App.css";
function App() {
  return (
    <PageTemplate
      footerContent="Ralph's UI may take a few seconds to update balances due to relayer response delays (around 5-6 seconds). Rest assured, your funds are safe, just give it a moment to catch up. Thank you for your patience!"
      menu={
        <Menu>
          <NavLink
            className="text-text-inverted"
            label="Website"
            url="https://ralphthemoose.com/"
            variant="medium"
          />
          <NavLink
            className="text-text-inverted"
            icon={<IconTwitter />}
            label="Twitter"
            url="https://twitter.com/RalphTheMoose"
            variant="medium"
          />
          <NavLink
            className="text-text-inverted"
            icon={<IconTelegram />}
            label="Telegram"
            url="https://t.me/RalphTheMoose"
            variant="medium"
          />
          <NavLink
            className="text-text-inverted"
            label="Farm"
            url="https://app.elk.finance/farms/all/"
            variant="medium"
          />
          <NavLink
            className="text-text-inverted"
            label="ElkDex"
            url="https://app.elk.finance/swap/8453/ETH/PR"
            variant="medium"
          />
          <NavLink
            className="text-text-inverted"
            label="UniSwap"
            url="https://app.uniswap.org/swap"
            variant="medium"
          />
        </Menu>
      }
      networkSelector={
        <NetworkSelector
          activeNetwork={{
            chainId: 1,
            icon: <IconNetworkBase />,
            name: "Base",
          }}
          onNetworkChange={() => {}}
          supportedNetworks={[
            { chainId: 1, icon: <IconNetworkBase />, name: "Base" },
            { chainId: 56, icon: <IconNetworkAvax />, name: "AVAX" },
          ]}
        />
      }
    >
      <div className="w-full space-y-16 gap-4">
        <WalletCard
          address="0x1234...5678"
          connectButton={<Button label="Connect Wallet" variant="primary" />}
          disconnectButton={
            <TextButton onClick={() => {}} size="medium" text="Disconnect" />
          }
          status="disconnected"
          walletName="My Wallet"
        />
        <WalletCard
          address="0x1234...5678"
          connectButton={<Button label="Connect Wallet" variant="primary" />}
          disconnectButton={
            <TextButton onClick={() => {}} size="medium" text="Disconnect" />
          }
          status="connected"
          walletName="My Wallet"
        />
        <BalanceCard
          inscriptionBalance={80000}
          isLoading
          showBridgeVariant={() => {}}
          showUnwrapVariant={() => {}}
          showWrapClaimVariant={() => {}}
          tokenShortName="PR"
          wrappedBalance={20000}
        />
        {/* <BridgeModalDefaultVariant
          activeChain={{
            bridgingFee: 0.01,
            chainId: 1,
            name: "Base",
            nativeCurrency: "PR",
          }}
          balance={{ inscriptions: 10000 }}
          callbacks={{ onBridge: () => {}, onClose: () => {} }}
          supportedChains={[]}
          token={{ shortName: "PR", icon: <IconNetworkBase /> }}
        /> */}
      </div>
    </PageTemplate>
  );
}

export default App;
