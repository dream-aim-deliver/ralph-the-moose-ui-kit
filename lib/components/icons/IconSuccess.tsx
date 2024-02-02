import icon from "@/assets/icons/success.svg";
import { Icon } from "./Icon";

/**
 * IconSuccess
 * @usage <IconSuccess />
 */
export const IconSuccess = () => {
  return (
    <Icon
      src={icon}
      alt="success"
      className="w-full relative h-6 overflow-hidden"
    />
  );
};
