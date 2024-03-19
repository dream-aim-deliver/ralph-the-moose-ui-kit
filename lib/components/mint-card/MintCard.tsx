import { useSignals } from "@preact/signals-react/runtime";
import {
  Button,
  Heading,
  HeadingVariant,
  IconError,
  IconHourglass,
  IconSuccess,
  Label,
  Modal,
} from "..";
import { formatNumber } from "../../utils/tokenUtils";
import { LightFrame } from "../layouts/LightFrame";
import { Signal } from "@preact/signals-react";

export interface MintCardProps {
  mintedPercentage: number;
  mintLimit: number;
  totalSupply: number;
  totalMinted: number;
  mintingFee: number;
  eligibleAmount: number;
  expectedReturn: number;
  mintingDisabled: boolean;
  tokenShortName: string;
  feeCurrency: string;
  fee: number;
  isMinting: Signal<boolean>;
  isMintingAmount: number;
  walletNetwork: string;
  selectedNetwork: string;
  status: "whitelisted" | "network_error" | "minting" | "error" | "success";
  error?: string;
  onMint: () => void;
}

export const MintCard = (props: MintCardProps) => {
  useSignals();
  const formattedMintLimit = formatNumber(props.mintLimit);
  const formattedTotalSupply = formatNumber(props.totalSupply);
  const formattedTotalMinted = formatNumber(props.totalMinted);

  const handleMint = () => {
    props.isMinting.value = true;
    props.onMint();
  };
  return (
    <Modal>
      <div className="flex flex-col items-start justify-center gap-4 text-wrap">
        <Heading title="Mint" variant={HeadingVariant.H4} />
        <div className="w-full flex flex-col gap-2 text-base-colors/neutral-500 font-varela text-base">
          <div className="w-full flex flex-row items-center justify-between text-left gap-4">
            <label>Minted%</label>
            <Label label={`${props.mintedPercentage}%`} variant="medium" />
          </div>
          <div className="w-full flex flex-row items-center justify-between text-left gap-4">
            <label>Mint Limit</label>
            <Label label={`${formattedMintLimit}`} variant="medium" />
          </div>
          <div className="w-full flex flex-row items-center justify-between text-left gap-4">
            <label>Total Supply</label>
            <Label label={`${formattedTotalSupply}`} variant="medium" />
          </div>
          <div className="w-full flex flex-row items-center justify-between font-varela gap-4">
            <label>Total Minted</label>
            <Label label={`${formattedTotalMinted}`} variant="medium" />
          </div>
        </div>
        <MintEnabledStatusFrame {...props} />
        <Button label="Mint" variant="primary" onClick={handleMint} />
      </div>
    </Modal>
  );
};

export const MintEnabledStatusFrame = (props: MintCardProps) => {
  const formatedEligibleAmount = formatNumber(props.eligibleAmount);
  const formattedExpectedReturn = formatNumber(props.expectedReturn);
  return (
    <LightFrame className="w-full items-center gap-4 text-left text-base font-varela text-base-colors/neutral-500">
      <IconSuccess size={12} />
      <div className="w-full font-gluten font-bold relative text-lg tracking-[-0.04em] leading-[18px] inline-block font-heading-h5 text-text-primary text-center overflow-auto whitespace-normal">
        {`You're eligible to mint ${formatedEligibleAmount} ${props.tokenShortName}`}
      </div>
      <div className="w-full flex flex-row items-center justify-between">
        <label>You'll receive</label>
        <Label
          label={`${formattedExpectedReturn} ${props.tokenShortName}`}
          variant="medium"
        />
      </div>
      <div className="w-full flex flex-row items-center justify-between">
        <label>Minting Fee</label>
        <Label label={`${props.fee} ${props.feeCurrency}`} variant="medium" />
      </div>
    </LightFrame>
  );
};
export const IsMintingStatusFrame = (props: MintCardProps) => {
  const formattedIsMintingAmount = formatNumber(props.isMintingAmount);
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 text-base font-varela text-base-colors/neutral-500">
      <LightFrame className="w-full items-center gap-4">
        <IconHourglass size={12} />
        <div className="w-full font-gluten font-bold relative text-lg tracking-[-0.04em] leading-[18px] inline-block font-heading-h5 text-text-primary text-center overflow-auto whitespace-normal">
          {`${formattedIsMintingAmount} ${props.tokenShortName} are being minted!`}
        </div>
        <div className="w-full flex flex-row items-center justify-center text-center">
          <p className="text-center">Do not refresh this page!</p>
        </div>
      </LightFrame>
      <MintEnabledStatusFrame {...props} />
    </div>
  );
};

export const WrongNetworkStatusFrame = (props: MintCardProps) => {
  return (
    <LightFrame className="w-full items-center gap-4 text-wrap text-base-colors/neutral-400">
      <IconError size={12} />
      <div className="w-full font-gluten font-bold relative text-lg tracking-[-0.04em] leading-[18px] inline-block font-heading-h5 text-text-primary text-center overflow-auto whitespace-normal">
        {`Wrong network selected`}
      </div>
      <div className="w-full flex flex-row items-center justify-center text-left text-base font-varela gap-4">
        <label>{`You must connect to ${props.walletNetwork} Chain to access this mintdrop.`}</label>
      </div>
    </LightFrame>
  );
};
