import { TChainViewModel, TExecutedTransaction } from "../../core";
import { Heading, HeadingVariant } from "../heading";
import { IconSuccess, IconError, IconHourglass } from "../icons";
import { Label } from "../label";
import { LightFrame } from "../layouts";
import { Paragraph } from "../paragraph";

export type WrappingRequestViewModel = {
  status: "request";
  message: string;
};

export type WrappingSuccessViewModel = {
  status: "success";
  amount: number;
  wrapTransaction: TExecutedTransaction;
  message: string;
};

export type WrappingAwaitingTransactionViewModel = {
  status: "awaiting-transaction";
  amount: number;
};

export type WrappingErrorViewModel = {
  status: "error";
  message: string;
  amount: number;
  wrapTransaction?: TExecutedTransaction;
};

export type WrappingVerificationViewModel = {
  status: "verifying";
  amount: number;
  wrapTransaction: TExecutedTransaction;
  attempt: number;
};

export type WrappingEstimatedGasViewModel = {
  status: "estimating-gas";
  amount: number;
  estimatedGas: number;
  gasLimit: number;
};

export type WrapCardVariantWrappingProps = {
  variant: "wrapping";
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
    | WrappingRequestViewModel
    | WrappingSuccessViewModel
    | WrappingErrorViewModel
    | WrappingAwaitingTransactionViewModel
    | WrappingVerificationViewModel
    | WrappingEstimatedGasViewModel;
};

export const WrapCardContentVariantWrapping = (
  props: WrapCardVariantWrappingProps,
) => {
  const icon = () => {
    if (props.status.status === "success") {
      return <IconSuccess size={12} />;
    }
    if (props.status.status === "error") {
      return <IconError size={12} />;
    }
    return <IconHourglass size={12} />;
  };

  const title = () => {
    if (props.status.status === "success") {
      return "It's a wrap!";
    }
    if (props.status.status === "error") {
      return "Oh Snap!";
    }
    return "Wrapping PR";
  };

  const message = () => {
    if (props.status.status === "success") {
      return (
        <div>
          <Paragraph>
            Hey champ, looks like you've successfully wrapped{" "}
            {props.status.amount} {props.token.shortName.toUpperCase()}.
          </Paragraph>
          <Paragraph>Come back to claim your wrapped PRs shortly.</Paragraph>
        </div>
      );
    }
    if (props.status.status === "error") {
      const messages = [
        "Oh no, looks like wrapping failed. Please try again or get in touch. We're here to help 🤝.",
      ];
      if (props.status.message) messages.push("The error message is:");
      const messageComponents = messages.map((message, index) => (
        <Paragraph key={index} variant="secondary">
          {message}
        </Paragraph>
      ));
      return (
        <div className="w-full flex flex-col gap-4">
          {messageComponents}
          {props.status.message && (
            <LightFrame>
              <Paragraph variant="secondary">{props.status.message}</Paragraph>
            </LightFrame>
          )}
        </div>
      );
    }
    if (props.status.status === "awaiting-transaction") {
      const messages = [
        `Getting ready to wrap ${props.status.amount} PRs.`,
        "Please confirm the transaction in your wallet.",
      ];
      return messages.map((message, index) => (
        <Paragraph key={index} variant="secondary">
          {message}
        </Paragraph>
      ));
    }
    if (props.status.status === "verifying") {
      const messages = [
        `Looks like your wrap transactions went through 🎉`,
        `Our relayers are now doing their thing 🚀`,
        "Please be patient, this may take a few minutes.",
        "If you close this modal, you'll still be able to claim your wrapped PRs as soon as they are available.",
      ];
      const messageComponents = messages.map((message, index) => (
        <Paragraph key={index} variant="secondary">
          {message}
        </Paragraph>
      ));
      return (
        <div className="w-full flex flex-col gap-4">
          {messageComponents}
          <LightFrame>
            <div className="w-full flex flex-row items-center justify-between text-left gap-4">
              <Paragraph>Verification Attempt: </Paragraph>
              <Label label={`${props.status.attempt}`} variant="medium" />
            </div>
            <div className="w-full flex flex-row items-center justify-between text-left gap-4">
              <Paragraph>Time elapsed: </Paragraph>
              <Label
                label={`${Math.floor(props.status.attempt / 60)} ${Math.floor(props.status.attempt / 60) > 1 ? "minutes" : "minute"}`}
                variant="medium"
              />
            </div>
          </LightFrame>
        </div>
      );
    }
    if (props.status.status === "estimating-gas") {
      return (
        <div className="w-full flex flex-col items-start gap-4">
          <Paragraph>
            We're estimating the gas for wrapping {props.status.amount} PRs.
          </Paragraph>
          <LightFrame>
            <div className="w-full flex flex-row items-center justify-between gap-4">
              <Paragraph>Estimated gas: </Paragraph>
              <Label label={`${props.status.estimatedGas}`} variant="medium" />
            </div>
            <div className="w-full flex flex-row items-center justify-between gap-4">
              <Paragraph>Gas limit: </Paragraph>
              <Label label={`${props.status.gasLimit}`} variant="medium" />
            </div>
          </LightFrame>
        </div>
      );
    }
    if (props.status.status === "request") {
      return <Paragraph>Preparing to wrap them PRs for ya! </Paragraph>;
    }
  };
  return (
    <div className="flex w-full flex-col items-start justify-center gap-4">
      {icon()}
      <Heading title={title()} variant={HeadingVariant.H4} />
      {message()}
    </div>
  );
};
