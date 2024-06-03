import { Button } from "../button";
import { Heading, HeadingVariant } from "../heading";
import { InputAssetAmountWithLabel } from "../input-asset-amount-with-label";
import { TChainViewModel } from "../../core";
import { IconButtonClose } from "../icon-button/IconButtonClose";
import { Dropdown } from "../dropdown";
import { Modal } from "../modal";
import { useState } from "react";
import { LightFrame } from "../layouts";
import { formatNumber } from "../../utils/tokenUtils";
import { Label } from "../label";

export interface BridgeModalDefaultVariantProps {
  supportedChains: TChainViewModel[];
  activeChain: TChainViewModel & {
    bridgingFee: number;
    nativeCurrency: string;
  };
  token: {
    shortName: string;
    icon: React.ReactNode;
  };
  balance: {
    inscriptions: number;
  };
  callbacks: {
    onBridge: (amount: number) => void;
    onClose: () => void;
  };
}

export const BridgeModalDefaultVariant = (
  props: BridgeModalDefaultVariantProps,
) => {
  const [amountToBridge, setAmountToBridge] = useState<number>(
    props.balance.inscriptions,
  );
  const destinationChains = props.supportedChains.filter(
    (chain) => chain.chainId !== props.activeChain.chainId,
  );
  const [destinationChain, setDestinationChain] = useState<TChainViewModel>(
    destinationChains[0],
  );
  return (
    <Modal>
      <div className="w-full flex flex-col items-start justify-center gap-4 text-wrap">
        <div className="relative flex w-full flex-row justify-between">
          <Heading title="Bridge" variant={HeadingVariant.H4} />
          <div className="ml-auto">
            <IconButtonClose size={4} onClick={props.callbacks.onClose} />
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
              title: destinationChain.name,
            }}
            items={destinationChains.map((chain) => ({
              title: chain.name,
              onClick: () => {
                setDestinationChain(chain);
              },
            }))}
          />
        </div>
        <div id="bridge-card-amount-to-bridge"></div>
        <InputAssetAmountWithLabel
          label="Amount to bridge"
          maxAmount={props.balance.inscriptions}
          initialAmount={amountToBridge}
          tokenShortName={props.token.shortName}
          icon={props.token.icon}
          errorMessage={
            amountToBridge > props.balance.inscriptions
              ? "Kind Ser/Madam, really?"
              : ""
          }
          onChange={setAmountToBridge}
        />
        <LightFrame className="w-full font-varela text-text-secondary">
          <div className="flex flex-row items-baseline justify-between self-stretch">
            <div className="relative leading-[14px]">Bridge amount</div>
            <Label
              label={`${formatNumber(amountToBridge)} ${props.token.shortName}`}
              variant="medium"
            />
          </div>
          <div className="flex flex-row items-baseline justify-between self-stretch">
            <div className="relative leading-[14px]">Bridging fee</div>
            <Label
              label={`${props.activeChain.bridgingFee} ${props.activeChain.nativeCurrency}`}
              variant="medium"
            />
          </div>
          <div className="flex flex-row items-baseline justify-between self-stretch">
            <div className="relative leading-[14px]">Destination chain</div>
            <Label
              label={`${formatNumber(amountToBridge)} ${props.token.shortName}`}
              variant="medium"
            />
          </div>
        </LightFrame>
        <Button
          label="Bridge"
          variant="primary"
          onClick={() => {
            props.callbacks.onBridge(amountToBridge);
          }}
        />
      </div>
    </Modal>
  );
};
