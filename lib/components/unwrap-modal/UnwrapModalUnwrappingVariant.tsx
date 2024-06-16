import { TExecutedTransaction } from "../../core";
import { Heading, HeadingVariant } from "../heading";
import { IconButtonClose } from "../icon-button/IconButtonClose";
import { IconSuccess, IconError, IconHourglass } from "../icons";
import { Label } from "../label";
import { LightFrame } from "../layouts";
import { Modal } from "../modal";
import { NavLink } from "../nav-link";
import { Paragraph } from "../paragraph";

export type UnwrappingSuccessViewModel = {
  status: "success";
  amount: number;
  unwrapTransaction: TExecutedTransaction;
};

export type UnwrappingNonSuccessViewModel = {
  status: "error" | "in-progress";
  message?: string;
  amount: number;
  unwrapTransaction?: TExecutedTransaction;
  type:
    | "approval-error"
    | "verification-error"
    | "progress"
    | "unknown"
    | "request";
};
export type UnwrappingRequestViewModel = {
  status: "request";
  message: string;
  amount: number;
};

export type UnwrappingEstimatedGasViewModel = {
  status: "estimated-gas";
  amount: number;
  estimatedGas: number;
  gasLimit: number;
};

export const UnwrapModalUnwrappingVariant = (
  props: (
    | UnwrappingNonSuccessViewModel
    | UnwrappingSuccessViewModel
    | UnwrappingRequestViewModel
    | UnwrappingEstimatedGasViewModel
  ) & {
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
            {props.unwrapTransaction.network.name}
          </Paragraph>
          <div className="w-full flex flex-col items-end text-text-success">
            {props.unwrapTransaction.explorerUrl && (
              <NavLink
                variant="small"
                label="View in Explorer"
                url={props.unwrapTransaction.explorerUrl}
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
          `Looks like we could not verify that the Reservoir has release PR to your wallet. Please check the transaction on the ${props.unwrapTransaction?.network.name} network.`,
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
                <Paragraph>{props.message}</Paragraph>
              </LightFrame>
            )}
            {props.unwrapTransaction && (
              <div className="w-full flex flex-col items-end text-text-success">
                {props.unwrapTransaction.explorerUrl && (
                  <NavLink
                    variant="small"
                    label="View in Explorer"
                    url={props.unwrapTransaction.explorerUrl}
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
              <Paragraph>{props.message}</Paragraph>
            </LightFrame>
          )}
          {props.unwrapTransaction && (
            <div className="w-full flex flex-col items-end text-text-success">
              {props.unwrapTransaction.explorerUrl && (
                <NavLink
                  variant="small"
                  label="View in Explorer"
                  url={props.unwrapTransaction.explorerUrl}
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
              <Paragraph>{props.message}</Paragraph>
            </LightFrame>
          )}
        </div>
      );
    }
    if (props.status === "estimated-gas") {
      return (
        <div>
          <Paragraph>
            We are estimating the gas required to unwrap {props.amount} PR.
          </Paragraph>
          <LightFrame>
            <div className="w-full flex flex-row items-center justify-between gap-4">
              <Paragraph>Estimated gas: </Paragraph>
              <Label label={`${props.estimatedGas}`} variant="medium" />
            </div>
            <div className="w-full flex flex-row items-center justify-between gap-4">
              <Paragraph>Gas limit: </Paragraph>
              <Label label={`${props.gasLimit}`} variant="medium" />
            </div>
          </LightFrame>
        </div>
      );
    }
    if (props.status === "request") {
      return (
        <div>
          <Paragraph>Getting ready to unwrap your PR tokens</Paragraph>
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
