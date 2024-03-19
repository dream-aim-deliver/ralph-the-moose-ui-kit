import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  BalanceCard,
  Button,
  DropdownTrigger,
  Header,
  IconNetworkBase,
  InputAssetAmount,
  TextButton,
  UnwrapCard,
  WalletCard,
  WrapCard,
} from "../lib";
import { RalphLogo } from "@/components/ralph-logo";
import { signal } from "@preact/signals-react";
import { NavLink } from "@/components/nav-link";

function App() {
  const [count, setCount] = useState(0);
  const amount = signal(0);
  const amountToUnwrap = signal(0);
  const connectButton = <Button variant="primary" label="Connect Wallet" />;
  const disconnectButton = (
    <TextButton text="Disconnect" size="medium" onClick={() => {}}></TextButton>
  );
  return (
    <div>
      <NavLink
        variant="medium"
        label="navlink / medium"
        url="https://www.google.com"
        defaultColorClass="text-blue-700"
      />
      <UnwrapCard
        amountToUnwrap={amountToUnwrap}
        wrappedBalance={100000}
        fee={2}
        tokenShortName="PR"
        icon={<RalphLogo variant="icon" />}
        onUnwrap={() => {}}
      />
      <WrapCard
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
    </div>
  );
}

export default App;
