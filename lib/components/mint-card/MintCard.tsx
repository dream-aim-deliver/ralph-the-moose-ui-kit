import { useSignals } from "@preact/signals-react/runtime";
import { Heading, HeadingVariant, Label, Modal } from "..";
import { formatNumber } from "../../utils/tokenUtils";

export interface MintCardProps {
  mintedPercentage: number;
  mintLimit: number;
  totalSupply: number;
  totalMinted: number;
  mintingFee: number;
  mintingDisabled: boolean;
  onMint: () => void;
}

export const MintCard = (props: MintCardProps) => {
  useSignals();
  const formattedMintLimit = formatNumber(props.mintLimit);
  const formattedTotalSupply = formatNumber(props.totalSupply);
  const formattedTotalMinted = formatNumber(props.totalMinted);
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
      </div>
    </Modal>
  );
};
