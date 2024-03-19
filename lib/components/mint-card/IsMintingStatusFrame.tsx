import { IconHourglass } from "..";
import { formatNumber } from "../../utils/tokenUtils";
import { LightFrame } from "../layouts/LightFrame";

/**
 * Props for the MintInProgressStatusFrame component.
 */
export interface IsMintingStatusFrameProps {
  /**
   * The amount being minted.
   */
  isMintingAmount: number;

  /**
   * The short name of the token.
   */
  tokenShortName: string;
}

/**
 * Displays a message when the user is minting tokens.
 * @param props {@link IsMintingStatusFrameProps}
 */
export const IsMintingStatusFrame = (props: IsMintingStatusFrameProps) => {
  const formattedIsMintingAmount = formatNumber(props.isMintingAmount);
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 text-base font-varela text-text-secondary">
      <LightFrame className="w-full items-center gap-4">
        <IconHourglass size={12} />
        <div className="w-full font-gluten font-bold relative text-lg tracking-[-0.04em] leading-[18px] inline-block font-heading-h5 text-text-primary text-center overflow-auto whitespace-normal">
          {`${formattedIsMintingAmount} ${props.tokenShortName} are being minted!`}
        </div>
        <div className="w-full flex flex-row items-center justify-center text-center">
          <p className="text-center">Do not refresh this page!</p>
        </div>
      </LightFrame>
    </div>
  );
};
