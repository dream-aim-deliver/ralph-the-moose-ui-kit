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
  status:
    | {
        status: "success" | "error" | "awaiting-transaction" | "verifying";
        message?: string;
        attempt?: number;
        amount?: number;
      }
    | {
        status: "request";
        message: string;
      };
};

export const WrapModalContentVariantClaiming = (
  props: WrapModalVariantClaimingProps,
) => {
  const claimableAmount = `${formatNumber(props.claimableAmount)} W${props.token.shortName}`;

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
      return "Claim successful!";
    }
    if (props.status.status === "error") {
      return "Oh Snap!";
    }
    return "Claiming WPR";
  };

  const message = () => {
    if (props.status.status === "request") {
      return (
        <Paragraph variant="secondary">
          Getting ready to claim them wrapped tokens for ya!
        </Paragraph>
      );
    }
    if (props.status.status === "success") {
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
    if (props.status.status === "error") {
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
    if (props.status.status === "awaiting-transaction") {
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
    if (props.status.status === "verifying") {
      const messages = [
        `Verifying that ${props.status.amount} WPR have been pumped to your wallet.`,
      ];
      if (props.status.message) messages.push(props.status.message);
      if (props.status.attempt)
        messages.push(`Attempt number ${props.status.attempt}`);
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
