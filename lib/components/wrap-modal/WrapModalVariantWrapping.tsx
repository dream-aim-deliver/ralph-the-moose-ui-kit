import { TChainViewModel } from "../../core";
import { Heading, HeadingVariant } from "../heading";
import { IconSuccess, IconError, IconHourglass } from "../icons";
import { Label } from "../label";
import { LightFrame } from "../layouts";
import { Paragraph } from "../paragraph";
import { ProgressBar } from "../progress-bar";

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
      ];
      if (props.status.message)
        messages.push("The error message is:", props.status.message);
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
