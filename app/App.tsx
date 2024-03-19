import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  BalanceCard,
  Button,
  DropdownTrigger,
  IconNetworkBase,
  InputAssetAmount,
  TextButton,
  UnwrapModal,
  WalletCard,
  WrapModal,
} from "../lib";
import { RalphLogo } from "@/components/ralph-logo";
import { signal } from "@preact/signals-react";

function App() {
  const [count, setCount] = useState(0);
  const amount = signal(0);
  const amountToUnwrap = signal(0);
  const connectButton = <Button variant="primary" label="Connect Wallet" />;
  const disconnectButton = (
    <TextButton text="Disconnect" size="medium" onClick={() => {}}></TextButton>
  );
  return (
    <>
      <UnwrapModal
        amountToUnwrap={amountToUnwrap}
        wrappedBalance={100000}
        fee={2}
        tokenShortName="PR"
        icon={<RalphLogo variant="icon" />}
        onUnwrap={() => {}}
      />
      <WrapModal
        tokenShortName="PR"
        amountToWrap={amount}
        fee={2}
        inscriptionBalance={100000}
        icon={<RalphLogo variant="icon" />}
        onWrap={() => {}}
      />
      <InputAssetAmount
        amount={amount}
        icon={<RalphLogo variant="icon" />}
        tokenShortName="PR"
      />
      <WalletCard
        status="disconnected"
        address="0x1234...5678"
        connectButton={connectButton}
        disconnectButton={disconnectButton}
      />
      <BalanceCard
        inscriptionBalance={1000}
        wrappedBalance={1000}
        tokenShortName="PR"
        onWrap={() => {}}
        onUnwrap={() => {}}
        fee={2}
        icon={<RalphLogo variant="icon" />}
      />
      <DropdownTrigger
        title="Dropdown Trigger"
        variant="small"
        expanded={false}
        icon={<IconNetworkBase />}
      />
      <div className="text-3xl font-bold underline">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
