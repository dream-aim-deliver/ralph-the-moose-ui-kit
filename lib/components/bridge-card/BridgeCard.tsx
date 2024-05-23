import { Button } from "../button";
import { Heading, HeadingVariant } from "../heading";
import { InputAssetAmountWithLabel } from "../input-asset-amount-with-label";
import { TChainViewModel } from "../../core";
import { useSignals } from "@preact/signals-react/runtime";
import { IconButtonClose } from "../icon-button/IconButtonClose";
import { Dropdown } from "../dropdown";
import { Modal } from "../modal";
import { useState } from "react";

export interface BridgeCardProps {
  supportedChains: TChainViewModel[];
  activeChain: TChainViewModel;
  tokenShortName: string;
  icon: React.ReactNode;
  maxBridgeAmount: number;
  onBridge: () => void;
  onClose: () => void;
}

export const BridgeCard = (props: BridgeCardProps) => {
  useSignals();
  const [amountToBridge, setAmountToBridge] = useState<number>(
    props.maxBridgeAmount,
  );
  const destinationChains = props.supportedChains.filter(
    (chain) => chain.name !== props.activeChain.name,
  );
  return (
    <Modal>
      <div className="w-full flex flex-col items-start justify-center gap-4 text-wrap">
        <div className="relative flex w-full flex-row justify-between">
          <Heading title="Bridge" variant={HeadingVariant.H4} />
          <div className="ml-auto">
            <IconButtonClose size={4} onClick={props.onClose} />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4"></div>
        <div
          id="bridge-card-network-selection"
          className="flex flex-row items-start justify-between self-stretch"
        >
          <Dropdown
            title="Destination Chain"
            variant="large"
            defaultItem={{
              title: destinationChains[0].name,
            }}
            items={destinationChains.map((chain) => ({
              title: chain.name,
              onClick: () => (props.activeChain = chain),
            }))}
          />
        </div>
        <div id="bridge-card-amount-to-bridge"></div>
        <InputAssetAmountWithLabel
          label="Amount to bridge"
          maxAmount={props.maxBridgeAmount}
          initialAmount={amountToBridge}
          tokenShortName={props.tokenShortName}
          icon={props.icon}
          errorMessage={
            amountToBridge > props.maxBridgeAmount
              ? "Kind Ser/Madam, really?"
              : ""
          }
          onChange={setAmountToBridge}
        />
        <Button label="Bridge" variant="primary" onClick={props.onBridge} />
      </div>
    </Modal>
  );
};
