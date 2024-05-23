import { TChainViewModel } from "../../core";
import { formatNumber } from "../../utils/tokenUtils";
import { Button } from "../button";
import { Heading, HeadingVariant } from "../heading";
import { Paragraph } from "../paragraph";

export type WrapModalVariantClaimProps = {
  variant: "claim";
  claimableAmount: number;
  network: TChainViewModel;
  token: {
    shortName: string;
    icon: React.ReactNode;
  };
  onClaim: (amount: number) => void;
};

export const WrapModalContentVariantClaim = (
  props: WrapModalVariantClaimProps,
) => {
  const claimableAmount = `${formatNumber(props.claimableAmount)} W${props.token.shortName}`;
  const handleClaim = () => {
    props.onClaim(props.claimableAmount);
  };
  return (
    <div className="flex w-full flex-col items-start justify-center gap-4">
      <div className="relative flex w-full flex-row justify-between">
        <Heading title="Claim WPR" variant={HeadingVariant.H4} />
      </div>
      <div className="flex flex-col w-full gap-4">
        <Paragraph variant="secondary">
          It' time to claim {claimableAmount} on {props.network.name} 🎉
        </Paragraph>
      </div>
      <div className="flex flex-row justify-end w-full gap-4">
        <Button
          variant="primary"
          onClick={handleClaim}
          label={`Claim ${claimableAmount}`}
        />
      </div>
    </div>
  );
};
