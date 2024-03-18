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

/**
 * Props for the WrapModal component.
 */
export interface WrapModalProps {
  amount: number; // The amount to be wrapped
  maxAmount: number; // The maximum amount that can be wrapped
  fee: number; // The fee for wrapping
  tokenShortName: string; // The short name of the token
  icon: React.ReactNode; // The icon for the token
}
export interface WrapModalProps {
  amount: number;
  maxAmount: number;
  fee: number;
  tokenShortName: string;
  icon: React.ReactNode;
}

export const WrapModal = ({
  amount,
  maxAmount,
  fee,
  tokenShortName,
  icon,
}: WrapModalProps) => {
  const wrappedTokenName = `W${tokenShortName.toUpperCase()}`;
  const expectedWrappedAmount = amount * (1 - fee / 100);
  return (
    <Modal>
      <div className="flex flex-col items-start justify-center gap-4">
        <div className="flex relative flex-row justify-between">
          <Heading title="Wrap" variant={HeadingVariant.H4} />
          <div className="ml-auto">
            <IconButtonClose size={4} onClick={() => {}} />
          </div>
        </div>
        <InputAssetAmountWithLabel
          label="Amount to wrap"
          maxAmount={maxAmount}
          amount={amount}
          tokenShortName={tokenShortName}
          icon={icon}
        />
        <LightFrame className="w-full font-varela text-base-colors/neutral-500">
          <div className="self-stretch flex flex-row items-baseline justify-between">
            <div className="relative leading-[14px]">Wrap amount</div>
            <Label label={`${amount} ${tokenShortName}`} variant="medium" />
          </div>
          <div className="self-stretch flex flex-row items-baseline justify-between">
            <div className="relative leading-[14px]">Wrapping fee</div>
            <Label label={`${fee} %`} variant="medium" />
          </div>
          <div className="self-stretch flex flex-row items-baseline justify-between">
            <div className="relative leading-[14px]">You'll receive</div>
            <Label
              label={`${expectedWrappedAmount} ${wrappedTokenName}`}
              variant="medium"
            />
          </div>
          <Button
            label={`Wrap ${amount} ${tokenShortName}`}
            variant="primary"
            onClick={() => {}}
          />
        </LightFrame>
      </div>
    </Modal>
  );
};
