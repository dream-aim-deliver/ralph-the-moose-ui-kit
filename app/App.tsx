import "./App.css";
import {
  BalanceCard,
  Button,
  MintCard,
  MintCompletedStatusFrame,
  PageTemplate,
  TextButton,
  WalletCard,
} from "../lib";
import { Signal } from "@preact/signals-react";

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
function App() {
  return (
    <div className="">
      <PageTemplate>
        {walletCard}
        {mintCard}
        {balanceCard}
      </PageTemplate>
    </div>
  );
}

export default App;
