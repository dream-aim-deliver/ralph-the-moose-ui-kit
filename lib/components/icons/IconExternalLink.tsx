import icon from "@/assets/icons/external-link.svg";
import { Icon } from "./Icon";

/**
 * IconExternalLink
 * @description External link icon
 * @usage <IconExternalLink />
 */
export const IconExternalLink = () => {
  return (
    <Icon
      src={icon}
      alt="external link"
      className="w-full relative h-6 overflow-hidden"
    />
  );
};
