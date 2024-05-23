import React, { useState } from "react";
import {
  Button,
  Heading,
  HeadingVariant,
  IconButtonClose,
  InProgressStatusFrame,
  InputAssetAmountWithLabel,
  Label,
  Modal,
} from "..";

import { LightFrame } from "../layouts/LightFrame";
import { formatNumber } from "../../utils/tokenUtils";
/**
 * Props for the UnwrapModal component
 */
export interface UnwrapCardProps {
  /**
   * The wrapped balance i.e. Maximum amount that can be unwrapped
   */
  wrappedBalance: number;
  /**
   * The fee for unwrapping
   */
  fee: number;
  /**
   * The network currency
   * @example "ETH"
   */
  networkCurrency: string;
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
  onUnwrap: (amount: number) => void;
}

export const UnwrapCard = ({
  wrappedBalance,
  fee,
  networkCurrency,
  tokenShortName,
  icon,
  onClose,
  onUnwrap,
}: UnwrapCardProps) => {
  const [amountToUnwrap, setAmountToUnwrap] = useState<number>(wrappedBalance);
  const wrappedTokenName = `W${tokenShortName.toUpperCase()}`;
  const defaultView = (
    <div className="flex w-full flex-col items-start justify-center gap-4">
      <div className="relative flex w-full flex-row justify-between">
        <Heading title="Unwrap" variant={HeadingVariant.H4} />
        <div className="ml-auto">
          <IconButtonClose size={4} onClick={onClose ? onClose : () => {}} />
        </div>
      </div>
      <InputAssetAmountWithLabel
        label="Amount to unwrap"
        maxAmount={wrappedBalance}
        initialAmount={amountToUnwrap}
        tokenShortName={tokenShortName}
        icon={icon}
        errorMessage={
          amountToUnwrap > wrappedBalance ? "Unwrap more than what ya got?" : ""
        }
        onChange={setAmountToUnwrap}
      />
      <LightFrame className="w-full font-varela text-text-secondary">
        <div className="flex flex-row items-baseline justify-between self-stretch">
          <div className="relative leading-[14px]">Unwrap amount</div>
          <Label
            label={`${formatNumber(amountToUnwrap)} ${wrappedTokenName}`}
            variant="medium"
          />
        </div>
        <div className="flex flex-row items-baseline justify-between self-stretch">
          <div className="relative leading-[14px]">Unwrapping fee</div>
          <Label label={`${fee} ${networkCurrency}`} variant="medium" />
        </div>
        <div className="flex flex-row items-baseline justify-between self-stretch">
          <div className="relative leading-[14px]">You will receive</div>
          <Label
            label={`${formatNumber(amountToUnwrap)} ${tokenShortName}`}
            variant="medium"
          />
        </div>
        <Button
          label={`Unwrap ${formatNumber(amountToUnwrap)} ${wrappedTokenName}`}
          variant="primary"
          onClick={() => {
            onUnwrap(amountToUnwrap);
          }}
        />
      </LightFrame>
    </div>
  );

  const unwrappingView = (
    <div className="flex w-full flex-col items-start justify-center gap-4">
      <div className="relative flex w-full flex-row justify-between">
        <Heading title="Unwrapping" variant={HeadingVariant.H4} />
        <div className="ml-auto">
          <IconButtonClose size={4} onClick={onClose ? onClose : () => {}} />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <LightFrame className="w-full items-center gap-4">
          <div className="font-heading-h5 relative inline-block w-full overflow-auto whitespace-normal text-center font-gluten text-lg font-bold leading-[18px] tracking-[-0.04em] text-text-primary">
            <InProgressStatusFrame
              title={`Unwrapping ${formatNumber(amountToUnwrap)} W${tokenShortName}`}
              message={SUnwrapStatusMessage.value}
            />
          </div>
        </LightFrame>
      </div>
    </div>
  );

  const unwrappingEndedView = (
    <div className="flex w-full flex-col items-start justify-center gap-4">
      <div className="relative flex w-full flex-row justify-between">
        <Heading title="Unwrapping" variant={HeadingVariant.H4} />
        <div className="ml-auto">
          <IconButtonClose
            size={4}
            onClick={
              onClose
                ? onClose
                : () => {
                    SunwrapCardView.value = "default";
                  }
            }
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4">
        {SUnwrapEndedStatusFrame.value}
      </div>
    </div>
  );
  return (
    <Modal>
      {SunwrapCardView.value === "default" && defaultView}
      {SunwrapCardView.value === "unwrapping" && unwrappingView}
      {SunwrapCardView.value === "unwrapping-ended" && unwrappingEndedView}
    </Modal>
  );
};
