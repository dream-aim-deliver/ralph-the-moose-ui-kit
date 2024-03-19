import React from "react";
import {
  Button,
  Heading,
  HeadingVariant,
  IconButtonClose,
  InputAssetAmountWithLabel,
  Label,
  Modal,
} from "..";

import { LightFrame } from "../layouts/LightFrame";
import { Signal } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";

/**
 * Props for the WrapModal component.
 */
export interface WrapCardProps {
  amountToWrap: Signal<number>; // The amount to be wrapped
  inscriptionBalance: number; // The maximum amount that can be wrapped
  fee: number; // The fee for wrapping
  tokenShortName: string; // The short name of the token
  icon: React.ReactNode; // The icon for the token
  onClose?: () => void; // Callback function when the modal is closed
  onWrap: () => void; // Callback function when wrapping is triggered
}

export const WrapCard = ({
  amountToWrap,
  inscriptionBalance,
  fee,
  tokenShortName,
  icon,
  onClose,
  onWrap,
}: WrapCardProps) => {
  useSignals();
  const wrappedTokenName = `W${tokenShortName.toUpperCase()}`;
  const amountAfterWrapping = amountToWrap.value * (1 - fee / 100);
  return (
    <Modal>
      <div className="flex w-full flex-col items-start justify-center gap-4">
        <div className="flex w-full relative flex-row justify-between">
          <Heading title="Wrap" variant={HeadingVariant.H4} />
          <div className="ml-auto">
            <IconButtonClose size={4} onClick={onClose ? onClose : () => {}} />
          </div>
        </div>
        <InputAssetAmountWithLabel
          label="Amount to wrap"
          maxAmount={inscriptionBalance}
          amount={amountToWrap}
          tokenShortName={tokenShortName}
          icon={icon}
        />
        <LightFrame className="w-full font-varela text-text-secondary">
          <div className="self-stretch flex flex-row items-baseline justify-between">
            <div className="relative leading-[14px]">Wrap amount</div>
            <Label
              label={`${amountToWrap.value} ${tokenShortName}`}
              variant="medium"
            />
          </div>
          <div className="self-stretch flex flex-row items-baseline justify-between">
            <div className="relative leading-[14px]">Wrapping fee</div>
            <Label label={`${fee} %`} variant="medium" />
          </div>
          <div className="self-stretch flex flex-row items-baseline justify-between">
            <div className="relative leading-[14px]">You'll receive</div>
            <Label
              label={`${amountAfterWrapping} ${wrappedTokenName}`}
              variant="medium"
            />
          </div>
          <Button
            label={`Wrap ${amountToWrap} ${tokenShortName}`}
            variant="primary"
            onClick={onWrap}
          />
        </LightFrame>
      </div>
    </Modal>
  );
};
