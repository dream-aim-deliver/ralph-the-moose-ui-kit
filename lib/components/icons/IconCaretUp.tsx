import icon from "@/assets/icons/caret-up.svg";
import { Icon } from "./Icon";

/**
 * IconCaretUp
 * @usage <IconCaretUp />
 */
export const IconCaretUp = () => {
  return (
    <Icon
      src={icon}
      alt="caret-up.svg"
      className="w-full relative h-6 overflow-hidden"
    />
  );
};
