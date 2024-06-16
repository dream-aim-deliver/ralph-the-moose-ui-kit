"use client";
import { TChainViewModel, TExecutedTransaction } from "../../core/entity";
import { Heading, HeadingVariant } from "../heading/Heading";
import { IconButtonClose } from "../icon-button/IconButtonClose";
import { IconError } from "../icons/IconError";
import { IconHourglass } from "../icons/IconHourglass";
import { IconSuccess } from "../icons/IconSuccess";
import { Label } from "../label";
import { LightFrame } from "../layouts/LightFrame";
import { Modal } from "../modal/Modal";
import { NavLink } from "../nav-link/NavLink";
import { Paragraph } from "../paragraph/Paragraph";

export interface BridgeModalBridgingRequestViewModel {
  status: "request";
  message: string;
  amount: number;
  fromNetwork: TChainViewModel;
  toNetwork: TChainViewModel;
}
export interface BridgeModalBridgingVariantSuccessProps {
  status: "success";
  transaction: TExecutedTransaction;
  amount: number;
  fromNetwork: TChainViewModel;
  toNetwork: TChainViewModel;
}

export interface BridgeModalBridgingVariantErrorProps {
  status: "error";
  message: string;
  type:
    | "balance-error"
    | "approval-error"
    | "transaction-error"
    | "verification-error"
    | "generic-error";
  transaction?: TExecutedTransaction;
  amount: number;
  fromNetwork: TChainViewModel;
  toNetwork: TChainViewModel;
}

export interface BridgeModalBridgingVariantProgressProps {
  status: "in-progress";
  type:
    | "awaiting-verification"
    | "awaiting-approval"
    | "sending-transaction"
    | "update";
  transaction?: TExecutedTransaction;
  amount: number;
  fromNetwork: TChainViewModel;
  toNetwork: TChainViewModel;
  message: string;
}

export interface BridgeModalBridgingVariantEstimatedGasProps {
  status: "in-progress";
  type: "estimated-gas";
  amount: number;
  estimatedGas: number;
  gasLimit: number;
}

export const BridgeModalBridgingVariant = (
  props: (
    | BridgeModalBridgingRequestViewModel
    | BridgeModalBridgingVariantSuccessProps
    | BridgeModalBridgingVariantErrorProps
    | BridgeModalBridgingVariantProgressProps
    | BridgeModalBridgingVariantEstimatedGasProps
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
      return "All good in da hood!";
    }
    if (props.status === "error") {
      return "Oh Snap!";
    }
    if (props.status === "in-progress" && props.type === "estimated-gas") {
      return "Estimating gas";
    }
    return `Bridging ${props.amount} PR from ${props.fromNetwork.name} to ${props.toNetwork.name}`;
  };

  const message = () => {
    if (props.status === "success") {
      return (
        <div>
          <Paragraph>
            You have successfully bridged {props.amount} PR to{" "}
            {props.toNetwork.name}.
          </Paragraph>
          <div className="w-full flex flex-col items-end text-text-success">
            {props.transaction.explorerUrl && (
              <NavLink
                variant="small"
                label="View in Explorer"
                url={props.transaction.explorerUrl}
              />
            )}
          </div>
        </div>
      );
    }
    if (props.status === "error") {
      const messages = [];
      switch (props.type) {
        case "balance-error":
          return <Paragraph>{props.message}</Paragraph>;
        case "approval-error":
          messages.push([
            `Looks like you need to approve the Ralph Reservoir to spend PRs on ${props.fromNetwork.name}.`,
          ]);
          return (
            <div className="w-full flex flex-col gap-4">
              {messages.map((message) => (
                <Paragraph>{message}</Paragraph>
              ))}
              <LightFrame>{props.message}</LightFrame>
            </div>
          );
        case "transaction-error":
          return (
            <div className="w-full flex flex-col gap-4">
              <Paragraph>
                The transaction to the bridge contract on {props.toNetwork.name}{" "}
                failed successfully. The backend says the reason was:
              </Paragraph>
              <LightFrame>{props.message}</LightFrame>
              <div className="w-full flex flex-col items-end text-text-success">
                {props.transaction?.explorerUrl && (
                  <NavLink
                    variant="small"
                    label="View in Explorer"
                    url={props.transaction.explorerUrl}
                  />
                )}
              </div>
            </div>
          );
        case "verification-error":
          return (
            <div className="w-full flex flex-col gap-4">
              <Paragraph>
                Could not verify that the bridged PRs ended up on{" "}
                {props.toNetwork.name}.The message from the backend was:
              </Paragraph>
              <LightFrame>{props.message}</LightFrame>
              <div className="w-full flex flex-col items-end text-text-success">
                {props.transaction?.explorerUrl && (
                  <NavLink
                    variant="small"
                    label="View in Explorer"
                    url={props.transaction.explorerUrl}
                  />
                )}
              </div>
            </div>
          );
        case "generic-error":
          messages.push(
            `Looks like something went wrong during the bridging of your WPRs.`,
          );
          if (props.message) {
            messages.push("The reason for the error was:");
          }
          return (
            <div className="w-full flex flex-col gap-2">
              {messages.map((message, index) => (
                <Paragraph key={index}>{message}</Paragraph>
              ))}
              {props.message && (
                <LightFrame>
                  <Paragraph>{props.message}</Paragraph>
                </LightFrame>
              )}
              {props.transaction && (
                <div className="w-full flex flex-col items-end text-text-success">
                  {props.transaction.explorerUrl && (
                    <NavLink
                      variant="small"
                      label="View in Explorer"
                      url={props.transaction.explorerUrl}
                    />
                  )}
                </div>
              )}
            </div>
          );
      }
    }
    if (props.status === "in-progress") {
      switch (props.type) {
        case "awaiting-approval":
          return (
            <Paragraph>
              Checking spending allowance for Ralph Reservoir on{" "}
              {props.fromNetwork.name}. Ideally, this should be a one-time
              operation.
            </Paragraph>
          );
        case "estimated-gas":
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
        case "sending-transaction":
          return (
            <div>
              <Paragraph>{props.message}</Paragraph>
            </div>
          );
        case "awaiting-verification":
          return (
            <div>
              <Paragraph>
                We have successfully bridged {props.amount} PR to{" "}
                {props.toNetwork.name}. Now we are waiting for the backend to
                verify that your balance has been updated.
              </Paragraph>
              <div className="w-full flex flex-col items-end text-text-success">
                {props.transaction?.explorerUrl && (
                  <NavLink
                    variant="small"
                    label="View in Explorer"
                    url={props.transaction.explorerUrl}
                  />
                )}
              </div>
            </div>
          );
        case "update":
          return (
            <div>
              <Paragraph>{props.message}</Paragraph>
            </div>
          );
      }
    }
    if (props.status === "request") {
      return (
        <div>
          <Paragraph>
            You are about to bridge {props.amount} PR from{" "}
            {props.fromNetwork.name} to {props.toNetwork.name}.
          </Paragraph>
          <Paragraph>{props.message}</Paragraph>
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
