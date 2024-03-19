import { useSignals } from "@preact/signals-react/runtime";
import { Button, Heading, HeadingVariant, Label, Modal } from "..";
import { formatNumber } from "../../utils/tokenUtils";
import { Signal } from "@preact/signals-react";

export interface MintCardProps {
  mintedPercentage: number;
  mintLimit: number;
  totalSupply: number;
  totalMinted: number;
  mintingFee: number;
  mintingDisabled: boolean;
  tokenShortName: string;
  isMinting: Signal<boolean>;
  children?: React.ReactNode;
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
      <div className="w-full flex flex-col items-start justify-center gap-4 text-wrap">
        <Heading title="Mint" variant={HeadingVariant.H4} />
        <div className="w-full flex flex-col items-center justify-between gap-2 text-text-secondary font-varela text-base">
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
        {props.children}
        <Button
          disabled={props.mintingDisabled}
          label="Mint"
          variant="primary"
          onClick={handleMint}
        />
      </div>
    </Modal>
  );
};
