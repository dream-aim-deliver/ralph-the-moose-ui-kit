import icon from "@/assets/icons/close.svg";
import { Icon } from "./Icon";

/**
 * IconClose
 * @usage <IconClose />
 */
export const IconClose = () => {
  return (
    <Icon
      src={icon}
      alt="close"
      className="w-full relative h-6 overflow-hidden"
    />
  );
};