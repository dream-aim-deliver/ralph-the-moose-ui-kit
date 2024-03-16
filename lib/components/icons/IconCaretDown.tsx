import icon from "@/assets/icons/caret-down.svg";
import { Icon } from "./Icon";

/**
 * IconCaretDown
 * @usage <IconCaretDown />
 */
export const IconCaretDown = () => {
  return (
    <Icon
      src={icon}
      alt="care-down"
      className="w-full relative h-6 overflow-hidden fill-yellow-500"
    />
  );
};
