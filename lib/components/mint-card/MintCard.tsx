import { useSignals } from "@preact/signals-react/runtime";
import { Button, Heading, HeadingVariant, IconSuccess, Label, Modal } from "..";
import { formatNumber } from "../../utils/tokenUtils";
import { LightFrame } from "../layouts/LightFrame";
import { Signal } from "@preact/signals-react";

export interface MintCardProps {
  mintedPercentage: number;
  mintLimit: number;
  totalSupply: number;
  totalMinted: number;
  mintingFee: number;
  expectedReturn: number;
  mintingDisabled: boolean;
  tokenShortName: string;
  feeCurrency: string;
  fee: number;
  isMinting: Signal<boolean>;
  walletNetwork: Signal<string>;
  selectedNetwork: Signal<string>;
  onMint: () => void;
}

export const MintCard = (props: MintCardProps) => {
  useSignals();
  const formattedMintLimit = formatNumber(props.mintLimit);
  const formattedTotalSupply = formatNumber(props.totalSupply);
  const formattedTotalMinted = formatNumber(props.totalMinted);
  const formattedExpectedReturn = formatNumber(props.expectedReturn);
  return (
    <Modal>
      <div className="flex flex-col items-start justify-center gap-4">
        <Heading title="Mint" variant={HeadingVariant.H4} />
        <div className="w-full flex flex-row items-center justify-between text-left text-base font-varela gap-4 text-base-colors/neutral-500">
          <label>Minted%</label>
          <Label label={`${props.mintedPercentage}%`} variant="medium" />
        </div>
        <div className="w-full flex flex-row items-center justify-between text-left text-base font-varela gap-4 text-base-colors/neutral-500">
          <label>Mint Limit</label>
          <Label label={`${formattedMintLimit}`} variant="medium" />
        </div>
        <div className="w-full flex flex-row items-center justify-between text-left text-base font-varela gap-4 text-base-colors/neutral-500">
          <label>Total Supply</label>
          <Label label={`${formattedTotalSupply}`} variant="medium" />
        </div>
        <div className="w-full flex flex-row items-center justify-between text-left text-base font-varela gap-4 text-base-colors/neutral-500">
          <label>Total Minted</label>
          <Label label={`${formattedTotalMinted}`} variant="medium" />
        </div>
        <LightFrame className="w-full items-center gap-4">
          <IconSuccess size={6} />
          <div className="w-full font-gluten font-bold relative text-lg tracking-[-0.04em] leading-[18px] inline-block font-heading-h5 text-text-primary text-center">
            {`You're eligible to mint ${props.mintLimit - props.totalMinted} ${props.tokenShortName}`}
          </div>
          <div className="w-full flex flex-row items-center justify-between text-left text-base font-varela gap-4 text-base-colors/neutral-500">
            <label>You'll receive</label>
            <Label
              label={`${formattedExpectedReturn} ${props.tokenShortName}`}
              variant="medium"
            />
          </div>
          <div className="w-full flex flex-row items-center justify-between text-left text-base font-varela gap-4 text-base-colors/neutral-500">
            <label>Minting Fee</label>
            <Label
              label={`${props.fee} ${props.feeCurrency}`}
              variant="medium"
            />
          </div>
        </LightFrame>
        <Button label="Mint" variant="primary" onClick={props.onMint} />
      </div>
    </Modal>
  );
};
