import { IconButtonClose, Modal, Tabs, WrapCardVariantWrappingProps } from "..";

import {
  WrapModalVariantWrapProps,
  WrapModalContentVariantWrap,
} from "./WrapModalVariantWrap";
import { WrapCardContentVariantWrapping } from "./WrapModalVariantWrapping";
import {
  WrapModalContentVariantClaim,
  WrapModalVariantClaimProps,
} from "./WrapModalVariantClaim";
import {
  WrapModalContentVariantClaiming,
  WrapModalVariantClaimingProps,
} from "./WrapModalVariantClaiming";

const WrapCardHeaderTab = ({
  variant,
  onClose,
}: {
  variant: "wrap" | "claim";
  onClose?: () => void;
}) => {
  return (
    <div className="relative flex w-full flex-row justify-between gap-8 mb-4">
      <Tabs
        tabs={["Wrap", "Claim"]}
        activeTabIndex={variant === "wrap" ? 1 : 2}
      ></Tabs>
      <div className="ml-auto -mt-8">
        <IconButtonClose size={4} onClick={onClose ? onClose : () => {}} />
      </div>
    </div>
  );
};
export const WrapModal = (
  props: (
    | WrapModalVariantWrapProps
    | WrapCardVariantWrappingProps
    | WrapModalVariantClaimProps
    | WrapModalVariantClaimingProps
  ) & {
    onClose?: () => void;
  },
) => {
  return (
    <Modal>
      {(props.variant === "wrap" || props.variant === "wrapping") && (
        <WrapCardHeaderTab variant="wrap" />
      )}
      {(props.variant === "claim" || props.variant === "claiming") && (
        <WrapCardHeaderTab variant="claim" />
      )}
      {props.variant === "wrap" && (
        <WrapModalContentVariantWrap {...props} variant="wrap" />
      )}
      {props.variant === "wrapping" && (
        <WrapCardContentVariantWrapping {...props} />
      )}
      {props.variant === "claim" && (
        <WrapModalContentVariantClaim {...props} variant="claim" />
      )}
      {props.variant === "claiming" && (
        <WrapModalContentVariantClaiming {...props} variant="claiming" />
      )}
    </Modal>
  );
};
