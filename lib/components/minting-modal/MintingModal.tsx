import { TChainViewModel, TExecutedTransaction } from "../../core";
import { formatNumber } from "../../utils/tokenUtils";
import { Heading, HeadingVariant } from "../heading";
import { IconButtonClose } from "../icon-button";
import { IconError, IconHourglass, IconSuccess } from "../icons";
import { Label } from "../label";
import { LightFrame } from "../layouts";
import { Modal } from "../modal";
import { NavLink } from "../nav-link";
import { Paragraph } from "../paragraph";

export interface MintingSuccessViewModel {
  status: "success";
  amount: number;
  mintTransaction: TExecutedTransaction;
}

export interface MintingErrorViewModel {
  status: "error";
  message: string;
  type: "indexer-error" | "transaction-error" | "verification-error";
  network: TChainViewModel;
  transaction?: TExecutedTransaction;
  amount: number;
  indexerBlockNumber: number;
  initialIndexerBlockNumber: number;
}

export interface MintingProgressViewModel {
  status: "in-progress";
  type: "awaiting-transaction" | "awaiting-indexer" | "awaiting-verification";
  message: string;
  network: TChainViewModel;
  amount: number;
  transaction?: TExecutedTransaction;
  indexerBlockNumber: number;
  initialIndexerBlockNumber: number;
}

export interface MintingTransactionGasViewModel {
  status: "estimated-gas";
  estimatedGas: number;
  gasLimit: number;
  amount: number;
  network: TChainViewModel;
}

export const MintingModal = (
  props: (
    | MintingSuccessViewModel
    | MintingTransactionGasViewModel
    | MintingErrorViewModel
    | MintingProgressViewModel
  ) & { onClose?: () => void },
) => {
  const formattedAmount = formatNumber(props.amount);
  const icon = () => {
    if (props.status === "success") {
      return <IconSuccess size={12} />;
    }
    if (props.status === "error") {
      return <IconError size={12} />;
    }
    if (props.status === "in-progress" || props.status === "estimated-gas") {
      return <IconHourglass size={12} />;
    }
  };
  const title = () => {
    if (props.status === "success") {
      return "It's all green!";
    }
    if (props.status === "error") {
      return "Oh Snap!";
    }
    if (props.status === "in-progress" || props.status === "estimated-gas") {
      return `Minting ${formattedAmount} PR`;
    }
  };
  const message = () => {
    if (props.status === "success") {
      return (
        <div>
          <Paragraph>
            Wohoo! You have successfully minted {formattedAmount} PR on{" "}
            {props.mintTransaction.network.name}
          </Paragraph>
          <div className="w-full flex flex-col items-end text-text-success">
            {props.mintTransaction.explorerUrl && (
              <NavLink
                variant="small"
                url={props.mintTransaction.explorerUrl}
                label="View in Explorer"
              ></NavLink>
            )}
          </div>
        </div>
      );
    }
    if (props.status === "estimated-gas") {
      return (
        <div className="w-full">
          <LightFrame>
            <div className="w-full flex flex-row items-center justify-between text-left gap-4">
              <Paragraph>Estimated Gas</Paragraph>
              <Label label={`${props.estimatedGas}`} variant="medium" />
            </div>
            <div className="w-full flex flex-row items-center justify-between text-left gap-4">
              <Paragraph>Gas Limit</Paragraph>
              <Label label={`${props.gasLimit}`} variant="medium" />
            </div>
          </LightFrame>
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
            <Heading
              title={title() || `Minting ${formattedAmount} PR`}
              variant={HeadingVariant.H4}
            />
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
