import icon from "@/assets/icons/warning.svg";
import { Icon } from "./Icon";

/**
 * IconWarning
 * @usage <IconWarning />
 */
export const IconWarning = () => {
  return (
    <Icon src={icon} alt="warning" className="h-10 w-10 overflow-hidden" />
  );
};
