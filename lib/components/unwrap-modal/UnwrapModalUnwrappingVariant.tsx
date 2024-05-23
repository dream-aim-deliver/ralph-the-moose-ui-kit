import { TExecutedTransaction } from "../../core";
import { Heading, HeadingVariant } from "../heading";
import { IconButtonClose } from "../icon-button/IconButtonClose";
import { IconSuccess, IconError, IconHourglass } from "../icons";
import { LightFrame } from "../layouts";
import { Modal } from "../modal";
import { NavLink } from "../nav-link";
import { Paragraph } from "../paragraph";

export type UnwrappingSuccessViewModel = {
  status: "success";
  amount: number;
  unwrapTransasction: TExecutedTransaction;
};

export type UnwrappingNonSuccessViewModel = {
  status: "error" | "in-progress";
  message: string;
  amount: number;
  unwrapTransasction?: TExecutedTransaction;
  type: "approval-error" | "verification-error" | "progress" | "unknown";
};

export const UnwrapModalUnwrappingVariant = (
  props: (UnwrappingNonSuccessViewModel | UnwrappingSuccessViewModel) & {
    onClose?: () => void;
  },
) => {
  const icon = () => {
    if (props.status === "success") {
      return <IconSuccess size={12} />;
    }
    if (props.status === "error") {
      return <IconError size={12} />;
    }
    return <IconHourglass size={12} />;
  };

  const title = () => {
    if (props.status === "success") {
      return "It's all green!";
    }
    if (props.status === "error") {
      return "Oh Snap!";
    }
    return "Unwrapping";
  };

  const message = () => {
    if (props.status === "success") {
      return (
        <div>
          <Paragraph>
            Wohoo! You have successfully unwrapped {props.amount} PR on{" "}
            {props.unwrapTransasction.network.name}
          </Paragraph>
          <div className="w-full flex flex-col items-end text-text-success">
            {props.unwrapTransasction.explorerUrl && (
              <NavLink
                variant="small"
                label="View in Explorer"
                url={props.unwrapTransasction.explorerUrl}
              />
            )}
          </div>
        </div>
      );
    }
    if (props.status === "error") {
      if (props.type === "approval-error") {
        return (
          <Paragraph>
            Looks like the Reservoir was not approved to release PR to your
            wallet. Please try again!
          </Paragraph>
        );
      }
      if (props.type === "verification-error") {
        const messages = [];
        messages.push(
          `Looks like we could not verify that the Reservoir has release PR to your wallet. Please check the transaction on the ${props.unwrapTransasction?.network.name} network.`,
        );
        if (props.message) {
          messages.push("The reason for the verification error was:");
        }
        const paragraphs = messages.map((message, index) => (
          <Paragraph key={index}>{message}</Paragraph>
        ));
        return (
          <div className="w-full flex flex-col gap-2">
            {paragraphs}
            {props.message && (
              <LightFrame>
                <div className="w-full flex flex-col items-center">
                  <Paragraph>{props.message}</Paragraph>
                </div>
              </LightFrame>
            )}
            {props.unwrapTransasction && (
              <div className="w-full flex flex-col items-end text-text-success">
                {props.unwrapTransasction.explorerUrl && (
                  <NavLink
                    variant="small"
                    label="View in Explorer"
                    url={props.unwrapTransasction.explorerUrl}
                  />
                )}
              </div>
            )}
          </div>
        );
      }

      const messages = [];
      messages.push(
        `Looks like something went wrong during the unwrapping of your WPRs.`,
      );
      if (props.message) {
        messages.push("The reason for the error was:");
      }
      const paragraphs = messages.map((message, index) => (
        <Paragraph key={index}>{message}</Paragraph>
      ));
      return (
        <div className="w-full flex flex-col gap-2">
          {paragraphs}
          {props.message && (
            <LightFrame>
              <div className="w-full flex flex-col items-center">
                <Paragraph>{props.message}</Paragraph>
              </div>
            </LightFrame>
          )}
          {props.unwrapTransasction && (
            <div className="w-full flex flex-col items-end text-text-success">
              {props.unwrapTransasction.explorerUrl && (
                <NavLink
                  variant="small"
                  label="View in Explorer"
                  url={props.unwrapTransasction.explorerUrl}
                />
              )}
            </div>
          )}
        </div>
      );
    }
    if (props.status === "in-progress") {
      const messages = [];
      messages.push(`We are currently unwrapping ${props.amount} PR.`);
      messages.push(
        "Please be patient while your transaction is processed. If you close the modal, your PR will appear in the interface as soon as they will be available. It might take a few minutes.",
      );
      if (props.message) {
        messages.push("Here are some updates from the backend:");
      }
      return (
        <div className="flex flex-col gap-4">
          {messages.map((message, index) => (
            <Paragraph key={index}>{message}</Paragraph>
          ))}
          {props.message && (
            <LightFrame>
              <div className="w-full flex flex-col items-center">
                <Paragraph>{props.message}</Paragraph>
              </div>
            </LightFrame>
          )}
        </div>
      );
    }
  };
  return (
    <Modal>
      <div className="flex w-full flex-col items-start justify-center gap-4">
        <div className="relative flex w-full flex-row justify-between">
          <div className="flex w-full flex-col items-start justify-center gap-4">
            {icon()}
            <Heading title={title()} variant={HeadingVariant.H4} />
          </div>
          <div className="ml-auto mb-10">
            <IconButtonClose
              size={4}
              onClick={props.onClose ? props.onClose : () => {}}
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-4">
          {message()}
        </div>
      </div>
    </Modal>
  );
};
