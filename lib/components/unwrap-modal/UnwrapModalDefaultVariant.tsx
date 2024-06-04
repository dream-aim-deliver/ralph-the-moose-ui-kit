"use client";
import { useState } from "react";
import { TChainViewModel } from "../../core";
import { formatNumber } from "../../utils/tokenUtils";
import { Button } from "../button";
import { InputAssetAmountWithLabel } from "../input-asset-amount-with-label/InputAssetAmountWithLabel";
import { Label } from "../label";
import { LightFrame } from "../layouts";
import { Modal } from "../modal";
import { Heading, HeadingVariant } from "../heading";
import { IconButtonClose } from "../icon-button/IconButtonClose";

export interface UnwrapModalDefaultVariantProps {
  balance: {
    wrapped: number;
    inscriptions: number;
  };
  token: {
    shortName: string;
    icon: React.ReactNode;
  };
  network: TChainViewModel & {
    nativeCurrency: string;
  };
  fee: number;
  callbacks: {
    onUnwrap: (amount: number) => void;
    onClose?: () => void;
  };
}

export const UnwrapModalDefaultVariant = (
  props: UnwrapModalDefaultVariantProps,
) => {
  const [amount, setAmount] = useState<number>(props.balance.wrapped);
  return (
    <Modal>
      <div className="flex w-full flex-col items-start justify-center gap-4">
        <div className="relative flex w-full flex-row justify-between">
          <div className="flex w-full flex-col items-start justify-center gap-4">
            <Heading title={"Unwrap"} variant={HeadingVariant.H4} />
          </div>
          <div className="ml-auto">
            <IconButtonClose
              size={4}
              onClick={
                props.callbacks.onClose ? props.callbacks.onClose : () => {}
              }
            />
          </div>
        </div>
        <InputAssetAmountWithLabel
          label="Amount to unwrap"
          maxAmount={props.balance.wrapped}
          initialAmount={props.balance.wrapped}
          tokenShortName={props.token.shortName}
          icon={props.token.icon}
          errorMessage={
            amount > props.balance.wrapped
              ? "Unwrap more than what ya got?"
              : ""
          }
          onChange={setAmount}
        />
        <LightFrame className="w-full font-varela text-text-secondary">
          <div className="flex flex-row items-baseline justify-between self-stretch">
            <div className="relative leading-[14px]">Unwrap amount</div>
            <Label
              label={`${formatNumber(amount)} W${props.token.shortName}`}
              variant="medium"
            />
          </div>
          <div className="flex flex-row items-baseline justify-between self-stretch">
            <div className="relative leading-[14px]">Unwrapping fee</div>
            <Label
              label={`${props.fee} ${props.network.nativeCurrency}`}
              variant="medium"
            />
          </div>
          <div className="flex flex-row items-baseline justify-between self-stretch">
            <div className="relative leading-[14px]">You will receive</div>
            <Label
              label={`${formatNumber(amount)} W${props.token.shortName}`}
              variant="medium"
            />
          </div>
          <Button
            label={`Unwrap ${formatNumber(amount)} W${props.token.shortName}`}
            variant="primary"
            onClick={() => {
              props.callbacks.onUnwrap(amount);
            }}
          />
        </LightFrame>
      </div>
    </Modal>
  );
};
