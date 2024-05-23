import { useState } from "react";
import { formatNumber } from "../../utils/tokenUtils";
import { Button } from "../button";
import { Heading, HeadingVariant } from "../heading";
import { InputAssetAmountWithLabel } from "../input-asset-amount-with-label";
import { Label } from "../label";
import { LightFrame } from "../layouts";

export type WrapModalVariantWrapProps = {
  variant: "wrap";
  inscriptionBalance: number;
  fee: {
    amount: number;
    currency: string;
  };
  token: {
    shortName: string;
    icon: React.ReactNode;
  };
  onWrap: (amount: number) => void;
};

export const WrapModalContentVariantWrap = (
  props: WrapModalVariantWrapProps,
) => {
  const [amount, setAmount] = useState<number>(props.inscriptionBalance);
  const wrappedTokenName = `W${props.token.shortName.toUpperCase()}`;
  const amountAfterWrapping = amount;
  const handleWrap = () => {
    props.onWrap(amount);
  };
  return (
    <div className="flex w-full flex-col items-start justify-center gap-4">
      <div className="relative flex w-full flex-row justify-between">
        <Heading title="Wrap" variant={HeadingVariant.H4} />
      </div>
      <InputAssetAmountWithLabel
        label="Amount to wrap"
        onChange={setAmount}
        maxAmount={props.inscriptionBalance}
        initialAmount={props.inscriptionBalance}
        tokenShortName={props.token.shortName}
        icon={props.token.icon}
        errorMessage={
          amount > props.inscriptionBalance
            ? "Tryn'a reap before you sow, eh?"
            : ""
        }
      />
      <LightFrame className="w-full font-varela text-text-secondary">
        <div className="flex flex-row items-baseline justify-between self-stretch">
          <div className="relative leading-[14px]">Wrap amount</div>
          <Label
            label={`${formatNumber(amount)} ${props.token.shortName}`}
            variant="medium"
          />
        </div>
        <div className="flex flex-row items-baseline justify-between self-stretch">
          <div className="relative leading-[14px]">Wrapping fee</div>
          <Label
            label={`${props.fee.amount} ${props.fee.currency}`}
            variant="medium"
          />
        </div>
        <div className="flex flex-row items-baseline justify-between self-stretch">
          <div className="relative leading-[14px]">{`You'll receive`}</div>
          <Label
            label={`${formatNumber(amountAfterWrapping)} ${wrappedTokenName}`}
            variant="medium"
          />
        </div>
        <Button
          label={`Wrap ${formatNumber(amount)} ${props.token.shortName}`}
          variant="primary"
          onClick={handleWrap}
          disabled={amount > props.inscriptionBalance || amount === 0}
        />
      </LightFrame>
    </div>
  );
};
