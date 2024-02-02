import icon from "@/assets/icons/tooltip.svg";
import { Icon } from "./Icon";

/**
 * IconTooltip
 * @usage <IconTooltip />
 */
export const IconTooltip = () => {
  return (
    <Icon
      src={icon}
      alt="tooltip.svg"
      className="w-full relative h-6 overflow-hidden"
    />
  );
};
