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

export interface UnwrapModalProps {
  amountToUnwrap: Signal<number>;
  wrappedAmount: number;
  fee: number;
  tokenShortName: string;
  icon: React.ReactNode;
}

export const UnwrapModal = ({
  amountToUnwrap,
  wrappedAmount,
  fee,
  tokenShortName,
  icon,
}: UnwrapModalProps) => {
  useSignals();
  const wrappedTokenName = `W${tokenShortName.toUpperCase()}`;
  const amountAfterUnwrapping = amountToUnwrap.value * (1 - fee / 100);
  return (
    <Modal>
      <div className="flex w-full flex-col items-start justify-center gap-4">
        <div className="flex relative flex-row justify-between">
          <Heading title="Unwrap" variant={HeadingVariant.H4} />
          <div className="ml-auto">
            <IconButtonClose size={4} onClick={() => {}} />
          </div>
        </div>
        <InputAssetAmountWithLabel
          label="Amount to wrap"
          maxAmount={wrappedAmount}
          amount={amountToUnwrap}
          tokenShortName={tokenShortName}
          icon={icon}
        />
        <LightFrame className="w-full font-varela text-base-colors/neutral-500">
          <div className="self-stretch flex flex-row items-baseline justify-between">
            <div className="relative leading-[14px]">Unwrap amount</div>
            <Label
              label={`${amountToUnwrap.value} ${wrappedTokenName}`}
              variant="medium"
            />
          </div>
          <div className="self-stretch flex flex-row items-baseline justify-between">
            <div className="relative leading-[14px]">Unwrapping fee</div>
            <Label label={`${fee} %`} variant="medium" />
          </div>
          <div className="self-stretch flex flex-row items-baseline justify-between">
            <div className="relative leading-[14px]">You'll receive</div>
            <Label
              label={`${amountAfterUnwrapping} ${tokenShortName}`}
              variant="medium"
            />
          </div>
          <Button
            label={`Unwrap ${amountToUnwrap} ${wrappedTokenName}`}
            variant="primary"
            onClick={() => {}}
          />
        </LightFrame>
      </div>
    </Modal>
  );
};
