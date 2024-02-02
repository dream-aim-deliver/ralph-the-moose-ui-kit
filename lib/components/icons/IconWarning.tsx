import icon from "@/assets/icons/warning.svg";
import { Icon } from "./Icon";

/**
 * IconWarning
 * @usage <IconWarning />
 */
export const IconWarning = () => {
  return (
    <Icon
      src={icon}
      alt="warning"
      className="w-full relative h-6 overflow-hidden"
    />
  );
};
