import React, { useState } from "react";
import {
  Button,
  Heading,
  HeadingVariant,
  IconButtonClose,
  IconError,
  IconHourglass,
  IconSuccess,
  InputAssetAmountWithLabel,
  Label,
  Modal,
  Paragraph,
  ProgressBar,
  Tabs,
} from "..";

import { LightFrame } from "../layouts/LightFrame";
import { formatNumber } from "../../utils/tokenUtils";
import { TChainViewModel } from "../../core";

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

export type WrapCardVariantWrappingProps = {
  variant: "wrapping";
  amountToWrap: number;
  fee: {
    amount: number;
    currency: string;
  };
  network: TChainViewModel;
  token: {
    shortName: string;
    icon: React.ReactNode;
  };
  status:
    | {
        type: "success" | "error" | "awaiting-transaction";
        message?: string;
      }
    | {
        type: "awaiting-indexer";
        message: string;
        indexerBlockNumber: number;
        transactionBlockNumber: number;
        initialIndexerBlockNumber: number;
      };
};
export const WrapCardContentVariantWrapping = (
  props: WrapCardVariantWrappingProps,
) => {
  const icon = () => {
    if (props.status.type === "success") {
      return <IconSuccess size={12} />;
    }
    if (props.status.type === "error") {
      return <IconError size={12} />;
    }
    return <IconHourglass size={12} />;
  };

  const title = () => {
    if (props.status.type === "success") {
      return "It's a wrap!";
    }
    if (props.status.type === "error") {
      return "Oh Snap!";
    }
    return "Wrapping PR";
  };

  const message = () => {
    if (props.status.type === "success") {
      if (props.status.message)
        return (
          <Paragraph variant="secondary"> {props.status.message}</Paragraph>
        );
      return (
        <div>
          <Paragraph>
            Hey champ, looks like you've successfully wrapped{" "}
            {props.amountToWrap} {props.token.shortName.toUpperCase()}.
          </Paragraph>
          <Paragraph>Come back to claim your wrapped PRs shortly.</Paragraph>
        </div>
      );
    }
    if (props.status.type === "error") {
      const messages = [
        "Oh no, looks like wrapping failed. Please try again or get in touch. We're here to help 🤝.",
        "The error message is:",
      ];
      if (props.status.message) messages.push(props.status.message);
      return messages.map((message, index) => (
        <Paragraph key={index} variant="secondary">
          {message}
        </Paragraph>
      ));
    }
    if (props.status.type === "awaiting-transaction") {
      const messages = ["Awaiting transaction confirmation..."];
      if (props.status.message) messages.push(props.status.message);
      return messages.map((message, index) => (
        <Paragraph key={index} variant="secondary">
          {message}
        </Paragraph>
      ));
    }
    return <Paragraph variant="secondary">{props.status.message}</Paragraph>;
  };
  return (
    <div className="flex w-full flex-col items-start justify-center gap-4">
      {icon()}
      <Heading title={title()} variant={HeadingVariant.H4} />
      {message()}
      {props.status.type === "awaiting-indexer" && (
        <LightFrame>
          <ProgressBar
            progress={
              (100 *
                (props.status.indexerBlockNumber -
                  props.status.initialIndexerBlockNumber)) /
              (props.status.transactionBlockNumber -
                props.status.initialIndexerBlockNumber)
            }
            width={20}
          />
          <div className="font-varela text-text-secondary text-base">
            <div className="flex flex-row items-center justify-between gap-4">
              <label>Indexer's block number</label>
              <Label
                label={props.status.indexerBlockNumber.toString()}
                variant="medium"
              />
            </div>
            <div className="flex flex-row items-center justify-between gap-4">
              <label>Your block number</label>
              <Label
                label={props.status.transactionBlockNumber.toString()}
                variant="medium"
              />
            </div>
          </div>
        </LightFrame>
      )}
    </div>
  );
};
export type WrapCardVariantClaimProps = {
  variant: "claim";
  claimableAmount: number;
  fee: number;
  token: {
    shortName: string;
    icon: React.ReactNode;
  };
  onClaim: () => void;
};

export type WrapCardVariantClaimingProps = {
  variant: "claiming";
  amountToClaim: number;
  fee: number;
  network: TChainViewModel;
  token: {
    shortName: string;
    icon: React.ReactNode;
  };
  status: {
    type: "success" | "error" | "info";
    message: string;
  };
};

const WrapCardHeaderTab = ({
  variant,
  onClose,
}: {
  variant: "wrap" | "claim";
  onClose?: () => void;
}) => {
  return (
    <div className="relative flex w-full flex-row justify-between gap-8 mb-4">
      <Tabs
        tabs={["Wrap", "Claim"]}
        activeTabIndex={variant === "wrap" ? 1 : 2}
      ></Tabs>
      <div className="ml-auto -mt-8">
        <IconButtonClose size={4} onClick={onClose ? onClose : () => {}} />
      </div>
    </div>
  );
};
export const WrapCard = (
  props: (
    | WrapModalVariantWrapProps
    | WrapCardVariantWrappingProps
    | WrapCardVariantClaimProps
    | WrapCardVariantClaimingProps
  ) & {
    onClose?: () => void;
  },
) => {
  return (
    <Modal>
      {props.variant === "wrap" ||
        (props.variant == "wrapping" && <WrapCardHeaderTab variant="wrap" />)}
      {props.variant === "wrap" && (
        <WrapModalContentVariantWrap {...props} variant="wrap" />
      )}
      {props.variant === "wrapping" && (
        <WrapCardContentVariantWrapping {...props} />
      )}
    </Modal>
  );
};
