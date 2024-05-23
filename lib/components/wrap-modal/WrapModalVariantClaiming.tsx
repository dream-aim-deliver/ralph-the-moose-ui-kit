import { TChainViewModel } from "../../core";
import { formatNumber } from "../../utils/tokenUtils";
import { Heading, HeadingVariant } from "../heading";
import { IconSuccess, IconError, IconHourglass } from "../icons";
import { Paragraph } from "../paragraph";

export type WrapModalVariantClaimingProps = {
  variant: "claiming";
  claimableAmount: number;
  network: TChainViewModel;
  token: {
    shortName: string;
    icon: React.ReactNode;
  };
  status: {
    type: "success" | "error" | "awaiting-transaction" | "verifying";
    message?: string;
  };
};

export const WrapModalContentVariantClaiming = (
  props: WrapModalVariantClaimingProps,
) => {
  const claimableAmount = `${formatNumber(props.claimableAmount)} W${props.token.shortName}`;

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
      return "Claim successful!";
    }
    if (props.status.type === "error") {
      return "Oh Snap!";
    }
    return "Claiming WPR";
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
            Hey champ, looks like you've successfully claimed {claimableAmount}.
          </Paragraph>
          <Paragraph>Your wrapped balance has been updated \m/ </Paragraph>
          <Paragraph>...</Paragraph>
          <Paragraph>Now go do what you were born to do.</Paragraph>
          <Paragraph>
            <a href="https://www.youtube.com/watch?v=93fAJe8WVjA&ab_channel=Steppenwolf-Topic">
              <u>Hint</u> 🎸
            </a>
          </Paragraph>
        </div>
      );
    }
    if (props.status.type === "error") {
      const messages = [
        "Oh no, looks like claiming failed. Please try again or get in touch. We're here to help 🤝.",
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
      const messages = [
        "The reservoir is prepping some freshly baked Ralphs onto that sweet wallet of yours.",
      ];
      if (props.status.message) messages.push(props.status.message);
      return messages.map((message, index) => (
        <Paragraph key={index} variant="secondary">
          {message}
        </Paragraph>
      ));
    }
    if (props.status.type === "verifying") {
      const messages = [
        `Verifying that ${claimableAmount} has been pumped to your wallet.`,
      ];
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
    </div>
  );
};
