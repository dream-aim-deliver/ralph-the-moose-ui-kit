"use client";
import { TChainViewModel, TExecutedTransaction } from "../../core/entity";
import { Heading, HeadingVariant } from "../heading/Heading";
import { IconButtonClose } from "../icon-button/IconButtonClose";
import { IconError } from "../icons/IconError";
import { IconHourglass } from "../icons/IconHourglass";
import { IconSuccess } from "../icons/IconSuccess";
import { LightFrame } from "../layouts/LightFrame";
import { Modal } from "../modal/Modal";
import { NavLink } from "../nav-link/NavLink";
import { Paragraph } from "../paragraph/Paragraph";

export interface BridgeModalBridgingVariantSuccessProps {
  status: "success";
  transaction: TExecutedTransaction;
  amount: number;
  fromNetwork: TChainViewModel;
  toNetwork: TChainViewModel;
  wallet: string;
}

export interface BridgeModalBridgingVariantErrorProps {
  status: "error";
  message: string;
  type:
    | "balance-error"
    | "approval-error"
    | "transaction-error"
    | "verification-error";
  transaction?: TExecutedTransaction;
  amount: number;
  wallet: string;
  fromNetwork: TChainViewModel;
  toNetwork: TChainViewModel;
}

export interface BridgeModalBridgingVariantProgressProps {
  status: "in-progress";
  type:
    | "awaiting-verification"
    | "awaiting-approval"
    | "sending-transaction"
    | "gas"
    | "update";
  transaction?: TExecutedTransaction;
  amount: number;
  wallet: string;
  fromNetwork: TChainViewModel;
  toNetwork: TChainViewModel;
  message: string;
}
export const BridgeModalBridgingVariant = (
  props: (
    | BridgeModalBridgingVariantSuccessProps
    | BridgeModalBridgingVariantErrorProps
    | BridgeModalBridgingVariantProgressProps
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
    return `Bridging ${props.amount} PR form ${props.fromNetwork.name} to ${props.toNetwork.name}`;
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
      }
    }
    if (props.status === "in-progress") {
      switch (props.type) {
        case "awaiting-approval":
          return (
            <Paragraph>
              Checking spending allowance for Ralph Reservoir on $
              {props.fromNetwork.name}. Ideally, this should be a one-time
              operation.
            </Paragraph>
          );
        case "gas":
          return <Paragraph>Estimated Gas.</Paragraph>;
        case "sending-transaction":
          return <Paragraph>{props.message}</Paragraph>;
        case "awaiting-verification":
          return <Paragraph>{props.message}</Paragraph>;
        case "update":
          return <Paragraph>{props.message}</Paragraph>;
      }
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
