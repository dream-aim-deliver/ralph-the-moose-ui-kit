import icon from "@/assets/icons/external-link-small.svg";
import { Icon } from "./Icon";

/**
 * @usage <IconExternalLinkSmall />
 */
export const IconExternalLinkSmall = () => {
  return (
    <Icon
      src={icon}
      alt="external-link-small.svg"
      className="w-full relative h-6 overflow-hidden"
    />
  );
};
