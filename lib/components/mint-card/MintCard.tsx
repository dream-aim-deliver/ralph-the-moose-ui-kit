import {
  Button,
  Heading,
  HeadingVariant,
  Label,
  Card,
  LightFrame,
  IconSuccess,
} from "..";
import { TChainViewModel } from "../../core";
import { formatNumber } from "../../utils/tokenUtils";

export interface MintCardProps {
  stats: {
    totalSupply: number;
    totalMinted: number;
    mintedPercentage: number;
    mintLimit: number;
  };
  disabled: boolean;
  isMinting: boolean;
  fee: number;
  allocation: number;
  token: {
    shortName: string;
  };
  callbacks: {
    onMint: () => void;
  };
  network: TChainViewModel & {
    nativeCurrency: string;
  };
}
export const MintCard = (props: MintCardProps) => {
  const formattedMintLimit = formatNumber(props.stats.mintLimit);
  const formattedTotalSupply = formatNumber(props.stats.totalSupply);
  const formattedTotalMinted = formatNumber(props.stats.totalMinted);
  const formatedEligibleAmount = formatNumber(props.allocation);
  const handleMint = () => {
    props.callbacks.onMint();
  };
  return (
    <Card>
      <div className="w-full flex flex-col items-start justify-center gap-4 text-wrap">
        <Heading title="Mint" variant={HeadingVariant.H4} />
        <div className="w-full flex flex-col items-center justify-between gap-2 text-text-secondary font-varela text-base">
          <div className="w-full flex flex-row items-center justify-between text-left gap-4">
            <label>Minted%</label>
            <Label
              label={`${props.stats.mintedPercentage}%`}
              variant="medium"
            />
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
        {!props.disabled && !props.isMinting && (
          <LightFrame className="w-full items-center gap-4 text-left text-base font-varela text-text-secondary">
            <IconSuccess size={12} />
            <div className="w-full font-gluten font-bold relative text-lg tracking-[-0.04em] leading-[18px] inline-block font-heading-h5 text-text-primary text-center overflow-auto whitespace-normal">
              {`You're eligible to mint ${formatedEligibleAmount} ${props.token.shortName}`}
            </div>
            <div className="w-full flex flex-row items-center justify-between">
              <label>{`You'll receive`}</label>
              <Label
                label={`${formatedEligibleAmount} ${props.token.shortName}`}
                variant="medium"
              />
            </div>
            <div className="w-full flex flex-row items-center justify-between">
              <label>Minting Fee</label>
              <Label
                label={`${props.fee} ${props.network.nativeCurrency}`}
                variant="medium"
              />
            </div>
          </LightFrame>
        )}
        <Button
          disabled={props.disabled}
          label={props.isMinting ? "Check progress" : "Mint"}
          variant="primary"
          onClick={handleMint}
        />
      </div>
    </Card>
  );
};
