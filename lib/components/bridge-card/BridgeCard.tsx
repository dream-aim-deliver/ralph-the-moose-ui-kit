import { Button } from "../button";
import { Heading, HeadingVariant } from "../heading";
import { InputAssetAmountWithLabel } from "../input-asset-amount-with-label";
import { TChainViewModel } from "../../core";
import { Signal, useSignal } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";
import { IconButtonClose } from "../icon-button/IconButtonClose";
import { Dropdown } from "../dropdown";
import { Modal } from "../modal";

export interface BridgeCardProps {
  supportedChains: TChainViewModel[];
  activeChain: Signal<TChainViewModel>;
  tokenShortName: string;
  icon: React.ReactNode;
  maxBridgeAmount: number;
  onBridge: () => void;
  onClose: () => void;
}

export const BridgeCard = (props: BridgeCardProps) => {
  useSignals();
  const amountToBridge = useSignal(0);
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
              title: props.activeChain.value.name,
            }}
            items={props.supportedChains.map((chain) => ({
              title: chain.name,
              onClick: () => (props.activeChain.value = chain),
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
            amountToBridge.value > props.maxBridgeAmount
              ? "Kind Ser/Madam, really?"
              : ""
          }
        />
        <Button label="Bridge" variant="primary" onClick={props.onBridge} />
      </div>
    </Modal>
  );
};
