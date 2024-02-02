import icon from "@/assets/icons/error.svg";
import { Icon } from "./Icon";

/**
 * IconError
 * @description Component for displaying error icon.
 * @return {JSX.Element} - Rendered IconError component.
 * @usage <IconError />
 * @status Complete
 */
export const IconError = () => {
  return (
    <Icon
      src={icon}
      alt="error.svg"
      className="w-full relative h-6 overflow-hidden"
    />
  );
};
