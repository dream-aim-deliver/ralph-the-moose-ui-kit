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
 * Props for the UnwrapModal component
 */
export interface UnwrapCardProps {
  /**
   * The amount to be unwrapped
   */
  amountToUnwrap: Signal<number>;
  /**
   * The wrapped balance i.e. Maximum amount that can be unwrapped
   */
  wrappedBalance: number;
  fee: number;
  /**
   * The short name of the token
   */
  tokenShortName: string;
  /**
   * The icon for the token
   */
  icon: React.ReactNode;
  /**
   * Callback function when the modal is closed
   */
  onClose?: () => void;
  /**
   * Callback function when unwrapping is triggered
   */
  onUnwrap: () => void;
}

export const UnwrapCard = ({
  amountToUnwrap,
  wrappedBalance,
  fee,
  tokenShortName,
  icon,
  onClose,
  onUnwrap,
}: UnwrapCardProps) => {
  useSignals();
  const wrappedTokenName = `W${tokenShortName.toUpperCase()}`;
  const amountAfterUnwrapping = amountToUnwrap.value * (1 - fee / 100);
  return (
    <Modal>
      <div className="flex w-full flex-col items-start justify-center gap-4">
        <div className="flex w-full relative flex-row justify-between">
          <Heading title="Unwrap" variant={HeadingVariant.H4} />
          <div className="ml-auto">
            <IconButtonClose size={4} onClick={onClose ? onClose : () => {}} />
          </div>
        </div>
        <InputAssetAmountWithLabel
          label="Amount to unwrap"
          maxAmount={wrappedBalance}
          amount={amountToUnwrap}
          tokenShortName={tokenShortName}
          icon={icon}
        />
        <LightFrame className="w-full font-varela text-text-secondary">
          <div className="self-stretch flex flex-row items-baseline justify-between">
            <div className="relative leading-[14px] text-text-secondary">Unwrap amount</div>
            <Label
              label={`${amountToUnwrap.value} ${wrappedTokenName}`}
              variant="medium"
            />
          </div>
          <div className="self-stretch flex flex-row items-baseline justify-between">
            <div className="relative leading-[14px] text-text-secondary">Unwrapping fee</div>
            <Label label={`${fee} %`} variant="medium" />
          </div>
          <div className="self-stretch flex flex-row items-baseline justify-between">
            <div className="relative leading-[14px] text-text-secondary">You'll receive</div>
            <Label
              label={`${amountAfterUnwrapping} ${tokenShortName}`}
              variant="medium"
            />
          </div>
          <Button
            label={`Unwrap ${amountToUnwrap} ${wrappedTokenName}`}
            variant="primary"
            onClick={onUnwrap}
          />
        </LightFrame>
      </div>
    </Modal>
  );
};
